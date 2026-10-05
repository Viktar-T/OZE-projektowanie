---
sidebar_position: 3
title: Perspektywa zawodowa - Projektant PV
---

# 🏗️ Perspektywa zawodowa: Jak to wygląda w rzeczywistym projekcie?

:::info Dla Twojej przyszłej kariery
W zadaniu wprowadzającym większość danych została Ci **podana** (moc instalacji, wymiary dachu, lokalizacja). To podejście dydaktyczne, które pozwala skupić się na nauce oprogramowania.

W **prawdziwej pracy jako projektant PV** musisz **samodzielnie zebrać wszystkie te dane**. Poniżej znajdziesz przewodnik, jak to robią profesjonalni projektanci.
:::

## Proces zbierania danych w rzeczywistym projekcie

### Faza 1: Wstępny kontakt z klientem 📞

**Co musisz ustalić przez telefon/email:**

1. **Podstawowe informacje:**

   - Dokładny adres inwestycji (ulica, numer, kod pocztowy, miasto)
   - Typ obiektu: dom jednorodzinny / wielorodzinny / firma / budynek użyteczności publicznej
   - Czy budynek jest istniejący czy w budowie
   - Planowany termin realizacji
2. **Wstępna analiza energetyczna:**

   - Aktualne roczne zużycie energii elektrycznej (kWh/rok)
     - **Źródło:** Rachunki za energię z ostatnich 12 miesięcy
     - **Alternatywnie:** Dostęp do profilu zużycia z licznika smart (jeśli dostępny)
   - Rodzaj taryfy: G11 (jednostrefowa) / G12 (dwustrefowa) / G12w (taryfa wiejska) / inna
   - Moc przyłączeniowa (kW) - z umowy z zakładem energetycznym
   - Liczba mieszkańców i profil użytkowania (praca zdalna, elektryczne ogrzewanie, klimatyzacja, itp.)
3. **Planowane zmiany zużycia:**

   - Czy planowane jest ogrzewanie elektryczne (pompa ciepła)?
   - Czy będzie ładowarka do samochodu elektrycznego?
   - Czy planowana jest klimatyzacja?
   - Czy będzie basen elektryczny?

   ⚠️ **To kluczowe!** Jeśli klient planuje pompę ciepła, zużycie może wzrosnąć z 4000 kWh/rok do 8000-12000 kWh/rok!
4. **Preferencje systemu:**

   - Czy interesuje ich magazyn energii (bateria)?
   - Jaki jest budżet inwestycji?
   - Czy liczy się na dotacje/ulgi podatkowe?

### Faza 2: Wizyta w terenie (Site Visit) 🚗

**Nie można zaprojektować instalacji PV bez wizji lokalnej!** Musisz fizycznie odwiedzić obiekt i zebrać następujące dane:

#### A. Dokumentacja fotograficzna 📸

Zrób zdjęcia (minimum 20-30 dla typowego domu):

1. **Dach - zdjęcia ogólne:**

   - Widok z każdej strony budynku
   - Typ pokrycia dachowego (dachówka ceramiczna/betonowa, blachodachówka, papa, gont)
   - Stan techniczny dachu (czy wymaga remontu?)
   - Komin(y) - liczba, rozmiary, położenie
   - Okna połaciowe, wyłazy dachowe, anteny
   - Rynny, obróbki blacharskie
2. **Dach - szczegóły konstrukcyjne:**

   - Krawędzie dachu (okapy, kalenice)
   - Połączenia połaci (koszowe, narożniki)
   - Element mocowań (widoczne łaty, krokwie - przez okno połaciowe)
   - Odstępy między łatami (ważne dla systemu montażowego!)
3. **Przeszkody i zacienienia:**

   - Drzewa w promieniu 30-50 m - zrób zdjęcia z różnych punktów dachu
   - Sąsiednie budynki (wysokość, odległość)
   - Maszty, kominy sąsiadów, linie wysokiego napięcia
   - **Zdjęcia typu "fish-eye" lub panoramiczne** w kierunku południa
4. **Infrastruktura elektryczna:**

   - Tablica licznikowa/rozdzielcza (główna)
   - Miejsce planowanego montażu falownika
   - Trasa przewodów DC (z dachu do falownika)
   - Trasa przewodów AC (od falownika do rozdzielnicy)
   - Typ licznika energii (czy wymiana na dwukierunkowy?)

