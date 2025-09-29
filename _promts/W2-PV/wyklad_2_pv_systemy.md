# Wykład 2 — Systemy fotowoltaiczne (2 h)  
**Przedmiot:** Programy komputerowe w projektowaniu instalacji OZE (sem. 5)  
**Forma:** wykład z pokazem narzędzi (live demo + checklisty projektowe)  
**Prowadzący:** prof.

---

## Plan i materiały

**Plan (2 × 45 min):**
1. **Wprowadzenie do procesu projektowania PV** (10 min)  
2. **Przegląd kluczowych narzędzi** (15 min)  
3. **PV\*SOL: architektura i modelowanie falowników** (20 min)  
4. **Sunny Design: środowisko i integracje** (15 min)  
5. **PVsyst, Aurora Solar, PVGIS — krótkie charakterystyki** (10 min)  
6. **Schematy procesu projektowego**: PV\*SOL i Sunny Design (20 min)  
7. **Demonstracje operacyjne**: PV\*SOL i Sunny Design (30 min)  
8. **Podsumowanie: dobór narzędzia i najlepsze praktyki** (10 min)

**Materiały wejściowe do zajęć:**
- Dane meteorologiczne (TMY/rok reprezentatywny), współrzędne lokalizacji.
- Karty katalogowe modułów i falowników (napięcia, prądy, krzywe sprawności).
- Rzuty/obmiary dachu (DXF/DWG/PDF) lub ortofotomapa.
- Dostęp do: **PV\*SOL premium** (wersja edukacyjna lub trial) oraz **Sunny Design (Web)** — konto bezpłatne.
- Zestaw plików na zajęcia: przykładowy moduł ~400 W, falownik 10–12 kW, dach skośny 35°, azymut −20°.

---

## Wprowadzenie do procesu projektowania PV (perspektywa „software-first”)

**Mapa procesu (od briefu do raportu):**  
Brief → Geometria/warunki → Zacienienie → Dobór komponentów → Projekt elektryczny → Symulacja → Raport/BOM → Walidacja.

### Krok 1. Brief i kontekst
Dane wejściowe: profil zużycia (jeśli on-grid), ograniczenia mocy przyłączeniowej, budżet, cele (max autokonsumpcja / max produkcja / ROI), wymagania OSD/zakładu energetycznego.  
Decyzje: target mocy [kWp], typ systemu (on-grid/off-grid/hybryda), czy magazyn energii/EMS.  
Artefakty: karta projektu (1 strona), lista założeń, folder danych.  
Pułapki: nieaktualne dane o przyłączu, brak profilu zużycia, zbyt optymistyczne założenia degradacji i soilingu.

### Krok 2. Geometria i ograniczenia
Co potrzebne: wymiary dachu/terenu (inwentaryzacja, DXF/DWG, ortofotomapa), azymut, kąt nachylenia, strefy bezpieczeństwa (krawędzie, okna, kominy), dopuszczalne obciążenia konstrukcji.  
W narzędziach: model 2D/3D powierzchni, układy montażowe (poziomy/pionowy), korytarze serwisowe.  
Wyjścia: maksymalna liczba modułów, warianty ułożenia, rezerwy.  
Pułapki: nieuwzględnione dylatacje/świetliki, za małe marginesy od krawędzi, brak analizy nośności.

### Krok 3. Zacienienie (model 3D + horyzont)
Cel: określić spadek irradiancji i niejednorodność między stringami.  
Techniki: siatka zacienień (czasowa i przestrzenna), obiekty własne/obce (kominy, drzewa, attyki); horyzont terenowy; scenariusze sezonowe.  
Weryfikacja: wykres udziału zacienienia procent miesięcznie; różnice między polami modułów.  
Pułapki: zbyt gruba siatka (niedoszacowanie cieni liniowych), ignorowanie wzajemnego zacieniania w układach na dachu płaskim.

### Krok 4. Dobór komponentów
Moduły: moc, wymiary, współczynniki temperaturowe, liczba busbarów, gwarancja; kompatybilność mechaniczna z systemem montażowym.  
Falowniki: moc AC, liczba MPPT, zakresy napięć (Vmpp, Voc max), prądy wejściowe, krzywe sprawności przy obciążeniu częściowym, możliwości sterowania P/Q.  
Dodatki: optymalizatory, magazyn energii, zabezpieczenia DC/AC, monitoring.  
Pułapki: mieszanie modułów o różnych parametrach w jednym stringu, niedoszacowanie prądu wejściowego MPPT.

