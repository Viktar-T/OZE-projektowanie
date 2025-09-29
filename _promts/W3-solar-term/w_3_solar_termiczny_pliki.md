# 01-wprowadzenie-do-solar-termiczny.md

## Wprowadzenie do systemów solarnych termicznych (perspektywa oprogramowania)

**Cel wykładu/sekcji:** zrozumieć jak programy projektowe modelują układy solarne termiczne (ST) i jakie dane są krytyczne dla wiarygodnych wyników.

### 1. Krajobraz zastosowań a wymagania modelu
- **c.w.u.** w budynkach mieszkalnych/usługowych – nacisk na profil dobowy, cyrkulację i higienę (antylegionella), marginesy mocy szczytowej.
- **Baseny** – duże wahania sezonowe, niskie temperatury zasilania; istotna jest **moc chwilowa** i straty parowania.
- **Wspomaganie c.o.** – praca w niższych temp. zasilania (podłogówka), większe magazyny, sterowanie priorytetami.
- **Procesy przemysłowe** – specyficzne harmonogramy, odbiory stałomocowe, często własne wymienniki i reżimy temp.

### 2. Jak program „widzi” system ST
- **Źródło**: kolektor płaski/próżniowy/CPC opisany *krzywą sprawności* (η₀, a₁, a₂) i ograniczeniami temp.
- **Magazyn**: model zasobnika (warstwowość, straty postojowe, wężownice, objętość) i jego sprzężenie z odbiorami.
- **Hydraulika**: obiegi solarne (glikol/drain-back), pompy, zawory, wymienniki, cyrkulacja c.w.u., straty liniowe.
- **Sterowanie**: histerezy ΔT, priorytety źródeł, harmonogram antylegionella.
- **Klimat**: typowe lata meteorologiczne (TMY/Meteonorm), rozdzielczość godzinowa lub podgodzinowa.
- **Ekonomia**: CAPEX/OPEX, scenariusze cen energii, LCOH (koszt jednostkowy ciepła), SPBT, NPV.

### 3. Dane wejściowe – jakość ponad wszystko
- **Lokalizacja i dane meteo**: wybór najbliższej stacji vs. korekta lokalna (miejskie wyspy ciepła, mgły).
- **Profil zużycia**: dobowy i sezonowy; preferowane importy CSV (kolumny: `datetime; demand_lph` lub `kWh`).
- **Parametry komponentów**: *nie* „z głowy” – korzystaj z bibliotek producentów (Solar Keymark/ISO 9806), wpisuj realne długości i izolacje.
- **Ograniczenia budowlane**: kąt, azymut, strefy zakazu, przeszkody zacieniające.

### 4. Metryki i wskaźniki, które raportujemy
- **Uzysk roczny** [kWh/rok] i **sprawność sezonowa** kolektora [%].
- **Pokrycie solarne** *f*\_sol [%] dla odbioru (np. c.w.u.).
- **Oszczędność energii końcowej/pierwotnej** [kWh/rok] i **redukcja CO₂** [t/rok].
- **Straty**: zasobnik, rurociągi, cyrkulacja, postój.
- **Ekonomia**: LCOH, SPBT/DPBT, NPV, IRR (gdy dostępne).

### 5. Poziomy szczegółowości modeli
- **Uproszczone feasibility** (RETScreen/SAM): szybkie porównania, ograniczona hydraulika.
- **Dedykowane ST** (T*SOL/Polysun): szablony schematów, dokładne profile, biblioteki.
- **Symulacje ogólne** (TRNSYS): pełna swoboda, większy nakład modelowania, potrzeba walidacji.

### 6. Standardy i nomenklatura (skrót dla projektanta)
- **ISO 9806 / EN 12975** – metody badań kolektorów; parametry η₀, a₁, a₂.
- **Solar Keymark** – certyfikacja kolektorów; dane wejściowe do bibliotek.
- **Legionella** – wymogi higieniczne (np. podgrzewy do 60–70 °C w określonych interwałach).

