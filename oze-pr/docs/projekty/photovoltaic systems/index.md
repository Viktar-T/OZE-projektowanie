---
sidebar_position: 2
title: Projekt - Systemy fotowoltaiczne
---

# Projekt - Projektowanie domowej instalacji PV w PV*SOL premium

## 🎯 Cel projektu

**Czas realizacji:** 6 godzin zajęć laboratoryjnych + praca własna

Celem projektu jest kompleksowe zaprojektowanie rzeczywistej instalacji fotowoltaicznej dla domu jednorodzinnego z wykorzystaniem profesjonalnego oprogramowania PV*SOL premium. Projekt ma na celu praktyczne zastosowanie wiedzy z zakresu:
- Analizy zasobów słonecznych i warunków lokalnych
- Modelowania 3D geometrii i przeszkód
- Doboru komponentów systemu PV (moduły, falowniki)
- Projektowania elektrycznego (stringi, okablowanie)
- Symulacji energetycznej i analizy strat
- Optymalizacji techniczno-ekonomicznej
- Przygotowania dokumentacji projektowej

## 📋 Scenariusz projektowy

### Dane inwestora

**Pan/Pani [Imię Nazwisko]** planuje zainstalowanie systemu fotowoltaicznego na swoim domu jednorodzinnym. Jako projektant systemów OZE otrzymujesz zlecenie przygotowania kompletnego projektu technicznego.

### Lokalizacja i dane klimatyczne

**Lokalizacja projektu:** Szczecin lub okolice (północno-zachodni region Polski, klimat nadmorski)

**Wymagania dotyczące danych meteorologicznych:**
- Użyj danych meteorologicznych Meteonorm z bazy PV*SOL premium (dane horyzontalne i rozproszone)
- PV*SOL premium zawiera zintegrowaną bazę Meteonorm z wieloletnimi danymi klimatycznymi
- Uwzględnij zakres temperatur charakterystyczny dla regionu szczecińskiego:
  - **Temperatura minimalna:** -15°C do -20°C (dla obliczeń napięć zimowych)
  - **Temperatura maksymalna:** +35°C do +40°C na powierzchni modułu (dla obliczeń napięć letnich)
- Dane o nasłonecznieniu: typowo 950-1050 kWh/m²/rok dla regionu Szczecina

### Charakterystyka budynku

**Dom jednorodzinny:**
- **Typ dachu**: Do wyboru - dach dwuspadowy LUB dach płaski
- **Powierzchnia dostępna**: 40-60 m² (dach dwuspadowy) lub 50-80 m² (dach płaski)
- **Nachylenie**: 
  - Dach dwuspadowy: 30-45° (wybierz charakterystyczne dla regionu)
  - Dach płaski: montaż na stelażach, optymalizacja kąta nachylenia
- **Azymut**: Dowolny, ale uzasadnij wybór (południe optymalne, wschód-zachód dopuszczalne)
- **Przeszkody**: 
  - Co najmniej 2-3 przeszkody (np. komin, antena, okno połaciowe, drzewo)
  - Horyzont terenowy (jeśli istotny)
  - Sąsiednie budynki lub drzewa rzucające cień

### Profil energetyczny gospodarstwa

**Roczne zużycie energii:** 3500-4500 kWh/rok

**Charakterystyka odbiorcy:**
- Rodzina 3-4 osobowa
- Standardowe zużycie: oświetlenie, AGD, elektronika
- Profil zużycia: typowy dla gospodarstwa domowego (większe zużycie wieczorem i w weekendy)
- Dostęp do sieci: TAK (system on-grid)

**Cel inwestycji:**
- Maksymalizacja autokonsumpcji energii
- Redukcja rachunków za energię elektryczną
- Cel pokrycia: 70-90% rocznego zapotrzebowania
- Opcjonalnie: rozważenie magazynu energii (w ramach wariantu rozszerzonego)

## 📐 Wymagania techniczne projektu

### 1. Założenia projektowe

**Moc instalacji:**
- Docelowa moc: **8-12 kWp** (dostosuj do dostępnej powierzchni)
- Minimalna moc: 8 kWp
- Maksymalna moc: 12 kWp