### Krok 5. Projekt elektryczny (stringi, napięcia, DC/AC)
Zasady:  
- Napięcie łańcucha zimą: Vstring(Tmin) = N · Voc(Tmin) — sprawdź Vmax,DC falownika.  
- Zakres MPP: Vmpp(T) musi mieścić się w przedziale MPPT w całym zakresie temperatur pracy.  
- DC/AC ratio: dobierz tak, by ograniczyć clipping przy jednoczesnym wypełnieniu falownika w typowych warunkach (często 1.1–1.3, ale zależnie od klimatu i orientacji).  
- Bilans MPPT: stringi równoległe o zbliżonej irradiancji i temperaturze.  
Pułapki: nieuwzględnienie temperaturowej zmienności napięć, zbyt duże spadki napięć na długich odcinkach DC/AC, asymetria obciążeń MPPT.

### Krok 6. Symulacja energetyczna
Wejścia: meteodane (TMY/rok referencyjny), model zacienienia, krzywe sprawności, straty: soiling, mismatch, kable, inwerter, temperatura, degradacja.  
Wyniki kluczowe: uzysk roczny [kWh], PR (Performance Ratio), produkcja specyficzna [kWh/kWp], krzywa mocy chwilowej (analiza clippingu), rozkład strat.  
Kontrola jakości: sanity-check vs PVGIS/benchmark lokalny; analiza wrażliwości (np. ±10% soiling, ±2°C temperatura ogniw).  
Pułapki: korzystanie z meteodanych nieadekwatnych do lokalizacji, bez kalibracji strat.

### Krok 7. Raportowanie i BOM
Zawartość raportu: założenia, model 3D, zestawienie komponentów, schematy jednokreskowe, parametry elektryczne stringów, wyniki symulacji, analiza strat, wykresy, wnioski i ograniczenia.  
BOM: ilości i kody katalogowe, długości kabli, złączki, zabezpieczenia, system montażowy.  
Pułapki: brak jednoznacznych założeń (temperatury, soiling), niekompletne zestawienie materiałów.

### Krok 8. Walidacja i zgodność
Zakres: wymagania OSD (praca z ograniczeniem eksportu, cos phi), wytyczne ppoż. i BHP, kompatybilność elektromagnetyczna, dokumentacja powykonawcza.  
Checklisty: granice napięć/prądów, spadki napięć, selektywność zabezpieczeń, uziemienie/połączenia wyrównawcze, wymagany zakres pracy falownika.

### Checklisty ekspresowe (do wykorzystania na zajęciach)
- Przed symulacją: lokalizacja/meteo ustawione? model 3D i cienie policzone? zakresy MPPT OK?  
- Po symulacji: PR w oczekiwanym zakresie? clipping akceptowalny? dominujące straty zidentyfikowane?  
- Przed raportem: BOM kompletny? założenia jawnie opisane? wariant A/B porównany?

---

## Przegląd narzędzi do projektowania systemów PV

### Tabela skrócona (przypomnienie)
| Narzędzie         | Typ | Główne zastosowania | Mocne strony | Ograniczenia (typowe) | Licencja |
|---|---|---|---|---|---|
| **PV*SOL premium** | Desktop | Projektowanie 2D/3D, szczegółowa symulacja, zacienienie | Silny model 3D i falowników, raporty, BOM | Wymaga danych wejściowych dobrej jakości | Komercyjna |
| **Sunny Design** | Web | Szybki dobór w ekosystemie SMA | Prostota, reguły doboru, raporty | Preferencja SMA, uproszczony 3D | Darmowe konto |
| **PVsyst** | Desktop | Analizy badawcze, farmy PV | Szczegółowe modele i scenariusze | Krzywa nauki | Komercyjna |
| **Aurora Solar** | Web | Projekt/kosztorys w chmurze | Automatyzacja, fotogrametria | Subskrypcja, zależność od chmury | Subskrypcja |
| **PVGIS** | Web | Estymacja zasobów i produkcji | Darmowy dostęp, wiarygodne meteo | Brak pełnego projektu elektrycznego | Darmowe |

> W kursie ćwiczymy PV*SOL premium (detal) i Sunny Design (szybkie warianty). Pozostałe — kontekst i porównanie.