### 7. Typowe ryzyka modelowania i jak je kontrolować
- **Przewymiarowanie** → stagnacja, degradacja glikolu. ✅ Kontrola: analiza letnia, strategia „heat dump”, większy magazyn.
- **Zaniżone straty cyrkulacji** → przeszacowanie efektu. ✅ Wpisuj realne długości/izolacje, wykorzystuj harmonogramy pracy pomp.
- **Nieadekwatny profil** → błędny dobór objętości. ✅ Korzystaj z danych licznikowych lub wiarygodnych bibliotek.

### 8. Dostarczalne artefakty projektowe (co klient powinien dostać)
- Raport techniczny (założenia, wyniki, warianty, ryzyka), listy komponentów, rysunki/schematy, kalkulacja ekonomiczna, aneks danych wejściowych.

---

# 02-proces-modelowania.md

## Proces modelowania/projektowania systemów solarnych termicznych (szczegółowy workflow)

Poniżej **rozszerzony** proces z wejściami/wyjściami, kontrolą jakości i wskazówkami do oprogramowania.

### Krok 1. Cel projektu i kryteria sukcesu
**Wejście:** typ odbioru (c.w.u./basen/c.o.), ograniczenia budynku, budżet.  
**Wyjście:** metryki (np. *f*\_sol ≥ 50%, LCOH ≤ X PLN/kWh), zakres raportu.  
**QA:** czy metryki są mierzalne i policzalne w narzędziu?

### Krok 2. Dane klimatyczne i lokalizacja
**Wejście:** punkt meteo (TMY/Meteonorm), wysokość n.p.m., korekty lokalne.  
**Wyjście:** plik meteo w formacie programu.  
**Wskazówka:** w przypadku specyficznych mikroklimatów – użyj korekty globalnej irradiancji ±5–10% i sprawdź wrażliwość.

### Krok 3. Profil zapotrzebowania
**Wejście:** dobowo‑godziny, sezonowość, dni robocze/weekendy, temp. zadana.  
**Wyjście:** plik CSV (np. `datetime; demand_lph`).  
**QA:** zgodność sum rocznych z audytem/założeniami; test szczytów (P95/P99).  
**Szablon CSV (zalecany):** `timestamp; demand_lph; T_set_C; is_weekend`.

### Krok 4. Wstępny dobór kolektorów
**Wejście:** typ, powierzchnia dostępna, azymut/tilt, przeszkody.  
**Wyjście:** warianty: A (płaskie), B (próżniowe), C (CPC).  
**Pułapka:** zbyt strome kąty na dachach płaskich → samocieniowanie.

### Krok 5. Schemat hydrauliczny
Wybierz z szablonów programu: glikol + wymiennik, drain‑back, dwie wężownice, schematy kombinowane.  
**QA:** zamknięcie bilansu objętości, prawidłowe czujniki, zawory bezpieczeństwa.

### Krok 6. Magazyn energii (zasobnik)
**Reguła startowa:** 40–70 l/m² kolektora (dla c.w.u.), koryguj po profilach.  
**Wyjście:** model zasobnika (objętość, straty, warstwowość).  
**Wskazówka:** dla basenów często wystarcza wymiennik bez dużego magazynu.

### Krok 7. Źródło szczytowe i sterowanie
Zdefiniuj priorytet solaru, harmonogramy antylegionella, progi ΔT start/stop pomp.  
**QA:** brak taktowania (zbyt małe ΔT), sprawdź liczbę cykli/dobę.

### Krok 8. Straty instalacyjne
**Wejście:** długości i średnice rur, izolacje, strefy nieogrzewane.  
**Wyjście:** straty liniowe [W/K], straty cyrkulacji [kWh/rok].  
**Pułapka:** nieuwzględniona cyrkulacja potrafi „zjeść” uzysk.

