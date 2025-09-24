Wykład 2: Systemy fotowoltaiczne (PV) - Programy komputerowe w projektowaniu instalacji OZE
Wprowadzenie do procesu projektowania systemów PV
Projektowanie systemów fotowoltaicznych stanowi złożony proces inżynierski wymagający zastosowania specjalistycznego oprogramowania. Proces ten obejmuje modelowanie energetyczne, symulację produkcji, optymalizację konfiguracji oraz analizę ekonomiczną systemu.

W zależności od typu instalacji - od małych systemów dachowych do wielkich elektrowni słonecznych - projektant musi uwzględnić parametry takie jak: nasłonecznienie lokalizacji, orientację i kąt nachylenia modułów, wpływ zacienienia oraz charakterystyki techniczne komponentów. Współczesne narzędzia programowe umożliwiają przeprowadzenie symulacji godzinowej przez cały rok, zapewniając dokładność niezbędną do prawidłowego wymiarowania systemu.

Przegląd dostępnych programów dla systemów PV
1. PV*SOL (Valentin Software)
PV*SOL to program firmy Dr. Valentin EnergieSoftware, dostępny w trzech wersjach: Basic, Advanced i Premium. Oprogramowanie umożliwia:

Symulację dynamiczną systemów z rozdzielczością godzinową

Automatyczne wyznaczanie optymalnej konfiguracji falowników

Projektowanie systemów z magazynami energii i pojazdami elektrycznymi

Wizualizację 3D (w wersji Premium) z analizą zacienienia

Obliczenia ekonomiczne z uwzględnieniem taryf i dotacji

Program bazuje na algorytmach obliczeniowych uwzględniających model temperaturowy modułów PV, charakterystyki I-V oraz sprawności falowników. Obsługuje bazę danych zawierającą ponad 26 000 modułów PV i 7 500 falowników.

2. Sunny Design (SMA Solar Technology)
Sunny Design to darmowe narzędzie online firmy SMA, oferowane w trzech wariantach:

Funkcjonalność podstawowa:

Projektowanie systemów PV on-grid i off-grid

Wizualną planowanie dachów z analizą zacienienia

Symulacja systemów hybrydowych PV z jednostkami kogeneracyjnymi

Sunny Design PRO:

Planowanie sektorowych systemów energetycznych

Zaawansowane zarządzanie taryfami

Szczegółowa analiza profilu obciążenia i konsumpcji

Planowanie stacji ładowania pojazdów elektrycznych

Program charakteryzuje się intuicyjnym interfejsem i integracją z ekosystemem produktów SMA.

3. PVsyst (University of Geneva)
PVsyst uznawany jest za standard w projektowaniu profesjonalnym systemów PV. Program oferuje:

Szczegółowe modelowanie wszystkich aspektów systemu PV

Zaawansowane algorytmy obliczania strat systemowych

Narzędzie 3D do symulacji zacienienia bliskiego

Import danych meteorologicznych z wielu źródeł (PVGIS, NASA, Meteonorm)

Analizę ekonomiczną z okresami zwrotu inwestycji

PVsyst wykorzystuje modele fizyczne do symulacji zachowania ogniw i modułów w funkcji napromieniowania, temperatury i zacienienia.

4. Aurora Solar
Aurora Solar to platforma chmurowa zaprojektowana dla rynku amerykańskiego. Kluczowe funkcje:

Projektowanie zdalne bez konieczności wizyt na miejscu

Analiza zacienienia oparta na danych LIDAR

Modelowanie 3D wspomagane AI

Narzędzia sprzedażowe i finansowe

Automatyzacja procesów projektowych

Aurora Solar obsługuje 90% wiodących firm solarnych w USA i znajduje zastosowanie głównie w projektach residencjalnych i komercyjnych.

5. PVGIS (European Commission)
PVGIS (Photovoltaic Geographical Information System) to bezpłatne narzędzie online:

Kalkulacja produkcji energii PV dla dowolnej lokalizacji na świecie

Dane o promieniowaniu słonecznym z baz satelitarnych

Opcje dla systemów stacjonarnych i śledzących

Eksport wyników w formatach CSV, PDF

API do integracji z innymi aplikacjami

PVGIS wykorzystuje dane meteorologiczne z okresu 1985-2004 (dla regionu śródziemnomorskiego) oraz 1981-1990 (dla Europy).

Szczegółowy fokus: PV*SOL - opis i znaczenie programu dla projektanta
PV*SOL reprezentuje kompleksowe podejście do projektowania systemów fotowoltaicznych, łącząc zaawansowane algorytmy obliczeniowe z intuicyjnym interfejsem użytkownika.

Architektura obliczeniowa
Program implementuje model dynamiczny temperatury modułów, uwzględniający:

Rodzaj instalacji (wolnostojąca, zintegrowana dachowo, montaż dachowy)

Prędkość wiatru na wysokości instalacji

Współczynniki promieniowania i konwekcji

Równanie bilansu cieplnego rozwiązywane jest metodami numerycznymi z krokiem czasowym dostosowanym do warunków (nawet kilka minut dla skrajnych przypadków).

Modelowanie falowników
PV*SOL implementuje szczegółowe modelowanie charakterystyk falowników, uwzględniając:

Względną charakterystykę sprawności η_rel(P_DC)

Śledzenie punktu maksymalnej mocy (MPPT)

Pobór mocy w trybie standby i nocnym

Próg mocy włączenia falownika

Dla każdego kroku obliczeniowego program weryfikuje, czy napięcie MPP modułów mieści się w zakresie pracy trackera MPP falownika.

Baza danych i aktualizacje
Program zawiera rozbudowaną bazę komponentów:

Ponad 21 000 modułów PV

5 100 falowników

1 900 systemów baterii

