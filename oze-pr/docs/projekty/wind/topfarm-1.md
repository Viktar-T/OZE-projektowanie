---
sidebar_position: 1
title: 'Start: GitHub, Codespaces, Copilot + pierwszy wykres farmy (Zadanie 1)'
slug: "projekty/wind/topfarm-1"
---
# Start: GitHub, Codespaces, Copilot + pierwszy wykres farmy (Zadanie 1)

**Kierunek:** Inżynieria Odnawialnych Źródeł Energii (OZE)
**Poziom:** 0 (bez doświadczenia w programowaniu)
**Pracujemy w:** GitHub + Codespaces (VS Code w przeglądarce) + Jupyter Notebook + GitHub Copilot
**Nasz cel na koniec zajęć:** mamy **link do naszego repo**, w repo działa notebook i jest **wykres layoutu turbin** + krótki raport.

**Środowisko TopFarm2:** [TopFarm2](https://topfarm.pages.windenergy.dtu.dk/TopFarm2/index.html).

Pracujemy w **specjalistycznym środowisku programistycznym**. Ze względu na rozwój możliwości sztucznej inteligencji będziemy programować metodą **VibeCoding**.

**VibeCoding** to praca „na efekt”: zamiast pisać kod od zera i pamiętać składnię, opisujemy w prostych słowach **co chcemy osiągnąć**, a AI pomaga:

- zaproponować kod,
- wytłumaczyć, co robi,
- poprawić błędy,
- zaproponować modyfikacje.

Na początku zajęć miejmy otwarty czat ze sztuczną inteligencją (np. **ChatGPT**, **Grok**, **Gemini**). Gdy pojawią się pytania lub błędy, **najpierw zapytajmy czat** (wklejmy komunikat błędu i opiszmy, na którym kroku jesteśmy).

---

### GitHub Copilot: Free vs Pro (dla studentów)

W trakcie zajęć będziemy używać GitHub Copilot w VS Code (Codespaces). Są dwa typowe scenariusze:

- **Copilot Free** — dostępny dla każdego konta GitHub, ale ma **limity miesięczne** (np. ograniczona liczba podpowiedzi/Chat).
- **Copilot Pro za darmo** — jeśli jesteśmy **zweryfikowanymi studentami** w **GitHub Education** (GitHub Student Developer Pack), możemy mieć **Copilot Pro bez opłat**.

**Rekomendacja:** jeśli nie mamy jeszcze GitHub Education, złóżmy wniosek jak najszybciej (weryfikacja czasem trwa).
Jeśli w danym dniu Copilot nie działa lub limit się skończy — nadal możemy wykonać zadanie, korzystając z czatu LLM (np. ChatGPT) i uruchamiając komórki notebooka.

---

## Co musimy oddać (na ocenę)

W swoim repo na GitHub musimy mieć:

- ✅ uruchomiony notebook z widocznymi wynikami (outputy: tekst/wykres)
- ✅ min. 1 zmiana wykonana z pomocą Copilota (np. ulepszony wykres)
- ✅ min. 1 commit (historia commitów widoczna na GitHub)
- ✅ oddany **link do repo** (przez MS Teams)

---

## Zanim zaczniemy (2 min)

1. Przygotujmy nazwę naszego repo w formacie:
   `topfarm2-NAZWISKO-IMIE-GRUPA`
   Przykład: `topfarm2-kowalski-jan-s1`

---

# Krok po kroku

## Krok 0 — Otwórzmy ChatGPT / inną LLM (2 min)

Zacznijmy od otwarcia czatu ze sztuczną inteligencją (np. **ChatGPT**, **Grok**, **Gemini**) i zostawmy go otwartego przez całe zajęcia. Gdy coś nie działa, **najpierw wklejmy błąd do czatu** i poprośmy o rozwiązanie.

Pierwszy prompt do wklejenia:

```text
Jesteśmy studentami OZE i nie mamy doświadczenia w programowaniu.
Pracujemy w GitHub Codespaces (VS Code w przeglądarce) i chcemy OD ZERA przygotować minimalne środowisko do pracy z TopFarm2.

Link do dokumentacji TopFarm2:
https://topfarm.pages.windenergy.dtu.dk/TopFarm2/index.html

Poprowadź nas OGÓLNIE krok po kroku (dla początkujących), żebyśmy:
1) utworzyli konto, repo na GitHub i uruchomili Codespace,
2) przygotowali podstawową strukturę projektu (notebooks/),
3) stworzyli requirements.txt i zainstalowali zależności (pip install -r requirements.txt),
4) przetestowali importy w Pythonie,
5) zrobili prosty notebook z pierwszym wykresem (scatter layoutu turbin),
6) zapisali krótki raport i wykonali commit/push.

Jeśli wkleimy błąd z terminala albo z notebooka, powiedz krótko co sprawdzić i podaj dokładne komendy/kroki do naprawy.
```

---

## Przykładowa odpowiedź LLM (ogólne prowadzenie):

1. Utwórzmy nowe repo na GitHub (puste) i ustawmy nazwę wg instrukcji.
2. W repo kliknijmy **Code → Codespaces → Create codespace on main** i poczekajmy aż uruchomi się VS Code w przeglądarce.
3. Utwórzmy folder `notebooks/`.
4. Utwórzmy plik `requirements.txt` i wpiszmy minimalne zależności potrzebne do uruchomienia TopFarm2 (zgodnie z dokumentacją).
5. W terminalu uruchommy `pip install -r requirements.txt` i sprawdźmy importy w Pythonie.
6. Utwórzmy notebook w `notebooks/`, dodajmy prostą komórkę z `matplotlib` i zróbmy wykres punktów (layout turbin).
8. Zróbmy commit i push na GitHub. Jeśli pojawi się błąd — wklejmy go do czatu, a podpowiem co zrobić.

---

## Krok 1 — Zalogujmy się / załóżmy konto GitHub (5 min)

1. Wejdźmy na [GitHub](https://github.com/) i zalogujmy się.
2. Jeśli nie mamy konta — zarejestrujmy się.

---

## Krok 2 — Utwórzmy nowe repo na GitHub (bez template) (5–10 min)

1. Na GitHub kliknijmy **New** (utwórz nowe repozytorium).
2. Ustawmy:
   - **Repository name:** `topfarm2-NAZWISKO-IMIE-GRUPA`
   - **Visibility:** zgodnie z instrukcją prowadzącego (zwykle *Public*)
   - **Add a README file:** zaznaczone
3. Kliknijmy **Create repository**.

**Check:** jesteśmy w **naszym** repo (adres w przeglądarce zawiera nazwę naszego repo).

---

## Krok 3 — Uruchommy Codespace (10 min)

1. W naszym repo kliknijmy zielony przycisk **Code**.
2. Wejdźmy w zakładkę **Codespaces**.
3. Kliknijmy **Create codespace on main**.

Poczekajmy aż uruchomi się VS Code w przeglądarce.

**Check:**

- Widzimy edytor **VS Code** w przeglądarce (to normalne, że ładuje się 1–3 min).
- Po lewej stronie widzimy panel plików (**Explorer**) i listę plików z repo (np. `README.md`).
- Jeśli widzimy komunikat typu „Setting up your codespace…” / „Starting…” / „Connecting…” — **po prostu poczekajmy** (to nie jest błąd).
- Jeśli po kilku minutach nadal jest pusto lub ekran „stoi”: odświeżmy kartę w przeglądarce i spróbujmy ponownie wejść w repo → **Code** → **Codespaces**.

---

## Krok 4 — Przygotujmy strukturę projektu (10 min)

1. W panelu plików (**Explorer**) utwórzmy folder:
   - `notebooks`
2. Utwórzmy plik `requirements.txt` w głównym folderze repo i wklejmy:

```txt
topfarm
numpy
pandas
matplotlib
jupyter
ipykernel
```

**Check:** widzimy w repo `notebooks/`, `requirements.txt`. 'README.md'.

---

## Krok 5 — Zainstalujmy zależności i sprawdźmy importy (10–15 min)

1. Otwórzmy **Terminal** w Codespaces.
2. Uruchommy:

```bash
python --version
python -m pip install --upgrade pip
pip install -r requirements.txt
```
**Check:**
Sprawdźmy, że nie ma błędów w instalacji.
```bash
python -c "import numpy, pandas, matplotlib; print('base imports ok')"
python -c "import topfarm; print('topfarm ok')"
```
---

## Krok 6 — Utwórzmy notebook i zróbmy pierwszy wykres layoutu (15–20 min)

1. W folderze `notebooks/` utwórzmy plik `lesson1_hello_topfarm2.ipynb`.
2. Dodajmy komórkę z kodem i uruchommy:

```python
import numpy as np
import matplotlib.pyplot as plt

import topfarm  # test importu

x = np.array([0, 500, 1000, 1500])
y = np.array([0, 0, 500, 500])

plt.figure(figsize=(6, 4))
plt.scatter(x, y)
plt.title("Layout turbin – Zajęcia 1")
plt.xlabel("x [m]")
plt.ylabel("y [m]")
plt.grid(True)
plt.axis("equal")
plt.show()
```

3. VS Code zapyta:
   - "install/enable ..." - kliknijmy
   - "Create python environment" - wybierzmy **Python 3.x**.
4. Jeszcze raz uruchommy komórkę z kodem.


**Check:** w notebooku widzimy wykres (punkty) i nie ma błędu przy `import topfarm`.

---

## Krok 7 — Dodajmy rozszerzenie Copilota w Codespace i zróbmy 1 zmianę (10–15 min)

1. Dodajmy rozszerzenie `GitHub Copilot` w Codespace.
2. Otwórzmy **Copilot Chat** (ikonka Copilota w VS Code).
3. Skopiujmy i wklejmy prompt 1:

**Prompt 1 — wyjaśnij komórkę**

> Wytłumacz nam jak laikom, co robi ta komórka z notebooka. Odpowiedz po polsku w 5 krótkich punktach.

4. Skopiujmy i wklejmy prompt 2 (ulepsz wykres):

**Prompt 2 — dodaj/ulepsz wykres layoutu**

> Dodaj nową komórkę. Dodaj wykres pozycji turbin w tym notebooku: użyj matplotlib scatter z różnymi kolorami dla punktów (np. niebieski, czerwony, zielony, żółty), dodaj etykiety dla każdej turbiny (np. 'T1', 'T2', 'T3', 'T4'), podpisz osie X i Y, dodaj tytuł "Layout turbin – Zajęcia 1 z kolorami i etykietami", włącz siatkę (grid) i ustaw axis('equal').

5. Wklejmy kod od Copilota do odpowiedniej komórki w notebooku.
6. Uruchommy komórkę ponownie (**Run**) i zobaczmy, czy wykres się poprawił.

**Check:** mamy widoczny wykres layoutu turbin + wiemy, co zmieniliśmy.

---

## Krok 8 — Commit i push na GitHub (5–10 min)

1. W VS Code kliknijmy ikonę **Source Control** (gałązka/commit).
2. Zobaczmy listę zmienionych plików (powinny być m.in. notebook i raport, ewentualnie obrazki).
3. Wpiszmy wiadomość commit, np.:
   `Zajęcia 1: uruchomiony notebook + raport`
4. Kliknijmy **Commit**.
5. Kliknijmy **Sync / Push** (jeśli VS Code poprosi).

**Check:** na stronie GitHub repo widzimy aktualne pliki i nowy commit.

---

## Krok 9 — Oddaj zadanie: wyślij link do repo (2 min)

1. Skopiujmy link z paska przeglądarki do naszego repo, np.:
   `https://github.com/<nasz-login>/topfarm2-nazwisko-imie-g1`
2. Wklejmy link w miejscu wskazanym przez prowadzącego (MS Teams).

---
# Checklist przed wysłaniem linku (30 sekund)

- [ ] Notebook w repo ma outputy (wyniki/widoczny wykres)
- [ ] Jest opis 1 zmiany z Copilotem
- [ ] Na GitHub widać min. 1 commit
- [ ] Wysłaliśmy link do repo prowadzącemu

Powodzenia! ✅