### Krok 9. Zacienienie i ograniczenia montażowe
Modeluj kominy/attyki i odstępy rzędów; oceniaj cień sezonowo.  
**QA:** czy nie ma cienia własnego przy niskim słońcu zimą?

### Krok 10. Symulacja i sanity‑check
**Ustawienia:** krok godzinowy, pełen rok; ostrzeżenia: stagnacja, przekroczenia temperatur, kawitacja.  
**Sanity:** porównaj uzysk specyficzny [kWh/m²·rok] z literaturą/benchmarkiem dla PL (orientacyjnie 250–450 dla c.w.u.).

### Krok 11. Wariantowanie i optymalizacja
Zmiany *po jednym parametrze* (A/B testy): powierzchnia, pojemność, ΔT, izolacje, typ kolektora.  
**Narzędzia:** kopiowanie wariantów, porównania tabelaryczne i wykresy radarowe.

### Krok 12. Ekonomia i ryzyko
**Wejście:** CAPEX (kolektory, montaż, orurowanie, automatyka), OPEX (serwis glikolu, pompy, przeglądy).  
**Wyjście:** LCOH, SPBT/NPV, analiza wrażliwości (±20% na cenie energii i uzysku).  
**Ryzyka:** ceny energii, degradacja sprawności, przerwy w pracy.

### Kontrola jakości (QC) – lista do odhaczenia
- [ ] Dane meteo zgodne z lokalizacją.
- [ ] Profil zapotrzebowania – suma roczna i szczyty zweryfikowane.
- [ ] Straty cyrkulacji policzone i realistyczne.
- [ ] Brak ostrzeżeń o stagnacji w wariancie finalnym.
- [ ] Raport zawiera założenia i warianty.

### Harmonogram warsztatowy (2h)
1. 0:00–0:15 – ustawienie projektu, meteo, profil.  
2. 0:15–0:40 – dobór kolektorów, schemat, zasobnik.  
3. 0:40–1:10 – straty, sterowanie, cienie.  
4. 1:10–1:30 – symulacja i sanity‑check.  
5. 1:30–2:00 – 3 warianty + raport skrócony.

### Rubryka oceny mini‑projektu (0–100 pkt)
- Poprawność danych wejściowych (20),
- Konfiguracja hydrauliczna i sterowanie (20),
- Analiza wyników i wariantowanie (25),
- Ekonomia i ryzyko (20),
- Jakość raportu i wniosków (15).

---

# 03-porownanie-programow.md

## Porównanie dostępnych programów (funkcje, ograniczenia, licencje)

### Tabela porównawcza (rozszerzona)

| Program | Poziom szczegółowości | Biblioteki komponentów | Hydraulika / szablony | Zacienienie/3D | Dane meteo | Import/Export | Ekonomia | Batch/param. study | API/Scripting | Raporty | Licencja / krzywa nauki |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **T*SOL (Valentin)** | Wysoki (dedykowany ST) | Szerokie (kolektory, zasobniki, pompy) | Kilkadziesiąt szablonów + edycja | 2D/3D, odstępy rzędów | Meteonorm/TMY | CSV profili, PDF/Word raporty | Tak (LCOH, SPBT) | Porównanie wariantów | — | Profesjonalne | Komercyjna / szybka |
| **Polysun** | Bardzo wysoki, modułowy (ST+PV+HP) | Bardzo szerokie | Edytor schematów element po elemencie | 3D cieniowanie | Meteonorm | CSV, IFC/BIM (wybrane), raporty | Rozbudowana | Tak (scenariusze) | Tak (templates) | Elastyczne | Komercyjna / średnia |
| **TRNSYS (+TESS)** | Bardzo wysoki (czasowy) | Biblioteki typów | Dowolna (modelujesz sam) | Zewnętrzne narzędzia | Różne | Dowolne, własne formaty | Własne moduły | Tak (pełna swoboda) | Tak | Zależne od setupu | Komerc./akadem. / stroma |
| **RETScreen Expert** | Niski–średni (feasibility) | Ogólne | Brak szczegółowej | — | Globalne bazy | Excel/CSV | Silna | Ograniczone | — | Decyzyjne | Subskrypcja / niska |
| **SAM (NREL)** | Średni (SHW/feas.) | Ograniczone | Szablony | — | TMY | CSV, raporty | Tak | Częściowo | — | Dobre | Bezpłatny / średnia |
| **HOMER Pro** | Systemowy (mikrosieci) | Ogólne | Brak detalu ST | — | Globalne | CSV | Bardzo silna | Tak (opt.) | — | Decyzyjne | Komercyjna / średnia |

