---
sidebar_position: 3
title: 'TopFarm2: Projekt – optymalizacja layoutu (Zadanie 2.3)'
slug: "projekty/wind/topfarm-3"
---

# TopFarm2: Projekt – optymalizacja layoutu (Zadanie 2.3)

**Kierunek:** Inżynieria Odnawialnych Źródeł Energii (OZE)  
**Poziom:** 1 (po Zadaniach 2.1 i 2.2)  
**Czas:** ~6 godzin (można rozbić na 2×3h lub 3×2h)  
**Pracujemy w:** GitHub + Codespaces + Jupyter Notebook + GitHub Copilot Chat (VibeCoding)  
**Nasz cel projektu:** przeprowadzamy mini-badanie: **jak ograniczenia i ustawienia optymalizacji wpływają na wynik (AEP)**.

W projekcie używamy elementów z “Basic Examples” (Problems / Drivers / Constraints) oraz przykładu optymalizacji położeń turbin (IEA37):
- Basic Examples (start): https://topfarm.pages.windenergy.dtu.dk/TopFarm2/basic_examples.html  
- Problems notebook: https://topfarm.pages.windenergy.dtu.dk/TopFarm2/notebooks/problems.html  
- Drivers notebook: https://topfarm.pages.windenergy.dtu.dk/TopFarm2/notebooks/drivers.html  
- Constraints notebook: https://topfarm.pages.windenergy.dtu.dk/TopFarm2/notebooks/constraints.html  

---

## Co musimy oddać (na ocenę)

 W swoim repo na GitHub musimy mieć:
 
 - notebook `notebooks/project_topfarm3.ipynb` z widocznymi wynikami i wykresami
 - folder `results/` z zapisanymi obrazkami (`.png`) i tabelką wyników (`results.csv`)
 - raport w notebooku (komórki Markdown)
 - minimum 3 eksperymenty (porównania) i minimum 6 wykresów
 - minimum 5 commitów (historia pracy)
 - link do repo (MS Teams)

---

## Minimalna struktura repo (zróbmy od razu)

W repo utwórzmy:

- `notebooks/`
- `results/figures/`
- `src/` (opcjonalnie – jeśli chcemy wynieść funkcje z notebooka)

---

# Plan pracy (6 godzin) – sprinty

Poniżej mamy plan pracy w sprintach.
Proszę trzymać się kolejności: każdy sprint ma cel, listę zadań i sekcję **Check**, która mówi, czy jesteśmy „na dobrej ścieżce”.

## Sprint 0 (20–30 min) — Setup i “sanity check”

**Cel:** odpalić importy i policzyć wynik (AEP lub “koszt”) dla układu startowego.

W terminalu:

```bash
pip install -r requirements.txt
python -c "import topfarm; print('topfarm ok')"
```

W notebooku (pierwsza komórka):

```python
import numpy as np
import matplotlib.pyplot as plt

from topfarm import TopFarmProblem
from topfarm.easy_drivers import EasyScipyOptimizeDriver
from topfarm.examples.iea37 import get_iea37_initial, get_iea37_constraints, get_iea37_cost
from topfarm.plotting import XYPlotComp, NoPlot
```

**Check:** brak błędów.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): czy importy zadziałały i co było potrzebne, żeby przejść dalej.

> Jeśli importy z `py_wake` / `openmdao` nie działają – wróćmy do VibeCoding: wklejmy błąd do Copilota i poprośmy o minimalne komendy naprawy (czasem trzeba doinstalować `openmdao[doe]`, `pyDOE2`, `py_wake` – zob. “Drivers” i “Design variables” w Basic Examples).

---

## Sprint 1 (60–75 min) — “Problem”: bazowy przypadek IEA37

**Cel:** uruchomić przykład optymalizacji położeń turbin i mieć wykres “przed vs po”.

Wniosek z sekcji “Problems”: `TopFarmProblem` jest “kontenerem” na: design vars + cost + constraints + driver + plotting/recording.

**Zadania:**
1) Wybierzmy `n_wt = 9` (na start).  
2) Pobierzmy układ startowy: `x, y = get_iea37_initial(n_wt).T`  
3) Ustawmy:
   - cost: `get_iea37_cost(n_wt)`
   - constraints: `get_iea37_constraints(n_wt)`
   - driver: `EasyScipyOptimizeDriver()`
   - plotting: `XYPlotComp()` (żeby widzieć przebieg)

**Wizualizacja (wymagana):**
- wykres układu startowego,
- wykres układu końcowego,
- krótki tekst: “wynik before / after” (np. AEP lub cost).

**Check:** w notebooku widać, że turbiny “przeszły” do nowego układu i jest różnica w wyniku.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): jaki był wynik before/after i co pokazują wykresy.

---

## Sprint 2 (75–90 min) — “Constraints”: własna granica + spacing