### Rozszerzona charakterystyka narzędzi
**PV*SOL / PV*SOL premium (Desktop)**  
- Scenariusze użycia: dachy skośne/płaskie, małe i średnie komercyjne, projekty wymagające rzetelnego modelu zacienienia i precyzyjnych napięć/prądów.  
- Atuty: model 3D z siatką zacienień czasoprzestrzenną, biblioteka komponentów, szczegółowe raporty i BOM, analiza strat składowych.  
- Import/Export: obrazy/plan sytuacyjny, dane komponentów, raporty PDF; praca na warstwach i wariantach.  
- Uwaga praktyczna: dbaj o poprawne temperatury min/max — walidatory ostrzegą, ale projektant definiuje klimat pracy.

**Sunny Design (Web)**  
- Scenariusze użycia: szybkie studia wykonalności, projekty z falownikami SMA, porównywanie wariantów mocy/konfiguracji.  
- Atuty: reguły doboru łańcuchów, biblioteka SMA, raporty dla klienta, prosty workflow.  
- Granice: ograniczona głębia modelu 3D i analizy zacienienia; preferencja sprzętu SMA.

**PVsyst (Desktop)**  
- Scenariusze użycia: analizy badawcze, farmy PV, ocena strat zaawansowanych, wariantowanie.  
- Atuty: szczegółowe modele strat i konfiguracji, scenariusze shadingu, tryby pracy farmowej.  
- Granice: bardziej techniczny interfejs; mniejszy nacisk na prezentacyjne raporty dla klienta końcowego.

**Aurora Solar (Web)**  
- Scenariusze użycia: presales i projekt w chmurze, zespołowe ofertowanie, pomiar dachu z ortofotomapy/LiDAR (tam gdzie dostępne).  
- Atuty: automatyzacja rozmieszczeń, integracje sprzedażowe, wersjonowanie.  
- Granice: model biznesowy subskrypcyjny; zależność od jakości danych mapowych.

**PVGIS (Web)**  
- Scenariusze użycia: szybkie sanity-check, porównanie lokalizacji i orientacji, wstępna weryfikacja wyników innych narzędzi.  
- Atuty: bezpłatny, wiarygodne bazy meteodanych dla Europy, prosta obsługa.  
- Granice: brak pełnego modelu instalacji i schematów elektrycznych.

### Kryteria doboru narzędzia (checklista decyzyjna)
- Wymagana głębia modelowania: czy potrzebne jest 3D i dokładna siatka zacienień?  
- Ekosystem sprzętowy: czy inwestor preferuje konkretną markę falowników (np. SMA)?  
- Tryb pracy zespołu: desktop (offline) vs chmura (współpraca, presales).  
- Wymogi raportowe: raport techniczny/BOM vs materiały ofertowe.  
- Budżet/licencje: jednorazowa licencja vs subskrypcja; wersje edukacyjne.  
- Skala projektu: mikroinstalacja, C&I, farma — różne narzędzia sprawdzą się lepiej w różnych skalach.

### Typowe scenariusze i rekomendacje
- Dom jednorodzinny 6–10 kWp: PV*SOL premium (dokładne cienie, BOM) lub Sunny Design (warianty SMA).  
- Budynek komercyjny 50–200 kWp: PV*SOL premium (szczegół) + Sunny Design (warianty), opcjonalnie PVGIS do sanity-check.  
- Farma PV >1 MWp: PVsyst do analiz energetycznych + narzędzia CAD/GIS do planowania terenu.

### Wskazówki operacyjne (praktyka)
- Zawsze weryfikuj bibliotekę komponentów z kartą katalogową producenta (szczególnie napięcia i współczynniki temperaturowe).  
- Przy porównywaniu narzędzi kieruj się spójnością wyników (różnice do kilku procent) i powtarzalnością — nie pojedynczym runem.  
- Dokumentuj różnice w założeniach (meteodane, straty) — to one najczęściej tłumaczą rozbieżności wyników.

---

## PV*SOL, PV*SOL premium — architektura, porównanie, proces budowy projektów

**Architektura aplikacji (warstwowo):**
- **GUI 2D/3D**: geometra, moduły, przeszkody, analiza zacienienia.
- **Bazy komponentów**: moduły, falowniki, optymalizatory, magazyny; aktualizowane katalogi.
- **Silnik symulacyjny**: przeliczenia irradiancji → DC → AC, modele strat, interakcje MPPT.
- **Warstwa raportowania**: PDF/BOM, wykresy (energia, prądy/napięcia, straty).

