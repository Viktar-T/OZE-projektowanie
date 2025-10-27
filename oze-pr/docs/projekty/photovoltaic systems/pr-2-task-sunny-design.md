---
sidebar_position: 2
title: Zadanie 2 - Sunny Design Web
---
# Zadanie 2: Projektowanie PV z Sunny Design Web -- !!!Under constraction!!!

## 🎯 Cel zadania

Zapoznanie się z platformą webową **Sunny Design** firmy SMA i opanowanie szybkiego procesu projektowania instalacji fotowoltaicznych z wykorzystaniem narzędzi online.

**Czas realizacji:** 4 godziny (2 zajęcia)

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

**Aby zapoznać się z platformą, proszę zacząć od:** [https://www.sunnydesignweb.com/sdweb#/](https://www.sunnydesignweb.com/sdweb#/)

**Dalej przejść do wideo "Wprowadzenie do Sunny Design":** [https://www.youtube.com/watch?v=VrMOGxwBKvA](https://www.youtube.com/watch?v=VrMOGxwBKvA)

**Następnie proszę obejrzeć "Projektowanie systemów wyspowych":** [https://www.youtube.com/watch?v=xuDXwNXPVWE](https://www.youtube.com/watch?v=xuDXwNXPVWE)

:::tip Rejestracja

1. Przejdź na stronę: [https://www.sunnydesignweb.com/sdweb#/](https://www.sunnydesignweb.com/sdweb#/)
2. Kliknij "Register" i utwórz darmowe konto
3. Potwierdź email i zaloguj się
4. Możesz rozpocząć projektowanie!
   :::

## 📋 Specyfikacja zadania

### Dane projektowe

Zaprojektuj system fotowoltaiczny on-grid dla dowolnego budynku o następujących parametrach:

#### Lokalizacja

- **Kraj:** Polska
- **Miasto:** Szczecin (lub najbliższa dostępna lokalizacja)
- **Współrzędne:** 53.43°N, 14.55°E (Sunny Design znajdzie automatycznie)

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
- **Typ odbiorcy:** Dowolny budynek (dom, biuro, szkoła itp.)
- **Profil zużycia:** Dni robocze 7:00-17:00, weekendy minimalne
- **Moc szczytowa zapotrzebowania:** ~25 kW

#### Wymagania systemowe

- **Docelowa moc instalacji:** 40-50 kWp
- **Typ systemu:** On-grid (połączony z siecią)
- **Moduł PV:** 
  - Wybierz moduły monokrystaliczne z przedziału 400-500 Wp
  - Uzasadnij wybór (np. stosunek mocy do ceny, dostępność, parametry)
- **Falownik:** 
  - Wybierz model SMA z rodziny Sunny Tripower lub Sunny Highpower
  - Dobierz moc AC tak, aby DC/AC ratio było w zakresie 1.0-1.3
  - Uzasadnij wybór konfiguracji (jeden duży vs. wiele mniejszych)

## 📐 Kroki do wykonania

### Krok 1: Rejestracja i logowanie

- [ ] Przejdź na [https://www.sunnydesignweb.com/sdweb#/](https://www.sunnydesignweb.com/sdweb#/)
- [ ] Utwórz konto (jeśli jeszcze nie masz)
- [ ] Zaloguj się do platformy
- [ ] Zapoznaj się z interfejsem (Dashboard, My Projects, Component Database)

### Krok 2: Utworzenie nowego projektu

- [ ] Kliknij **"New Project"**
- [ ] **Nazwa projektu:** `Nazwisko_SMA_Szczecin_Zadanie2`
- [ ] **Typ projektu:** Grid-connected system
- [ ] **Project details:**
  - Nazwa klienta: [Nazwa dowolnego budynku] w Szczecinie
  - Adres: Szczecin, ul. Szkolna 10
  - Kontakt: (fikcyjne dane)

### Krok 3: Konfiguracja lokalizacji i danych klimatycznych

- [ ] **Location Settings:**
  - Wybierz **Poland → Szczecin** (lub wpisz współrzędne: 53.43°N, 14.55°E)
  - Sunny Design automatycznie pobierze dane meteorologiczne
- [ ] **Climate data:**
- Weryfikuj roczne nasłonecznienie: ~1050-1150 kWh/m²/rok (dla Szczecina)
- Sprawdź temperatury: T_min ≈ -20°C, T_max ≈ +35°C (dla północnej Polski)
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

  - Voc (open circuit voltage): ~49-50 V (STC)
  - Vmpp (voltage at MPP): ~41-42 V (STC)
  - Impp (current at MPP): ~10-11 A (STC)
  - Isc (short circuit current): ~11-12 A (STC)
  - Wymiary: ~2100 mm × 1050 mm
  - Temperature coefficient Voc: ~-0.30%/°C
  - Temperature coefficient Vmpp: ~-0.35%/°C
- [ ] **Liczba modułów:** Sunny Design automatycznie obliczy, ile modułów zmieści się na dachu

  - Cel: 100-120 modułów × 400-450 Wp = 40-50 kWp

### Krok 6: Dobór falownika SMA

- [ ] Przejdź do sekcji **"Inverters"**
- [ ] **Oblicz wymaganą moc AC:**

  - Moc DC: ~50 kWp (szacowana dla 112 modułów × 450 Wp)
  - DC/AC ratio: 1.0-1.2 (docelowe dla Polski)
  - Moc AC: 50 kWp (wybieramy 2× 25 kW = 50 kW AC)
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

  - Max DC voltage: ~1000-1100 V (zgodnie z normą IEC 61853)
  - MPPT voltage range: 200-800 V (zakres pracy MPPT)
  - Vmpp range: 320-800 V (optimalny zakres pracy)
  - Number of MPPT trackers: 2 per inverter (łącznie 4 MPPT)
  - Max DC current per MPPT: ~25-30 A
  - Max total DC current: ~50-60 A

### Krok 7: Automatyczna konfiguracja stringów

- [ ] Kliknij przycisk **"Auto String Design"** (lub podobny)
- [ ] Sunny Design automatycznie:

  - Obliczy optymalną liczbę modułów w stringu
  - Rozdzieli moduły między dostępne MPPT trackery
  - Zweryfikuje zakresy napięć i prądów
  - Zaproponuje konfigurację końcową
- [ ] **Weryfikacja automatycznej konfiguracji:**

  - [ ] Sprawdź liczbę modułów w stringu: 14-15 modułów optymalne (dla modułów 450 Wp)
  - [ ] Voc max (zimą, -20°C): &lt;1000 V ✅ (zalecane &lt;950 V dla marginesu bezpieczeństwa)
  - [ ] Vmpp (latem, +35°C): 320-800 V (zakres MPPT) ✅
  - [ ] Prąd stringów: &lt;30 A (limit MPPT) ✅
  - [ ] DC/AC ratio: 1.0-1.2 ✅

:::warning Kontrola napięć
**Wzory do weryfikacji ręcznej:**

**Voc zimą (worst case, -20°C dla Szczecina):**

```
Voc_min = Voc_STC × (1 + temp_coeff_Voc × ΔT)
Gdzie: ΔT = -20 - 25 = -45°C
Temp_coeff_Voc ≈ -0.0030 /°C (dla modułów monokrystalicznych)

Voc_min = 49.5 × (1 + (-0.0030) × (-45)) = 49.5 × 1.135 ≈ 56.2 V (jeden moduł)

Dla 16 modułów: 16 × 56.2 V = 899 V < 1000 V ✅
Dla 14 modułów: 14 × 56.2 V = 787 V < 1000 V ✅ (bezpieczniejszy wariant)
```

**Vmpp latem (+35°C):**

```
Vmpp_max = Vmpp_STC × (1 + temp_coeff_Vmpp × ΔT)
Gdzie: ΔT = 35 - 25 = +10°C
Temp_coeff_Vmpp ≈ -0.0035 /°C

Vmpp_max = 41.5 × (1 + (-0.0035) × 10) = 41.5 × 0.965 ≈ 40 V (jeden moduł)

Dla 15 modułów: 15 × 40 V = 600 V (w zakresie MPPT 320-800V) ✅
Dla 14 modułów: 14 × 40 V = 560 V (w zakresie MPPT 320-800V) ✅
```

:::

### Krok 8: Ręczna optymalizacja stringów (opcjonalnie)

Jeśli automatyczna konfiguracja nie jest optymalna, możesz ręcznie dostosować:

- [ ] **Wyrównanie obciążenia MPPT:**

  - Każdy MPPT tracker powinien mieć podobną moc
  - Przykład: 4 MPPT × 11-12 kWp każdy = 44-48 kWp łącznie
- [ ] **Konfiguracja stringów:**

  - MPPT 1 (Falownik 1): 2 stringi × 14 modułów = 28 modułów × 450 Wp = 12.6 kWp
  - MPPT 2 (Falownik 1): 2 stringi × 14 modułów = 28 modułów × 450 Wp = 12.6 kWp
  - MPPT 1 (Falownik 2): 2 stringi × 14 modułów = 28 modułów × 450 Wp = 12.6 kWp
  - MPPT 2 (Falownik 2): 2 stringi × 14 modułów = 28 modułów × 450 Wp = 12.6 kWp
  - **Łącznie:** 112 modułów × 450 Wp = **50.4 kWp DC**
- [ ] **Przelicz DC/AC ratio:**

  - DC/AC = 50.4 kWp / 50 kW = **1.008** ✅ (w zakresie 1.0-1.3)

:::tip Optymalizacja
DC/AC ratio 1.0-1.3 jest optymalne dla Polski. Niewielki clipping (straty powyżej mocy znamionowej falownika) występuje tylko przez kilka procent czasu rocznie, ale system wykorzystuje pełną moc falownika przez większość sezonu.
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
| Shading losses        | 1-2%      | Minimalne zacienienie (dach płaski)   |
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

  - Oczekiwana wartość: 47 000-52 000 kWh/rok (dla 50.4 kWp w Szczecinie)
  - Specific yield: ~950-1030 kWh/kWp/rok
- [ ] **Monthly distribution:**

  - Czerwiec-Lipiec: najwyższa produkcja (~6000-7000 kWh/mc dla 50.4 kWp)
  - Grudzień-Styczeń: najniższa produkcja (~1000-1800 kWh/mc dla 50.4 kWp)

#### Autokonsumpcja

- [ ] **Self-consumption rate:** _____ %

  - Jaki procent wyprodukowanej energii jest użyty lokalnie
  - Dla budynku komercyjnego (dni robocze): oczekiwane 40-50%
- [ ] **Self-sufficiency rate:** _____ %

  - Jaki procent zapotrzebowania pokrywa PV
  - Dla tego projektu: ~70-75% (35 000 kWh zapotrzebowania / 50 000 kWh produkcji)

#### Wskaźniki techniczne

- [ ] **Performance Ratio (PR):** _____ %

  - Cel: > 85%
- [ ] **DC/AC ratio:** _____ (powinno być 1.0-1.3)
- [ ] **Inverter loading:** _____ %

  - Maksymalne obciążenie falownika (powinno osiągnąć 100% w słoneczne dni)
- [ ] **Clipping losses:** _____ kWh/rok (_____ %)

  - Przy DC/AC = 1.008 oczekuj &lt;1% strat clippingowych (minimalne)
  - To akceptowalne (ekonomiczny trade-off)

### Krok 11: Analiza ekonomiczna (uproszczona)

- [ ] Przejdź do sekcji **"Economics"** (jeśli dostępna)
- [ ] **Wprowadź parametry finansowe:**

**Investment costs (koszty inwestycyjne):**

- Moduły: 112 × 700 zł = 78 400 zł
- Falowniki: 2 × 15 000 zł = 30 000 zł
- System montażowy (balast): 25 000 zł
- Okablowanie DC/AC + zabezpieczenia: 20 000 zł
- Instalacja i uruchomienie: 30 000 zł
- **Koszt całkowity:** ~183 400 zł (netto)
- **Koszt jednostkowy:** ~3640 zł/kWp

**Operational costs (koszty eksploatacji):**

- Roczne koszty serwisu: 2000 zł/rok
- Ubezpieczenie: 800 zł/rok
- Mycie paneli (co 2 lata): 1000 zł
- **Łącznie:** ~3000 zł/rok (wzrost 3% rocznie)

**Energy tariffs (taryfy energii):**

- Koszt zakupu energii z sieci: 0.75 zł/kWh (budynek komercyjny, taryfa C11)
- Cena sprzedaży energii (feed-in): 0.50 zł/kWh (szacunkowa)
- Wzrost cen energii: 7% rocznie (konserwatywnie)

**Obliczenia oszczędności:**

- Autokonsumpcja: 50% × 50 000 kWh = 25 000 kWh/rok
- Oszczędność na autokonsumpcji: 25 000 kWh × 0.75 zł = 18 750 zł/rok
- Sprzedaż nadwyżek: 50% × 50 000 kWh = 25 000 kWh × 0.50 zł = 12 500 zł/rok
- **Roczne przychody:** ~31 250 zł/rok (brutto, przed kosztami eksploatacji)
- **Roczny zysk netto:** ~28 250 zł/rok

**Prosty okres zwrotu (SPBT):**

- SPBT = 183 400 zł / 28 250 zł/rok ≈ **6.5 lat**

:::tip Dotacje i ulgi
W Polsce dostępne są programy wsparcia dla instalacji PV (np. Mój Prąd, dotacje gminne, ulgi podatkowe). Rzeczywisty okres zwrotu może być krótszy o 1-2 lata.
:::

### Krok 12: Generowanie raportu PDF. Raport proszę wysłać przez MS Teams.

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
  - Logo: opcjonalnie dodaj logo budynku/firmy
  - Projekt wykonał: Twoje imię i nazwisko
- [ ] **Eksportuj raport:**

  - **Nazwa:** `Nazwisko_SMA_Szczecin_Zadanie2_Report.pdf`
  - Pobierz i zapisz w folderze roboczym

## 📦 Wymagane pliki do oddania

### 1. Projekt Sunny Design

- **Nazwa:** `Nazwisko_SMA_Szczecin_Zadanie2`
- Projekt zapisany na platformie Sunny Design (udostępnij link lub eksportuj, jeśli dostępne)

## ✅ Kryteria oceny

Zadanie oceniane jest w skali 0-7 punktów (zaliczenie: minimum 4 punkty)

| Kryterium                         | Punkty  | Opis                                                                                     |
| --------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| **Kompletność projektu**  | 0-3 pkt | Czy projekt zawiera poprawną konfigurację (moduły, falowniki, stringi, powierzchnie)? |
| **Poprawność techniczna** | 0-3 pkt | Czy napięcia/prądy są w zakresach? Czy DC/AC ratio optymalne? Czy PR > 85%?           |
| **Analiza ekonomiczna**     | 0-1 pkt | Czy obliczono SPBT i przeanalizowano opłacalność?                                     |

## ❓ FAQ - Najczęściej zadawane pytania

### Problemy techniczne

**Q: Nie mogę znaleźć Szczecina w bazie Sunny Design. Co robić?**
A: Wpisz współrzędne GPS ręcznie: 53.43°N, 14.55°E. Sunny Design automatycznie pobierze dane meteorologiczne dla tej lokalizacji.

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
A: Dla Polski optymalny DC/AC ratio to **1.0-1.3**. Przy tym zakresie:

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

**Q: Co jeśli nie zmieszczę 112 modułów na 200 m² dachu?**
A: Sprawdź:

- Rozstaw rzędów - przy dachu płaskim i nachyleniu 15° potrzeba ~3.5-4 m między rzędami (aby uniknąć zacienienia)
- Strefy bezpieczeństwa - 1.0 m od krawędzi + korytarze serwisowe 1.2 m
- Efektywna powierzchnia: ~60-70% z 200 m² = 120-140 m² użytecznej powierzchni
- To powinno wystarczyć na 100-112 modułów (45-50 kWp)

Jeśli nie zmieścisz 112 modułów - zmniejsz do 96-100 modułów i dostosuj falowniki (np. 2× 20 kW zamiast 2× 25 kW).

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

1. ✅ Załóż konto na [SunnyDesignWeb.com](https://www.sunnydesignweb.com/sdweb#/)
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
