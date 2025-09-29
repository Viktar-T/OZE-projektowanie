# Wykład 6: Biomasa i biogaz (2h)

> Kurs: **Programy komputerowe w projektowaniu instalacji OZE** (semestr 5)  
> Prowadzący: prof. (Twoje nazwisko)  
> Tryb: wykład + pokaz narzędzi (demo), studium przypadku

---

## Cele dydaktyczne
Po wykładzie student potrafi:
- rozróżnić typy instalacji bioenergetycznych i wskazać **jakie narzędzia programowe** wspierają ich projektowanie;
- zbudować i uruchomić **model procesowy** fermentacji beztlenowej (ADM1) w wybranym środowisku (SIMBA#, BioWin, GPS‑X/WEST);
- połączyć model procesowy z **analizą techno‑ekonomiczną i energetyczną** (RETScreen, HOMER Pro);
- przygotować **dane wejściowe** (charakterystyka substratów) i wykonać **kalibrację** modelu;
- zaprojektować prostą **architekturę cyfrową** projektu: przepływ danych → symulacja → optymalizacja → raportowanie.

---

## Spis treści
- [Wprowadzenie do instalacji biomasy i biogazu](./01-wprowadzenie-biomasa-biogaz.md)
- [Proces modelowania/projektowania instalacji biomasy i biogazu](./02-proces-modelowania.md)
- [Porównanie programów: SIMBA#, BioWin, GPS-X/WEST, RETScreen, HOMER Pro](./03-porownanie-programow.md)
- [SIMBA# lub BioWin - opis i znaczenie dla projektanta](./04-simba-biowin-znaczenie.md)
- [Proces modelowania/projektowania w wybranym programie](./05-proces-wybrany-program.md)

---

## 01-wprowadzenie-biomasa-biogaz.md

### 1. Kontekst projektowy (tylko tyle teorii, ile trzeba)
W bioenergetyce projektant operuje trzema głównymi blokami: **zasilanie** (substraty), **konwersja** (fermentacja, spalanie/zgazowanie, CHP/uzdatnianie), **wykorzystanie** (energia elektryczna, ciepło, biometan, poferment). Programy komputerowe mają wspierać **decyzje inżynierskie**: czy proces jest wykonalny, stabilny i opłacalny.

### 2. Co modelujemy i po co
- **Fermentacja beztlenowa (AD)**: bilans masy/energii, degradacja frakcji (węglowodany, białka, lipidy), produkcja biogazu (CH₄/CO₂), stabilność (pH, zasadowość, VFA/alkaliczność), inhibitory (NH₃, siarkowodór).
- **Linia gazowa**: bufor/pojemności gazu, pochodnia, **CHP** (sprawności, krzywe częściowego obciążenia), **uzdatnianie do biometanu** (PSA, membrany, woda), sprężanie, **włączenie do sieci** lub CNG.
- **Linia pofermentu**: separacja, higienizacja, odwadnianie, odzysk składników (N, P, K), emisje zapachowe.
- **Instalacje biomasy stałej**: kotły rusztowe/płynne złoże, ORC, układy hybrydowe biomasa‑PV‑pompy ciepła (tu wsparcie HOMER Pro).

### 3. Dane wejściowe w projektach bioenergetycznych (formaty i źródła)
- **Charakterystyka substratów**: TS/VS, **COD** (ChZT), frakcje biodegradowalne/obojętne, **C:N:P:S**, siarka, azot amonowy, metale ciężkie. Opcjonalnie: **BMP** (Biochemical Methane Potential).  
  _Formaty:_ CSV/XLSX; import do SIMBA#/BioWin/GPS‑X; w narzędziach ekonomicznych – RETScreen/HOMER – agregaty roczne/miesięczne.
- **Krzywe pracy CHP**: moc_e, moc_th, η_e, η_th vs. obciążenie.
- **Ceny/ taryfy**: energia kupno/sprzedaż, certyfikaty, koszty O&M, media (woda, ciepło).  
- **Warunki graniczne**: temperatura otoczenia, dostępność ciepła odpadowego, ograniczenia środowiskowe.

### 4. Architektura aplikacji w projektach bio
- **Warstwa procesowa (CAE)**: silniki modeli (ADM1, modyfikacje), integrator ODE/DAE.
- **Warstwa energetyczno‑ekonomiczna**: symulatory miksu energii, profili obciążenia (HOMER Pro), kalkulatory LCOE/NPV (RETScreen).
- **Warstwa danych**: arkusze (XLSX/CSV), **OPC UA** (laboratorium/SCADA), eksport wyników do **JSON**/**Excel**; współpraca między narzędziami przez **FMU/FMI** (jeśli dostępne) lub wymianę plikową.

### 5. Typowe wyjścia, które „chce zobaczyć” decydent
- Strumień biogazu [Nm³/h], udział CH₄ [%], produkcja energii [MWh/rok].
- Zapotrzebowanie ciepła i bilans cieplny fermentacji [kW].
- Stabilność: pH, VFA, NH₃, czas retencji HRT/SRT.
- CAPEX/OPEX, **LCOE/LCOH**, NPV/IRR, wrażliwość na cenę substratów i energii.

---

## 02-proces-modelowania.md

### Roadmapa projektowa (10 kroków)
1. **Definicja celu**: energia elektryczna vs. biometan; integracja z ciepłem odbiorcy.
2. **Zebranie danych**: substraty (TS/VS/COD, BMP), dostępność sezonowa, ceny; profile odbiorów.
3. **Wybór narzędzi**: proces (SIMBA#/BioWin/GPS‑X/WEST) + ekonomia/energetyka (RETScreen/HOMER Pro).
4. **Wybór modelu procesowego**: **ADM1**/wariant; zakres dynamiki (ustalony/dynamiczny).
5. **Budowa schematu**: zbiorniki przyjęcia, mieszanie, podgrzew, reaktor(y), magazyn gazu, CHP/uzdatnianie, poferment.
6. **Parametryzacja**: temperatura, HRT, ładunek organiczny (OLR), recyrkulacje, krzywe CHP.
7. **Kalibracja**: porównanie z danymi (laboratoryjnymi/pilotowymi), regulacja frakcji i stałych kinetycznych w granicach literatury.
8. **Analiza scenariuszy**: miks substratów, warianty temperatur (mezofil/termofil), odzysk ciepła, CHP vs. biometan, magazyn gazu.
9. **Optymalizacja**: dobór mocy CHP, objętości reaktorów, wielkości zbiornika gazu – iteracyjnie z HOMER Pro/RETScreen.
10. **Walidacja i raport**: sanity‑check bilansów, wykresy, wnioski, niepewności i ryzyka.

### Checklista danych minimalnych
- TS/VS i COD dla każdego substratu; gęstość; temperatura dopływu.
- Docelowy HRT [dni]; zakres obciążeń OLR [kgCOD/m³·d].
- Skład biogazu docelowy lub wymagany dla urządzeń.
- Krzywe sprawności CHP/uzdatniania; ceny nośników energii.

### Dobre praktyki modelowe
- **Normalizacja jednostek** (kg/d, m³/d, Nm³/h).  
- Start od **steady‑state**, potem przejście do dynamiki (scenariusze dobowo‑tygodniowe).  
- **Sensitivities**: ±10–20% na kluczowych parametrach (hydroliza, k_la, aktywność metanogenów).  
- Dokumentuj każdą zmianę parametrów i uzasadnienie (laboratorium/literatura).

---

## 03-porownanie-programow.md

### 1. Przegląd narzędzi
| Narzędzie | Klasa | Silnik/model | Mocne strony | Ograniczenia | Typowe zastosowanie |
|---|---|---|---|---|---|
| **SIMBA#** | CAE/Proces | Biblioteka procesowa z **ADM1**, obiekty kanalizacyjne, solver DAE | Elastyczne flowsheety, integracja sterowania, dobre narzędzia kalibracji | Krzywa nauki, licencja komercyjna | Oczyszczalnie + biogazownie, badania i wdrożenia |
| **BioWin** | CAE/Proces | Modele ściekowe + **ADM1**/warianty | Przyjazny interfejs, gotowe jednostki (digestery, CHP), raporty | Zamknięty ekosystem, ograniczona skryptowalność | Konsulting, szybkie studia wykonalności |
| **GPS‑X** | CAE/Proces | Zaawansowane modele ASM/ADM | Duża konfigurowalność, narzędzia identyfikacji parametrów | Wymaga doświadczenia w modelowaniu | Projekty R&D, kalibracje danych |
| **WEST** | CAE/Proces | Środowisko modelowe DHI z ADM1 | Modułowość, integracje hydrodynamiczne | Wysoki próg wejścia | Pilotaże, złożone sieci oczyszczania |
| **RETScreen** | TEA/Finanse | Arkuszowy kalkulator energii i finansów | Szybkie LCOE/NPV, biblioteki kosztów, scenariusze | Brak szczegółowej dynamiki procesu | Etap koncepcyjny, analiza biznesowa |
| **HOMER Pro** | Optymalizacja/EMS | Optymalizacja miksu źródeł i magazynów | Profilowanie obciążeń, dispatch, magazyny | Wymaga agregacji wyników z modeli procesowych | Hybrydy: biogaz‑PV‑wiatr‑magazyn‑CHP |

### 2. Kryteria wyboru
- **Poziom szczegółowości**: potrzebujesz dynamiki (VFA, pH) → SIMBA#/BioWin/GPS‑X/WEST; makro‑ekonomia → RETScreen; miks i sterowanie energią → HOMER Pro.
- **Integracje**: eksport do **CSV/XLSX**, skrypty (API), współpraca z SCADA (OPC UA) – ważne w projektach badawczych.
- **Licencje i koszty**: uczelniane vs. komercyjne; moduły dodatkowe (CHP, upgrading, odory).
- **Krzywa nauki**: dla szybkiego startu – BioWin; dla pełnej kontroli i sterowania – SIMBA#/WEST/GPS‑X.

### 3. Workflow między narzędziami (proponowany)
1) Model procesu (SIMBA#/BioWin) → 2) Profil produkcji gazu/energii (CSV) → 3) Optymalizacja miksu i magazynowania (HOMER Pro) → 4) TEA/finanse (RETScreen) → 5) Raport.

---

## 04-simba-biowin-znaczenie.md

### A. SIMBA# – dlaczego warto znać
- **Architektura**: edytor schematów procesowych (obiekty: reaktory, mieszalniki, rozdzielacze, zbiorniki gazu), solver ODE/DAE, biblioteka **ADM1** z rozszerzeniami.
- **Sterowanie i automatyka**: możliwość dodawania regulatorów PID, logiki (blokowo), testowanie strategii (np. kontrola temperatury, dozowania buforu alkalicznego).
- **Kalibracja**: kreatory dopasowania parametrów do danych pomiarowych; scenariusze dynamiczne (dobowe/sezonowe).
- **Raportowanie**: wykresy, eksport do CSV, gotowe szablony.
- **Zastosowanie w projektowaniu**: sizing reaktora (HRT), dobór mieszania i podgrzewu, **bufor gazu**, analiza stabilności (VFA/alkaliczność), łączenie z CHP/upgrading.

### B. BioWin – kiedy jest najlepszy
- **Szybki start**: biblioteka gotowych jednostek (digestery, odsiarczanie, CHP, separacja pofermentu) i przykładowe projekty.
- **Przyjazne GUI**: okna właściwości, szybkie przeliczenia stanu ustalonego i dynamiki.
- **Raporty i „bridge” do ekonomii**: podsumowania energii i masy, których wyniki łatwo przenieść do RETScreen.
- **Typowe zastosowania**: studia wykonalności, konsulting komunalny/rolniczy, edukacja – gdy liczy się czas i czytelność.

### C. SIMBA# vs. BioWin – podsumowanie wyboru
- **Elastyczność i sterowanie** → SIMBA#.  
- **Szybkość wdrożenia i raportowania** → BioWin.  
- Dla kursu: poznaj oba, ale **projekt zaliczeniowy** możesz zrealizować w jednym (wg preferencji).

---

## 05-proces-wybrany-program.md

> Poniżej szczegółowy **przewodnik krok‑po‑kroku**. Zakładamy wybór **BioWin** (analogicznie wykonasz to w SIMBA#; różnią się nazwy bloków i układ GUI).

### Krok 0. Nowy projekt i jednostki
- Ustaw jednostki (kg/d, m³/d, °C, Nm³/h) i strefę czasową. Zapisz szablon projektu.

### Krok 1. Definicja substratów
- Dla każdego substratu wprowadź: **TS**, **VS**, **COD**, frakcje (węglowodany/białka/lipidy), **C:N:P**, zawartość siarki i amoniaku. Jeśli masz **BMP**, użyj do weryfikacji frakcji biodegradowalnej.
- **Uwaga**: spójność masy – VS ~ frakcja biodegradowalna + obojętna; kontrola gęstości i suchej masy.

### Krok 2. Schemat instalacji
- Wstaw: zbiorniki przyjęcia (z mieszaniem), wymiennik ciepła/podgrzew, **reaktor(y) fermentacyjne** (mezofil/termofil), zbiornik gazu, pochodnię, **CHP** _lub_ moduł uzdatniania biogazu, linię pofermentu (separacja, magazyn).
- Zdefiniuj **recyrkulacje** (jeśli stosowane), dozowanie wodorotlenków/kwasów (stabilizacja pH).

### Krok 3. Parametry procesowe
- **Temperatura** (35–38°C mezofil lub 50–55°C termofil), **HRT** [dni], **OLR** docelowy [kgCOD/m³·d].
- Włącz monitorowanie: pH, VFA (octowy, propionowy), zasadowość, NH₃/NH₄⁺, siarkowodór.

### Krok 4. CHP / Upgrading
- Dla **CHP**: wprowadź krzywe sprawności η_e, η_th vs. obciążenie, limity start/stop, zapotrzebowanie ciepła procesu (ponowne sprzężenie do wymiennika).
- Dla **upgrading**: wybierz technologię (PSA/membrany), ustaw straty CH₄, zużycie energii elektrycznej, docelowe **Wobbe**/kaloryczność i ciśnienie.

### Krok 5. Inicjalizacja i obliczenia
- Uruchom **steady‑state** – sprawdź bilanse masy i energii, czy pH mieści się w 6.8–7.6, a VFA są niskie.  
- Przejdź do **dynamiki** – zasymuluj dobowe/tygodniowe wahania ładunku i temperatury; sprawdź bufor gazu i moc CHP.

### Krok 6. Kalibracja
- Jeśli masz dane z laboratoriów/pilotażu (produkty VFA, metan, pH, biogaz), użyj narzędzi dopasowania. Zmieniaj tylko **uzasadnione** parametry (np. frakcje szybko/wolno biodegradowalne, kinetyka hydrolizy) w akceptowalnych zakresach.

### Krok 7. Scenariusze i optymalizacja
- **Scenariusze**: miks substratów (gnojowica + kiszonka + odpady), mezofil vs. termofil, wielkość zbiornika gazu, CHP vs. upgrading, odzysk ciepła z CHP.  
- Eksport profilu mocy/biogazu do **HOMER Pro** (profil godzinowy) → dobór magazynu ciepła/energii i strategii pracy.  
- Podsumowania roczne (energia, paliwo, emisje) wprowadź do **RETScreen** → **NPV/IRR**, analiza wrażliwości (cena energii, substratów, certyfikatów).

### Krok 8. Walidacja jakości i raport
- Sprawdź:
  - Czy **OLR** jest w zakresie zaleceń dla danego reaktora?  
  - Czy stosunek **VFA/alkaliczność** nie przekracza progów ostrzegawczych?  
  - Czy poferment spełnia założenia dot. zagospodarowania?  
- Wygeneruj wykresy, tabele, podsumowania. Zapisz plik projektu i archiwum CSV wyników.

### Typowe pułapki i jak ich uniknąć
- **Niespójne dane substratów** → zawsze sprawdzaj relacje TS/VS/COD; użyj BMP do sanity‑check.  
- **Zbyt krótki HRT** → niestabilność, wzrost VFA; zwiększ HRT lub obniż OLR.  
- **Niedoszacowane ciepło procesu** → problemy zimą; konieczna weryfikacja bilansu cieplnego i izolacji.  
- **Brak bufora gazu** → częste start/stop CHP; dobierz magazyn gazu i strategię sterowania.

### Mini‑case (na zajęcia)
- Dane: gnojowica bydlęca (TS 8%, VS 80% TS, COD 120 kg/d), kiszonka kukurydzy (TS 33%, VS 95% TS, COD 220 kg/d). Cel: 250 kWe CHP, mezofil, odzysk ciepła procesu.  
- Zadania: (1) Skaluj reaktor do stabilnego HRT, (2) dobierz zbiornik gazu dla profilu dobowego, (3) porównaj CHP vs. upgrading pod kątem NPV (RETScreen).

---

## Materiały do samodzielnej pracy
- Krótki przewodnik: „Jak przygotować arkusz danych substratów do importu” (szablon CSV).
- Zestaw scenariuszy do przetestowania (miks substratów, temperatury, wielkości bufora gazu).
- Checklisty kontroli jakości modelu (bilans masy, stabilność, zgodność jednostek).

## Kryteria oceny aktywności (propozycja)
- Poprawność modelu i spójność danych (40%).  
- Analiza scenariuszy i uzasadnienie wyborów (30%).  
- Raport i wizualizacja wyników (20%).  
- Dyskusja zagrożeń i ryzyk (10%).

---

> **Uwaga organizacyjna**: Na ćwiczenia przygotujcie plik CSV z danymi dwóch substratów (TS/VS/COD, frakcje) oraz wybrane krzywe sprawności CHP. W trakcie zajęć każdy zespół zbuduje model w BioWin lub SIMBA# i przeprowadzi krótką analizę scenariuszową. 