#### B. Pomiary geometryczne 📏

**Metoda 1: Pomiar bezpośredni (jeśli dach dostępny)**

- Miara laserowa: długość i szerokość każdej połaci
- Kąt nachylenia: kątomierz cyfrowy lub aplikacja na smartfonie
- Azymut: kompas lub aplikacja GPS
- Wysokość okapu: od gruntu do okapu

**Metoda 2: Pomiar z poziomu gruntu (najczęstsza)**

- Dalmierz laserowy z pomiarem kąta (np. Bosch GLM 120 C)
- Pomiar trójkątny: odległość + kąt = wymiary dachu
- **Weryfikacja:** wykorzystaj Google Earth Pro / Google Maps do wstępnych wymiarów

**Metoda 3: Fotogrametria (dla skomplikowanych dachów)**

- Aplikacje: PVcase, Aurora Solar, Scanifly
- Zdjęcia drona + oprogramowanie → automatyczny model 3D
- Dokładność: ±5-10 cm

**Co mierzyć:**

- Długość i szerokość każdej połaci
- Nachylenie każdej połaci (może być różne!)
- Azymut każdej połaci (orientacja względem południa)
- Wymiary kominów (długość × szerokość × wysokość nad dachem)
- Wymiary okien połaciowych
- Odległości od krawędzi dachu do przeszkód

#### C. Analiza zacienienia ☀️ → 🌳

**Narzędzia profesjonalne:**

1. **Solar Pathfinder** (~2000 PLN)

   - Lusterko ze skalą + mapa trajektorii słońca
   - Stawasz na dachu w kilku punktach
   - Fotografujesz odbicie horyzontu w lusterku
   - Nakładasz szablon trajektorii słońca dla danej lokalizacji
   - Wynik: dokładna mapa zacienienia w ciągu roku
2. **Cyfrowe analizatory zacienienia** (np. Suneye, SunEye 210)

   - Aparat + GPS + baza danych trajektorii słońca
   - Robisz zdjęcie panoramiczne horyzontu
   - Urządzenie automatycznie oblicza straty ze zacienienia
   - Wynik: raport z procentowym zacienieniem dla każdego miesiąca
3. **Aplikacje na smartfonie** (tańsza alternatywa)

   - Sun Surveyor (Android/iOS)
   - Solmetric iPV (iOS)
   - Shadow Analysis (Android)
   - Robisz zdjęcia, aplikacja nakłada trajektorię słońca
   - Dokładność: ±5-10% (wystarczająca dla wstępnej analizy)

**Co musisz ustalić:**

- O której godzinie i w którym miesiącu pojawia się zacienienie
- Czy zacienienie jest krytyczne (rano/południe/popołudnie)?
- Czy można uniknąć zacienionych obszarów?
- Czy warto stosować optymalizatory mocy (np. SolarEdge, Tigo)?

#### D. Analiza konstrukcji dachu 🏗️

**Musisz ustalić:**

1. **Konstrukcja nośna:**

   - Typ: więźba tradycyjna (krokwie + łaty) / więźba prefabrykowana (kratownice)
   - Rozstaw krokwi: typowo 60-90 cm
   - Rozstaw łat: zależy od pokrycia (30-40 cm dla dachówki)
   - **Źródło danych:**
     - Projekt budowlany (jeśli dostępny)
     - Wizualizacja przez okno połaciowe
     - Informacja od dekarza/właściciela
2. **Nośność dachu:**

   - Czy dach wytrzyma dodatkowe obciążenie 15-20 kg/m²?
   - **Dla starszych budynków (>30 lat):** może być wymagana opinia konstruktora
   - **Czerwona flaga:** widoczne ugięcia, pęknięcia, zawilgocenie
3. **Typ pokrycia dachowego:**

   - Dachówka ceramiczna → system hakowy lub z podkładkami
   - Dachówka betonowa → system hakowy
   - Blachodachówka → mocowanie na klipsach lub śrubach
   - Papa → konstrukcja balastowa lub klejona
   - Gont bitumiczny → system przykręcany przez gont
   - **Każdy typ wymaga innego systemu montażowego!**

#### E. Infrastruktura elektryczna ⚡

**Musisz sprawdzić i udokumentować:**

1. **W tablicy głównej:**

   - Typ zabezpieczenia głównego (3×25A? 3×40A?)
   - Wolne miejsce na wyłącznik AC dla PV
   - Stan techniczny instalacji (czy wymaga modernizacji?)
   - Czy jest miejsce na montaż falownika w pobliżu?