**Cel:** zamienić “domyślne” ograniczenia na własne i sprawdzić wpływ na wynik.

Bazujemy na idei boundary i spacing z Zadania 2.2 oraz z notebooka “Constraints”.

**Zadania:**
1) Zdefiniujmy własną granicę (polygon) jako listę wierzchołków w metrach, np. prostokąt 2000×1500 m z “wcięciem”.  
2) Dodajmy `XYBoundaryConstraint(..., 'polygon')`.  
3) Dodajmy `SpacingConstraint(min_dist)` i zróbmy 3 warianty:
   - `min_dist = 2D` (łagodny),
   - `min_dist = 3D` (typowy),
   - `min_dist = 4D` (twardy),
   gdzie `D` to średnica wirnika (jeśli jej nie znamy – przyjmijmy np. 130 m i wpiszmy w raporcie, że to założenie).

**Wizualizacja (wymagana):**
- 3 wykresy layoutu (po jednym dla każdej wartości `min_dist`) + na każdym granica,
- jedna tabelka z wynikami.

**Check:** wyniki się różnią, a layouty wyglądają sensownie (turbiny nie wychodzą poza granicę i nie “nachodzą” na siebie).

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): jak `min_dist` wpłynął na layout i wynik (AEP/cost).

---

## Sprint 3 (60–75 min) — “Drivers”: porównanie 2 ustawień sterownika

**Cel:** pokazać, że wybór/ustawienia drivera wpływają na wynik i czas.

Z sekcji “Drivers”: driver to procedura, która wykonuje workflow (np. optymalizacja, DOE).  

**Zadania (wybierzmy 2):**
- **A:** ten sam problem, ale inne ustawienia `EasyScipyOptimizeDriver` (np. limit iteracji / tolerancja).  
- **B:** ten sam problem, ale inny start (układ startowy: IEA37 vs losowy w granicy).  
- **C (bonus):** mini-DOE: przetestujmy 10 losowych layoutów i wybierzmy najlepszy jako start do optymalizacji.

**Wizualizacja (wymagana):**
- wykres słupkowy “wynik po optymalizacji” dla 2 przypadków,
- wykres czasu obliczeń (nawet proste `time.time()`).

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): które ustawienie/driver dało lepszy wynik i czy było szybciej/wolniej.

---

## Sprint 4 (60–75 min) — Eksperymenty: 3 scenariusze + zapis wyników

**Cel:** zbudować mini-badanie (jak w pracy inżynierskiej): pytanie → metoda → wyniki → wnioski.

Zróbmy minimum **3 eksperymenty** (przykłady):
1) wpływ `min_dist` (zrobione w Sprincie 2),
2) wpływ liczby kierunków wiatru `n_wd` (np. 8 vs 16),
3) wpływ liczby turbin `n_wt` (9 vs 16) **albo** zmiany granicy (większa vs mniejsza).

**Wymóg techniczny:**
- zapisuj wyniki do tabeli (np. lista słowników → DataFrame → `results.csv`)
- zapisuj wykresy do `results/figures/*.png` (`plt.savefig(...)`)

**Check:** po odświeżeniu repo na GitHub widać pliki z wynikami.

**Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): jakie były 3 eksperymenty i co wyszło najważniejszego.

---

## Sprint 5 (45–60 min) — Raport w notebooku + porządek w repo

Raport ma być prosty i czytelny, jak mini-sprawozdanie z laboratorium. Zróbmy go na końcu notebooka jako komórki Markdown (np. tytuł: `# Raport — Zadanie 2.3`).
 
1. **Cel projektu** (2–4 zdania)
2. **Założenia** (np. D=130 m, n_wt, boundary)
3. **Metodyka** (co optymalizowaliśmy, jakie constraints, jaki driver)
4. **Wyniki** (tabelka + 3–6 obrazków)
5. **Wnioski** (5–8 punktów: “co ma największy wpływ i dlaczego”)
6. **Jak użyliśmy AI (VibeCoding)**: wklejmy 2–3 prompty + co poprawiły
 
 **Notatka do notebooka (komórka Markdown):** proszę napisać krótkie wyjaśnienie w komórce Markdown po tym kroku (również z punktu widzenia praktyki projektowania/budowy farmy wiatrowej): co trafi do raportu i jakie są główne wnioski.

---

# Checklist przed wysłaniem linku (60 sekund)

- [ ] `notebooks/project_topfarm3.ipynb` ma outputy i da się go “czytać” jak raport (nagłówki + wykresy)
- [ ] `results/results.csv` istnieje
- [ ] `results/figures/` ma min. 6 obrazków
- [ ] Notebook ma sekcję raportową (komórki Markdown)
- [ ] Jest min. 5 commitów na GitHub
- [ ] Link wysłany w MS Teams

 Powodzenia! ✅