> Uwaga: funkcjonalności i licencje mogą się zmieniać w wersjach – sprawdzaj aktualne specyfikacje producentów.

### Zalety/wady w praktyce biurowej
- **T*SOL**: + szybkość iteracji, czytelne raporty; − mniej elastyczny przy niestandardowych sterowaniach.
- **Polysun**: + elastyczne schematy, integracje hybrydowe; − dłuższa konfiguracja, wyższa złożoność.
- **TRNSYS**: + dowolność modelu, badania naukowe; − stromy próg wejścia, potrzeba walidacji.
- **RETScreen/SAM**: + wstępna opłacalność; − brak detali hydraulicznych.
- **HOMER**: + optymalizacja systemowa (mikrosieci); − uproszczenia ST.

### Integracja z CAD/BIM i wymiana danych
- Eksport raportów do **PDF/Word**, tabele do **CSV/Excel**; zdjęcia/wykresy do **PNG/SVG**.
- W projektach BIM: import geometrii i ekspozycji z IFC – zwykle przez narzędzia pośrednie (Polysun/TRNSYS).

### Drzewo decyzyjne – wybór narzędzia
1. **Czy potrzebujesz szczegółowej hydrauliki i szybkich raportów?** → T*SOL.  
2. **Czy układ jest hybrydowy/nietypowy?** → Polysun lub TRNSYS.  
3. **Czy to tylko analiza opłacalności?** → RETScreen lub SAM.  
4. **Czy analizujesz mikrosieć (PV+genset+storage+ST)?** → HOMER (z zastrzeżeniami do ST).

### Przykładowe wyjścia raportowe (co porównać)
- Uzysk [kWh/rok], *f*\_sol, straty (zasobnik, rury, cyrkulacja), czas pracy pomp.  
- LCOH, SPBT/NPV, wrażliwość ±20% na ceny energii i uzysk.  
- Wykresy miesięczne uzysku i pokrycia.

---

# 04-tsol-znaczenie.md

## T*SOL – znaczenie programu dla projektanta (praktyka i dobre praktyki)

### Dlaczego T*SOL?
- **Dedykacja do ST**: biblioteki kolektorów (parametry z certyfikacji), zasobników i osprzętu, gotowe schematy.
- **Produktywność**: iterujesz warianty w minutach; spójne raporty „dla inwestora i banku”.
- **Kontrola ryzyk**: ostrzeżenia dot. stagnacji, przegrzewów, strat cyrkulacji; wizualizacja profili temp.

### Kluczowe moduły i funkcje
- **Baza komponentów**: filtrowanie po producencie/typu kolektora, modele zasobników (pojemność, straty, warstwowość).
- **Schematy hydrauliczne**: wybór i modyfikacje szablonów (glikol, drain‑back, dwie wężownice, kombinowane).
- **Meteo i profile**: biblioteka Meteonorm, import własnych profili CSV (godzinowe/dzienne).
- **Zacienienie i układ pól**: odległości między rzędami, przeszkody, kąty/azymuty.
- **Ekonomia**: koszty, ceny energii, LCOH, SPBT; wariantowe porównania.
- **Raportowanie**: zestawienia energetyczne, wykresy, listy komponentów, podsumowania dla wniosków dotacyjnych.

