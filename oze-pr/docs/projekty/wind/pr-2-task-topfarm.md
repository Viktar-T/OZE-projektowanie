---
sidebar_position: 2
title: Zadanie 2 - Optymalizacja farmy wiatrowej w TopFarm2
---
# Zadanie 2: Optymalizacja farmy wiatrowej w TopFarm2

## 🎯 Cel zadania

Zapoznanie się z platformą webową **TopFarm2** firmy DTU Wind Energy i opanowanie procesu projektowania oraz optymalizacji farm wiatrowych z wykorzystaniem narzędzi online.

**Czas realizacji:** 4 godziny (2 zajęcia)

**Wymagania wstępne:**

- Dostęp do internetu i przeglądarki internetowej
- Podstawowa wiedza z wykładu o energetyce wiatrowej
- Wykonane Zadanie 1 (QBlade) - zalecane, ale nie obowiązkowe

## 🌐 Platforma TopFarm2

**TopFarm2** to darmowe narzędzie online opracowane przez DTU Wind Energy do projektowania i optymalizacji farm wiatrowych.

**Główne zalety:**

- ✅ Dostęp przez przeglądarkę - nie wymaga instalacji
- ✅ Całkowicie darmowe (wymagana rejestracja)
- ✅ Zaawansowana optymalizacja rozmieszczenia turbin
- ✅ Analiza wpływu wzajemnego oddziaływania turbin (wake effects)
- ✅ Obliczanie LCOE (Levelized Cost of Energy)
- ✅ Wizualizacja wyników i eksport danych

**Możliwości:**

- ✅ Optymalizacja rozmieszczenia turbin na farmie
- ✅ Analiza produkcji energii z uwzględnieniem wake effects
- ✅ Obliczanie kosztów i przychodów
- ✅ Porównywanie różnych konfiguracji farmy
- ✅ Eksport wyników do formatów analitycznych

## 📺 Materiały wprowadzające

**Aby zapoznać się z platformą, proszę zacząć od:**

