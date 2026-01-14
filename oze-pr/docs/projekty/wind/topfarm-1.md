---
id: topfarm-1
sidebar_position: 1
title: "Start: GitHub, Codespaces, Copilot + pierwszy wykres farmy (Zadanie 1)"
slug: "/projekty/wind/topfarm-1"
---

# Start: GitHub, Codespaces, Copilot + pierwszy wykres farmy (Zadanie 1)

**Kierunek:** Inżynieria Odnawialnych Źródeł Energii (OZE)  
**Poziom:** 0 (bez doświadczenia w programowaniu)  
**Pracujemy w:** GitHub + Codespaces (VS Code w przeglądarce) + Jupyter Notebook + GitHub Copilot  
**Twój cel na koniec zajęć:** masz **link do swojego repo**, w repo działa notebook i jest **wykres layoutu turbin** + krótki raport.

**Środowisko TopFarm2:** [TopFarm2](https://topfarm.pages.windenergy.dtu.dk/TopFarm2/index.html) — przydatne, jeśli chcesz zainstalować lokalnie (nie wymagane dla zajęć).

Pracujemy w **specjalistycznym środowisku programistycznym**. Ze względu na rozwój możliwości sztucznej inteligencji będziemy programować metodą **VibeCoding**.

**VibeCoding** to praca „na efekt”: zamiast pisać kod od zera i pamiętać składnię, opisujesz w prostych słowach **co chcesz osiągnąć**, a AI pomaga:

- zaproponować kod,
- wytłumaczyć, co robi,
- poprawić błędy,
- zaproponować modyfikacje.

Na początku zajęć miej otwarty czat ze sztuczną inteligencją (np. **ChatGPT**, **Grok**). Gdy pojawią się pytania lub błędy, **najpierw zapytaj czat** (wklej komunikat błędu i opisz, na którym kroku jesteś).

---

## Co musisz oddać (na ocenę)

W swoim repo na GitHub musisz mieć:

- ✅ uruchomiony notebook z widocznymi wynikami (outputy: tekst/wykres)
- ✅ raport `reports/lesson1.md` uzupełniony + **min. 2 screeny**
- ✅ min. 1 zmiana wykonana z pomocą Copilota (np. ulepszony wykres)
- ✅ min. 1 commit (historia commitów widoczna na GitHub)
- ✅ oddany **link do repo** (w miejscu wskazanym przez prowadzącego)

---

## Zanim zaczniesz (2 min)

1. Przygotuj nazwę swojego repo w formacie:  
   `topfarm2-NAZWISKO-IMIE-GRUPA`  
   Przykład: `topfarm2-kowalski-jan-g1`
2. Dzisiaj **nie korzystamy z repo-template** — wszystko budujesz w Codespaces **od zera**.

---

# Krok po kroku

## Krok 0 — Otwórz ChatGPT / inną LLM (2 min)

Zacznij od otwarcia czatu ze sztuczną inteligencją (np. **ChatGPT**, **Grok**) i zostaw go otwartego przez całe zajęcia. Gdy coś nie działa, **najpierw wklej błąd do czatu** i poproś o rozwiązanie.

Pierwszy prompt do wklejenia:

```text
Jestem studentem OZE i nie mam doświadczenia w programowaniu.
Pracuję w GitHub Codespaces (VS Code w przeglądarce) i chcę OD ZERA przygotować minimalne środowisko do pracy z TopFarm2.

Link do dokumentacji TopFarm2:
https://topfarm.pages.windenergy.dtu.dk/TopFarm2/index.html

Poprowadź mnie OGÓLNIE krok po kroku (dla początkującego), żebym:
1) utworzył repo na GitHub i uruchomił Codespace,
2) przygotował podstawową strukturę projektu (notebooks/ i reports/),
3) stworzył requirements.txt i zainstalował zależności (pip install -r requirements.txt),
4) przetestował importy w Pythonie,
5) zrobił prosty notebook z pierwszym wykresem (scatter layoutu turbin),
6) zapisał krótki raport i wykonał commit/push.

Jeśli wkleję błąd z terminala albo z notebooka, powiedz krótko co sprawdzić i podaj dokładne komendy/kroki do naprawy.
```

Przykładowa odpowiedź LLM (ogólne prowadzenie):

1. Utwórz nowe repo na GitHub (puste) i ustaw nazwę wg instrukcji.
2. W repo kliknij **Code → Codespaces → Create codespace on main** i poczekaj aż uruchomi się VS Code w przeglądarce.
3. Utwórz foldery `notebooks/` i `reports/`.
4. Utwórz plik `requirements.txt` i wpisz minimalne zależności potrzebne do uruchomienia TopFarm2 (zgodnie z dokumentacją).
5. W terminalu uruchom `pip install -r requirements.txt` i sprawdź importy w Pythonie.
6. Utwórz notebook w `notebooks/`, dodaj prostą komórkę z `matplotlib` i zrób wykres punktów (layout turbin).
7. Uzupełnij raport w `reports/` (co uruchomiłeś, co zmieniłeś, screeny).
8. Zrób commit i push na GitHub. Jeśli pojawi się błąd — wklej go do czatu, a podpowiem co zrobić.

---

## Krok 1 — Zaloguj się / załóż konto GitHub (5 min)

1. Wejdź na [GitHub](https://github.com/) i zaloguj się.
2. Jeśli nie masz konta — zarejestruj się.

---

## Krok 2 — Utwórz nowe repo na GitHub (bez template) (5–10 min)

1. Na GitHub kliknij **New** (utwórz nowe repozytorium).
2. Ustaw:
   - **Repository name:** `topfarm2-NAZWISKO-IMIE-GRUPA`
   - **Visibility:** zgodnie z instrukcją prowadzącego (zwykle *Public*)
3. Kliknij **Create repository**.

**Check:** jesteś w **swoim** repo (adres w przeglądarce zawiera Twoją nazwę repo).

---

## Krok 3 — Uruchom Codespace (10 min)

1. W swoim repo kliknij zielony przycisk **Code**.
2. Wejdź w zakładkę **Codespaces**.
3. Kliknij **Create codespace on main**.

Poczekaj aż uruchomi się VS Code w przeglądarce.

**Check:**

- Widzisz edytor **VS Code** w przeglądarce (to normalne, że ładuje się 1–3 min).
- Po lewej stronie widzisz panel plików (**Explorer**) i listę folderów z repo (np. `docs/`, `notebooks/`, `reports/`).
- Jeśli widzisz komunikat typu „Setting up your codespace…” / „Starting…” / „Connecting…” — **po prostu poczekaj** (to nie jest błąd).
- Jeśli po kilku minutach nadal jest pusto lub ekran „stoi”: odśwież kartę w przeglądarce i spróbuj ponownie wejść w repo → **Code** → **Codespaces**.

---

## Krok 4 — Przygotuj strukturę projektu (10 min)

1. W panelu plików (**Explorer**) utwórz foldery:
   - `notebooks`
   - `reports`
2. Utwórz plik `requirements.txt` w głównym folderze repo i wklej:

```txt
topfarm==2.6.1
matplotlib==3.10.1
numpy
pandas
ipykernel==6.29.5
pydoe2==1.3.0
cftime==1.6.4
netcdf4==1.7.4
```

**Check:** widzisz w repo `notebooks/`, `reports/` i `requirements.txt`.

---

## Krok 5 — Zainstaluj zależności i sprawdź importy (10–15 min)

1. Otwórz **Terminal** w Codespaces.
2. Uruchom:

```bash
python --version
python -m pip install --upgrade pip
pip install -r requirements.txt
python -c "import numpy, pandas, matplotlib; print('base imports ok')"
python -c "import topfarm; print('topfarm ok')"
```

---

## Krok 6 — Utwórz notebook i zrób pierwszy wykres layoutu (15–20 min)

1. W folderze `notebooks/` utwórz plik `lesson1_hello_topfarm2.ipynb`.
2. Jeśli VS Code zapyta o kernel:
   - wybierz **Python**.
3. Dodaj komórkę z kodem i uruchom:

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

**Check:** w notebooku widzisz wykres (punkty) i nie ma błędu przy `import topfarm`.

---

## Krok 7 — Włącz Copilota i zrób 1 zmianę (10–15 min)

1. Otwórz **Copilot Chat** (ikonka Copilota w VS Code).
2. Skopiuj i wklej prompt 1:

**Prompt 1 — wyjaśnij komórkę**
> Wytłumacz mi jak laikowi, co robi ta komórka z notebooka. Odpowiedz po polsku w 5 krótkich punktach.

3. Skopiuj i wklej prompt 2 (ulepsz wykres):

**Prompt 2 — dodaj/ulepsz wykres layoutu**
> Dodaj lub ulepsz wykres pozycji turbin w tym notebooku: użyj matplotlib scatter, podpisz osie X i Y, dodaj tytuł "Layout turbin – Zajęcia 1", włącz siatkę (grid) i ustaw axis('equal'). Pokaż mi dokładnie kod do wklejenia do komórki.

4. Wklej kod od Copilota do odpowiedniej komórki w notebooku.
5. Uruchom komórkę ponownie (**Run**) i zobacz, czy wykres się poprawił.

**Check:** masz widoczny wykres layoutu turbin + wiesz, co zmieniłeś/aś (1 zdanie).

---

## Krok 8 — Zrób screeny (3–5 min)

Zrób minimum **2 screeny** (zrzuty ekranu):

1. **Screenshot A:** notebook uruchomiony w Codespaces (widać wyniki).
2. **Screenshot B:** wykres layoutu turbin (najlepiej duży, czytelny).

---

## Krok 9 — Uzupełnij raport `reports/lesson1.md` (10–15 min)

1. W folderze `reports/` utwórz plik: `lesson1.md` (czyli: `reports/lesson1.md`).
2. Uzupełnij pola: imię, grupa, link do repo.
3. Wklej screeny do raportu:
   - w VS Code przeciągnij obraz do edytora `reports/lesson1.md` (doda się w repo i pojawi się link),
   - albo wgraj obraz do repo i podlinkuj w markdown.

4. W sekcji **„Co zmieniłem/am dzięki Copilotowi”** opisz jedną zmianę (1–3 zdania).

**Check:** raport ma tekst + 2 obrazki i da się go czytać na GitHub.

---

## Krok 10 — Commit i push na GitHub (5–10 min)

1. W VS Code kliknij ikonę **Source Control** (gałązka/commit).
2. Zobacz listę zmienionych plików (powinny być m.in. notebook i raport, ewentualnie obrazki).
3. Wpisz wiadomość commit, np.:  
   `Zajęcia 1: uruchomiony notebook + raport`
4. Kliknij **Commit**.
5. Kliknij **Sync / Push** (jeśli VS Code poprosi).

**Check:** na stronie GitHub repo widzisz aktualne pliki i nowy commit.

---

## Krok 11 — Oddaj zadanie: wyślij link do repo (2 min)

1. Skopiuj link z paska przeglądarki do Twojego repo, np.:  
   `https://github.com/<twoj-login>/topfarm2-nazwisko-g1`
2. Wklej link w miejscu wskazanym przez prowadzącego (Teams / formularz / Issue).

---

# Szybka naprawa (najczęstsze problemy)

## Problem 1: `ModuleNotFoundError` (brak biblioteki)
**Rozwiązanie:**
1. Otwórz **Terminal** w Codespaces.
2. Uruchom:
   - `pip install -r requirements.txt`
3. Wróć do notebooka i uruchom komórkę ponownie.

---

## Problem 2: Nie ma przycisków „Run” w notebooku / notebook wygląda dziwnie
**Rozwiązanie:**
1. Wejdź w **Extensions** w VS Code.
2. Upewnij się, że jest zainstalowane **Jupyter**.
3. Odśwież stronę Codespaces.

---

## Problem 3: Kernel nie działa / nie uruchamia się
**Rozwiązanie:**
1. W notebooku kliknij wybór **Kernel** → wybierz **Python**.
2. Z menu notebooka wybierz **Restart Kernel** i uruchom komórki od nowa.

---

# Checklist przed wysłaniem linku (30 sekund)

- [ ] Notebook w repo ma outputy (wyniki/widoczny wykres)
- [ ] `reports/lesson1.md` jest uzupełniony
- [ ] W raporcie są min. 2 screeny
- [ ] Jest opis 1 zmiany z Copilotem
- [ ] Na GitHub widać min. 1 commit
- [ ] Wysłałem/am link do repo prowadzącemu

Powodzenia! ✅
