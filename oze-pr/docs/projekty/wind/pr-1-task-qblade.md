---
sidebar_position: 1
title: Zadanie 1 - Projektowanie turbiny wiatrowej w QBlade
---
# Zadanie 1: Projektowanie turbiny wiatrowej w QBlade

## 🎯 Cel zadania

Zapoznanie się z interfejsem i podstawowymi funkcjami oprogramowania [**QBlade**](https://qblade.org/) przez zaprojektowanie własnej turbiny wiatrowej i wykonanie symulacji.

**Czas realizacji:** 4 godziny (2 zajęcia)

**Wymagania wstępne:**

- QBlade Community Edition (CE) jest już zainstalowany na komputerach w laboratorium
- Obejrzenie materiału wideo wprowadzającego (link poniżej)
- Podstawowa wiedza z wykładu o energetyce wiatrowej

## 📺 Materiał wprowadzający

Proszę zapoznać się z dokumentacją QBlade:

- **[QBlade Documentation](https://docs.qblade.org/)** - pełna dokumentacja użytkownika
- **[QBlade Quick Start Guide](https://qblade.org/qblade-quick-start-guide/)** - przewodnik szybkiego startu

Przed rozpoczęciem zadania zalecamy obejrzenie tutorialu wideo:
**[QBlade YouTube Tutorial Playlist](https://www.youtube.com/playlist?list=PLcu34l7xaPqbP_DZcQosaaXqmGWIk0Gux)**.

Playlista zawiera kompleksowe wprowadzenie do QBlade, od podstawowych operacji po zaawansowane symulacje. Tutorial prezentuje przykład projektowania turbiny wiatrowej w oprogramowaniu QBlade i może służyć jako pomoc w nauce obsługi programu.

:::tip Wskazówka
Zalecamy obejrzenie tutorialu przed rozpoczęciem pracy, aby zapoznać się z interfejsem QBlade i podstawowymi funkcjami. Szczególnie pomocne mogą być odcinki dotyczące:
- Importu profili aerodynamicznych
- Projektowania łopaty
- Konfiguracji turbiny
- Uruchamiania symulacji

Pamiętaj jednak, że Twój projekt może być dowolny - tutorial to tylko przykład i pomoc w nauce obsługi programu.
:::

## 💻 QBlade w laboratorium

QBlade Community Edition (CE) jest już zainstalowany i dostępny na wszystkich komputerach w laboratorium. Możesz od razu rozpocząć pracę z oprogramowaniem.

:::info Uwaga
Jeśli potrzebujesz uruchomić QBlade na własnym komputerze, instrukcje instalacji znajdziesz na stronie: [https://qblade.org/qblade-quick-start-guide/](https://qblade.org/qblade-quick-start-guide/)
:::

:::warning Uwaga

**Własny projekt może być dowolny** - tutorial YouTube to tylko przykład i pomoc w nauce obsługi QBlade. Najważniejsze jest osiągnięcie celu zadania: **zaprojektowanie własnej turbiny wiatrowej i wykonanie symulacji**.

Parametry podane poniżej są jedynie sugestiami i wytycznymi. Możesz wybrać inne wartości, inne profile aerodynamiczne, inną konfigurację - ważne, aby projekt był kompletny i zawierał wszystkie wymagane elementy (profile, łopata, turbina, symulacja, wyniki).

:::

## 📋 Specyfikacja zadania

### Dane projektowe

Poniżej znajdują się przykładowe parametry, które możesz wykorzystać przy projektowaniu własnej turbiny wiatrowej. **Pamiętaj, że możesz wybrać własne wartości**:

#### Parametry turbiny

- **Typ:** Turbina pozioma (HAWT - Horizontal Axis Wind Turbine)
- **Moc nominalna:** 1-3 MW (wybierz wartość w tym zakresie)
- **Średnica wirnika:** 60-100 m (dopasuj do mocy)
- **Liczba łopat:** 3
- **Prędkość obrotowa:** 10-20 RPM (dopasuj do średnicy)
- **Wysokość piasty:** 80-100 m

#### Profile aerodynamiczne

- **Typ profili:** NACA 4-digit series
- **Źródło profili:** [Airfoil Tools Database](https://www.airfoiltools.com/search/index?MAirfoilSearchForm%5BtextSearch%5D=&MAirfoilSearchForm%5BmaxThickness%5D=&MAirfoilSearchForm%5BminThickness%5D=&MAirfoilSearchForm%5BmaxCamber%5D=&MAirfoilSearchForm%5BminCamber%5D=&MAirfoilSearchForm%5Bgrp%5D=naca4d&MAirfoilSearchForm%5Bsort%5D=1&yt0=Search)
- **Wymagania:**
  - Minimum 3 różne profile wzdłuż łopaty
  - Profile powinny być odpowiednio dobrane (root, mid, tip)
  - Uzasadnij wybór profili w sprawozdaniu

#### Warunki wiatrowe

- **Prędkość wiatru nominalna:** 10-12 m/s
- **Prędkość wiatru cut-in:** 3-4 m/s
- **Prędkość wiatru cut-out:** 20-25 m/s
- **Profil wiatru:** Logarytmiczny (atmospheric boundary layer)

## 📐 Kroki do wykonania

Realizując zadanie, przejdź przez wszystkie etapy procesu projektowego w QBlade. Poniższe kroki są wytycznymi - możesz modyfikować parametry i podejście zgodnie z własnym projektem:

### Krok 1: Uruchomienie QBlade i zapoznanie z interfejsem

- [ ] Uruchom QBlade Community Edition
- [ ] Zapoznaj się z głównym interfejsem:
  - Menu główne (górna belka)
  - Moduły: Airfoil, Blade Design, Turbine, Simulation
  - Widok 3D (GL View)
  - Widok wykresów (Graph View)
- [ ] Otwórz przykładowy projekt: **OC3_Simulation.qpr** z folderu **SampleProjects**
- [ ] Przeanalizuj strukturę przykładowego projektu

:::tip Wskazówka
Tutorial YouTube może pomóc w zapoznaniu się z interfejsem QBlade. Obejrzyj pierwsze odcinki playlisty, aby poznać podstawowe elementy programu. Pamiętaj jednak, że Twój projekt może różnić się od przykładu w tutorialu.
:::

### Krok 2: Import profili aerodynamicznych

- [ ] Przejdź do modułu **Airfoil**
- [ ] **Wyszukaj profile NACA w bazie Airfoil Tools:**
  - Przejdź na: [Airfoil Tools Database](https://www.airfoiltools.com/search/index?MAirfoilSearchForm%5BtextSearch%5D=&MAirfoilSearchForm%5BmaxThickness%5D=&MAirfoilSearchForm%5BminThickness%5D=&MAirfoilSearchForm%5BmaxCamber%5D=&MAirfoilSearchForm%5BminCamber%5D=&MAirfoilSearchForm%5Bgrp%5D=naca4d&MAirfoilSearchForm%5Bsort%5D=1&yt0=Search)
  - Wybierz minimum 3 profile NACA 4-digit (np. NACA 4412, NACA 2415, NACA 0012)
  - Pobierz pliki współrzędnych profili (format .dat lub .txt)
- [ ] **Importuj profile do QBlade:**
  - W module Airfoil kliknij "Import Airfoil"
  - Wybierz pliki profili
  - Sprawdź, czy profile zostały poprawnie zaimportowane
- [ ] **Weryfikuj profile:**
  - Sprawdź wizualizację profili w QBlade
  - Upewnij się, że współrzędne są poprawne (zamknięty kontur)

:::info Uwaga
Profile powinny być odpowiednio dobrane:
- **Root (nasada łopaty):** grubszy profil, większy kąt skręcenia (twist) (np. NACA 4412)
- **Mid (środek łopaty):** średni profil (np. NACA 2415)
- **Tip (końcówka łopaty):** cieńszy profil, mniejszy kąt skręcenia (twist) (np. NACA 0012)
:::

### Krok 3: Analiza profili aerodynamicznych (opcjonalnie z XFoil)

- [ ] **Dla każdego profilu wykonaj analizę XFoil:**
  - W module Airfoil wybierz profil
  - Kliknij "XFoil Analysis" (jeśli dostępne)
  - Ustaw parametry analizy:
    - Reynolds number: 1-5 × 10⁶ (typowe dla turbin wiatrowych)
    - Zakres kątów natarcia: -10° do 20°
- [ ] **Eksportuj dane polarne:**
  - Zapisz współczynniki CL (lift) i CD (drag) dla każdego profilu
  - Dane będą potrzebne do projektowania łopaty

:::tip Wskazówka
Jeśli analiza XFoil nie jest dostępna w QBlade, możesz użyć zewnętrznego narzędzia XFoil lub zaimportować gotowe dane polarne z bazy Airfoil Tools.
:::

### Krok 4: Projektowanie łopaty (Blade Design)

- [ ] Przejdź do modułu **Blade Design**
- [ ] **Utwórz nową łopatę:**
  - Kliknij "New Blade" lub "Create Blade"
  - Ustaw podstawowe parametry:
    - Długość łopaty: połowa średnicy wirnika (np. 30-50 m)
    - Liczba sekcji: 15-25 (im więcej, tym dokładniejsza analiza)
- [ ] **Przypisz profile do sekcji:**
  - Root: użyj grubszego profilu (np. NACA 4412)
  - Mid: użyj średniego profilu (np. NACA 2415)
  - Tip: użyj cieńszego profilu (np. NACA 0012)
  - QBlade automatycznie interpoluje profile między sekcjami
- [ ] **Skonfiguruj geometrię łopaty:**
  - **Chord (cięciwa):** zmniejszaj od root do tip (np. 3-4 m na root, 0.5-1 m na tip)
  - **Twist (skręcenie):** zmniejszaj kąt od root do tip (np. 15-20° na root, 0-5° na tip)
  - **Thickness (grubość):** zmniejszaj od root do tip (zgodnie z profilami)
- [ ] **Weryfikuj geometrię:**
  - Sprawdź wizualizację 3D łopaty
  - Upewnij się, że przejścia między sekcjami są płynne

:::warning Uwaga
Geometria łopaty ma kluczowe znaczenie dla wydajności turbiny. Możesz skorzystać z tutoriala YouTube jako pomocy w doborze parametrów, ale Twój projekt może mieć własne wartości.
:::

### Krok 5: Konfiguracja turbiny (Turbine Configuration)

- [ ] Przejdź do modułu **Turbine**
- [ ] **Ustaw parametry turbiny:**
  - **Rotor diameter:** 60-100 m (zgodnie z mocą nominalną)
  - **Number of blades:** 3
  - **Hub height:** 80-100 m
  - **Rated power:** 1-3 MW
  - **Rated wind speed:** 10-12 m/s
  - **Cut-in wind speed:** 3-4 m/s
  - **Cut-out wind speed:** 20-25 m/s
- [ ] **Konfiguracja kontroli:**
  - **Pitch control:** Aktywna (automatyczna regulacja kąta natarcia)
  - **RPM control:** Stała prędkość obrotowa lub zmienna (variable speed)
  - **Generator:** Synchronous lub Asynchronous (dopasuj do mocy)
- [ ] **Przypisz łopatę:**
  - Wybierz zaprojektowaną łopatę z modułu Blade Design
  - Sprawdź, czy parametry są zgodne

### Krok 6: Konfiguracja warunków wiatrowych

- [ ] Przejdź do sekcji **Wind Conditions** lub **Environment**
- [ ] **Ustaw profil wiatru:**
  - **Wind profile type:** Logarithmic (logarytmiczny)
  - **Reference wind speed:** 10 m/s (na wysokości referencyjnej)
  - **Reference height:** 10 m
  - **Roughness length:** 0.03-0.1 m (typowe dla terenu otwartego)
- [ ] **Turbulencja:**
  - **Turbulence intensity:** 10-15% (typowe dla terenu otwartego)
  - **Wind direction:** 0° (wiatr prostopadły do płaszczyzny wirnika)
- [ ] **Zakres prędkości wiatru:**
  - Minimum: 3 m/s
  - Maksimum: 25 m/s
  - Krok: 1 m/s (dla analizy charakterystyki mocy)

### Krok 7: Uruchomienie symulacji

- [ ] Przejdź do modułu **Simulation**
- [ ] **Wybierz typ symulacji:**
  - **Steady-state simulation:** Analiza charakterystyki mocy (power curve)
  - **Time-domain simulation:** Symulacja czasowa (opcjonalnie, dla zaawansowanych)
- [ ] **Ustaw parametry symulacji:**
  - **Wind speed range:** 3-25 m/s
  - **Time step:** 0.01-0.1 s (dla symulacji czasowej)
  - **Simulation time:** 20-60 s (dla symulacji czasowej)
- [ ] **Uruchom symulację:**
  - Kliknij "Start Simulation"
  - Obserwuj postęp w GL View (wizualizacja 3D)
  - Po zakończeniu przejdź do Graph View (wykresy wyników)

:::tip Wskazówka
Jeśli potrzebujesz pomocy w uruchomieniu symulacji, możesz skorzystać z tutoriala YouTube. Symulacja może trwać kilka minut, w zależności od złożoności modelu.
:::

### Krok 8: Analiza wyników

- [ ] **Przeanalizuj charakterystykę mocy (Power Curve):**
  - Wykres mocy w funkcji prędkości wiatru
  - Sprawdź, czy moc nominalna jest osiągana przy prędkości nominalnej
  - Weryfikuj cut-in i cut-out
- [ ] **Przeanalizuj współczynnik mocy (Power Coefficient, Cp):**
  - Maksymalny Cp powinien być w zakresie 0.4-0.5 (dla nowoczesnych turbin)
  - Sprawdź, przy jakiej prędkości wiatru osiągany jest maksymalny Cp
- [ ] **Przeanalizuj obciążenia:**
  - **Thrust (siła ciągu):** wykres w funkcji prędkości wiatru
  - **Blade root bending moment:** moment zginający u nasady łopaty
  - **Rotor torque:** moment obrotowy wirnika
- [ ] **Przeanalizuj parametry aerodynamiczne:**
  - **Angle of attack:** kąt natarcia wzdłuż łopaty
  - **Lift coefficient (CL):** współczynnik siły nośnej
  - **Drag coefficient (CD):** współczynnik oporu
- [ ] **Wizualizacja 3D:**
  - Sprawdź rozkład ciśnień na łopatach
  - Przeanalizuj przepływ wokół wirnika (wake visualization)

### Krok 9: Optymalizacja (opcjonalnie)

- [ ] **Jeśli wyniki nie są zadowalające, spróbuj zoptymalizować:**
  - Zmień parametry łopaty (chord, twist)
  - Wybierz inne profile aerodynamiczne
  - Dostosuj prędkość obrotową
  - Zmień konfigurację kontroli (pitch, RPM)
- [ ] **Uruchom ponownie symulację** i porównaj wyniki

### Krok 10: Eksport wyników i dokumentacja

- [ ] **Eksportuj wykresy:**
  - Power curve (charakterystyka mocy)
  - Thrust curve (charakterystyka siły ciągu)
  - Cp curve (współczynnik mocy)
  - Blade loading (obciążenia łopaty)
- [ ] **Eksportuj dane numeryczne:**
  - Tabele wyników (CSV lub Excel)
  - Parametry turbiny
  - Konfiguracja łopaty
- [ ] **Zapisz projekt:**
  - Nazwa: `Nazwisko_QBlade_Turbina_Zadanie1.qpr`
  - Format: natywny format QBlade (.qpr)

## 📦 Wymagane pliki do oddania

Po zakończeniu zadania przygotuj następujące pliki:

### 1. Plik projektu QBlade

- **Nazwa:** `Nazwisko_QBlade_Turbina_Zadanie1.qpr`
- Format: natywny format QBlade
- Upewnij się, że plik można otworzyć bez błędów

### 2. Krótkie sprawozdanie (2-3 strony, format PDF)

**Nazwa:** `Nazwisko_QBlade_Turbina_Zadanie1_Sprawozdanie.pdf`

Struktura sprawozdania:

#### Nagłówek

- Imię i nazwisko, nr albumu
- Data wykonania
- Tytuł: "Zadanie 1 - Projektowanie turbiny wiatrowej w QBlade"

#### 1. Dane wejściowe (0.5 strony)

Krótkie podsumowanie:

- Parametry turbiny (moc, średnica, prędkość obrotowa)
- Wybrane profile aerodynamiczne (NACA, uzasadnienie wyboru)
- Parametry łopaty (długość, chord, twist)
- Warunki wiatrowe

#### 2. Wyniki symulacji (1 strona)

Tabela z kluczowymi wynikami:

| Parametr                    | Wartość | Jednostka | Uwagi           |
| --------------------------- | ------- | --------- | --------------- |
| Moc nominalna               | ___     | MW        |                 |
| Średnica wirnika            | ___     | m         |                 |
| Prędkość wiatru nominalna   | ___     | m/s       |                 |
| Maksymalny Cp               | ___     | -         |                 |
| Prędkość wiatru przy max Cp | ___     | m/s       |                 |
| Thrust przy prędkości nominalnej | ___     | kN        |                 |
| Maksymalny moment zginający | ___     | kNm       |                 |

#### 3. Wykresy (0.5 strony)

Dołącz następujące wykresy:

- **Power curve** - charakterystyka mocy
- **Cp curve** - współczynnik mocy
- **Thrust curve** - siła ciągu
- **Wizualizacja 3D** - turbina z rozkładem ciśnień

#### 4. Wnioski i spostrzeżenia (0.5-1 strona)

Krótka refleksja (5-7 zdań na temat):

- Czy projekt spełnił założone parametry?
- Jakie były główne wyzwania podczas projektowania?
- Co sprawiło największe trudności?
- Jakie funkcje QBlade okazały się najbardziej pomocne?
- Jakie parametry wpłynęły najbardziej na wydajność turbiny?
- Co byś poprawił/zoptymalizował w przyszłości?

### 3. Zrzuty ekranu (opcjonalnie)

**Nazwa:** `Nazwisko_QBlade_Turbina_Zadanie1_Screenshots.pdf`

- 3-5 kluczowych widoków z QBlade:
  - **Widok 3D turbiny** - wizualizacja całej turbiny
  - **Geometria łopaty** - widok łopaty z parametrami
  - **Wykres Power Curve** - charakterystyka mocy
  - **Wykres Cp** - współczynnik mocy
  - **Rozkład obciążeń** - obciążenia wzdłuż łopaty

### Forma oddania

- Wszystkie pliki w jednym archiwum ZIP
- **Nazwa archiwum:** `Nazwisko_Nr_albumu_Zadanie1_QBlade.zip`
- Wiadomość do wykładowcy przez MS Teams.

## ✅ Kryteria oceny

Zadanie oceniane jest w skali 0-10 punktów (zaliczenie: minimum 6 punktów)

| Kryterium                         | Punkty  | Opis                                                                                                              |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| **Kompletność projektu**  | 0-3 pkt | Czy projekt zawiera wszystkie wymagane elementy (profile, łopata, turbina, symulacja)?                         |
| **Poprawność techniczna** | 0-3 pkt | Czy parametry turbiny są realistyczne? Czy wyniki są wiarygodne (Cp, moc)?                                     |
| **Jakość dokumentacji**   | 0-2 pkt | Czy raport i sprawozdanie są kompletne, czytelne i profesjonalne?                                                |
| **Osiągnięcie celu**      | 0-2 pkt | Czy turbina osiąga założone parametry? Czy projekt jest zoptymalizowany?                                         |

### Szczegóły punktacji

**Kompletność projektu (0-3 pkt):**

- 3 pkt: Wszystkie elementy wykonane zgodnie z instrukcją - profile, łopata, turbina, symulacja, wyniki
- 2 pkt: Większość elementów wykonana, drobne braki
- 1 pkt: Podstawowe elementy wykonane, znaczące braki
- 0 pkt: Projekt niekompletny lub nie oddany

**Poprawność techniczna (0-3 pkt):**

- 3 pkt: Parametry realistyczne, wyniki wiarygodne (Cp 0.4-0.5, moc zgodna z założeniami)
- 2 pkt: Parametry w większości poprawne, drobne błędy
- 1 pkt: Parametry z błędami, wyniki niepewne
- 0 pkt: Poważne błędy techniczne, projekt nie działa

**Jakość dokumentacji (0-2 pkt):**

- 2 pkt: Raport i sprawozdanie kompletne, czytelne, profesjonalne
- 1 pkt: Dokumentacja niepełna lub niskiej jakości
- 0 pkt: Brak dokumentacji

**Osiągnięcie celu (0-2 pkt):**

- 2 pkt: Turbina osiąga założone parametry, projekt zoptymalizowany
- 1 pkt: Turbina osiąga większość założeń, projekt akceptowalny
- 0 pkt: Cel nie osiągnięty

## ❓ FAQ - Najczęściej zadawane pytania

### Problemy techniczne

**Q: QBlade nie uruchamia się na moim systemie. Co robić?**
A: Sprawdź wymagania systemowe:
- Windows: Windows 7 lub nowszy (64-bit)
- Linux: Ubuntu 20.04 lub nowszy (64-bit)
- Upewnij się, że zainstalowałeś wszystkie wymagane biblioteki (Linux)
- Sprawdź, czy masz odpowiednie sterowniki graficzne (OpenGL)

**Q: Nie mogę zaimportować profili aerodynamicznych. Co robić?**
A: Sprawdź format pliku:
- QBlade akceptuje formaty: .dat, .txt, .csv
- Współrzędne powinny być w formacie: x y (dwie kolumny)
- Profil powinien być zamknięty (pierwszy i ostatni punkt identyczne)
- Sprawdź, czy współrzędne są w odpowiedniej skali (zwykle 0-1 lub w metrach)

**Q: Symulacja nie działa lub kończy się błędem. Co to znaczy?**
A: Najczęstsze przyczyny:
- Nieprawidłowa konfiguracja turbiny (brak przypisanej łopaty)
- Błędne parametry warunków wiatrowych
- Zbyt duży krok czasowy (dla symulacji czasowej)
- Brak danych polarnych dla profili (wykonaj analizę XFoil)

**Q: Mój współczynnik Cp jest bardzo niski (&lt;0.3). Czy to źle?**
A: Tak, Cp powinno być w zakresie 0.4-0.5 dla nowoczesnych turbin. Przyczyny niskiego Cp:
- Nieprawidłowa geometria łopaty (chord, twist)
- Nieodpowiednie profile aerodynamiczne
- Zbyt niska lub zbyt wysoka prędkość obrotowa
- Nieprawidłowa konfiguracja kontroli (pitch)

### Pytania projektowe

**Q: Jakie profile NACA wybrać dla mojej turbiny?**
A: Zalecane profile dla turbin wiatrowych:
- **Root:** NACA 44xx lub NACA 63xx (grubsze, większy kąt skręcenia)
- **Mid:** NACA 24xx lub NACA 35xx (średnie)
- **Tip:** NACA 00xx lub NACA 12xx (cieńsze, mniejszy kąt skręcenia)
- Wybierz profile z bazy Airfoil Tools i sprawdź ich charakterystyki

**Q: Jak dobrać chord (cięciwę) wzdłuż łopaty?**
A: Typowy rozkład chord:
- **Root:** 3-5% średnicy wirnika (np. 3-5 m dla wirnika 100 m)
- **Mid:** 2-3% średnicy wirnika
- **Tip:** 0.5-1% średnicy wirnika
- QBlade automatycznie interpoluje między sekcjami

**Q: Jak dobrać twist (skręcenie) łopaty?**
A: Typowy rozkład twist:
- **Root:** 15-25° (większy kąt skręcenia)
- **Mid:** 5-10°
- **Tip:** 0-5° (mniejszy kąt skręcenia)
- Twist powinien być dopasowany do prędkości obrotowej i prędkości wiatru

**Q: Jaka prędkość obrotowa jest optymalna?**
A: Prędkość obrotowa zależy od średnicy wirnika:
- **Tip speed ratio (TSR):** 7-9 (optymalne dla większości turbin)
- **RPM = (TSR × V_wind × 60) / (π × D)**
- Przykład: TSR=8, V=10 m/s, D=100 m → RPM ≈ 15
- Dla większych turbin RPM jest niższe (10-15 RPM)

**Q: Czy muszę wykonać analizę XFoil dla profili?**
A: Nie jest to obowiązkowe, ale zalecane:
- XFoil generuje dane polarne (CL, CD) potrzebne do symulacji
- Bez danych polarnych QBlade używa uproszczonych modeli
- Analiza XFoil poprawia dokładność symulacji

## 💡 Wskazówki praktyczne

### Przed rozpoczęciem

1. ✅ Uruchom QBlade na komputerze w laboratorium
2. ✅ Obejrzyj tutorial YouTube (opcjonalnie, jako pomoc w nauce obsługi programu)
3. ✅ Przejrzyj przykładowe projekty w QBlade (SampleProjects)
4. ✅ Przygotuj miejsce na zapisywanie projektu (utwórz folder roboczy)

### Podczas pracy

1. 💾 **Zapisuj projekt często** - File → Save (Ctrl+S)
2. 🎥 **Korzystaj z tutoriala jako pomocy** - jeśli potrzebujesz wsparcia, możesz odtworzyć odpowiednie fragmenty
3. 📸 **Rób zrzuty ekranu** na bieżąco - przyda się do sprawozdania
4. 🧪 **Eksperymentuj** - nie bój się cofnąć zmian (Ctrl+Z działa!)
5. ✅ **Sprawdzaj na bieżąco** - czy parametry są realistyczne, czy wyniki są wiarygodne
6. 💡 **Pamiętaj** - Twój projekt może być dowolny, najważniejsze to osiągnięcie celu: zaprojektowanie własnej turbiny i wykonanie symulacji

### Częste pułapki

- ❌ **Za grube profile na końcówce** → zwiększony opór, niższy Cp
- ❌ **Za duży twist na root** → nieoptymalny kąt natarcia
- ❌ **Nieprawidłowa prędkość obrotowa** → TSR poza zakresem optymalnym
- ❌ **Brak danych polarnych** → uproszczone modele, mniej dokładne wyniki
- ❌ **Zapominanie o zapisywaniu** projektu → utrata pracy

---

**Powodzenia! 🌬️⚡**

*To zadanie stanowi pierwszy krok w opanowaniu profesjonalnych narzędzi do projektowania turbin wiatrowych. Poświęć czas na dokładne wykonanie - umiejętności zdobyte tutaj będą fundamentem dla Twojej przyszłej pracy jako projektant turbin wiatrowych.*

**Termin oddania:** [Do uzupełnienia przez prowadzącego]

---

*Ostatnia aktualizacja: Październik 2025*

