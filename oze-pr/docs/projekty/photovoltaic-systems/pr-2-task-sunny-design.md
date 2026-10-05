---
sidebar_position: 2
title: Zadanie 2 - Sunny Design Web
---
# Zadanie 2: Projektowanie PV z Sunny Design Web -- !!!Under construction!!!

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

**Dalej przejść do wideo:** ["Wprowadzenie do Sunny Design"](https://www.youtube.com/watch?v=VrMOGxwBKvA), ["Visual roof planning of a commercial PV plant"](https://youtu.be/9crKrWfw6l0).

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

#### Budynek i powierzchnie

**Typ dachu:** Dach płaski (flat roof)

**Powierzchnia użytkowa na dachu:** ~200 m²

**Parametry montażu:**

- **Orientacja systemów:** Azymut 0° (południe)
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

- **Docelowa moc instalacji:** 15-25 kWp
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
  - Wybierz **Poland → Szczecin** 
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
- [ ] **Visual roof planning:**

  - Użyj funkcji **"Visual roof planning"** (wizualne planowanie dachu) do rozmieszczenia modułów na dachu komercyjnej instalacji PV
  - Funkcja pozwala na precyzyjne pozycjonowanie modułów i wizualizację układu
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

  - Cel: 40 modułów × 400-450 Wp = 16-18 kWp
  - Uwaga: Jeśli nie zmieści się 40, można zmniejszyć liczbę modułów (np. do 32–36) i odpowiednio dobrać falownik

### Krok 6: Dobór falownika SMA

- [ ] Przejdź do sekcji **"Inverters"**
- [ ] **Oblicz wymaganą moc AC:**

  - Moc DC: ~18 kWp (szacowana dla 40 modułów × 450 Wp)
  - DC/AC ratio: 1.0-1.2 (docelowe dla Polski)
  - Moc AC: 18 kWp (wybieramy 1× 20 kW = 20 kW AC)
- [ ] **Warianty do rozważenia:**

**Wariant A: Jeden falownik (zalecany)**

- SMA Sunny Tripower **20000TL-30** (20 kW)
- Zalety: prostota, niższy koszt, łatwiejsza instalacja
- Wady: single point of failure

**Wariant B: Dwa mniejsze falowniki**

- 2× SMA Sunny Tripower **10000TL** (2× 10 kW = 20 kW AC)
- Zalety: redundancja, elastyczność serwisowa
- Wady: więcej okablowania AC

- [ ] **Dla tego zadania wybierz Wariant A** (1× 20 kW)

  - Najlepszy stosunek kosztów do funkcjonalności dla małej instalacji
- [ ] Sprawdź parametry wybranego falownika:

  - Max DC voltage: ~1000-1100 V (zgodnie z normą IEC 61853)
  - MPPT voltage range: 200-800 V (zakres pracy MPPT)
  - Vmpp range: 320-800 V (optimalny zakres pracy)
  - Number of MPPT trackers: 2 per inverter (łącznie 2 MPPT)
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

  - [ ] Sprawdź liczbę modułów w stringu: 10-12 modułów optymalne (dla modułów 450 Wp)
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

Dla 12 modułów: 12 × 56.2 V = 674 V < 1000 V ✅
Dla 10 modułów: 10 × 56.2 V = 562 V < 1000 V ✅ (bezpieczniejszy wariant)
```

**Vmpp latem (+35°C):**

```
Vmpp_max = Vmpp_STC × (1 + temp_coeff_Vmpp × ΔT)
Gdzie: ΔT = 35 - 25 = +10°C
Temp_coeff_Vmpp ≈ -0.0035 /°C

Vmpp_max = 41.5 × (1 + (-0.0035) × 10) = 41.5 × 0.965 ≈ 40 V (jeden moduł)

Dla 12 modułów: 12 × 40 V = 480 V (w zakresie MPPT 320-800V) ✅
Dla 10 modułów: 10 × 40 V = 400 V (w zakresie MPPT 320-800V) ✅
```

:::

### Krok 8: Ręczna optymalizacja stringów (opcjonalnie)

Jeśli automatyczna konfiguracja nie jest optymalna, możesz ręcznie dostosować:

  - [ ] **Wyrównanie obciążenia MPPT:**

  - Każdy MPPT tracker powinien mieć podobną moc
  - Przykład: 2 MPPT × 9 kWp każdy = 18 kWp łącznie
- [ ] **Konfiguracja stringów:**

  - MPPT 1: 2 stringi × 10 modułów = 20 modułów × 450 Wp = 9.0 kWp
  - MPPT 2: 2 stringi × 10 modułów = 20 modułów × 450 Wp = 9.0 kWp
  - **Łącznie:** 4 stringi × 10 modułów = 40 modułów × 450 Wp = **18.0 kWp DC**
- [ ] **Przelicz DC/AC ratio:**

  - DC/AC = 18.0 kWp / 20 kW = **0.9** ✅ (poniżej zakresu 1.0-1.3, ale bezpieczne)

:::tip Optymalizacja
DC/AC ratio 1.0-1.3 jest optymalne dla Polski. Przy DC/AC = 0.9 nie ma strat clippingowych, ale falownik może być niedowykorzystany w słoneczne dni. To akceptowalny kompromis dla małych instalacji.
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

  - Oczekiwana wartość: 17 000-19 000 kWh/rok (dla 18.0 kWp w Szczecinie)
  - Specific yield: ~950-1030 kWh/kWp/rok
- [ ] **Monthly distribution:**

  - Czerwiec-Lipiec: najwyższa produkcja (~2200-2500 kWh/mc dla 18.0 kWp)
  - Grudzień-Styczeń: najniższa produkcja (~400-650 kWh/mc dla 18.0 kWp)

#### Autokonsumpcja

- [ ] **Self-consumption rate:** _____ %

  - Jaki procent wyprodukowanej energii jest użyty lokalnie
  - Dla budynku komercyjnego (dni robocze): oczekiwane 30-40%
- [ ] **Self-sufficiency rate:** _____ %

  - Jaki procent zapotrzebowania pokrywa PV
  - Dla tego projektu: ~50-55% (35 000 kWh zapotrzebowania / 18 000 kWh produkcji)

#### Wskaźniki techniczne

- [ ] **Performance Ratio (PR):** _____ %

  - Cel: > 85%
- [ ] **DC/AC ratio:** _____ (poniżej 1.0-1.3, ale bezpieczne)
- [ ] **Inverter loading:** _____ %

  - Maksymalne obciążenie falownika (przy DC/AC = 0.9 osiągnie ~90% w słoneczne dni)
- [ ] **Clipping losses:** _____ kWh/rok (_____ %)

  - Przy DC/AC = 0.9 oczekuj 0% strat clippingowych (brak clipping)
  - To akceptowalne (ekonomiczny trade-off)

### Krok 11: Analiza ekonomiczna (uproszczona)

- [ ] Przejdź do sekcji **"Economics"** (jeśli dostępna)
- [ ] **Wprowadź parametry finansowe:**

**Investment costs (koszty inwestycyjne):**

- Moduły: 40 × 700 zł = 28 000 zł
- Falownik: 1 × 12 000 zł = 12 000 zł
- System montażowy (balast): 12 000 zł
- Okablowanie DC/AC + zabezpieczenia: 8 000 zł
- Instalacja i uruchomienie: 15 000 zł
- **Koszt całkowity:** ~75 000 zł (netto)
- **Koszt jednostkowy:** ~4170 zł/kWp

**Operational costs (koszty eksploatacji):**

- Roczne koszty serwisu: 1000 zł/rok
- Ubezpieczenie: 400 zł/rok
- Mycie paneli (co 2 lata): 500 zł
- **Łącznie:** ~1500 zł/rok (wzrost 3% rocznie)

**Energy tariffs (taryfy energii):**

- Koszt zakupu energii z sieci: 0.75 zł/kWh (budynek komercyjny, taryfa C11)
- Cena sprzedaży energii (feed-in): 0.50 zł/kWh (szacunkowa)
- Wzrost cen energii: 7% rocznie (konserwatywnie)

**Obliczenia oszczędności:**

- Autokonsumpcja: 35% × 18 000 kWh = 6 300 kWh/rok
- Oszczędność na autokonsumpcji: 6 300 kWh × 0.75 zł = 4 725 zł/rok
- Sprzedaż nadwyżek: 65% × 18 000 kWh = 11 700 kWh × 0.50 zł = 5 850 zł/rok
- **Roczne przychody:** ~10 575 zł/rok (brutto, przed kosztami eksploatacji)
- **Roczny zysk netto:** ~9 075 zł/rok

**Prosty okres zwrotu (SPBT):**

- SPBT = 75 000 zł / 9 075 zł/rok ≈ **8.3 lata**

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


**Q: Sunny Design pokazuje ostrzeżenie "Voltage out of range". Co to znaczy?**
A: Napięcia stringów są poza zakresem falownika. Najczęstsze rozwiązania:

- **Voc > Vmax DC:** Zmniejsz liczbę modułów w stringu (np. z 12 do 10)
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

DC/AC = 0.9 (jak w naszym projekcie) jest bezpieczniejsze - brak strat clippingowych, ale falownik może być niedowykorzystany w słoneczne dni. To akceptowalne dla małych instalacji.

DC/AC > 1.3 może być sensowne w regionach z niższym nasłonecznieniem lub gdy chcesz maksymalizować energię zimą.

**Q: Dlaczego wybieramy falowniki SMA w Sunny Design?**
A: Sunny Design jest narzędziem SMA, więc:

- Najlepsza integracja z falownikami SMA
- Automatyczna walidacja parametrów elektrycznych
- Baza danych SMA jest zawsze aktualna
- Możesz dodawać inne marki, ale workflow jest wolniejszy

**Q: Co jeśli nie zmieszczę 40 modułów na 200 m² dachu?**
A: Sprawdź:

- Rozstaw rzędów - przy dachu płaskim i nachyleniu 15° potrzeba ~3.5-4 m między rzędami (aby uniknąć zacienienia)
- Strefy bezpieczeństwa - 1.0 m od krawędzi + korytarze serwisowe 1.2 m
- Efektywna powierzchnia: ~60-70% z 200 m² = 120-140 m² użytecznej powierzchni
- To powinno wystarczyć na 40-50 modułów (18-22 kWp)

Jeśli nie zmieścisz 40 modułów - zmniejsz do 32-36 modułów i dostosuj falownik (np. 1× 15 kW zamiast 1× 20 kW).

**Q: Jak dodać korytarze serwisowe (service corridors)?**
A: W Sunny Design:

1. W sekcji "Roof Design" znajdź opcję "Service Corridors" lub "Access Paths"
2. Ustaw szerokość: 1.2 m (wymagane przepisami p.poż.)
3. Rozmieszczenie: co 15-20 m (zależy od przepisów lokalnych)
4. Sunny Design automatycznie wykluczy te obszary z montażu modułów

**Q: Czy muszę robić analizę ekonomiczną?**
A: Tak, to część zadania (1 punkt). Nie musisz być bardzo dokładny - wystarczą szacunkowe koszty i taryfy. Najważniejsze to:

- Oszacować koszt systemu (~4000-4500 zł/kWp dla instalacji komercyjnych)
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
