---
sidebar_position: 2
title: 'Basic Examples – zmienne, ograniczenia i driver'
slug: "projekty/wind/topfarm-2"
---

# TopFarm2: Basic Examples – zmienne, ograniczenia i driver (Zadanie 2.2)

**Kierunek:** Inżynieria Odnawialnych Źródeł Energii (OZE)  
**Poziom:** 0→1 (nadal bez “klasycznego” doświadczenia w programowaniu, ale umiemy już odpalić notebook)  
**Czas:** ~1 godzina  
**Pracujemy w:** GitHub + Codespaces (VS Code w przeglądarce) + Jupyter Notebook + GitHub Copilot Chat (VibeCoding)  
**Nasz cel na koniec zajęć:** mamy notebook, w którym:
- widać **kilka wykresów ograniczeń (boundary + spacing)**,
- rozumiemy różnicę: **design variables → constraints → driver → problem**,
- mamy min. 1 modyfikację zrobioną z Copilotem i 1 commit.

**Dokumentacja (poziom “Basic Examples”):** https://topfarm.pages.windenergy.dtu.dk/TopFarm2/basic_examples.html (Design variables / Constraints / Drivers / Problems).  

---

## Co musimy oddać (na ocenę)

 W swoim repo na GitHub musimy mieć:
 
 - ✅ notebook `notebooks/lesson2_basic_examples.ipynb` z widocznymi outputami (wykresy)
 - ✅ raport w notebooku (komórki Markdown: 8–12 zdań + 1 tabelka “co zmieniliśmy i jaki był efekt”)
 - ✅ min. 1 zmiana z pomocą Copilota (np. nowa wizualizacja, subplots, opis, legenda)
 - ✅ min. 1 commit i push
 - ✅ link do repo (MS Teams)

---

## Zanim zaczniemy (2 min)

Zakładamy, że macie repo z Zadania 2.1.

**Check (szybki test w terminalu):**

```bash
python -c "import numpy, matplotlib; print('base ok')"
python -c "import topfarm; print('topfarm ok')"
```

Jeśli `import topfarm` nie działa, to:
1) zróbcie `pip install -r requirements.txt`  
2) jeśli nadal błąd – zapytajcie Copilota/LLM i wklejcie błąd.

---

# Krok po kroku

## Krok 0 — Otwórzmy Copilot Chat i dokumentację (2 min)

W Codespaces:
1. Otwórz **Copilot Chat** w trybie 'Ask'.
2. W drugiej karcie otwórzcie stronę “Basic Examples” TopFarm2 (sekcje: Constraints, Drivers, Problems).

**Prompt do Copilota (ustawienie trybu “dla początkujących”):**

```text
Jesteśmy studentami OZE, początkujący w Pythonie.
W tej lekcji chcemy zrobić 3 rzeczy:
1) narysować ograniczenia farmy (boundary constraints),
2) dodać ograniczenie minimalnych odległości (spacing constraint),
3) zrozumieć pojęcia: design variables, constraints, driver, problem.

Prowadź krok po kroku, krótko. Gdy wkleję błąd, powiedz co sprawdzić i podaj dokładne komendy.
```

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): co otworzyliśmy i po co (Copilot Chat + dokumentacja “Basic Examples”).

---

## Krok 1 — Utwórz notebook “Lesson 2” (3 min)

W folderze `notebooks/` utwórzcie plik:

- `lesson2_basic_examples.ipynb`

Dodajcie pierwszą komórkę:

```python
import numpy as np
import matplotlib.pyplot as plt

# TopFarm2
from topfarm import TopFarmProblem
from topfarm.plotting import XYPlotComp
from topfarm.constraint_components.boundary import XYBoundaryConstraint, CircleBoundaryConstraint
from topfarm.constraint_components.spacing import SpacingConstraint
from topfarm.cost_models.cost_model_wrappers import CostModelComponent

print("Imports OK ")
```

**Check:** komórka działa bez błędów.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): czy importy zadziałały i co oznacza „Imports OK”.

---

## Krok 2 — Boundary constraints: narysuj 5 typów granicy (20 min)

To jest najłatwiejsza część “Basic Examples”, bo daje dużo wizualizacji i szybko widać efekt.

Wklejcie kolejną komórkę (wariant “z dokumentacji”, ale w jednej komórce):

```python
# 1) Punkty granicy (współrzędne w "umownych" jednostkach)
boundary = np.array([(0, 0), (1, 1), (3, 0), (3, 2), (0, 2)])

# 2) “Sztuczne” turbiny (tylko do rysowania)
x = [0.5, 1.5]
y = [0.5, 1.5]

# 3) Dummy koszt: nie optymalizujemy jeszcze AEP, tylko potrzebujemy obiektu problemu
dummy_cost = CostModelComponent(
    input_keys=[],
    n_wt=2,
    cost_function=lambda: 1
)

def plot_boundary(name, constraint_comp):
    tf = TopFarmProblem(
        design_vars={'x': x, 'y': y},
        cost_comp=dummy_cost,
        constraints=[constraint_comp],
        plot_comp=XYPlotComp()
    )
    plt.figure(figsize=(5, 4))
    plt.title(name)
    tf.plot_comp.plot_constraints()
    plt.plot(boundary[:, 0], boundary[:, 1], '.r', label='Boundary points')
    plt.axis("equal")
    plt.grid(True)
    plt.legend()

# 4) Różne typy granicy (to jest “wow” wizualizacji)
plot_boundary('convex_hull', XYBoundaryConstraint(boundary, 'convex_hull'))
plot_boundary('square',      XYBoundaryConstraint(boundary, 'square'))
plot_boundary('rectangle',   XYBoundaryConstraint(boundary, 'rectangle'))
plot_boundary('polygon',     XYBoundaryConstraint(boundary, 'polygon'))
plot_boundary('circle',      CircleBoundaryConstraint((1.5, 1), 1))
```