- **[TopFarm2 Documentation](https://topfarm.pages.windenergy.dtu.dk/TopFarm2/)** - oficjalna dokumentacja platformy
- **[TopFarm2 User Guide](https://topfarm.pages.windenergy.dtu.dk/TopFarm2/#/guide)** - przewodnik użytkownika

:::tip Rejestracja

1. Przejdź na stronę: [https://topfarm.pages.windenergy.dtu.dk/TopFarm2/](https://topfarm.pages.windenergy.dtu.dk/TopFarm2/)
2. Kliknij "Sign Up" lub "Register" i utwórz darmowe konto
3. Potwierdź email i zaloguj się
4. Możesz rozpocząć projektowanie!

:::

## 📋 Specyfikacja zadania

### Dane projektowe

Zaprojektuj i zoptymalizuj farmę wiatrową o następujących parametrach:

#### Lokalizacja

- **Kraj:** Polska (lub wybierz lokalizację z dostępnych w TopFarm2)
- **Obszar:** Dowolny obszar o powierzchni 5-10 km²
- **Typ terenu:** Otwarty teren (rzadka zabudowa, pola, łąki)
- **Wysokość nad poziomem morza:** 50-200 m n.p.m.

#### Parametry farmy

- **Liczba turbin:** 10-20 turbin (wybierz wartość w tym zakresie)
- **Typ turbiny:** Wybierz z dostępnych w TopFarm2 (np. 3 MW, 5 MW)
- **Średnica wirnika:** Zgodna z wybranym typem turbiny
- **Wysokość piasty:** 80-120 m (dopasuj do typu turbiny)
- **Minimalna odległość między turbinami:** 5-7 × średnica wirnika (zgodnie z normami)

#### Warunki wiatrowe

- **Średnia prędkość wiatru:** 7-9 m/s (na wysokości piasty)
- **Kierunek wiatru dominujący:** Północny lub zachodni (dla Polski)
- **Rozkład kierunków wiatru:** Weibull (typowy dla terenu otwartego)
- **Turbulencja:** 10-15% (typowa dla terenu otwartego)

#### Cel optymalizacji

- **Maksymalizacja:** Produkcja energii (AEP - Annual Energy Production)
- **Minimalizacja:** LCOE (Levelized Cost of Energy)
- **Ograniczenia:** Minimalne odległości między turbinami, granice obszaru

## 📐 Kroki do wykonania

### Krok 1: Rejestracja i logowanie

- [ ] Przejdź na [https://topfarm.pages.windenergy.dtu.dk/TopFarm2/](https://topfarm.pages.windenergy.dtu.dk/TopFarm2/)
- [ ] Utwórz konto (jeśli jeszcze nie masz)
- [ ] Zaloguj się do platformy
- [ ] Zapoznaj się z interfejsem (Dashboard, Projects, Optimization)

### Krok 2: Utworzenie nowego projektu

- [ ] Kliknij **"New Project"** lub **"Create Project"**
- [ ] **Nazwa projektu:** `Nazwisko_TopFarm2_Farma_Zadanie2`
- [ ] **Typ projektu:** Wind Farm Layout Optimization
- [ ] **Project details:**
  - Nazwa farmy: Farma Wiatrowa [Twoje imię] w [Lokalizacja]
  - Opis: Projekt edukacyjny - optymalizacja farmy wiatrowej
  - Data utworzenia: [aktualna data]

### Krok 3: Konfiguracja lokalizacji i obszaru farmy

- [ ] **Location Settings:**
  - Wybierz **Poland** lub najbliższą dostępną lokalizację
  - Jeśli dostępne, wprowadź współrzędne geograficzne (latitude, longitude)
- [ ] **Farm Area:**
  - **Opcja A - Rysowanie obszaru:**
    - Użyj narzędzia do rysowania obszaru na mapie
    - Narysuj prostokąt lub wielokąt o powierzchni 5-10 km²
  - **Opcja B - Współrzędne:**
    - Wprowadź współrzędne narożników obszaru
    - Powierzchnia: minimum 5 km², maksimum 10 km²
- [ ] **Terrain:**
  - Typ terenu: Flat (płaski) lub Gentle slopes (łagodne zbocza)
  - Wysokość nad poziomem morza: 50-200 m
  - Roughness length: 0.03-0.1 m (typowe dla terenu otwartego)

:::info Uwaga
TopFarm2 może oferować różne opcje definiowania obszaru. Wybierz metodę dostępną w Twojej wersji platformy.
:::

### Krok 4: Wybór typu turbiny

- [ ] Przejdź do sekcji **"Turbine Selection"** lub **"Wind Turbine"**
- [ ] **Wybierz typ turbiny z dostępnych opcji:**
  - **Opcja A - Turbina 3 MW:**
    - Moc nominalna: 3 MW
    - Średnica wirnika: 100-120 m
    - Wysokość piasty: 80-100 m
  - **Opcja B - Turbina 5 MW:**
    - Moc nominalna: 5 MW
    - Średnica wirnika: 120-150 m
    - Wysokość piasty: 100-120 m
- [ ] **Sprawdź parametry turbiny:**
  - Power curve (charakterystyka mocy)
  - Thrust curve (charakterystyka siły ciągu)
  - Cut-in, rated, cut-out wind speeds
- [ ] **Uzasadnij wybór turbiny** w sprawozdaniu (stosunek mocy do kosztów, dostępność)

### Krok 5: Konfiguracja warunków wiatrowych

- [ ] Przejdź do sekcji **"Wind Conditions"** lub **"Wind Resource"**
- [ ] **Ustaw parametry wiatru:**
  - **Średnia prędkość wiatru:** 7-9 m/s (na wysokości piasty)
  - **Rozkład prędkości:** Weibull distribution
  - **Shape parameter (k):** 2.0-2.5 (typowe dla terenu otwartego)
  - **Scale parameter (A):** Dopasuj do średniej prędkości wiatru
- [ ] **Kierunek wiatru:**
  - **Rozkład kierunków:** Różnorodny (360°)
  - **Kierunek dominujący:** Północny (0°) lub zachodni (270°)
  - **Rozkład Weibull dla kierunków:** Jeśli dostępne, ustaw odpowiednie parametry
- [ ] **Turbulencja:**
  - **Turbulence intensity:** 10-15% (typowe dla terenu otwartego)
  - **Standard deviation:** Automatycznie obliczone z TI

:::tip Wskazówka
Jeśli TopFarm2 oferuje import danych wiatrowych (np. z Global Wind Atlas), możesz użyć rzeczywistych danych dla wybranej lokalizacji.
:::

### Krok 6: Wstępne rozmieszczenie turbin

- [ ] Przejdź do sekcji **"Layout"** lub **"Turbine Placement"**
- [ ] **Opcja A - Automatyczne rozmieszczenie:**
  - Kliknij "Auto Layout" lub "Grid Layout"
  - TopFarm2 automatycznie zaproponuje rozmieszczenie w siatce
- [ ] **Opcja B - Ręczne rozmieszczenie:**
  - Kliknij na mapie, aby dodać turbiny
  - Umieść 10-20 turbin w obszarze farmy
  - Zachowaj minimalne odległości (5-7 × średnica wirnika)
- [ ] **Weryfikuj rozmieszczenie:**
  - Sprawdź, czy wszystkie turbiny są w obszarze farmy
  - Sprawdź minimalne odległości między turbinami
  - Sprawdź, czy rozmieszczenie jest realistyczne

:::warning Uwaga
Minimalne odległości między turbinami są ważne dla:
- Redukcji wake effects (wzajemnego oddziaływania)
- Zgodności z normami i przepisami
- Optymalizacji produkcji energii
:::

### Krok 7: Konfiguracja optymalizacji

- [ ] Przejdź do sekcji **"Optimization"** lub **"Optimization Settings"**
- [ ] **Wybierz cel optymalizacji:**
  - **Primary objective:** Maksymalizacja AEP (Annual Energy Production)
  - **Secondary objective:** Minimalizacja LCOE (Levelized Cost of Energy)
- [ ] **Ustaw parametry optymalizacji:**
  - **Algorithm:** Wybierz dostępny algorytm (np. Genetic Algorithm, Particle Swarm)
  - **Number of iterations:** 50-100 (dla szybkiej optymalizacji) lub 200-500 (dla dokładnej)
  - **Convergence criteria:** 1-5% (zmiana celu między iteracjami)
- [ ] **Ograniczenia (Constraints):**
  - **Minimalna odległość:** 5-7 × średnica wirnika
  - **Granice obszaru:** Turbiny muszą być w obszarze farmy
  - **Maksymalna liczba turbin:** 20 (lub wybrana wartość)
- [ ] **Parametry kosztowe (jeśli dostępne):**
  - **Koszt turbiny:** Szacunkowo 1-1.5 mln EUR/MW
  - **Koszt infrastruktury:** 20-30% kosztu turbin
  - **Koszt operacyjny (O&M):** 2-3% kosztu inwestycji rocznie

### Krok 8: Uruchomienie optymalizacji

- [ ] **Przed uruchomieniem sprawdź:**
  - [ ] Czy wszystkie parametry są ustawione poprawnie
  - [ ] Czy rozmieszczenie turbin jest poprawne
  - [ ] Czy warunki wiatrowe są zdefiniowane
- [ ] **Uruchom optymalizację:**
  - Kliknij "Start Optimization" lub "Run Optimization"
  - Obserwuj postęp optymalizacji (jeśli dostępne)
  - Proces może trwać kilka do kilkunastu minut
- [ ] **Po zakończeniu:**
  - Sprawdź, czy optymalizacja zakończyła się sukcesem
  - Przeanalizuj nowe rozmieszczenie turbin
  - Porównaj z rozmieszczeniem początkowym

:::tip Wskazówka
Optymalizacja może zmienić pozycje turbin. Porównaj rozmieszczenie przed i po optymalizacji, aby zrozumieć wpływ algorytmu.
:::

### Krok 9: Analiza wyników

- [ ] **Przeanalizuj produkcję energii:**
  - **AEP (Annual Energy Production):** _____ MWh/rok
  - **AEP per turbine:** _____ MWh/rok/turbina
  - **Capacity factor:** _____ % (AEP / (moc_nominalna × 8760 h))
  - **Cel:** Capacity factor > 30-35% dla dobrej lokalizacji
- [ ] **Przeanalizuj wake effects:**
  - **Average wake loss:** _____ % (straty energii z powodu wzajemnego oddziaływania)
  - **Maximum wake loss:** _____ % (maksymalne straty dla pojedynczej turbiny)
  - **Wake loss distribution:** Sprawdź, które turbiny mają największe straty
- [ ] **Przeanalizuj LCOE:**
  - **LCOE:** _____ EUR/MWh lub PLN/MWh
  - **Breakdown costs:**
    - CAPEX (koszty inwestycyjne): _____ EUR/MW
    - OPEX (koszty operacyjne): _____ EUR/MW/rok
    - Total project cost: _____ EUR
- [ ] **Przeanalizuj rozmieszczenie:**
  - **Average spacing:** Średnia odległość między turbinami
  - **Spacing ratio:** Odległość / średnica wirnika
  - **Layout pattern:** Czy turbiny są rozmieszczone w siatce, czy nieregularnie?

### Krok 10: Wizualizacja wyników

- [ ] **Przeanalizuj wizualizacje:**
  - **Mapa farmy:** Rozmieszczenie turbin na obszarze
  - **Wake visualization:** Wizualizacja wake effects (jeśli dostępne)
  - **Power production map:** Rozkład produkcji energii (jeśli dostępne)
  - **Wind rose:** Rozkład kierunków wiatru
- [ ] **Eksportuj wykresy:**
  - Power curve farmy
  - Wake loss distribution
  - Cost breakdown
  - Layout optimization history (jeśli dostępne)

### Krok 11: Analiza wrażliwości (opcjonalnie)

- [ ] **Przetestuj różne scenariusze:**
  - **Scenariusz A:** Zmniejsz liczbę turbin (np. z 20 do 15)
  - **Scenariusz B:** Zwiększ średnią prędkość wiatru (np. z 7 do 9 m/s)
  - **Scenariusz C:** Zmień typ turbiny (np. z 3 MW na 5 MW)
- [ ] **Porównaj wyniki:**
  - Który scenariusz daje najlepszy LCOE?
  - Który scenariusz maksymalizuje AEP?
  - Jak zmienia się capacity factor?

### Krok 12: Eksport wyników i dokumentacja

- [ ] **Eksportuj dane:**
  - **Layout coordinates:** Współrzędne turbin (CSV lub Excel)
  - **Results summary:** Podsumowanie wyników (PDF lub Excel)
  - **Visualizations:** Wykresy i mapy (PNG lub PDF)
- [ ] **Zapisz projekt:**
  - Nazwa: `Nazwisko_TopFarm2_Farma_Zadanie2`
  - Projekt zapisany na platformie TopFarm2
- [ ] **Przygotuj dokumentację:**
  - Screenshoty kluczowych widoków
  - Tabele z wynikami
  - Wykresy i wizualizacje

## 📦 Wymagane pliki do oddania

### 1. Projekt TopFarm2

- **Nazwa:** `Nazwisko_TopFarm2_Farma_Zadanie2`
- Projekt zapisany na platformie TopFarm2 (udostępnij link lub eksportuj, jeśli dostępne)

### 2. Krótkie sprawozdanie (2-3 strony, format PDF)

**Nazwa:** `Nazwisko_TopFarm2_Farma_Zadanie2_Sprawozdanie.pdf`

Struktura sprawozdania:

#### Nagłówek

- Imię i nazwisko, nr albumu
- Data wykonania
- Tytuł: "Zadanie 2 - Optymalizacja farmy wiatrowej w TopFarm2"

#### 1. Dane wejściowe (0.5 strony)

Krótkie podsumowanie:

- Lokalizacja i obszar farmy
- Typ turbiny i parametry
- Warunki wiatrowe
- Liczba turbin i rozmieszczenie początkowe

#### 2. Wyniki optymalizacji (1 strona)

Tabela z kluczowymi wynikami:

| Parametr                    | Wartość | Jednostka | Uwagi           |
| --------------------------- | ------- | --------- | --------------- |
| Liczba turbin               | ___     | szt.      |                 |
| Moc zainstalowana           | ___     | MW        |                 |
| AEP (roczna produkcja)      | ___     | MWh/rok   |                 |
| AEP per turbine             | ___     | MWh/rok   |                 |
| Capacity factor             | ___     | %         |                 |
| Średnia odległość między turbinami | ___     | m         |                 |
| Spacing ratio               | ___     | -         |                 |
| Average wake loss           | ___     | %         |                 |
| LCOE                        | ___     | EUR/MWh   |                 |
| Total project cost          | ___     | EUR       |                 |

#### 3. Wykresy i wizualizacje (0.5 strony)

Dołącz następujące wykresy:

- **Mapa farmy** - rozmieszczenie turbin
- **Wake visualization** - wizualizacja wake effects (jeśli dostępne)
- **Power production** - rozkład produkcji energii
- **Cost breakdown** - struktura kosztów

#### 4. Wnioski i spostrzeżenia (0.5-1 strona)

Krótka refleksja (5-7 zdań na temat):

- Czy optymalizacja poprawiła wyniki w stosunku do rozmieszczenia początkowego?
- Jakie były główne wyzwania podczas projektowania?
- Co sprawiło największe trudności?
- Jakie funkcje TopFarm2 okazały się najbardziej pomocne?
- Jakie parametry wpłynęły najbardziej na LCOE i AEP?
- Co byś poprawił/zoptymalizował w przyszłości?

### 3. Zrzuty ekranu (opcjonalnie)

**Nazwa:** `Nazwisko_TopFarm2_Farma_Zadanie2_Screenshots.pdf`

- 3-5 kluczowych widoków z TopFarm2:
  - **Mapa farmy** - rozmieszczenie turbin
  - **Wyniki optymalizacji** - tabele i wykresy
  - **Wake visualization** - wizualizacja wake effects
  - **Cost analysis** - analiza kosztów
  - **Power production** - rozkład produkcji energii

### Forma oddania

- Wszystkie pliki w jednym archiwum ZIP
- **Nazwa archiwum:** `Nazwisko_Nr_albumu_Zadanie2_TopFarm2.zip`
- Upload na platformę e-learningową lub email prowadzącego

## ✅ Kryteria oceny

Zadanie oceniane jest w skali 0-10 punktów (zaliczenie: minimum 6 punktów)

| Kryterium                         | Punkty  | Opis                                                                                                              |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| **Kompletność projektu**  | 0-3 pkt | Czy projekt zawiera wszystkie wymagane elementy (lokalizacja, turbiny, optymalizacja, wyniki)?                 |
| **Poprawność techniczna** | 0-3 pkt | Czy parametry farmy są realistyczne? Czy wyniki są wiarygodne (AEP, LCOE, capacity factor)?                   |
| **Jakość dokumentacji**   | 0-2 pkt | Czy raport i sprawozdanie są kompletne, czytelne i profesjonalne?                                                |
| **Osiągnięcie celu**      | 0-2 pkt | Czy optymalizacja poprawiła wyniki? Czy projekt jest zoptymalizowany (capacity factor > 30%, rozsądny LCOE)? |

### Szczegóły punktacji

**Kompletność projektu (0-3 pkt):**

- 3 pkt: Wszystkie elementy wykonane zgodnie z instrukcją - lokalizacja, turbiny, optymalizacja, wyniki, dokumentacja
- 2 pkt: Większość elementów wykonana, drobne braki
- 1 pkt: Podstawowe elementy wykonane, znaczące braki
- 0 pkt: Projekt niekompletny lub nie oddany

**Poprawność techniczna (0-3 pkt):**

- 3 pkt: Parametry realistyczne, wyniki wiarygodne (capacity factor > 30%, rozsądny LCOE, wake losses < 15%)
- 2 pkt: Parametry w większości poprawne, drobne błędy
- 1 pkt: Parametry z błędami, wyniki niepewne
- 0 pkt: Poważne błędy techniczne, projekt nie działa

**Jakość dokumentacji (0-2 pkt):**

- 2 pkt: Raport i sprawozdanie kompletne, czytelne, profesjonalne
- 1 pkt: Dokumentacja niepełna lub niskiej jakości
- 0 pkt: Brak dokumentacji

**Osiągnięcie celu (0-2 pkt):**

- 2 pkt: Optymalizacja poprawiła wyniki, projekt zoptymalizowany (capacity factor > 30%, rozsądny LCOE)
- 1 pkt: Optymalizacja częściowo poprawiła wyniki, projekt akceptowalny
- 0 pkt: Cel nie osiągnięty

## ❓ FAQ - Najczęściej zadawane pytania

### Problemy techniczne

**Q: TopFarm2 nie ładuje się w mojej przeglądarce. Co robić?**
A: Sprawdź wymagania:
- **Przeglądarka:** Chrome, Firefox, Edge (najnowsze wersje)
- **JavaScript:** Musi być włączony
- **Cookies:** Muszą być dozwolone
- **Internet:** Stabilne połączenie internetowe
- Spróbuj wyczyścić cache przeglądarki (Ctrl+Shift+Delete)

**Q: Nie mogę utworzyć konta lub zalogować się.**
A: Sprawdź:
- Czy email jest poprawny i potwierdzony
- Czy hasło spełnia wymagania (min. 8 znaków, wielkie/małe litery, cyfry)
- Sprawdź folder spam, jeśli nie otrzymałeś emaila potwierdzającego
- Spróbuj zresetować hasło

**Q: Optymalizacja nie działa lub kończy się błędem.**
A: Najczęstsze przyczyny:
- Nieprawidłowa konfiguracja farmy (brak turbin, nieprawidłowy obszar)
- Błędne parametry warunków wiatrowych
- Zbyt mała liczba iteracji (zwiększ do 100-200)
- Zbyt restrykcyjne ograniczenia (np. zbyt duża minimalna odległość)
- Problemy z połączeniem internetowym (timeout)

**Q: Mój capacity factor jest bardzo niski (&lt;20%). Czy to źle?**
A: Tak, capacity factor powinien być > 30% dla dobrej lokalizacji. Przyczyny niskiego CF:
- Zbyt niska średnia prędkość wiatru (&lt;6 m/s)
- Zbyt duże wake losses (>20%)
- Nieprawidłowa konfiguracja turbiny
- Nieprawidłowe warunki wiatrowe

### Pytania projektowe

**Q: Jaką liczbę turbin wybrać?**
A: Zalecenia:
- **10-15 turbin:** Dla małych farm (30-75 MW)
- **15-20 turbin:** Dla średnich farm (45-100 MW)
- **20+ turbin:** Dla dużych farm (60+ MW)
- Wybierz liczbę w zależności od obszaru i celu projektu

**Q: Jaka minimalna odległość między turbinami jest optymalna?**
A: Typowe wartości:
- **Minimum:** 5 × średnica wirnika (dla redukcji wake effects)
- **Optymalna:** 7-10 × średnica wirnika (kompromis między produkcją a kosztami)
- **Maksymalna:** 15+ × średnica wirnika (dla minimalizacji wake effects, ale wyższe koszty infrastruktury)
- Dla tego zadania: 5-7 × średnica wirnika

**Q: Jak dobrać typ turbiny?**
A: Czynniki do rozważenia:
- **Moc nominalna:** 3-5 MW (typowe dla farm lądowych)
- **Średnica wirnika:** Większa średnica = wyższa produkcja, ale wyższe koszty
- **Wysokość piasty:** Wyższa piasta = lepsze warunki wiatrowe, ale wyższe koszty
- **Dostępność:** Sprawdź, jakie turbiny są dostępne w TopFarm2

**Q: Co to jest wake effect i jak go minimalizować?**
A: Wake effect to:
- **Definicja:** Zmniejszenie prędkości wiatru za turbiną z powodu zaburzenia przepływu
- **Wpływ:** Turbiny znajdujące się za innymi turbinami produkują mniej energii
- **Minimalizacja:**
  - Zwiększ odległości między turbinami (7-10 × średnica)
  - Optymalizuj rozmieszczenie (algorytmy optymalizacji)
  - Rozmieść turbiny prostopadle do dominującego kierunku wiatru
  - Użyj większych turbin (mniejsza liczba, większe odległości)

**Q: Jak interpretować LCOE?**
A: LCOE (Levelized Cost of Energy):
- **Definicja:** Średni koszt produkcji 1 MWh energii przez cały okres eksploatacji
- **Typowe wartości:**
  - Lądowe farmy wiatrowe: 40-60 EUR/MWh
  - Morskie farmy wiatrowe: 60-100 EUR/MWh
- **Składniki:**
  - CAPEX (koszty inwestycyjne)
  - OPEX (koszty operacyjne)
  - Produkcja energii (AEP)
  - Okres eksploatacji (zwykle 20-25 lat)

**Q: Czy muszę wykonać analizę wrażliwości?**
A: Nie jest to obowiązkowe, ale zalecane:
- Analiza wrażliwości pokazuje wpływ różnych parametrów na wyniki
- Pomaga zrozumieć, które parametry są najważniejsze
- Może być częścią wniosków w sprawozdaniu

## 💡 Wskazówki praktyczne

### Przed rozpoczęciem

1. ✅ Załóż konto na TopFarm2
2. ✅ Zapoznaj się z interfejsem (obejrzyj tutorial, jeśli dostępny)
3. ✅ Przygotuj notatnik do zapisywania parametrów projektu
4. ✅ Sprawdź wymagania przeglądarki (JavaScript, cookies)

### Podczas pracy

1. 💾 **TopFarm2 zapisuje automatycznie** - ale sprawdź, czy projekt jest na liście "My Projects"
2. 🔁 **Używaj funkcji "Duplicate"** - stwórz kopię przed dużymi zmianami
3. 📸 **Rób zrzuty ekranu** kluczowych widoków (mapa farmy, wyniki, wykresy)
4. ✅ **Sprawdzaj parametry na bieżąco** - czy są realistyczne
5. 🧪 **Testuj różne opcje** - zmiana konfiguracji zajmuje kilka minut
6. ⏱️ **Optymalizacja może trwać długo** - uruchom ją i poczekaj na wyniki

### Częste pułapki

- ❌ **Za mała odległość między turbinami** → duże wake losses, niska produkcja
- ❌ **Za duża liczba turbin na małym obszarze** → wysokie wake losses
- ❌ **Nieprawidłowe warunki wiatrowe** → nierealistyczne wyniki
- ❌ **Zbyt mała liczba iteracji optymalizacji** → nieoptymalne rozmieszczenie
- ❌ **Zapomnienie o ograniczeniach** → turbiny poza obszarem farmy

---

:::tip TopFarm2 vs QBlade - kiedy używać?

**TopFarm2 - używaj gdy:**

- ✅ Projektujesz farmę wiatrową (wiele turbin)
- ✅ Potrzebujesz optymalizacji rozmieszczenia turbin
- ✅ Chcesz analizować wake effects między turbinami
- ✅ Potrzebujesz obliczyć LCOE i koszty farmy
- ✅ Pracujesz z danymi wiatrowymi dla lokalizacji

**QBlade - używaj gdy:**

- ✅ Projektujesz pojedynczą turbinę (łopata, aerodynamika)
- ✅ Potrzebujesz szczegółowej analizy aerodynamicznej
- ✅ Chcesz zaprojektować geometrię łopaty
- ✅ Potrzebujesz analizy obciążeń strukturalnych
- ✅ Pracujesz z profilami aerodynamicznymi

**Najlepszy workflow profesjonalny:**

1. **Turbine design:** QBlade - projektowanie pojedynczej turbiny
2. **Farm layout:** TopFarm2 - optymalizacja rozmieszczenia wielu turbin
3. **Detailed analysis:** QBlade - szczegółowa analiza wybranych turbin w farmie

:::

---

**Powodzenia! 🌬️⚡**

*To zadanie pokazuje, jak nowoczesne narzędzia webowe demokratyzują dostęp do projektowania farm wiatrowych. TopFarm2 to doskonałe narzędzie dla początkujących projektantów i studentów - szybkie, darmowe i intuicyjne.*

**Termin oddania:** [Do uzupełnienia przez prowadzącego]

---

*Ostatnia aktualizacja: Październik 2025*

