---
sidebar_position: 1
slug: topfarm-1
title: Start: GitHub, Codespaces, Copilot + pierwszy wykres farmy (Zadanie 1)
---

# Start: GitHub, Codespaces, Copilot + pierwszy wykres farmy (Zadanie 1)

**Kierunek:** Inżynieria Odnawialnych Źródeł Energii (OZE)  
**Poziom:** 0 (bez doświadczenia w programowaniu)  
**Pracujemy w:** GitHub + Codespaces (VS Code w przeglądarce) + Jupyter Notebook + GitHub Copilot  
**Twój cel na koniec zajęć:** masz **link do swojego repo**, w repo działa notebook i jest **wykres layoutu turbin** + krótki raport.

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

1. Upewnij się, że masz dostęp do **[repo-szablonu prowadzącego](https://github.com/Viktar-T/topfarm2-course-template)** (template) i znasz jego nazwę/link.
2. Przygotuj nazwę swojego repo w formacie:  
   `topfarm2-NAZWISKO-GRUPA`  
   Przykład: `topfarm2-kowalski-g1`

---

# Krok po kroku

## Krok 1 — Zaloguj się / załóż konto GitHub (5 min)

1. Wejdź na [GitHub](https://github.com/) i zaloguj się.
2. Jeśli nie masz konta — zarejestruj się i wróć do linku repo-szablonu prowadzącego.

**Check:** widzisz stronę repo-szablonu prowadzącego: [topfarm2-course-template](https://github.com/Viktar-T/topfarm2-course-template).

---

## Krok 2 — Utwórz swoje repo z szablonu (Use this template) (5–10 min)

1. Na stronie repo-szablonu kliknij przycisk **Use this template**.
2. Wybierz **Create a new repository**.
3. Ustaw:
   - **Repository name:** `topfarm2-NAZWISKO-IMIE-GRUPA`
   - **Visibility:** zgodnie z instrukcją prowadzącego (zwykle *Public*)
4. Kliknij **Create repository**.

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

Sprawdzanie w terminalu (opcjonalnie, ale polecane):

```bash
python --version
python -c "import numpy, pandas, matplotlib; print('base imports ok')"
python -c "import topfarm; print('topfarm ok')"
```

Jeśli importy nie działają, uruchom w terminalu:

`pip install -r requirements.txt`

Uwaga: Codespaces **zwykle robi to automatycznie** (w `postCreateCommand`), a ręcznie uruchamiasz to tylko wtedy, gdy coś poszło nie tak.

---

## Krok 4 — Otwórz notebook i uruchom komórki (15 min)

1. Otwórz folder `notebooks/`.
2. Otwórz plik: `lesson1_hello_topfarm2.ipynb`.
3. Jeśli VS Code zapyta o kernel:
   - wybierz **Python** (domyślny).
4. Uruchom komórki od góry do dołu:
   - klikaj **Run** przy każdej komórce (lub „Run All”).

**Check:** w notebooku widzisz wyniki (tekst/wykres).

> Jeśli pojawia się błąd `ModuleNotFoundError`: przejdź do sekcji **Szybka naprawa** na końcu.

---

## Krok 5 — Włącz Copilota i zrób 1 zmianę (15 min)

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

## Krok 6 — Zrób screeny (3–5 min)

Zrób minimum **2 screeny** (zrzuty ekranu):

1. **Screenshot A:** notebook uruchomiony w Codespaces (widać wyniki).
2. **Screenshot B:** wykres layoutu turbin (najlepiej duży, czytelny).

---

## Krok 7 — Uzupełnij raport `reports/lesson1.md` (10–15 min)

1. Otwórz plik: `reports/lesson1.md`.
2. Uzupełnij pola: imię, grupa, link do repo.
3. Wklej screeny do raportu:
   - w VS Code przeciągnij obraz do edytora `lesson1.md` (doda się w repo i pojawi się link),
   - albo wgraj obraz do repo i podlinkuj w markdown.

4. W sekcji **„Co zmieniłem/am dzięki Copilotowi”** opisz jedną zmianę (1–3 zdania).

**Check:** raport ma tekst + 2 obrazki i da się go czytać na GitHub.

---

## Krok 8 — Commit i push na GitHub (5–10 min)

1. W VS Code kliknij ikonę **Source Control** (gałązka/commit).
2. Zobacz listę zmienionych plików (powinny być m.in. notebook i raport, ewentualnie obrazki).
3. Wpisz wiadomość commit, np.:  
   `Zajęcia 1: uruchomiony notebook + raport`
4. Kliknij **Commit**.
5. Kliknij **Sync / Push** (jeśli VS Code poprosi).

**Check:** na stronie GitHub repo widzisz aktualne pliki i nowy commit.

---

## Krok 9 — Oddaj zadanie: wyślij link do repo (2 min)

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
