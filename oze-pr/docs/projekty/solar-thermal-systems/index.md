---
sidebar_position: 3
title: Projekt - Systemy solarne termiczne (4 godziny) - T*SOL
---

# Projekt - Systemy solarne termiczne (4 godziny)

## 🎯 Cel projektu

Zapoznanie się z oprogramowaniem **T*SOL** poprzez wykonanie projektu instalacji solarnej termicznej dla wybranego obiektu. Zadanie polega na przeanalizowaniu przykładowego projektu i dostosowaniu go do warunków lokalnych w Szczecinie.

**Czas realizacji:** 4 godziny (2 zajęcia)

**Wymagania wstępne:**
- Zainstalowane oprogramowanie T*SOL (wersja próbna 30-dniowa)
- Podstawowa wiedza z wykładu o systemach solarnych termicznych
- Dostęp do materiałów pomocniczych (manuale, przykładowy raport)

## 📚 Źródła informacji

### Dokumentacja (30 min).
- **T*SOL Quick Start Guide:** [https://help.valentin-software.com/tsol/en/kurzanleitung/](https://help.valentin-software.com/tsol/en/kurzanleitung/)
- **T*SOL Help Center:** [https://help.valentin-software.com/tsol/en/](https://help.valentin-software.com/tsol/en/)

- **[TSOL Basic Manual.pdf](/docs/solar-thermal/TSOL%20Basic%20Manual.pdf)** - Podstawowy podręcznik użytkownika
- **[TSOL Pro 5.5 User Manual.pdf](/docs/solar-thermal/TSOL%20Pro%205.5%20User%20Manual.pdf)** - Zaawansowany podręcznik użytkownika

## Projekt przykładowy

- **[SDC Example TSOL Report 3.pdf](/docs/solar-thermal/SDC%20Example%20TSOL%20Report%203.pdf)** - **Przykładowy raport projektowy (wzór do analizy)**

:::tip Wskazówka
Zalecamy rozpoczęcie od przeczytania Quick Start Guide oraz przeanalizowania przykładowego raportu przed rozpoczęciem pracy w programie.
:::

## 📋 Zakres projektu

### Krok 1: Analiza przykładowego projektu (30 min)

1. **Zapoznaj się z przykładowym raportem:**
   - Otwórz plik [SDC Example TSOL Report 3.pdf](/docs/solar-thermal/SDC%20Example%20TSOL%20Report%203.pdf)
   - Przeanalizuj strukturę raportu i zawarte w nim informacje
   - Zwróć uwagę na:
     - Parametry techniczne systemu (kolektory, zasobnik, pompy)
     - Dane klimatyczne i lokalizację
     - Schemat hydrauliczny instalacji
     - Wyniki symulacji (uzysk energii, pokrycie zapotrzebowania)
     - Analizę ekonomiczną

2. **Zidentyfikuj kluczowe parametry:**
   - Typ i powierzchnia kolektorów
   - Pojemność zasobnika
   - Zapotrzebowanie na ciepłą wodę użytkową (c.w.u.)
   - Lokalizacja i dane klimatyczne

### Krok 2: Przygotowanie projektu w T*SOL (2 godziny)

1. **Utworzenie nowego projektu:**
   - Uruchom T*SOL i utwórz nowy projekt
   - Wybierz lokalizację: **Szczecin, Polska**
   - Załaduj dane klimatyczne (Meteonorm lub TMY)

2. **Dobór parametrów budynku:**
   - Wybierz typ budynku (dom jednorodzinny)
   - Określ liczbę mieszkańców (4-5 osób)
   - Ustaw zapotrzebowanie na c.w.u. (40-50 l/osobę/dzień, temp. 45°C)
   - Możesz również uwzględnić wspomaganie centralnego ogrzewania (opcjonalnie)

3. **Konfiguracja systemu solarnego:**
   - Wybierz typ kolektorów (płaskie lub próżniowe) - podobnie jak w przykładzie
   - Dobierz powierzchnię kolektorów (dostosuj do zapotrzebowania)
   - Wybierz zasobnik c.w.u. (pojemność 200-300 l)
   - Skonfiguruj schemat hydrauliczny (układ z wymiennikiem ciepła)

4. **Parametry techniczne:**
   - Nachylenie kolektorów: 35-45° (optymalne dla Szczecina)
   - Orientacja: południowa (azymut 0°)
   - Spadek wydajności kolektorów: zgodnie z danymi producenta

### Krok 3: Symulacja i analiza wyników (1 godzina)

1. **Uruchomienie symulacji:**
   - Wykonaj symulację roczną
   - Sprawdź wyniki:
     - Roczny uzysk energii z kolektorów [kWh/rok]
     - Pokrycie zapotrzebowania na c.w.u. [%]
     - Miesięczne wartości uzysku energii
     - Współczynnik solarny (f_sol)

2. **Analiza ekonomiczna:**
   - Sprawdź koszty inwestycyjne (CAPEX)
   - Określ okres zwrotu (SPBT - Simple Payback Time)
   - Porównaj z przykładowym projektem

3. **Generowanie raportu:**
   - Wygeneruj raport końcowy w T*SOL
   - Sprawdź wszystkie sekcje raportu

## 📸 Sprawozdanie

Ze względu na pracę w wersji trial (ograniczenia w eksporcie), sprawozdanie powinno zawierać:

### Wymagane elementy sprawozdania:

1. **Screenshoty z T*SOL:**
   - Główne okno projektu z parametrami
   - Schemat hydrauliczny instalacji
   - Wyniki symulacji (tabela roczna)
   - Wykres miesięcznego uzysku energii
   - Analiza ekonomiczna
   - Strony raportu końcowego (minimum 5-6 screenshotów)

2. **Krótki opis projektu:**
   - Lokalizacja i dane klimatyczne
   - Parametry techniczne systemu (kolektory, zasobnik)
   - Główne wyniki symulacji (uzysk, pokrycie zapotrzebowania)
   - Porównanie z przykładowym projektem

3. **Wnioski:**
   - Czy projekt jest opłacalny?
   - Jakie są główne różnice w stosunku do przykładu?
   - Jakie parametry można jeszcze zoptymalizować?

### Format sprawozdania:
- Dokument PDF lub Word
- Wszystkie screenshoty powinny być czytelne i opisane
- Objętość: 3-5 stron (bez załączników)

## 🔗 Dodatkowe zasoby

### Oprogramowanie
- **T*SOL (Valentin Software):** [https://www.valentin-software.com/en/products/tsol](https://www.valentin-software.com/en/products/tsol)
- **Wersja próbna:** 30 dni (wymagana rejestracja)

### Materiały pomocnicze
- **Valentin Software YouTube:** [https://www.youtube.com/@valentinsoftware](https://www.youtube.com/@valentinsoftware)
- **Dane klimatyczne Meteonorm:** Wbudowane w T*SOL

### Normy i standardy
- EN 12975 - Kolektory słoneczne
- EN 12976 - Gotowe systemy solarne
- VDI 6002 - Projektowanie systemów solarnych termicznych

---

*Ostatnia aktualizacja: Październik 2025*