**Wybór technologii:**
- **Moduły PV**: 
  - Moc jednostkowa: 350-450 Wp
  - Technologia: monokrystaliczna lub heterozłączowa (HJT)
  - Sprawność: minimum 20%
  - Certyfikaty: IEC 61215, IEC 61730
  - Współczynniki temperaturowe: sprawdź w karcie katalogowej
  
- **Falownik**:
  - Typ: falownik jednofazowy lub trójfazowy (uzasadnij wybór)
  - Liczba faz: dopasuj do instalacji elektrycznej budynku
  - Liczba MPPT: minimum 2 (zalecane dla różnych orientacji/nachyleń)
  - Certyfikaty: zgodność z normami polskimi i europejskimi
  - Sprawność europejska: > 96%

### 2. Proces projektowania (12 kroków)

Twój projekt musi przejść przez wszystkie kroki procesu projektowego przedstawione na wykładzie:

#### Krok 1: Utworzenie projektu
- Nazwa projektu: `[Nazwisko]_PV_[Miejscowość]`
- Lokalizacja geograficzna (współrzędne)
- Wybór danych meteorologicznych
- Ustawienie strefy czasowej
- **Temperatury ekstremalne** (krytyczne dla obliczeń elektrycznych!)

#### Krok 2: Geometria 3D/2D
- Modelowanie dachu lub terenu
- Dokładne wymiary (długość, szerokość, wysokość budynku)
- Kąty nachylenia i azymut
- Strefy bezpieczeństwa od krawędzi (minimum 30-50 cm)
- Korytarze serwisowe (jeśli wymagane)

#### Krok 3: Przeszkody i zacienienie
- Modelowanie minimum 2-3 przeszkód (kominy, anteny, okna)
- Horyzont terenowy (jeśli istotny)
- Sąsiednie budynki lub drzewa
- **Ustawienie siatki zacienienia**: średnia lub wysoka przy złożonych scenach
- Analiza wzajemnego zacieniania (dla dachu płaskiego)

#### Krok 4: Wybór modułu PV
- Wyszukanie w bibliotece PV*SOL lub dodanie własnego
- Weryfikacja parametrów z kartą katalogową producenta:
  - Pmpp, Vmpp, Impp, Voc, Isc
  - Współczynniki temperaturowe (αVoc, βVoc, γPmpp)
  - Wymiary fizyczne
  - Waga
- Uzasadnienie wyboru (stosunek cena/wydajność, dostępność)

#### Krok 5: Rozmieszczenie modułów
- Optymalne rozmieszczenie na dostępnej powierzchni
- Zachowanie odstępów między modułami (2-5 cm)
- Korytarze serwisowe (jeśli wymagane)
- **Dla dachu płaskiego**: odległości przeciw-zacieniowe między rzędami
- Maksymalizacja liczby modułów przy zachowaniu wymogów

#### Krok 6: Dobór falownika
- Wstępna kalkulacja DC/AC ratio (cel: 1.1-1.3)
- Moc AC falownika: 0.7-0.9 × moc DC systemu
- Liczba trackerów MPPT: minimum 2
- Weryfikacja zakresu napięć MPPT
- Maksymalne napięcie DC

#### Krok 7: Projektowanie stringów
- Obliczenie liczby modułów w stringu
- **Sprawdzenie warunku zimowego**: Voc × N < Vmax DC (przy Tmin)
- **Sprawdzenie warunku letniego**: Vmpp × N ∈ zakres MPPT (przy Tmax)
- Sprawdzenie prądów wejściowych
- Bilans MPPT (równomierne obciążenie trackerów)
- Jeśli warunki nie są spełnione - iteracja (zmiana liczby modułów lub falownika)

#### Krok 8: Okablowanie DC i AC
- Długości przewodów DC (od pól modułów do falownika)
- Przekroje przewodów DC (minimalizacja strat)
- Długości przewodów AC (od falownika do licznika)
- Przekroje przewodów AC
- **Cel**: spadki napięć < 1-2% DC i < 1-3% AC
- Jeśli spadki są za duże - zwiększ przekrój lub skróć trasę

#### Krok 9: Straty systemowe
- **Soiling (zabrudzenie)**: 2-5% rocznie (sezonowość)
- **Mismatch (niedopasowanie modułów)**: 1-2%
- **Degradacja roczna**: 0.5-0.7% rocznie
- **Inne straty**: wg specyfikacji PV*SOL
- Udokumentuj wszystkie założenia w raporcie