**Model falownika — ujęcie praktyczne:**
- **Wejście DC**: liczba trackerów MPPT, **zakres napięć MPP**, napięcie start/wyłączenia, prąd na wejście.  
- **Krzywe sprawności**: obciążenie częściowe (EU/CEC), wpływ temperatury.  
- **Ograniczenia**: **DC/AC ratio**, **clipping** (ograniczenie mocy AC), napięcie maks. stringu w T_min.  
- **Sterowanie** (jeśli używamy): cos φ stały/sterowany, limity P/Q na punkt przyłączenia.  
- **Walidatory PV\*SOL**: ostrzeżenia o przekroczeniu zakresów (napięcia zimą/latem, prądy wejściowe, niebilans MPPT).

**Dobre praktyki doboru:**
- Najpierw ustaw **lokalizację/meteo** i **temperatury min/max** → potem dobieraj stringi.  
- Sprawdź **V\_oc@Tmin < V\_max\_DC** falownika oraz **V\_mpp zakres MPPT** dla T\_oper.  
- Celuj w **DC/AC ratio 1.1–1.3** (projektowo), ale zweryfikuj clipping vs profil nasłonecznienia.

---

## Sunny Design — środowisko i integracje

**Charakterystyka:**
- Aplikacja **webowa** do doboru systemów PV (i hybrydowych) z naciskiem na urządzenia **SMA**.  
- **Biblioteka komponentów** (moduły, falowniki, akcesoria), wbudowane reguły doboru łańcuchów.  
- Tworzy **raporty** (zestawienia, wykresy, podstawowe straty) i wspiera warianty.

**Integracje i workflow:**
- Spójny dobór urządzeń z ekosystemu SMA oraz generowanie materiałów ofertowych/instalacyjnych.  
- Import lokalizacji i danych słonecznych, możliwość eksportu dokumentacji.

**Kiedy wybrać Sunny Design:**
- Szybkie studium wykonalności, projekty z falownikami SMA, porównanie wariantów „na start”.

---

## PVsyst, Aurora Solar i PVGIS — krótkie charakterystyki

- **PVsyst** — „złoty standard” do analiz energetycznych i badań; bogaty moduł strat, warianty, farmy PV.  
- **Aurora Solar** — chmura, automatyzacja pomiarów dachu (z ortofoto/LiDAR, gdzie dostępne), konfiguracje komercyjne i sprzedażowe.  
- **PVGIS** — szybka estymacja uzysków i porównania lokalizacji; punkt odniesienia do sanity-check.

---

## PV\*SOL — schemat procesu projektowego (checklista 10 kroków)

1. **Nowy projekt** → lokalizacja, meteo, strefa czasowa.  
2. **Model 2D/3D** → dachy/powierzchnie, kalenice, przeszkody, balasty.  
3. **Analiza zacienienia** → siatka zacienień, horyzont, ewentualnie scenariusze (drzewa, lukarny).  
4. **Dobór modułu** → wymiary, moc, współczynniki temperaturowe.  
5. **Rozmieszczenie modułów** → reguły odstępów, marginesy, ciągi.  
6. **Dobór falownika** → liczba MPPT, napięcia, prądy, moc AC.  
7. **Projekt łańcuchów** → liczba modułów/string, strings per MPPT, sprawdzenie napięć @ Tmin/Tmax.  
8. **Okablowanie i straty** → długości, przekroje, spadki napięć DC/AC.  
9. **Symulacja** → wynik roczny/miesięczny, **PR**, straty składowe, wykres clippingu.  
10. **Raport i BOM** → PDF + zestawienie materiałów, zapis wariantu.

**Typowe błędy i jak ich unikać:**
- Niedoszacowanie napięcia zimą → zawsze sprawdź **V\_oc@Tmin**.  
- DC/AC ratio bez weryfikacji profilu nasłonecznienia → przejrzyj **wykres mocy chwilowej**.  
- Ignorowanie zacienień liniowych (kominy, anteny) → ustaw dokładne bryły i siatkę.

---

## Sunny Design — schemat procesu projektowego (8 kroków)

