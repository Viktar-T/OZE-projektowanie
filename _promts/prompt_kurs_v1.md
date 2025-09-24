# PROMPT DO LLM (do wklejenia)

jako profesor na kierunku **„Odnawialne Źródła Energii” (semestr 5)** potrzebuję zaprojektować kurs:  **„Programy komputerowe w projektowaniu instalacji OZE”** .

**Priorytet:** Koncentruj się wyłącznie na **narzędziach i środowiskach programowych** (CAD/CAE/oprogramowanie specjalistyczne, symulatory, webowe platformy projektowe) — **bez** rozwijania ogólnej teorii projektowania instalacji (formuły tylko wtedy, gdy są niezbędne do zrozumienia działania programu). Kurs ma być maksymalnie  **praktyczny** : funkcje, workflow, ograniczenia, typowe wyniki, eksport/raporty, interoperacyjność i automatyzacja.

## Cel odpowiedzi

LLM ma zaprojektować kurs na 15 godzin wykładów (np. 7×2 h + 1×1 h). Kurs powinien zawierać:

* szczegółowy konspekt (tytuły, czas trwania, cele, treści),
* rozwinięte materiały wykładowe (notatki dla prowadzącego),
* przykłady krok po kroku (screenflow, workflow),
* porównania narzędzi, tabele, checklisty,
* zadania dla studentów wraz z krótką rubryką oceniania.

Zorientowany praktycznie, z naciskiem na **porównanie funkcji, workflow, ograniczeń i wyników symulacji** w wiodących programach. Podczas zajęć planuję wykorzystać: PV*SOL, PV*SOL premium, T*SOL, GeoTSOL, QBlade, TOPFARM.

## Kontekst i zakres

- Grupa docelowa: studenci 5 semestru OZE z podstawami energetyki i informatyki technicznej.
- Zakres: klasyfikacja narzędzi (CAD vs CAE vs software specjalistyczny), modelowanie/symulacje, analiza wyników, eksport raportów, interoperacyjność danych (np. CSV, IFC, DXF), podstawy API/automatyzacji.
- **Wyklucz** szczegółowe obliczenia projektowe niezwiązane z oprogramowaniem (np. długie wyprowadzenia wzorów); używaj ich tylko, gdy są potrzebne do zrozumienia funkcji programów.

## Oprogramowanie do omówienia (w przykładach i porównaniach)

- **PV**: PV*SOL, PV*SOL premium, Sunny Design, PVsyst, Aurora Solar, PVGIS, etc.
- **Solar termiczny**: T*SOL, etc.
- **Pompy ciepła**: GeoTSOL (lub równoważne), narzędzia producentów.
- **Wiatr**: QBlade, TOPFARM, WindPRO, OpenWind.
- **Biomasa i biogaz**: SIMBA# (biogas), BioWin, GPS-X / WEST (moduły ADM1), RETScreen, HOMER Pro (analiza ekonomiczna i systemowa).
- Dodatkowo: różnice między aplikacjami **desktop / web / mobilnymi**; architektura aplikacji (Front-End, logika, silniki symulacyjne, bazy danych).

## Rozkład treści (wskazówka – możesz dostosować, **suma 15 h**)

- **W1 (2 h):** Klasyfikacja narzędzi OZE (CAD vs CAE vs software specjalistyczny); architektura aplikacji (front-end/back-end, silniki symulacyjne, bazy danych); rola i typy programów w energetyce odnawialnej.
- **W2 (2 h):** Systemy fotowoltaiczne (PV)

  - Proces modelowania/projektowania systemów PV
  - Porównanie dostępnych programów (PV*SOL, PV*SOL premium, PVsyst, Aurora Solar, PVGIS, Sunny Design) – funkcje, ograniczenia, licencje
  - **Szczegółowy fokus:**
    - PV*SOL / PV*SOL premium – opis i znaczenie programu dla projektanta
    - Sunny Design – opis i znaczenie programu dla projektanta
    - Proces modelowania/projektowania w PV*SOL i Sunny Design – schemat kroków
    - Demonstracja na żywo: uruchomienie PV*SOL i Sunny Design, budowa przykładowych projektów
- **W3 (2 h):** Solar termiczny

  - Proces modelowania/projektowania systemów solarnych termicznych
  - Porównanie dostępnych programów (przegląd funkcji, ograniczenia, licencje)
  - **Szczegółowy fokus:**
    - T*SOL – znaczenie programu dla projektanta
    - Proces modelowania/projektowania w T*SOL – schemat kroków
    - Demonstracja na żywo: uruchomienie T*SOL i budowa przykładowego projektu
- **W4 (2 h):** Pompy ciepła

  - Proces modelowania/projektowania systemów z pompami ciepła
  - Porównanie narzędzi (GeoTSOL i alternatywy producentów)
  - **Szczegółowy fokus:**
    - GeoTSOL – znaczenie programu dla projektanta
    - Proces modelowania/projektowania w GeoTSOL – schemat kroków
    - Demonstracja na żywo: uruchomienie GeoTSOL i budowa przykładowego projektu
- **W5 (4 h):** Wiatr

  - Proces modelowania/projektowania farm wiatrowych
  - Porównanie narzędzi (QBlade, TOPFARM, WindPRO, OpenWind)
  - **Szczegółowy fokus:**
    - W5.1: QBlade – opis i znaczenie dla projektanta
    - W5.2: TOPFARM – opis i znaczenie dla projektanta
    - Proces modelowania/projektowania w wybranym programie – schemat kroków
    - Demonstracja na żywo: uruchomienie programu i budowa przykładowego projektu
- **W6 (2 h):** Biomasa i biogaz

  - Proces modelowania/projektowania instalacji biomasy i biogazu
  - Porównanie programów (SIMBA#, BioWin, GPS-X/WEST, RETScreen, HOMER Pro)
  - **Szczegółowy fokus:**
    - SIMBA# lub BioWin – opis i znaczenie dla projektanta
    - Proces modelowania/projektowania w wybranym programie – schemat kroków
    - Demonstracja na żywo: uruchomienie programu i budowa przykładowego projektu
- **W7 (1 h):** Interoperacyjność + walidacja wyników

  - Import/eksport (CSV, IFC, DXF), batch runs, API/skryptowalność
  - Porównanie narzędzi, dobre praktyki raportowania i reproducibility

## Styl odpowiedzi

- Język: **polski**, rzeczowo i zwięźle.
- Używaj tabel porównawczych, checklist i schematów workflow.
- Dodaj przykładowe screenflow (opis kroków) zamiast ogólników.
- Zaznacz licencjonowanie/tryby trial, ograniczenia wersji edukacyjnych (jeśli istotne).
- Na końcu dołącz krótką **rubrykę oceniania** dla zadań (kryteria i wagi).