#### Krok 10: Symulacja energetyczna
- Uruchomienie symulacji rocznej (8760 godzin)
- Analiza wyników:
  - **Performance Ratio (PR)**: cel > 80%
  - **Produkcja specyficzna**: kWh/kWp/rok
  - **Clipping**: procent czasu i energii
  - **Rozkład strat**: które są dominujące?
- Krzywe mocy chwilowej
- Profil produkcji vs zużycia

#### Krok 11: Wariantowanie
- **Wariant 1**: Podstawowa konfiguracja (wykonana w krokach 1-10)
- **Wariant 2**: Zmiana DC/AC ratio (np. 1.15 → 1.25)
- **Wariant 3** (opcjonalnie): Inny falownik, inna moc, inne rozmieszczenie
- **Porównanie wariantów**:
  - Produkcja roczna [kWh]
  - Performance Ratio [%]
  - Clipping [% i kWh]
  - Koszty szacunkowe
  - Czas zwrotu inwestycji
- **Wybór optymalnego wariantu** z uzasadnieniem

#### Krok 12: Raport i dokumentacja
- Wygenerowanie raportu PDF z PV*SOL
- Dodanie własnych komentarzy i wniosków
- Bill of Materials (BOM) - kompletna lista komponentów
- Schematy elektryczne (jeśli dostępne w raporcie)
- Wizualizacje 3D

### 3. Kontrola jakości (QA Checklist)

Przed oddaniem projektu zweryfikuj:

**✅ Meteodane i temperatury:**
- [ ] Lokalizacja geograficzna poprawna
- [ ] Dane meteorologiczne odpowiednie (rok reprezentatywny)
- [ ] Temperatury min/max zgodne z klimatem regionu

**✅ Geometria:**
- [ ] Wymiary dachu/terenu dokładne
- [ ] Kąt nachylenia i azymut poprawne
- [ ] Strefy bezpieczeństwa zachowane (30-50 cm od krawędzi)
- [ ] Korytarze serwisowe uwzględnione (jeśli wymagane)

**✅ Zacienienie:**
- [ ] Wszystkie przeszkody zamodelowane (minimum 2-3)
- [ ] Gęstość siatki adekwatna (średnia/wysoka dla złożonych scen)
- [ ] Horyzont terenowy uwzględniony (jeśli istotny)
- [ ] Analiza wzajemnego zacieniania (dla dachu płaskiego)

**✅ Elektryka:**
- [ ] Napięcie jałowe stringu zimą < Vmax DC falownika
- [ ] Napięcie pracy stringu latem ∈ zakres MPPT
- [ ] Prądy wejściowe < limity falownika
- [ ] Bilans MPPT (równomierne obciążenie trackerów)
- [ ] Spadki napięć < 1-2% DC i < 1-3% AC

**✅ DC/AC ratio i straty:**
- [ ] DC/AC ratio w zakresie 1.1-1.3 (uzasadnione)
- [ ] Analiza clippingu wykonana (% czasu i energii)
- [ ] Założenia strat udokumentowane (soiling, mismatch, degradacja)
- [ ] Performance Ratio > 80%

**✅ Dokumentacja:**
- [ ] Raport PDF wygenerowany z PV*SOL
- [ ] Bill of Materials (BOM) kompletny
- [ ] Wizualizacje 3D dołączone
- [ ] Własne komentarze i wnioski napisane
- [ ] Porównanie wariantów wykonane

## 📦 Wymagane pliki do oddania

### 1. Plik projektu PV*SOL
- Format: `.pvprj` lub format roboczy PV*SOL premium
- Nazwa pliku: `[Nazwisko]_PV_[Miejscowość].pvprj`
- Plik musi być kompletny i możliwy do otwarcia przez prowadzącego

### 2. Raport techniczny (PDF)
**Struktura raportu (15-25 stron):**

#### Strona tytułowa
- Tytuł projektu
- Dane studenta (imię, nazwisko, nr albumu)
- Data oddania
- Prowadzący

#### 1. Wprowadzenie (1-2 strony)
- Cel projektu
- Zakres prac
- Dane inwestora i lokalizacji