1. **Nowy projekt** → lokalizacja i typ instalacji (dach płaski/skośny/grunt).  
2. **Wybór modułów** → moc, wymiary, plan pokrycia.  
3. **Wybór falownika (SMA)** → moc, wejścia MPPT, zakresy napięć.  
4. **Automatyczny/ ręczny dobór łańcuchów** → weryfikacja zakresów napięciowych i prądowych.  
5. **Dane środowiskowe** → irradiancja, temperatura (wbudowane profile lub import).  
6. **Straty i ustawienia** → kablowe, soiling, orientacja.  
7. **Wyniki** → uzysk, PR, wykresy, wskaźniki autokonsumpcji (jeśli dotyczy).  
8. **Raport** → PDF z zestawieniem i schematem wysokopoziomowym.

---

## Demonstracje operacyjne

### Demo A (PV\*SOL): Dach skośny 10 kWp, Europa Środkowa
- **Cel:** zbudować model 3D, rozmieścić ~24–26 modułów, dobrać falownik ~10–12 kW, przeprowadzić symulację, wygenerować raport.  
- **Kroki skrócone:**  
  1) Nowy projekt → lokalizacja.  
  2) Geometria dachu 35°, azymut −20°, kalenice/okna i przeszkody.  
  3) Analiza zacienienia (siatka średnia).  
  4) Moduł 400 W → ułożenie w polach łańcuchów.  
  5) Falownik 10–12 kW, 2×MPPT → podział stringów.  
  6) Sprawdzenie napięć @ Tmin/Tmax i prądów wejściowych.  
  7) Straty kablowe i soiling (konserwatywnie).  
  8) Symulacja → analiza PR, wykres clippingu.  
  9) Raport PDF + BOM.

### Demo B (Sunny Design): Dach płaski ~50–100 kWp
- **Cel:** szybkie zwymiarowanie projektu w ekosystemie SMA i uzyskanie raportu.  
- **Kroki skrócone:**  
  1) Nowy projekt → wprowadź lokalizację.  
  2) Wybierz moduł 400 W i siatkę ustawienia (np. balast na południe 10–15°).  
  3) Dobierz falownik(e) SMA (np. 2–3 urządzenia) → automatyczny dobór łańcuchów.  
  4) Ustawienia strat podstawowych.  
  5) Wyniki i raport (wariant A/B z różną liczbą falowników).

---

## Podsumowanie: dobór narzędzia i najlepsze praktyki

**Kiedy które narzędzie?**
- **PV\*SOL**: gdy potrzebujesz **szczegółowego modelu** (3D, zacienienia, precyzyjne V/I, BOM).  
- **Sunny Design**: gdy chcesz **szybko** zweryfikować koncepcję w oparciu o falowniki **SMA** i uzyskać czytelny raport.  
- **PVsyst**: gdy projekt wymaga **analizy badawczej**/farmowej i scenariuszy strat.  
- **Aurora**: gdy liczy się **workflow zespołowy** i automatyzacja w chmurze.  
- **PVGIS**: gdy potrzebny jest **sanity-check** zasobów i produkcji.

**Najlepsze praktyki (Top-10):**
1. Zawsze zaczynaj od **lokalizacji i meteo** — reszta wynika z klimatu i temperatury.  
2. W modelu 3D odwzoruj **przeszkody** i sprawdź siatkę zacienień.  
3. Dobieraj łańcuchy **pod Tmin/Tmax**, nie tylko STC.  
4. Kontroluj **DC/AC ratio** i **clipping** na wykresach.  
5. Ustal **spadki napięć** (DC/AC) i przekroje kabli na wczesnym etapie.  
6. Weryfikuj **bazy komponentów** (karty katalogowe > biblioteka).  
7. Dokumentuj **założenia** w raporcie — ułatwia audyt i iteracje.  
8. Porównuj wyniki z **PVGIS** (rzut oka na sensowność).  
9. Pracuj wariantowo: **A/B** (moduł, falownik, orientacja).  
10. Na koniec przejdź **checklistę walidacyjną** (napięcia, prądy, zacienienia, PR).

**Zadanie do samodzielnego wykonania (po wykładzie):**
- Odtwórz **Demo A** na własnej lokalizacji i wygeneruj raport PDF.  
- W **Sunny Design** przygotuj 2 warianty tej samej mocy (1× duży falownik vs 2× mniejsze) i porównaj wskaźniki.

> Na kolejnych zajęciach przechodzimy do ćwiczeń ocenianych — proszę zachować wygenerowane raporty oraz pliki projektowe.