### Dobre praktyki użytkowe
1. **Nazewnictwo projektów i wariantów**: `ST_DHW_[Miasto]_YYYYMM_V1A` – porządek to połowa sukcesu.  
2. **Jedna zmiana na wariant**: łatwiejsza interpretacja różnic (A/B).  
3. **Profil z danych rzeczywistych**: gdy to możliwe, import z ciepłomierza/licznika.  
4. **Sanity‑check uzysku**: porównaj kWh/m²·rok do benchmarków lokalnych.  
5. **Walidacja letnia**: czy układ nie wchodzi w stagnację? zaplanuj „heat dump” lub zmień sterowanie.

### Zaawansowane wskazówki
- **Własny model kolektora**: gdy brak w bibliotece – wykorzystaj parametry z karty Solar Keymark (η₀, a₁, a₂).  
- **Antylegionella**: testuj różne harmonogramy (np. 1×/tydz.) i wpływ na *f*\_sol oraz zużycie źródła szczytowego.  
- **Cyrkulacja**: osobny obieg z harmonogramem – kontroluj straty w trybie nocnym.  
- **Sezonowy heat‑dump**: kaloryfer/odbiornik techniczny lub zrzut do basenu – zabezpieczenie przed stagnacją.  
- **Analiza wrażliwości**: kopiuj wariant i modyfikuj ±10–20%: profil, ceny, izolacje.

### Najczęstsze ostrzeżenia i reakcje
- **„Ryzyko stagnacji”** → zwiększ pojemność magazynu, zmień ΔT, dodaj odbiornik sezonowy.  
- **„Zbyt wysokie temp. w obiegu”** → dopasuj przepływy, zawory mieszające, izolacje.  
- **„Taktowanie pomp”** → zwiększ histerezy, sprawdź czujniki.

### Mini‑case (przykład biurowy)
Hotel 80 pokoi, c.w.u., 60 m² płaskich kolektorów, 2×1000 l zasobniki.  
**Wyniki (orientacyjne):** *f*\_sol 45–55%, uzysk 18–24 MWh/rok, SPBT 6–9 lat (zależnie od ceny energii).  
**Ryzyko:** stagnacja latem przy obłożeniu <30% → rekomendacja: dynamiczny harmonogram basenu lub heat‑dump.

### FAQ projektanta (skrót)
- **Ile danych meteo potrzebuję?** – pełny rok godzinowy; przy nietypowej lokalizacji rozważ korekty.  
- **Czy mogę modelować pompę ciepła jako źródło szczytowe?** – tak, jako źródło wspomagające (szczegóły zależą od wersji).  
- **Jak raportować do finansującego?** – wyniki bazowe + warianty + analiza wrażliwości + lista założeń.

---

# 05-proces-tsol.md

## Proces modelowania/projektowania w T*SOL (krok po kroku + checklisty)

### 0. Przygotowanie
- Ustal konwencję nazw: `ST_[Obiekt]_[Cel]_[YYYYMM]_[Vx]`.  
- Załóż folder `input/` (meteo, profile), `output/` (raporty), `variants/` (kopie projektów).

### 1. Nowy projekt → typ zastosowania
- Wybierz szablon: c.w.u. / basen / c.o. / kombinowane.  
- Uzupełnij metryki celu (np. *f*\_sol, LCOH) – trzyma to dyscyplinę.

### 2. Lokalizacja i dane klimatyczne
- Wybierz miejscowość, sprawdź TMY/Meteonorm.  
- Jeśli to projekt w dolinie/na wzgórzu – rozważ ±5% korekty irradiancji (test wrażliwości).

### 3. Profil zapotrzebowania (import CSV)
- Przygotuj plik: `timestamp; demand_lph; T_set_C`.  
- Zweryfikuj sumy roczne i szczyty godzinowe (podgląd wykresu w narzędziu).  
- Dla obiektów z cyrkulacją – uwzględnij harmonogram pracy pompy cyrkulacyjnej.