#### 2. Założenia projektowe (2-3 strony)
- Lokalizacja i dane meteorologiczne
- Charakterystyka budynku i dachu
- Profil energetyczny odbiorcy
- Wybór technologii (moduły, falownik) z uzasadnieniem

#### 3. Projekt geometryczny (2-3 strony)
- Model 3D/2D budynku i dachu
- Rozmieszczenie modułów PV
- Analiza przeszkód i zacienienia
- Wizualizacje 3D (zrzuty ekranu z PV*SOL)

#### 4. Projekt elektryczny (3-4 strony)
- Konfiguracja stringów
- Dobór falownika
- Schemat połączeń (jeśli dostępny)
- Okablowanie DC i AC
- Analiza napięć i prądów (tabele, wykresy)
- Weryfikacja warunków pracy (napięcia zimą/latem, MPPT)

#### 5. Symulacja energetyczna (3-4 strony)
- Wyniki symulacji rocznej
- Performance Ratio (PR)
- Produkcja specyficzna [kWh/kWp/rok]
- Analiza strat (diagram Sankey lub tabela)
- Clipping (procent i kWh)
- Krzywe produkcji energii (dzienne, miesięczne, roczne)
- Profil autokonsumpcji vs eksport do sieci

#### 6. Analiza wariantów (2-3 strony)
- Opis wariantów (minimum 2)
- Porównanie parametrów (tabela)
- Analiza techniczna i ekonomiczna
- Wybór optymalnego wariantu z uzasadnieniem

#### 7. Dokumentacja materiałowa (1-2 strony)
- Bill of Materials (BOM) - kompletna lista komponentów:
  - Moduły PV (typ, liczba, moc łączna)
  - Falownik (typ, moc, parametry)
  - Konstrukcja montażowa (typ, liczba elementów)
  - Okablowanie DC (długość, przekrój)
  - Okablowanie AC (długość, przekrój)
  - Zabezpieczenia (odłączniki, ochronniki, bezpieczniki)
  - Akcesoria (konektory, złącza, uziemienia)

#### 8. Analiza ekonomiczna (2-3 strony)
- Szacunkowy koszt inwestycji (na podstawie aktualnych cen rynkowych)
- Roczna produkcja energii [kWh]
- Roczne oszczędności [zł/rok]
- Prosty czas zwrotu SPBT [lata]
- Analiza rentowności (NPV, IRR - opcjonalnie)
- Źródła finansowania (dotacje, ulgi podatkowe - jeśli stosowne)

#### 9. Wnioski i rekomendacje (1-2 strony)
- Podsumowanie wyników
- Mocne strony projektu
- Ograniczenia i ryzyka
- Rekomendacje dla inwestora
- Możliwości rozwoju (np. magazyn energii, pompa ciepła)

#### 10. Bibliografia i załączniki
- Literatura i normy
- Karty katalogowe komponentów (moduł, falownik)
- Dodatkowe wykresy i tabele (opcjonalnie)

### 3. Prezentacja (PowerPoint/PDF)
**Prezentacja do obrony projektu (10-15 slajdów, 10 minut prezentacji):**

1. **Slajd tytułowy**: dane projektu i autora
2. **Założenia**: lokalizacja, budynek, profil energetyczny
3. **Wybór technologii**: moduły i falownik z uzasadnieniem
4. **Geometria i zacienienie**: wizualizacje 3D, rozmieszczenie modułów
5. **Projekt elektryczny**: konfiguracja stringów, schemat
6. **Wyniki symulacji**: produkcja, PR, straty
7. **Analiza wariantów**: porównanie, wybór optymalnego
8. **BOM i koszty**: zestawienie materiałowe, budżet
9. **Ekonomika**: produkcja, oszczędności, czas zwrotu
10. **Wnioski**: kluczowe wnioski i rekomendacje

### 4. Pliki dodatkowe
- Zrzuty ekranu z PV*SOL (widoki 3D, wykresy, tabele) - opcjonalnie jako osobny folder
- Arkusze kalkulacyjne z analizą ekonomiczną - opcjonalnie Excel/LibreOffice

## 🎓 Kryteria oceny

### Ocena projektu (100 punktów)

#### 1. Poprawność techniczna (40 punktów)
- **Geometria i zacienienie (10 pkt)**
  - Dokładność modelu 3D
  - Prawidłowe uwzględnienie przeszkód
  - Adekwatna gęstość siatki zacienienia
  