**Check:** widzicie 5 wykresów (każdy z inną granicą).

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): jakie typy granicy narysowaliśmy i czym różniły się wizualnie.

---

## Krok 3 — Ćwiczenie: zaprojektuj własną granicę (10 min)

Zróbcie **własny** zestaw punktów `boundary` (minimum 6 punktów) i narysujcie 4 typy perymetru (`convex_hull`, `square`, `rectangle`, `polygon`) w pętli.

Uwaga: to ma być “projektowanie obszaru farmy” – możecie np. zrobić kształt przypominający “L” albo “zygzak”.

Startowa komórka:

```python
boundary = np.array([
    (0, 0),
    (2, 1),
    (4, 0),
    (5, 2),
    (3, 4),
    (0, 3)
])

for boundary_type in ['convex_hull', 'square', 'rectangle', 'polygon']:
    plot_boundary(boundary_type, XYBoundaryConstraint(boundary, boundary_type))
```

**Check:** macie 4 wykresy i potraficie w raporcie opisać, czym różni się `convex_hull` od `polygon`.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): jaką granicę zaprojektowaliśmy i co zauważyliśmy dla `convex_hull` vs `polygon`.

---

## Krok 4 — Spacing constraint: minimalna odległość między turbinami (15 min)

Teraz dodajemy **SpacingConstraint** (minimalny dystans).

Wklejcie komórkę:

```python
# Układ 5 turbin (na start celowo dość blisko)
x5 = np.array([0.5, 1.0, 1.6, 2.2, 2.8])
y5 = np.array([0.5, 0.8, 0.7, 0.9, 0.6])

# Duża prostokątna granica, żeby “nie przeszkadzała”
boundary_big = np.array([(0, 0), (3.5, 0), (3.5, 2), (0, 2)])

dummy_cost5 = CostModelComponent(input_keys=[], n_wt=5, cost_function=lambda: 1)

spacing = 0.7  # <- spróbujcie 0.4 / 0.7 / 1.0 i zobaczcie różnicę
tf = TopFarmProblem(
    design_vars={'x': x5, 'y': y5},
    cost_comp=dummy_cost5,
    constraints=[
        XYBoundaryConstraint(boundary_big, 'polygon'),
        SpacingConstraint(spacing)
    ],
    plot_comp=XYPlotComp()
)

tf.setup()
tf.evaluate()

plt.figure(figsize=(6, 4))
plt.title(f"Boundary + SpacingConstraint (min dist = {spacing})")
tf.plot_comp.plot_constraints()
plt.plot(boundary_big[:, 0], boundary_big[:, 1], '-k', label='Boundary')
plt.scatter(x5, y5)
for i, (xx, yy) in enumerate(zip(x5, y5), start=1):
    plt.text(xx + 0.03, yy + 0.03, f"T{i}")
plt.axis("equal")
plt.grid(True)
plt.legend()
```

**Check:** widzicie granicę + wizualizację ograniczeń oraz punkty turbin z etykietami `T1…T5`.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): jak zmiana `spacing` wpływa na to, czy układ spełnia ograniczenia.

---

## Krok 5 — VibeCoding: zrób 1 ulepszenie wizualizacji (10 min)

Wybierzcie **jedno** ulepszenie i zróbcie je **z pomocą Copilota**:

**Opcja A (łatwa):** jedna figura z 2 subplotami: “spacing=0.4” vs “spacing=1.0”  
**Opcja B (łatwa):** kolor punktów zależny od numeru turbiny + większe etykiety  
**Opcja C (średnia):** funkcja `make_case(spacing)` i pętla po 3 wartościach spacing

Prompt do Copilota:

```text
W tym notebooku mamy kod rysujący Boundary + SpacingConstraint.
Zrób wariant z DWOMA subplotami w jednej figurze:
- po lewej spacing=0.4
- po prawej spacing=1.0
W każdym subplot:
- tytuł z wartością spacing,
- etykiety turbin T1..T5,
- axis('equal'), grid(True).
Podaj gotowy kod do wklejenia jako nowa komórka.
```

**Check:** nowa komórka działa i daje czytelniejszą wizualizację niż wcześniej.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): co ulepszyliśmy (A/B/C) i jaki był efekt na wykresie.

---

3. Commit i push w VS Code.

**Proponowany commit message:**  
`Zajęcia 2: constraints + spacing + wizualizacje`

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): podsumowanie – co było najważniejszym wynikiem lekcji.

---

# Checklist przed wysłaniem linku (30 sekund)

- [ ] Notebook ma outputy (minimum 6 wykresów: 5 granic + spacing / subploty)
- [ ] Notebook ma sekcję raportową (komórki Markdown)
- [ ] Jest min. 1 commit na GitHub
- [ ] Wysłaliśmy link do repo prowadzącemu

Powodzenia! 
Powodzenia! ✅