### 4. Kolektory i układ montażu
- Wybierz model z biblioteki; ustaw azymut/kąt/odstępy rzędów.  
- Dodaj przeszkody (kominy, attyki) i sprawdź cień sezonowy.  
- **Pro tip:** dachu płaskie – tilt 25–35°, odległość między rzędami ≥ 1,5–2× wysokość modułu (test zimowy).

### 5. Schemat hydrauliczny
- Wybierz szablon i doprecyzuj: pompy, wymienniki, zawory, czujniki.  
- Dla drain‑back – sprawdź spadki i odpowietrzenie (zgodność z praktyką montażową).

### 6. Zasobnik i magazynowanie
- Dobierz pojemność startową (np. 50 l/m² dla c.w.u.) i sprawdź wpływ ±20%.  
- Zdefiniuj warstwowość i położenie czujników (ładowanie górnej/środkowej strefy).

### 7. Źródło szczytowe i antylegionella
- Zdefiniuj źródło (kocioł/HP/elektryka), priorytety i harmonogramy.  
- Antylegionella: 1×/tydz. do 60–70 °C – obserwuj wpływ na *f*\_sol i OPEX.

### 8. Instalacja rurowa i straty
- Wprowadź **realne** długości i średnice; izolacje wg projektu; odcinki w strefach nieogrzewanych.  
- Osobno zdefiniuj cyrkulację c.w.u. (harmonogram!).

### 9. Parametry sterowania
- Ustaw ΔT start/stop pomp (np. 8/4 K dla c.w.u. – zależnie od wytycznych).  
- Dodaj zabezpieczenia przed przegrzewem i zamarzaniem.

### 10. Symulacja i weryfikacja ostrzeżeń
- Uruchom pełen rok; przejrzyj ostrzeżenia: stagnacja, temp. maks., taktowanie.  
- Zapisz wyniki jako `V1_base`.

### 11. Wariantowanie (3–5 wariantów)
- V2: +20% kolektorów, V3: +50% magazynu, V4: inny typ kolektora, V5: zmiana ΔT i izolacji.  
- Porównaj energię, *f*\_sol, czasy pracy pomp, ekonomię.

### 12. Raporty i dokumenty końcowe
- Raport techniczny + skrócony (dla inwestora), listy komponentów, wykresy miesięczne.  
- Dodaj aneks: założenia, profil, ceny energii, warianty.

### Checklisty operacyjne
**Po konfiguracji wejść:**
- [ ] Profil CSV wczytany i zgodny z założeniami.  
- [ ] Kolektory – brak samocieniowania zimą.  
- [ ] Zasobnik – sensowna pojemność; brak skrajnych temp.

**Po symulacji:**
- [ ] Brak ostrzeżeń krytycznych.  
- [ ] Uzysk specyficzny i *f*\_sol w spodziewanym zakresie.  
- [ ] Ekonomia policzona, wrażliwość ±20% wykonana.

### Typowe problemy i szybkie naprawy
- **Za wysokie temp. w lecie** → większy magazyn lub heat‑dump, korekta ΔT.  
- **Niski *f*\_sol** → sprawdź straty cyrkulacji, izolacje, harmonogram odbioru.  
- **Taktowanie pomp** → zwiększ histerezę, popraw lokalizację czujników.

### Zadanie dla studentów (oddanie za tydzień)
1. Budynek: akademik 200 osób, lokalizacja: Gdańsk.  
2. Zbuduj 3 warianty (płaskie/próżniowe, różne pojemności).  
3. Dostarcz: uzysk, *f*\_sol, straty (z podziałem), LCOH, SPBT, wrażliwość ±20%.  
4. Krótki wniosek (≤200 słów) – rekomendacja wariantu + ryzyka.

### „Speedrun” 20 minut (na ćwiczeniach)
- Szablon c.w.u. → Meteo → Profil → Kolektory (azymut/tilt) → Zasobnik → Straty → ΔT → Symulacja → porównanie dwóch wariantów → mini‑raport.