- **Projekt elektryczny (20 pkt)**
  - Poprawność doboru stringów (napięcia, prądy)
  - Weryfikacja warunków pracy zimą/latem
  - Bilans MPPT
  - Okablowanie i spadki napięć
  - DC/AC ratio i analiza clippingu
  
- **Symulacja energetyczna (10 pkt)**
  - Poprawność uruchomienia symulacji
  - Realistyczne założenia strat
  - Interpretacja wyników (PR, produkcja)

#### 2. Jakość dokumentacji (30 punktów)
- **Raport techniczny (20 pkt)**
  - Kompletność i struktura
  - Jakość opisów i wyjaśnień
  - Poprawność języka i stylu
  - Profesjonalizm opracowania
  
- **BOM i dokumentacja materiałowa (5 pkt)**
  - Kompletność zestawienia
  - Szczegółowość specyfikacji
  
- **Wizualizacje i wykresy (5 pkt)**
  - Jakość wizualizacji 3D
  - Czytelność wykresów i tabel
  - Spójność graficzna

#### 3. Analiza wariantowa i optymalizacja (15 punktów)
- Jakość wariantowania (minimum 2 warianty)
- Kompleksowość porównania
- Uzasadnienie wyboru optymalnego rozwiązania
- Kreatywność w poszukiwaniu rozwiązań

#### 4. Analiza ekonomiczna (10 punktów)
- Poprawność kalkulacji kosztów
- Analiza rentowności (oszczędności, czas zwrotu)
- Realistyczność założeń
- Wnioski ekonomiczne

#### 5. Prezentacja i obrona (5 punktów)
- Jakość prezentacji (slajdy, struktura)
- Umiejętność przedstawienia projektu
- Odpowiedzi na pytania prowadzącego
- Znajomość szczegółów własnego projektu

### Skala ocen
- **91-100 pkt**: Bardzo dobry (5.0) - projekt wybitny, wszystkie elementy na najwyższym poziomie
- **81-90 pkt**: Dobry plus (4.5) - projekt bardzo dobrej jakości, drobne niedociągnięcia
- **71-80 pkt**: Dobry (4.0) - projekt dobrej jakości, spełnia wszystkie wymagania
- **61-70 pkt**: Dostateczny plus (3.5) - projekt poprawny, z pewnymi brakami
- **51-60 pkt**: Dostateczny (3.0) - projekt minimalnie spełnia wymagania
- **< 51 pkt**: Niedostateczny (2.0) - projekt nie spełnia minimalnych wymagań

### Kryteria zaliczenia
- **Minimum 51 punktów** do zaliczenia projektu
- **Wszystkie wymagane pliki oddane** w terminie
- **Obecność na obronie** projektu (jeśli przewidziana)
- **Samodzielność wykonania** - plagiaryzm skutkuje niezaliczeniem

## 📚 Materiały pomocnicze