2. **Warunki przyłączeniowe:**

   - Pobierz dane z zakładu energetycznego
   - Moc przyłączeniowa (kW)
   - Czy możliwa jest mikroinstalacja (do 50 kW)?
   - Czy wymagana zgoda OSD (Operator Systemu Dystrybucyjnego)?
   - Odległość do najbliższej stacji transformatorowej
3. **Typ licznika:**

   - Czy licznik jest dwukierunkowy? (większość nowych - TAK)
   - Jeśli nie: czy wymiana będzie konieczna? (koszt ~300-500 PLN)
   - Czy licznik ma moduł komunikacyjny (smart meter)?

### Faza 3: Zbieranie danych klimatycznych i środowiskowych 🌍

#### A. Dane klimatyczne dla symulacji

**Źródła danych nasłonechnienia:**

1. **Meteonorm** (wbudowany w PV*SOL premium)

   - Baza danych dla ponad 8000 stacji na świecie
   - Dane syntetyczne (uśrednione z wielu lat)
   - Dokładność: ±5-10%
   - **Użycie:** Wybierz najbliższą stację meteorologiczną
2. **PVGIS** (bezpłatne, online)

   - [https://re.jrc.ec.europa.eu/pvg_tools/en/](https://re.jrc.ec.europa.eu/pvg_tools/en/)
   - Dane satelitarne + naziemne dla całej Europy
   - Możliwość eksportu danych TMY (Typical Meteorological Year)
   - **Użycie:** Wpisz współrzędne GPS → pobierz dane → importuj do PV*SOL
3. **NASA POWER** (bezpłatne, globalne)

   - [https://power.larc.nasa.gov/](https://power.larc.nasa.gov/)
   - Dane satelitarne NASA
   - Rozdzielczość: 0.5° × 0.5° (ok. 50 km)
   - **Użycie:** Dla lokalizacji bez danych Meteonorm
4. **Lokalne stacje meteorologiczne**

   - IMGW (Instytut Meteorologii i Gospodarki Wodnej) - Polska
   - Dane historyczne z pobliskiej stacji
   - Najdokładniejsze, ale często płatne

**Co potrzebujesz:**

- Roczne nasłonechnienie (kWh/m²/rok)
- Rozkład miesięczny nasłonechnienia
- Temperatura otoczenia (średnia, min, max)
- Temperatura ekstremalna zimą (dla obliczeń Voc_max)
- Temperatura ekstremalna latem (dla obliczeń Vmpp_min)

#### B. Warunki środowiskowe specjalne

**Sprawdź, czy lokalizacja wymaga specjalnych rozwiązań:**

1. **Strefa nadmorska** (do 2 km od morza):

   - Agresja soli → moduły i konstrukcja w klasie korozyjnej C4/C5
   - Częstsze mycie modułów (osady soli)
   - Droższe komponenty (+10-15%)
2. **Strefa przemysłowa:**

   - Zanieczyszczenie powietrza → częstsze czyszczenie
   - Możliwe osady chemiczne → konieczność mycia 2-4 razy/rok
3. **Tereny górskie** (>1000 m n.p.m.):

   - Niższe temperatury → wyższe napięcia Voc (weryfikacja!)
   - Wyższe nasłonechnienie (+5-10%)
   - Zwiększone obciążenie śniegiem
4. **Obszary chronione/zabytkowe:**

   - Czy wymagana zgoda konserwatora zabytków?
   - Czy są ograniczenia estetyczne (kolor modułów)?
   - Czy instalacja jest w ogóle możliwa?

### Faza 4: Analiza ekonomiczna 💰

**Dane finansowe, które musisz zebrać:**

#### A. Koszty inwestycyjne

1. **Komponenty:**

   - Zapytaj o ceny u minimum 3 dystrybutorów:
     - Moduły PV (zł/Wp lub zł/szt)
     - Falownik(i) (zł/szt)
     - System montażowy (zł/kWp lub zł/komplet)
     - Kable DC i AC (zł/m)
     - Zabezpieczenia, złącza, osprzęt (zł/komplet)
   - **Uwaga:** Ceny wahają się ±20% w zależności od okresu!
2. **Robocizna:**

   - Montaż konstrukcji i modułów: 800-1500 zł/kWp
   - Instalacja elektryczna: 500-800 zł/kWp
   - **Całkowity koszt:** typowo 4000-5500 zł/kWp dla instalacji 5-10 kWp
3. **Dodatkowe koszty:**

   - Projekt techniczny: 500-1500 zł
   - Zgłoszenie do OSD: 0-500 zł
   - Wymiana licznika: 0-500 zł (czasem refundowane)
   - Ubezpieczenie montażowe: 1-2% wartości
   - Inspekcja elektryczna: 300-600 zł

#### B. Taryfy i rozliczenie z siecią

**Musisz pobrać aktualne dane od dostawcy energii klienta:**

1. **Cena zakupu energii** (z sieci):

   - Taryfa G11: jedna cena przez całą dobę (np. 0.75-0.90 zł/kWh w 2025)
   - Taryfa G12: dzień (drożej) + noc (taniej)
   - Taryfa G12w: dzień + noc + weekend (dla obszarów wiejskich)
   - **Gdzie znaleźć:** Najnowszy rachunek za energię + aktualne cenniki dostawcy
2. **Cena sprzedaży energii** (do sieci):

   - System net-billing (dla instalacji po 2022):
     - Energia oddana do sieci → sprzedaż po cenie rynkowej (np. 0.30-0.50 zł/kWh)
     - Energia pobrana → zakup po cenie taryfy
     - **Współczynnik rozliczeń:** 0.6-0.7 (zależy od ceny rynkowej)
   - **Gdzie znaleźć:**
     - [https://www.pse.pl/](https://www.pse.pl/) → ceny rynkowe energii
     - Kalkulatory prosumenckie online
3. **Inflacja cen energii:**

   - Historyczne: 5-15%/rok (2020-2024)
   - Prognozowana: 5-10%/rok
   - **Źródło:** URE (Urząd Regulacji Energetyki), prognozy rynkowe

#### C. Dotacje i ulgi podatkowe (Polska, 2025)

**Musisz sprawdzić aktualne programy:**

1. **Mój Prąd** (jeśli aktywny):

   - Dotacja: do 6000 zł dla instalacji PV + magazyn
   - Warunki: moduły wyprodukowane w UE, moc 2-10 kWp
   - **Źródło:** [https://mojprad.gov.pl/](https://mojprad.gov.pl/)
2. **Ulga termomodernizacyjna:**

   - Odliczenie od podatku: do 53 000 zł (maksymalnie)
   - Warunki: budynek mieszkalny, PV jako część termomodernizacji
   - **Źródło:** Ustawa o podatku dochodowym, konsultacja z księgowym klienta
3. **Programy regionalne/gminne:**

   - Sprawdź lokalne programy dotacji (różne w każdym województwie/gminie)
   - **Źródło:** Strony urzędów marszałkowskich, gmin

### Faza 5: Dokumentacja i pozwolenia 📄

**Co musisz przygotować/zebrać:**

1. **Zgłoszenie mikroinstalacji do OSD:**

   - Formularz zgłoszenia (wzór od OSD)
   - Schemat instalacji
   - Karta katalogowa falownika
   - Oświadczenie instalatora
   - **Termin:** minimum 30 dni przed uruchomieniem
2. **Projekt techniczny** (jeśli wymagany):

   - Dla instalacji >50 kWp: projekt wykonawczy + zgłoszenie budowlane
   - Dla instalacji ≤50 kWp: uproszczony projekt techniczny
   - Musi zawierać: schematy elektryczne, obliczenia, dobór zabezpieczeń
3. **Dokumentacja budowlana budynku:**

   - Projekt domu (jeśli dostępny) - sprawdzenie konstrukcji dachu
   - Pozwolenie na budowę (dla weryfikacji zgody na zmiany)
   - Świadectwo energetyczne (jeśli jest)

---

## Porównanie: Zadanie edukacyjne vs. Projekt rzeczywisty

| **Dane wejściowe**         | **Zadanie edukacyjne (podane)**       | **Rzeczywisty projekt (musisz znaleźć)**  |
| --------------------------------- | ----------------------------------- | ------------------------------------------------- |
| **Lokalizacja**             | Podana (Szczecin)                   | Wizyta w terenie, GPS, adres                      |
| **Wymiary dachu**           | Podane (10×8 m, 35°)              | Pomiar laserowy, fotogrametria, Google Earth      |
| **Nachylenie i azymut**     | Podane (35°, 180°)                | Pomiar kątomierzem, kompas, aplikacja            |
| **Przeszkody**              | Instrukcja (komin, okno, drzewa)    | Pomiar w terenie, zdjęcia, Solar Pathfinder      |
| **Zacienienie**             | Modelowanie w PV*SOL                | Solar Pathfinder, SunEye, analiza horyzontu       |
| **Zużycie energii**        | Podane (4000 kWh/rok)               | Rachunki za 12 m-cy, licznik smart, wywiad        |
| **Profil zużycia**         | Standardowy z PV*SOL                | Dane z licznika lub szczegółowy wywiad          |
| **Moc instalacji**          | Podana (5-6 kWp)                    | Obliczenia na podstawie zużycia i budżetu       |
| **Moduły PV**              | Dowolne monokrystaliczne 300-400 Wp | Oferty dystrybutorów, analiza cena/jakość      |
| **Falownik**                | Dowolny, dobór podstawowy          | Analiza: cena, gwarancja, MPPT, monitoring        |
| **Dane klimatyczne**        | Meteonorm (wbudowane)               | PVGIS, NASA, IMGW, weryfikacja                    |
| **Temperatury ekstremalne** | Automatyczne z bazy                 | Dane IMGW, normy (PN-EN) dla regionu              |
| **Koszty**                  | Przykładowe (25 000 zł)           | Oferty od minimum 3 wykonawców                   |
| **Taryfy energii**          | Przykładowe (0.80/0.45 zł/kWh)    | Aktualne rachunki, cenniki dostawcy               |
| **Dotacje**                 | Opcjonalne                          | Sprawdzenie wszystkich dostępnych programów     |
| **Pozwolenia**              | Nie wymagane                        | Zgłoszenie OSD, ewentualnie pozwolenia           |
| **Czas zbierania danych**   | 0 godzin (wszystko podane)          | **8-20 godzin** (wizyta, pomiary, research) |

---

## Kluczowe narzędzia i zasoby dla projektanta PV

### Oprogramowanie i narzędzia online:

1. **Projektowanie i symulacje:**

   - PV*SOL premium (używane w tym kursie)
   - PVsyst (standard branżowy, droższe)
   - HelioScope / Aurora Solar (chmurowe, dla USA głównie)
   - PVcase (fotogrametria + projektowanie)
2. **Bazy danych nasłonechnienia:**

   - PVGIS: [https://re.jrc.ec.europa.eu/pvg_tools/en/](https://re.jrc.ec.europa.eu/pvg_tools/en/)
   - NASA POWER: [https://power.larc.nasa.gov/](https://power.larc.nasa.gov/)
   - Meteonorm (licencja płatna, najdokładniejsze)
3. **Mapy i pomiary:**

   - Google Earth Pro (bezpłatne, pomiary dachów)
   - Geoportal.gov.pl (ortofotomapy Polski)
   - Aplikacje do pomiaru: Sun Surveyor, Solar Calculator
4. **Bazy komponentów:**

   - [https://www.europe-solarstore.com/](https://www.europe-solarstore.com/) (sklep + baza)
   - [https://www.photovoltaic-software.com/](https://www.photovoltaic-software.com/) (baza PV*SOL)
   - California Energy Commission - CEC (baza falowników)

### Sprzęt pomiarowy:

1. **Podstawowy (minimum):**

   - Dalmierz laserowy (np. Bosch GLM 50 C) - ~400 PLN
   - Kompas + kątomierz (lub aplikacja na telefonie) - ~0-50 PLN
   - Aparat/telefon do zdjęć dokumentacyjnych
   - Notatnik, szkice, formularz inspekcji
2. **Profesjonalny:**

   - Dalmierz z pomiarem kąta (Bosch GLM 120 C) - ~1500 PLN
   - Solar Pathfinder - ~2000 PLN
   - SunEye 210 (cyfrowy analizator zacienienia) - ~3000 USD
   - Dron z kamerą (dla fotogrametrii) - ~3000-8000 PLN
   - Kamera termowizyjna (do kontroli jakości po montażu) - ~2000-5000 PLN

---

*Ten przewodnik stanowi wprowadzenie do pracy projektanta instalacji fotowoltaicznych. W rzeczywistych projektach każde zadanie jest unikalne i wymaga dostosowania procesu do specyficznych warunków i wymagań klienta.*