Optymalizatory mocy i pojazdy elektryczne

Dane są regularnie aktualizowane przez producentów, zapewniając dostęp do najnowszych specyfikacji technicznych.

Szczegółowy fokus: Sunny Design - opis i znaczenie programu dla projektanta
Sunny Design stanowi narzędzie strategiczne dla projektantów systemu PV, szczególnie w kontekście integracji z produktami SMA.

Środowisko projektowe
Program oferuje zintegrowane środowisko projektowe:

Tryb szybkiego projektowania - system w kilku krokach

Szczegółowy tryb z zaawansowanymi opcjami

Wizualne planowanie dachów 2D/3D

Import zdjęć i modeli 3D

Funkcje specjalizowane
Zarządzanie projektami:

Współpraca zespołowa na projektach

Role i uprawnienia użytkowników

Zarządzanie dostępem do projektów

Personalizacja dokumentacji projektowej

Analiza techniczna:

Symulacja ładowania pojazdów elektrycznych z optymalizacją PV

Import szeregów czasowych dla cen energii dynamicznych

Analiza P-Q dla systemów magazynowania

Integracja z ekosystemem SMA
Sunny Design umożliwia eksport konfiguracji bezpośrednio do SMA Data Manager, usprawniając proces uruchomienia systemu. Program automatycznie proponuje komponenty SMA optymalne dla danego projektu.

Proces modelowania/projektowania w PV*SOL - schemat kroków
Proces projektowania w PV*SOL przebiega zgodnie z ustaloną sekwencją kroków:

1. Definicja danych projektu
Lokalizacja geograficzna (współrzędne, strefa czasowa)

Wybór danych klimatycznych (Meteonorm, PVGIS, własne pomiary)

Typ systemu (grid-tied, off-grid, z magazynem)

2. Parametry środowiskowe
Selekcja danych meteorologicznych z bazy lub import własnych

Definicja profilu obciążenia elektroenergetycznego

Ustawienia taryf energetycznych

3. Konfiguracja modułów PV
Wybór modułów z bazy danych lub definicja własnych

Określenie powierzchni/liczby modułów

Parametry instalacji: orientacja, nachylenie, typ montażu

Analiza zacienienia (jeśli dotyczy)

4. Dobór i konfiguracja falowników
Automatyczny dobór falowników przez algorytm optymalizacyjny

Ręczna konfiguracja (jeśli wymagana)

Weryfikacja parametrów technicznych (napięcie, prąd, moc)

5. Okablowanie i straty
Definicja okablowania DC i AC

Obliczanie strat przewodnictwa

Zabezpieczenia elektryczne

6. Analiza ekonomiczna
Koszty inwestycyjne i operacyjne

Taryfy i dotacje

Obliczenie parametrów ekonomicznych (NPV, okres zwrotu)

7. Symulacja i wyniki
Symulacja godzinowa przez rok

Analiza bilansu energetycznego

Generowanie raportów projektowych

Proces modelowania/projektowania w Sunny Design - schemat kroków
Sunny Design implementuje usprawniony workflow projektowy:

1. Szybkie projektowanie
Wprowadzenie lokalizacji (mapa interaktywna)

Podstawowe parametry systemu

Automatyczny dobór komponentów SMA

Wstępne wyniki i oszacowania

2. Planowanie wizualne
Import lub rysowanie konturu dachu

Automatyczne rozmieszczenie modułów

Analiza zacienienia w 3D

Optymalizacja układu stringów

3. Konfiguracja szczegółowa
Dobór precyzyjny falowników i modułów

Definicja okablowania

Ustawienia systemu magazynowania (jeśli dotyczy)

4. Symulacja energetyczna
Obliczenia rocznej produkcji energii

Analiza własnego zużycia

Symulacja pracy magazynów energii

5. Analiza ekonomiczna
Szczegółowe kalkulacje finansowe

Uwzględnienie taryf lokalnych

Prognozy rentowności

6. Dokumentacja projektowa
Generowanie raportów profesjonalnych

Eksport schematów technicznych

Przygotowanie dokumentacji dla klienta

Demonstracja na żywo: funkcjonalności programów
PV*SOL - kluczowe operacje
Uruchomienie projektu:

Menu File → New Project - wybór typu systemu

Project Data - wprowadzenie lokalizacji i danych klimatycznych

System Type - definicja konfiguracji podstawowej

Proces projektowy:

PV Modules - definicja powierzchni modułów z wizualizacją

Inverters - automatyczna konfiguracja z weryfikacją parametrów

Simulation - uruchomienie obliczeń z monitorowaniem postępu

Results - analiza wyników z eksportem danych

Sunny Design - workflow praktyczny
Rozpoczęcie pracy:

Rejestracja/logowanie na platformie web

New Project - wybór typu instalacji

Location Selection - interaktywna mapa z danymi klimatycznymi

Projektowanie systemu:

Visual Planning - rysowanie/import konturu dachu

Component Selection - automatyczne propozycje SMA

System Configuration - weryfikacja i optymalizacja

Results & Documentation - generowanie raportów

Podsumowanie
Programy do projektowania systemów fotowoltaicznych stanowią niezbędne narzędzia inżynierskie, umożliwiające profesjonalne modelowanie i optymalizację instalacji PV. PV*SOL wyróżnia się zaawansowanymi algorytmami obliczeniowymi i szczegółową analizą techniczną, podczas gdy Sunny Design oferuje intuicyjne środowisko projektowe z doskonałą integracją produktów SMA.

Wybór odpowiedniego narzędzia zależy od specyfiki projektów, wymagań technicznych oraz preferencji użytkownika. Oba programy zapewniają wysoką dokładność symulacji i profesjonalną dokumentację, stanowiąc podstawę nowoczesnego projektowania systemów fotowoltaicznych.