### Dokumentacja PV*SOL
- [PV*SOL Help - Oficjalna dokumentacja online](https://help.valentin-software.com/pvsol/en/) - **ZACZNIJ TUTAJ!**
- Tutoriale wideo na stronie Valentin Software
- Przykładowe projekty w PV*SOL (File → Examples)

### Materiały z wykładów
- Wykład 2: Podstawy projektowania PV
- Wykład 2: Przegląd narzędzi do projektowania PV
- Wykład 2: PV*SOL - architektura, porównanie i proces budowy projektu (12 kroków)

### Dane meteorologiczne i weryfikacja
- [PVGIS](https://re.jrc.ec.europa.eu/pvg_tools/en/) - weryfikacja danych meteorologicznych i sanity-check wyników
- Dane klimatyczne Polski - IMGW (temperatury ekstremalne)

### Bazy danych komponentów
- [Photovoltaik4all](https://www.photovoltaik4all.de/) - ceny modułów i falowników (rynek niemiecki)
- [ENF Solar](https://www.enfsolar.com/) - baza producentów i komponentów
- Strony producentów - karty katalogowe (zawsze weryfikuj parametry!)

### Normy i standardy (opcjonalnie)
- IEC 61215 - Moduły PV krystaliczne
- IEC 61730 - Bezpieczeństwo modułów PV
- PN-EN 62446 - Dokumentacja, komisjonowanie i inspekcja systemów PV

### Kalkulatory i narzędzia pomocnicze
- Kalkulator przekrojów przewodów DC/AC
- Kalkulator strat napięć
- Narzędzia do analizy ekonomicznej (Excel/LibreOffice)

## 📅 Harmonogram i terminy

### Kamienie milowe (orientacyjne)
1. **Tydzień 1-2**: Zapoznanie z PV*SOL, instalacja oprogramowania, przegląd przykładów
2. **Tydzień 3-4**: Utworzenie projektu, geometria 3D, modelowanie przeszkód (kroki 1-3)
3. **Tydzień 5-6**: Wybór komponentów, rozmieszczenie modułów, dobór falownika (kroki 4-6)
4. **Tydzień 7-8**: Projektowanie stringów, okablowanie, straty (kroki 7-9)
5. **Tydzień 9-10**: Symulacja, wariantowanie, optymalizacja (kroki 10-11)
6. **Tydzień 11-12**: Raport, BOM, analiza ekonomiczna (krok 12)
7. **Tydzień 13-14**: Przygotowanie prezentacji, obrona projektów

### Termin oddania
**[Data do uzupełnienia przez prowadzącego]**

### Forma oddania
- Upload plików na platformę e-learningową / wysłanie na email prowadzącego
- Wszystkie wymagane pliki w jednym archiwum ZIP
- Nazwa archiwum: `[Nazwisko]_[Nr_albumu]_Projekt_PV.zip`

### Obrona projektów (jeśli przewidziana)
- Prezentacja 10 minut + 5 minut pytania
- **[Data i miejsce do uzupełnienia przez prowadzącego]**

## ❓ FAQ - Najczęściej zadawane pytania

### Pytania techniczne

**Q: Czy muszę używać dokładnie PV*SOL premium, czy mogę użyć wersji podstawowej?**  
A: Projekt zakłada użycie PV*SOL premium ze względu na wymagane funkcje 3D i zaawansowaną analizę zacienienia. Jeśli nie masz dostępu do wersji premium, skonsultuj z prowadzącym możliwość użycia wersji podstawowej z dostosowanymi wymaganiami.

**Q: Jak pobrać wersję próbną PV*SOL premium?**  
A: Przejdź na stronę [Valentin Software](https://www.valentin-software.com/en/products/pvsol-premium), zarejestruj się i pobierz 30-dniową wersję próbną. Wersja edukacyjna może być dostępna po kontakcie z producentem.

**Q: Co zrobić, jeśli napięcia stringów nie mieszczą się w zakresie MPPT?**  
A: Masz kilka opcji:
1. Zmień liczbę modułów w stringu (zwiększ/zmniejsz)
2. Wybierz inny falownik o szerszym zakresie MPPT
3. Wybierz inne moduły o innych napięciach Vmpp/Voc
4. Dokładnie opisz problem i rozwiązanie w raporcie

**Q: Jak ustawić DC/AC ratio?**  
A: DC/AC ratio to stosunek mocy DC systemu (suma mocy modułów) do mocy AC falownika. Typowe wartości: 1.1-1.3. Wyższe ratio = więcej energii, ale większe clipping. Niższe ratio = mniejsze clipping, ale mniejsza produkcja. Rozpocznij od 1.2 i dopasuj w procesie wariantowania.

**Q: Gdzie znaleźć karty katalogowe komponentów?**  
A: Sprawdź bibliotekę PV*SOL (często zawiera linki), strony producentów modułów/falowników, lub bazy takie jak [ENF Solar](https://www.enfsolar.com/). Zawsze weryfikuj parametry z kartą katalogową!

**Q: Jak dobrać gęstość siatki zacienienia?**  
A: Dla prostych dachów bez przeszkód: siatka niska/średnia. Dla złożonych scen z wieloma przeszkodami: siatka średnia/wysoka. Wyższa gęstość = dokładniejsze wyniki, ale dłuższe obliczenia.

### Pytania dotyczące dokumentacji

**Q: Jak długi powinien być raport?**  
A: Optymalnie 15-25 stron (bez załączników). Jakość ważniejsza niż ilość - raport ma być kompletny, ale zwięzły.

**Q: Czy mogę użyć gotowego raportu z PV*SOL bez modyfikacji?**  
A: Nie. Raport z PV*SOL to podstawa, ale musisz dodać własne komentarze, analizy, wnioski i uzasadnienia. Wymagane są również rozdziały, których PV*SOL nie generuje automatycznie (np. wprowadzenie, analiza wariantów, wnioski).

**Q: W jakim języku pisać raport?**  
A: Raport piszemy w języku polskim (język wykładowy). Terminy techniczne mogą być w języku angielskim (z polskim wyjaśnieniem przy pierwszym użyciu).

### Pytania organizacyjne

**Q: Czy projekt jest indywidualny czy grupowy?**  
A: Projekt jest indywidualny - każdy student oddaje własny projekt. Konsultacje z kolegami są dozwolone, ale kopiowanie projektów skutkuje niezaliczeniem.

**Q: Co w przypadku problemów z oprogramowaniem?**  
A: Skontaktuj się z prowadzącym jak najszybciej. Możliwe rozwiązania: przedłużenie wersji próbnej, dostęp do komputerów uczelnianych, alternatywne oprogramowanie.

**Q: Czy mogę użyć innych lokalizacji niż podane?**  
A: Tak, po konsultacji z prowadzącym. Lokalizacja musi być w Polsce i mieć dostępne dane meteorologiczne w PV*SOL.

**Q: Czy mogę zaprojektować system z magazynem energii?**  
A: Tak, jako wariant rozszerzony (opcjonalny). Podstawowa wersja zakłada system on-grid bez magazynu, ale dodanie baterii jest mile widziane i może zwiększyć ocenę.

## 💡 Wskazówki praktyczne

### Przed rozpoczęciem
1. **Zainstaluj PV*SOL premium** i przejdź przez tutoriale wprowadzające
2. **Przeczytaj dokumentację** - [PV*SOL Help](https://help.valentin-software.com/pvsol/en/)
3. **Obejrzyj przykładowe projekty** w PV*SOL (File → Examples)
4. **Zaplanuj pracę** - projekt wymaga 30-40 godzin pracy

### Podczas projektowania
1. **Zapisuj projekt często** - PV*SOL może czasem "wywalić się"
2. **Twórz kopie zapasowe** przed większymi zmianami
3. **Dokumentuj założenia** na bieżąco - później łatwiej pisać raport
4. **Rób zrzuty ekranu** kluczowych widoków 3D i wykresów
5. **Sprawdzaj checklistę QA** po każdym większym kroku

### Częste błędy do uniknięcia
- ❌ **Pomyłka w temperaturach** min/max → błędne napięcia stringów
- ❌ **Za mała gęstość siatki** zacienienia → niedokładne wyniki
- ❌ **Brak weryfikacji** parametrów z kartą katalogową → błędne dane
- ❌ **Zbyt wysokie DC/AC ratio** → nadmierne clipping i straty
- ❌ **Duże spadki napięć** w okablowaniu → straty energii
- ❌ **Brak dokumentacji założeń** → problemy przy pytaniach na obronie

### Jak uzyskać najlepszą ocenę
- ✅ Wykonaj **minimum 2-3 warianty** i wybierz optymalny z uzasadnieniem
- ✅ Dodaj **szczegółową analizę ekonomiczną** (NPV, IRR)
- ✅ Rozważ **wariant rozszerzony z magazynem energii**
- ✅ Przygotuj **profesjonalny raport** z wysoką jakością wizualizacji
- ✅ Wykaż się **kreatywnością** w optymalizacji projektu
- ✅ **Zrozum każdy element** projektu - to pomoże na obronie

## 📞 Kontakt i konsultacje

### Prowadzący
- **Imię i nazwisko**: [Do uzupełnienia]
- **Email**: [Do uzupełnienia]
- **Konsultacje**: [Dni i godziny do uzupełnienia]
- **Pokój**: [Numer pokoju do uzupełnienia]

### Kanały komunikacji
- Email: do pytań szczegółowych i indywidualnych problemów
- Forum/MS Teams: do pytań ogólnych, które mogą być przydatne dla wszystkich
- Konsultacje stacjonarne: do problemów wymagających bezpośredniej pomocy z oprogramowaniem

---

**Powodzenia w projekcie! 🌞⚡**

*Ostatnia aktualizacja: [Data do uzupełnienia]*
