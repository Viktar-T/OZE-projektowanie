---
sidebar_position: 2
title: Zadanie 2 - Sunny Design Web
---
# Zadanie 2: Projektowanie PV z Sunny Design Web -- !!!Under constraction!!!

## 🎯 Cel zadania

Zapoznanie się z platformą webową **Sunny Design** firmy SMA i opanowanie szybkiego procesu projektowania instalacji fotowoltaicznych z wykorzystaniem narzędzi online.

**Czas realizacji:** 2 godziny (1 zajęcie)

**Wymagania wstępne:**

- Utworzenie darmowego konta na platformie Sunny Design Web
- Podstawowa wiedza z wykładu o systemach fotowoltaicznych
- Wykonane Zadanie 1 (PV*SOL premium) - zalecane, ale nie obowiązkowe

## 🌐 Platforma Sunny Design Web

**Sunny Design Web** to darmowe narzędzie online firmy SMA Solar Technology do szybkiego projektowania instalacji fotowoltaicznych.

**Główne zalety:**

- ✅ Dostęp przez przeglądarkę - nie wymaga instalacji
- ✅ Całkowicie darmowe (wymagana rejestracja)
- ✅ Zoptymalizowane dla falowników SMA
- ✅ Szybkie generowanie raportów PDF dla klienta
- ✅ Automatyczny dobór konfiguracji stringów
- ✅ Wbudowane dane meteorologiczne

**Ograniczenia (vs PV*SOL premium):**

- ⚠️ Uproszczony model 3D (bez szczegółowej analizy zacienienia)
- ⚠️ Mniejsza biblioteka komponentów (skupienie na SMA)
- ⚠️ Podstawowa analiza ekonomiczna

## 📺 Materiały wprowadzające

Przed rozpoczęciem zadania obejrzyj tutorial wideo:

**🔗 SMA Sunny Design - Tutorial**
[https://www.youtube.com/watch?v=example](https://www.youtube.com/watch?v=example)

:::tip Rejestracja

1. Przejdź na stronę: [https://www.sunnydesignweb.com](https://www.sunnydesignweb.com)
2. Kliknij "Register" i utwórz darmowe konto
3. Potwierdź email i zaloguj się
4. Możesz rozpocząć projektowanie!
   :::

## 📋 Specyfikacja zadania

### Dane projektowe

Zaprojektuj system fotowoltaiczny on-grid dla budynku użyteczności publicznej (mała szkoła lub biuro) o następujących parametrach:

#### Lokalizacja

- **Kraj:** Polska
- **Miasto:** Poznań (lub najbliższa dostępna lokalizacja)
- **Współrzędne:** 52.4°N, 16.9°E (Sunny Design znajdzie automatycznie)

#### Budynek i powierzchnie

**Typ dachu:** Dach płaski (flat roof)

**Powierzchnia użytkowa na dachu:** ~200 m²

**Parametry montażu:**

- **Orientacja systemów:** Azymut 180° (południe)
- **Nachylenie modułów:** 15° (optymalne dla dachu płaskiego)
- **System montażowy:** Balast (bez wiercenia w dach)
- **Strefy bezpieczeństwa:**
  - 1.0 m od krawędzi dachu
  - Korytarze serwisowe: 1.2 m szerokości co 20 m (przepisy p.poż.)

#### Profil energetyczny

- **Roczne zużycie:** 35 000 kWh/rok
- **Typ odbiorcy:** Budynek użyteczności publicznej (szkoła podstawowa)
- **Profil zużycia:** Dni robocze 7:00-17:00, weekendy minimalne
- **Moc szczytowa zapotrzebowania:** ~25 kW

#### Wymagania systemowe

- **Docelowa moc instalacji:** 40-50 kWp
- **Typ systemu:** On-grid (połączony z siecią)
- **Moduł PV:** Wybierz moduły monokrystaliczne 400-450 Wp
- **Falownik:** **SMA** (Sunny Tripower lub Sunny Highpower) - dobierz odpowiednio do mocy
- **DC/AC ratio:** 1.15-1.25 (optymalne dla Polski)

## 📐 Kroki do wykonania

### Krok 1: Rejestracja i logowanie

- [ ] Przejdź na [https://www.sunnydesignweb.com](https://www.sunnydesignweb.com)
- [ ] Utwórz konto (jeśli jeszcze nie masz)
- [ ] Zaloguj się do platformy
- [ ] Zapoznaj się z interfejsem (Dashboard, My Projects, Component Database)

### Krok 2: Utworzenie nowego projektu

- [ ] Kliknij **"New Project"**
- [ ] **Nazwa projektu:** `Nazwisko_SMA_Poznan_Zadanie2`
- [ ] **Typ projektu:** Grid-connected system
- [ ] **Project details:**
  - Nazwa klienta: Szkoła Podstawowa nr X w Poznaniu
  - Adres: Poznań, ul. Szkolna 10
  - Kontakt: (fikcyjne dane)

### Krok 3: Konfiguracja lokalizacji i danych klimatycznych

- [ ] **Location Settings:**
  - Wybierz **Poland → Poznań** (lub wpisz współrzędne: 52.4°N, 16.9°E)
  - Sunny Design automatycznie pobierze dane meteorologiczne
- [ ] **Climate data:**
  - Weryfikuj roczne nasłonecznienie: ~1050-1150 kWh/m²/rok
  - Sprawdź temperatury: T_min ≈ -15°C, T_max ≈ +35°C
- [ ] **Grid connection:**
  - Napięcie sieci: 400V AC (trójfazowe)
  - Częstotliwość: 50 Hz

:::info Dane klimatyczne
Sunny Design korzysta z własnej bazy meteorologicznej. Dla Polski dane są wiarygodne i zbliżone do PVGIS/Meteonorm.
:::

### Krok 4: Wybór typu dachu i konfiguracja powierzchni

- [ ] **Roof type:** Wybierz **"Flat Roof"** (dach płaski)
- [ ] **Mounting system:**

  - System: Ballasted (balast)
  - Tilt angle: 15°
  - Azimuth: 180° (South)
  - Row spacing: Automatic (Sunny Design obliczy optymalne rozstawy)
- [ ] **Roof dimensions:**

  - Jeśli Sunny Design pozwala, narysuj prostokąt ~200 m²
  - Lub ustaw: Length 20 m × Width 10 m = 200 m²
- [ ] **Keep-out zones (strefy bezpieczeństwa):**

  - Border distance: 1.0 m (od wszystkich krawędzi)
  - Service corridors: 1.2 m szerokości (zgodnie z przepisami p.poż.)

:::tip Wskazówka
W Sunny Design można zaznaczyć obszary niedostępne (obstacles), ale nie jest to tak zaawansowane jak w PV*SOL. Dla uproszczenia użyj funkcji "Border distance" i "Service corridors".
:::

### Krok 5: Wybór modułu PV

- [ ] Przejdź do sekcji **"PV Modules"**
- [ ] Wyszukaj w bazie danych:

  - **Technologia:** Monocrystalline
  - **Moc:** 400-450 Wp
  - **Producenci:** np. JA Solar, Longi, Trina Solar, Canadian Solar
- [ ] **Przykładowe moduły:**

  - JA Solar JAM72S30-450/MR (450 Wp)
  - Longi LR5-72HIH-450M (450 Wp)
  - Trina Vertex S TSM-DE09.08 (415 Wp)
- [ ] Wybierz moduł i sprawdź parametry:

  - Voc (open circuit voltage): ~49-50 V
  - Vmpp (voltage at MPP): ~41-42 V
  - Impp (current at MPP): ~10-11 A
  - Wymiary: ~2100 mm × 1050 mm
- [ ] **Liczba modułów:** Sunny Design automatycznie obliczy, ile modułów zmieści się na dachu

  - Cel: 100-120 modułów × 400-450 Wp = 40-50 kWp

### Krok 6: Dobór falownika SMA

- [ ] Przejdź do sekcji **"Inverters"**
- [ ] **Oblicz wymaganą moc AC:**

  - Moc DC: ~45 kWp (szacowana)
  - DC/AC ratio: 1.2 (docelowe)
  - Moc AC: 45 / 1.2 ≈ 37-40 kW
- [ ] **Warianty do rozważenia:**

**Wariant A: Jeden duży falownik**

- SMA Sunny Tripower **CORE1-50** (50 kW)
- Zalety: prostota, mniej połączeń AC
- Wady: single point of failure

**Wariant B: Dwa średnie falowniki**

- 2× SMA Sunny Tripower **25000TL-30** (2× 25 kW = 50 kW AC)
- Zalety: redundancja, elastyczność serwisowa
- Wady: więcej okablowania AC

**Wariant C: Trzy mniejsze falowniki**

- 3× SMA Sunny Tripower **15000TL** (3× 15 kW = 45 kW AC)
- Zalety: maksymalna redundancja, rozłożenie ryzyka
- Wady: wyższa złożoność instalacji

- [ ] **Dla tego zadania wybierz Wariant B** (2× 25 kW)

  - Dobry kompromis między niezawodnością a prostotą
- [ ] Sprawdź parametry wybranego falownika:

  - Max DC voltage: ~1000 V
  - MPPT voltage range: 270-800 V (typowo dla SMA)
  - Number of MPPT trackers: 2 per inverter (łącznie 4 MPPT)
  - Max DC current per MPPT: ~33 A

### Krok 7: Automatyczna konfiguracja stringów

- [ ] Kliknij przycisk **"Auto String Design"** (lub podobny)
- [ ] Sunny Design automatycznie:

  - Obliczy optymalną liczbę modułów w stringu
  - Rozdzieli moduły między dostępne MPPT trackery
  - Zweryfikuje zakresy napięć i prądów
  - Zaproponuje konfigurację końcową
- [ ] **Weryfikacja automatycznej konfiguracji:**

  - [ ] Sprawdź liczbę modułów w stringu: powinna być ~12-16 modułów (dla modułów 450 Wp)
  - [ ] Voc max (zimą, -15°C): <1000 V ✅
  - [ ] Vmpp (latem, +35°C): 270-800 V (zakres MPPT) ✅
  - [ ] Prąd stringów: <33 A (limit MPPT) ✅
  - [ ] DC/AC ratio: 1.15-1.25 ✅

:::warning Kontrola napięć
**Wzory do weryfikacji ręcznej:**

**Voc zimą (worst case, -15°C):**

```
Voc_min = Voc_STC × (1 + temp_coeff_Voc × ΔT)
Gdzie: ΔT = -15 - 25 = -40°C
Temp_coeff_Voc ≈ -0.0028 /°C (typowo)

Voc_min = 49.5 × (1 + (-0.0028) × (-40)) = 49.5 × 1.112 ≈ 55 V (jeden moduł)

Dla 16 modułów: 16 × 55 V = 880 V < 1000 V ✅
```

**Vmpp latem (+35°C):**

```
Vmpp_max = Vmpp_STC × (1 + temp_coeff_Vmpp × ΔT)
Gdzie: ΔT = 35 - 25 = +10°C

Vmpp_max = 41.5 × (1 + (-0.0035) × 10) = 41.5 × 0.965 ≈ 40 V (jeden moduł)

Dla 16 modułów: 16 × 40 V = 640 V (w zakresie MPPT 270-800V) ✅
```

:::

### Krok 8: Ręczna optymalizacja stringów (opcjonalnie)

Jeśli automatyczna konfiguracja nie jest optymalna, możesz ręcznie dostosować:

- [ ] **Wyrównanie obciążenia MPPT:**

  - Każdy MPPT tracker powinien mieć podobną moc
  - Przykład: 4 MPPT × 11-12 kWp każdy = 44-48 kWp łącznie
- [ ] **Konfiguracja stringów:**

  - MPPT 1 (Falownik 1): 3 stringi × 14 modułów = 42 moduły × 450 Wp = 18.9 kWp
  - MPPT 2 (Falownik 1): 3 stringi × 14 modułów = 42 moduły × 450 Wp = 18.9 kWp
  - MPPT 1 (Falownik 2): 2 stringi × 14 modułów = 28 modułów × 450 Wp = 12.6 kWp
  - MPPT 2 (Falownik 2): 2 stringi × 14 modułów = 28 modułów × 450 Wp = 12.6 kWp
  - **Łącznie:** 140 modułów × 450 Wp = **63 kWp DC**
- [ ] **Przelicz DC/AC ratio:**

  - DC/AC = 63 kWp / 50 kW = **1.26** ✅ (w zakresie 1.15-1.30)

:::tip Optymalizacja
DC/AC ratio 1.2-1.3 jest optymalne dla Polski. Niewielki clipping (straty powyżej mocy znamionowej falownika) występuje tylko przez kilka procent czasu rocznie, ale system wykorzystuje pełną moc falownika przez większość sezonu.
:::

### Krok 9: Konfiguracja strat systemowych

- [ ] Przejdź do sekcji **"System Losses"** (lub "Advanced Settings")
- [ ] **Ustaw następujące straty:**

| Typ straty            | Wartość | Uzasadnienie                           |
| --------------------- | --------- | -------------------------------------- |
| Soiling (zabrudzenie) | 2%        | Typowo dla dachu płaskiego w mieście |
| DC cable losses       | 1.5%      | Przewody DC ~20-30 m                   |
| AC cable losses       | 0.5%      | Krótkieokablowanie AC (biurowiec)     |
| Mismatch losses       | 1%        | Różnice między modułami            |
| Temperature losses    | Auto      | Sunny Design obliczy automatycznie     |
| Inverter efficiency   | 98%       | Typowo dla SMA Tripower                |

- [ ] **Łączne straty szacunkowe:** ~8-12% (Performance Ratio ≈ 88-92%)

:::info Performance Ratio
Dla instalacji na dachu płaskim bez znaczącego zacienienia, PR powyżej 85% jest bardzo dobrym wynikiem.
:::

### Krok 10: Symulacja i wyniki energetyczne

- [ ] Kliknij przycisk **"Calculate"** lub **"Simulate"**
- [ ] Sunny Design wykona symulację roczną
- [ ] **Przeanalizuj wyniki:**

#### Produkcja energii

- [ ] **Annual energy yield (AC):** _____ kWh/rok

  - Oczekiwana wartość: 60 000-65 000 kWh/rok (dla 63 kWp w Poznaniu)
  - Specific yield: ~950-1030 kWh/kWp/rok
- [ ] **Monthly distribution:**

  - Czerwiec-Lipiec: najwyższa produkcja (~8000-9000 kWh/mc)
  - Grudzień-Styczeń: najniższa produkcja (~1500-2500 kWh/mc)

#### Autokonsumpcja

- [ ] **Self-consumption rate:** _____ %

  - Jaki procent wyprodukowanej energii jest użyty lokalnie
  - Dla szkoły (dni robocze): oczekiwane 40-50%
- [ ] **Self-sufficiency rate:** _____ %

  - Jaki procent zapotrzebowania pokrywa PV
  - Dla tego projektu: ~50-60% (35 000 kWh zapotrzebowania / 62 000 kWh produkcji)

#### Wskaźniki techniczne

- [ ] **Performance Ratio (PR):** _____ %

  - Cel: > 85%
- [ ] **DC/AC ratio:** _____ (powinno być 1.15-1.30)
- [ ] **Inverter loading:** _____ %

  - Maksymalne obciążenie falownika (powinno osiągnąć 100% w słoneczne dni)
- [ ] **Clipping losses:** _____ kWh/rok (_____ %)

  - Przy DC/AC = 1.26 oczekuj 1-3% strat clippingowych
  - To akceptowalne (ekonomiczny trade-off)

### Krok 11: Analiza ekonomiczna (uproszczona)

- [ ] Przejdź do sekcji **"Economics"** (jeśli dostępna)
- [ ] **Wprowadź parametry finansowe:**

**Investment costs (koszty inwestycyjne):**

- Moduły: 140 × 700 zł = 98 000 zł
- Falowniki: 2 × 15 000 zł = 30 000 zł
- System montażowy (balast): 25 000 zł
- Okablowanie DC/AC + zabezpieczenia: 20 000 zł
- Instalacja i uruchomienie: 30 000 zł
- **Koszt całkowity:** ~200 000 zł (netto)
- **Koszt jednostkowy:** ~3175 zł/kWp

**Operational costs (koszty eksploatacji):**

- Roczne koszty serwisu: 2000 zł/rok
- Ubezpieczenie: 800 zł/rok
- Mycie paneli (co 2 lata): 1000 zł
- **Łącznie:** ~3000 zł/rok (wzrost 3% rocznie)

**Energy tariffs (taryfy energii):**

- Koszt zakupu energii z sieci: 0.75 zł/kWh (szkoła, taryfa C11)
- Cena sprzedaży energii (feed-in): 0.50 zł/kWh (szacunkowa)
- Wzrost cen energii: 7% rocznie (konserwatywnie)

**Obliczenia oszczędności:**

- Autokonsumpcja: 50% × 62 000 kWh = 31 000 kWh/rok
- Oszczędność na autokonsumpcji: 31 000 kWh × 0.75 zł = 23 250 zł/rok
- Sprzedaż nadwyżek: 50% × 62 000 kWh = 31 000 kWh × 0.50 zł = 15 500 zł/rok
- **Roczne przychody:** ~38 750 zł/rok (brutto, przed kosztami eksploatacji)
- **Roczny zysk netto:** ~35 750 zł/rok

**Prosty okres zwrotu (SPBT):**

- SPBT = 200 000 zł / 35 750 zł/rok ≈ **5.6 lat**

:::tip Dotacje i ulgi
W Polsce dostępne są programy wsparcia dla instalacji PV (np. Mój Prąd, dotacje gminne, ulgi podatkowe). Rzeczywisty okres zwrotu może być krótszy o 1-2 lata.
:::

### Krok 12: Generowanie raportu PDF

- [ ] Kliknij przycisk **"Generate Report"** lub **"Create PDF"**
- [ ] **Wybierz elementy raportu:**

  - [ ] Project summary
  - [ ] Location and climate data
  - [ ] System configuration (modules, inverters)
  - [ ] String layout and wiring diagram
  - [ ] Energy yield results (monthly/annual)
  - [ ] Economic analysis
  - [ ] Component datasheet (BOM)
- [ ] **Opcje personalizacji:**

  - Język: English (PL może nie być dostępny)
  - Logo: opcjonalnie dodaj logo szkoły
  - Projekt wykonał: Twoje imię i nazwisko
- [ ] **Eksportuj raport:**

  - **Nazwa:** `Nazwisko_SMA_Poznan_Zadanie2_Report.pdf`
  - Pobierz i zapisz w folderze roboczym

### Krok 13: Warianty projektu (opcjonalnie, +1 pkt dodatkowy)

Stwórz alternatywny wariant projektu i porównaj wyniki:

**Wariant alternatywny - zmiana DC/AC ratio:**

- [ ] Skopiuj projekt (funkcja "Duplicate" w Sunny Design)
- [ ] Zmień konfigurację stringów:

  - Opcja A: Zwiększ liczbę modułów (DC/AC = 1.35)
  - Opcja B: Zmniejsz liczbę modułów (DC/AC = 1.10)
- [ ] Ponownie uruchom symulację
- [ ] Porównaj wyniki:

| Parametr                           | Wariant bazowy (DC/AC 1.26) | Wariant A (DC/AC 1.35) | Wariant B (DC/AC 1.10) |
| ---------------------------------- | --------------------------- | ---------------------- | ---------------------- |
| Moc DC                             |                             |                        |                        |
| Roczna produkcja                   |                             |                        |                        |
| Clipping losses                    |                             |                        |                        |
| Performance Ratio                  |                             |                        |                        |
| Koszt systemu                      |                             |                        |                        |
| SPBT                               |                             |                        |                        |
| **Wniosek - który lepszy?** |                             |                        |                        |

:::info Analiza trade-off
DC/AC ratio to kompromis:

- **Wyższe (1.3-1.4):** więcej energii rocznie, ale większe clipping i wyższe koszty
- **Niższe (1.0-1.1):** brak clippingu, tańsze, ale falownik niedoładowany
- **Optymalne (1.15-1.25):** najlepszy stosunek kosztów do zysków
  :::

## 📦 Wymagane pliki do oddania

### 1. Projekt Sunny Design

- **Nazwa:** `Nazwisko_SMA_Poznan_Zadanie2`
- Projekt zapisany na platformie Sunny Design (udostępnij link lub eksportuj, jeśli dostępne)

### 2. Raport PDF

- **Nazwa:** `Nazwisko_SMA_Poznan_Zadanie2_Report.pdf`
- Wygenerowany z Sunny Design Web

### 3. Sprawozdanie (2-3 strony, format PDF)

**Nazwa:** `Nazwisko_SMA_Poznan_Zadanie2_Sprawozdanie.pdf`

#### Struktura sprawozdania:

**Nagłówek:**

- Imię i nazwisko, nr albumu
- Data wykonania
- Tytuł: "Zadanie 2 - Sunny Design Web"

**1. Dane wejściowe (0.5 strony)**

Tabela:

| Parametr                  | Wartość |
| ------------------------- | --------- |
| Lokalizacja               |           |
| Typ dachu                 |           |
| Powierzchnia użytkowa    |           |
| Producent/model modułu   |           |
| Moc modułu               |           |
| Liczba modułów          |           |
| Moc DC całkowita         |           |
| Producent/model falownika |           |
| Liczba falowników        |           |
| Moc AC całkowita         |           |
| DC/AC ratio               |           |

**2. Wyniki symulacji (0.5 strony)**

| Parametr                   | Wartość | Jednostka   |
| -------------------------- | --------- | ----------- |
| Roczna produkcja AC        | ___       | kWh/rok     |
| Specific yield             | ___       | kWh/kWp/rok |
| Performance Ratio (PR)     | ___       | %           |
| Self-consumption rate      | ___       | %           |
| Self-sufficiency rate      | ___       | %           |
| Clipping losses            | ___       | kWh/rok (%) |
| Koszt systemu              | ___       | zł         |
| Roczny zysk netto          | ___       | zł/rok     |
| Prosty okres zwrotu (SPBT) | ___       | lata        |

**3. Porównanie Sunny Design vs PV*SOL premium (1 strona)**

Jeśli wykonałeś Zadanie 1, porównaj oba narzędzia:

| Kryterium               | Sunny Design Web       | PV*SOL premium       | Uwagi |
| ----------------------- | ---------------------- | -------------------- | ----- |
| Sposób dostępu        | Przeglądarka (online) | Aplikacja desktopowa |       |
| Koszt                   | Darmowe                | Płatne (~3000 EUR)  |       |
| Łatwość obsługi     | ⭐⭐⭐⭐⭐             | ⭐⭐⭐               |       |
| Analiza zacienienia 3D  | Uproszczona            | Zaawansowana         |       |
| Biblioteka komponentów | Skupienie na SMA       | Bardzo szeroka       |       |
| Generowanie raportów   | Szybkie, profesjonalne | Bardzo szczegółowe |       |
| Czas projektowania      | 1-2 h                  | 3-4 h                |       |
| Zastosowanie idealne    | Presales, quick quotes | Projekty wykonawcze  |       |
| Ogólna ocena (1-10)    | ___/10                 | ___/10               |       |

**4. Wnioski (0.5-1 strona)**

Odpowiedz na pytania (3-5 zdań na temat):

1. **Dla jakich projektów Sunny Design jest najlepszym wyborem?**
2. **Jakie są główne zalety automatycznego doboru stringów w Sunny Design?**
3. **Czy DC/AC ratio 1.26 było optymalne w Twoim projekcie? Dlaczego?**
4. **Jakie było największe wyzwanie podczas pracy z Sunny Design?**
5. **Czy polecisz Sunny Design projektantom instalacji PV? Dlaczego?**

### Forma oddania

- Wszystkie pliki w jednym archiwum ZIP
- **Nazwa archiwum:** `Nazwisko_Nr_albumu_Zadanie2_SunnyDesign.zip`
- Upload na platformę e-learningową

## ✅ Kryteria oceny

Zadanie oceniane jest w skali 0-10 punktów (zaliczenie: minimum 6 punktów)

| Kryterium                         | Punkty  | Opis                                                                                     |
| --------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| **Kompletność projektu**  | 0-3 pkt | Czy projekt zawiera poprawną konfigurację (moduły, falowniki, stringi, powierzchnie)? |
| **Poprawność techniczna** | 0-3 pkt | Czy napięcia/prądy są w zakresach? Czy DC/AC ratio optymalne? Czy PR > 85%?           |
| **Jakość dokumentacji**   | 0-2 pkt | Czy raport i sprawozdanie są kompletne i profesjonalne?                                 |
| **Analiza ekonomiczna**     | 0-1 pkt | Czy obliczono SPBT i przeanalizowano opłacalność?                                     |
| **Wariant dodatkowy**       | +1 pkt  | Bonus za stworzenie wariantu alternatywnego i porównanie                                |

### Szczegóły punktacji

**Kompletność projektu (0-3 pkt):**

- 3 pkt: Wszystkie elementy wykonane - lokalizacja, dach płaski, moduły, falowniki SMA, stringi, strefy bezpieczeństwa, symulacja
- 2 pkt: Większość elementów wykonana, drobne braki
- 1 pkt: Podstawowe elementy wykonane, znaczące braki
- 0 pkt: Projekt niekompletny lub nie oddany

**Poprawność techniczna (0-3 pkt):**

- 3 pkt: Konfiguracja elektryczna poprawna, PR > 85%, DC/AC ratio optymalne (1.15-1.30), brak błędów
- 2 pkt: Konfiguracja w większości poprawna, PR 80-85%, DC/AC ratio akceptowalne
- 1 pkt: Konfiguracja z błędami, PR < 80%
- 0 pkt: Poważne błędy techniczne (napięcia poza zakresami, brak falowników, etc.)

**Jakość dokumentacji (0-2 pkt):**

- 2 pkt: Raport PDF + sprawozdanie kompletne, czytelne, profesjonalne
- 1 pkt: Dokumentacja niepełna lub niskiej jakości
- 0 pkt: Brak dokumentacji

**Analiza ekonomiczna (0-1 pkt):**

- 1 pkt: Obliczono SPBT, przeanalizowano koszty i oszczędności, wnioski sensowne
- 0 pkt: Brak analizy ekonomicznej lub błędy w obliczeniach

**Wariant dodatkowy (+1 pkt bonusowy):**

- +1 pkt: Stworzono wariant alternatywny, porównano wyniki, wyciągnięto wnioski

## ❓ FAQ - Najczęściej zadawane pytania

### Problemy techniczne

**Q: Nie mogę znaleźć Poznania w bazie Sunny Design. Co robić?**
A: Wpisz współrzędne GPS ręcznie: 52.4°N, 16.9°E. Sunny Design automatycznie pobierze dane meteorologiczne dla tej lokalizacji.

**Q: Sunny Design pokazuje ostrzeżenie "Voltage out of range". Co to znaczy?**
A: Napięcia stringów są poza zakresem falownika. Najczęstsze rozwiązania:

- **Voc > Vmax DC:** Zmniejsz liczbę modułów w stringu (np. z 16 do 14)
- **Vmpp < Vmin MPPT:** Zwiększ liczbę modułów w stringu
- **Możesz też zmienić falownik** na model o innych zakresach napięć

**Q: Jak ręcznie edytować konfigurację stringów?**
A: W Sunny Design:

1. Przejdź do sekcji "String Configuration"
2. Kliknij "Manual Mode" lub "Edit Strings"
3. Możesz dodawać/usuwać stringi i zmieniać liczbę modułów
4. Po każdej zmianie kliknij "Validate" - system pokaże, czy konfiguracja jest poprawna

**Q: Mój Performance Ratio to 78%. Czy to dobrze?**
A: Dla dachu płaskiego bez zacienienia PR > 80% jest dobry, a > 85% bardzo dobry. PR 78% sugeruje:

- Sprawdź ustawione straty (soiling, cables) - czy nie są za wysokie?
- Weryfikuj nachylenie modułów (15° jest optymalne dla Polski)
- Upewnij się, że nie ma błędów w danych klimatycznych

### Pytania projektowe

**Q: Dlaczego wybraliśmy dach płaski, a nie skośny?**
A: Sunny Design dobrze obsługuje dachy płaskie z systemami montażowymi balastowymi. To typowy scenariusz dla budynków użyteczności publicznej. W Zadaniu 1 (PV*SOL) pracowałeś z dachem skośnym.

**Q: Jaki DC/AC ratio jest najlepszy?**
A: Dla Polski optymalny DC/AC ratio to **1.15-1.25**. Przy tym zakresie:

- Minimalne straty clippingowe (1-3%)
- Falownik dobrze wykorzystany przez większość sezonu
- Najlepszy stosunek kosztów do produkcji energii

DC/AC > 1.3 może być sensowne w regionach z niższym nasłonecznieniem lub gdy chcesz maksymalizować energię zimą.

**Q: Dlaczego wybieramy falowniki SMA w Sunny Design?**
A: Sunny Design jest narzędziem SMA, więc:

- Najlepsza integracja z falownikami SMA
- Automatyczna walidacja parametrów elektrycznych
- Baza danych SMA jest zawsze aktualna
- Możesz dodawać inne marki, ale workflow jest wolniejszy

**Q: Co jeśli nie zmieszczę 140 modułów na 200 m² dachu?**
A: Sprawdź:

- Rozstaw rzędów - przy dachu płaskim i nachyleniu 15° potrzeba ~3.5-4 m między rzędami (aby uniknąć zacienienia)
- Strefy bezpieczeństwa - 1.0 m od krawędzi + korytarze serwisowe 1.2 m
- Efektywna powierzchnia: ~60-70% z 200 m² = 120-140 m² użytecznej powierzchni
- To powinno wystarczyć na 100-120 modułów (45-54 kWp)

Jeśli nie zmieścisz 140 modułów - zmniejsz do 100-120 modułów i dostosuj falowniki (np. 2× 20 kW zamiast 2× 25 kW).

**Q: Jak dodać korytarze serwisowe (service corridors)?**
A: W Sunny Design:

1. W sekcji "Roof Design" znajdź opcję "Service Corridors" lub "Access Paths"
2. Ustaw szerokość: 1.2 m (wymagane przepisami p.poż.)
3. Rozmieszczenie: co 15-20 m (zależy od przepisów lokalnych)
4. Sunny Design automatycznie wykluczy te obszary z montażu modułów

**Q: Czy muszę robić analizę ekonomiczną?**
A: Tak, to część zadania (1 punkt). Nie musisz być bardzo dokładny - wystarczą szacunkowe koszty i taryfy. Najważniejsze to:

- Oszacować koszt systemu (~3000-4000 zł/kWp dla instalacji komercyjnych)
- Obliczyć roczne oszczędności (autokonsumpcja + sprzedaż energii)
- Wyliczyć prosty okres zwrotu (SPBT)

## 💡 Wskazówki praktyczne

### Przed rozpoczęciem

1. ✅ Załóż konto na [SunnyDesignWeb.com](https://www.sunnydesignweb.com)
2. ✅ Zapoznaj się z interfejsem (obejrzyj tutorial)
3. ✅ Przygotuj notatnik do zapisywania parametrów projektu

### Podczas pracy

1. 💾 **Sunny Design zapisuje automatycznie** - ale sprawdź, czy projekt jest na liście "My Projects"
2. 🔁 **Używaj funkcji "Duplicate"** - stwórz kopię przed dużymi zmianami
3. 📸 **Rób zrzuty ekranu** kluczowych widoków (konfiguracja stringów, wyniki energetyczne)
4. ✅ **Sprawdzaj walidację na bieżąco** - Sunny Design pokazuje zielone/czerwone znaczniki przy napięciach i prądach
5. 🧪 **Testuj różne opcje** - zmiana konfiguracji zajmuje kilka minut

### Częste pułapki

- ❌ **Za dużo modułów w stringu** → Voc przekracza Vmax DC falownika (ostrzeżenie!)
- ❌ **Za mało modułów w stringu** → Vmpp poniżej zakresu MPPT (system nie uruchomi się)
- ❌ **Zapomnienie o strefach bezpieczeństwa** → nierealistyczny projekt (nie przejdzie inspekcji)
- ❌ **DC/AC ratio > 1.4** → nadmierne clipping (straty energii)
- ❌ **Nieprawidłowa orientacja** (azymut 0° zamiast 180°) → produkcja energii obniżona o 20-30%

---

:::tip Sunny Design vs PV*SOL - kiedy używać?

**Sunny Design Web - używaj gdy:**

- ✅ Potrzebujesz szybkiego kosztorysu/oferty dla klienta
- ✅ Projektujesz prosty system bez skomplikowanego zacienienia
- ✅ Używasz falowników SMA
- ✅ Masz ograniczony budżet (Sunny Design jest darmowy!)
- ✅ Pracujesz z klientem "on the spot" (spotkanie, prezentacja)

**PV*SOL premium - używaj gdy:**

- ✅ Potrzebujesz szczegółowej analizy zacienienia 3D (drzewa, kominy, sąsiednie budynki)
- ✅ Projektujesz złożone systemy (hybrydowe, off-grid, z magazynem energii)
- ✅ Potrzebujesz bardzo dokładnych wyników (projekty wykonawcze)
- ✅ Chcesz testować różne marki komponentów (szeroka biblioteka)
- ✅ Wymagasz zaawansowanej analizy ekonomicznej (NPV, IRR, cash flow)

**Najlepszy workflow profesjonalny:**

1. **Presales:** Sunny Design - szybka oferta dla klienta
2. **Detailed design:** PV*SOL premium - projekt wykonawczy
3. **Monitoring:** SMA Sunny Portal - śledzenie produkcji po instalacji
   :::

---

**Powodzenia! ☀️⚡**

*To zadanie pokazuje, jak nowoczesne narzędzia webowe demokratyzują dostęp do projektowania instalacji PV. Sunny Design to doskonałe narzędzie dla początkujących projektantów i małych instalatorów - szybkie, darmowe i intuicyjne.*

**Termin oddania:** [Do uzupełnienia przez prowadzącego]

---

*Ostatnia aktualizacja: Październik 2025*
