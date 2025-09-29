# W5.2: **TOPFARM** (2h)

> Kurs: *Programy komputerowe w projektowaniu instalacji OZE* (sem. 5)  
> Tryb: wykład + pokaz na żywo + mini-ćwiczenia  
> Prowadzący: prof. (Twoje nazwisko)

---

## Cele i efekty uczenia się
Po zajęciach student/ka:
- rozumie, czym jest **TOPFARM** i kiedy warto go stosować (greenfield, repowering, micro-siting, dobór typu turbiny, wysokości gondoli),
- potrafi zbudować **łańcuch obliczeniowy**: zasób wiatru → model strat oddziaływania wirników (wake) → cel (AEP/LCOE) → ograniczenia → optymalizator,
- zna różnice między optymalizacją **AEP** a **LCOE/NPV** i umie uzasadnić wybór funkcji celu,
- potrafi skonfigurować podstawowy problem w TOPFARM i zinterpretować wyniki (layout, straty wake, CF, mapa produkcji),
- zna **checklistę jakości danych** oraz typowe pułapki (skalowanie różności, nieciągłości, błędne krzywe mocy/ciągu).

---

## Spis treści
- [TOPFARM — opis i znaczenie dla projektanta](./07-topfarm-znaczenie.md)
- [Proces modelowania/projektowania w TOPFARM](./08-proces-topfarm.md)
- Załączniki: minimalny przykład, checklista danych, typowe błędy, zadanie do samodzielnego wykonania, rubryka ocen, FAQ.

---

## [07-topfarm-znaczenie.md] **TOPFARM — opis i znaczenie dla projektanta**

### 1. Czym jest TOPFARM?
**TOPFARM** to otwarty ekosystem w Pythonie do **optymalizacji farm wiatrowych**. Łączy:
- **model produkcji energii** (AEP) oparty na przepływie wiatru i modelach wake,
- **model kosztów** (np. prosty LCOE lub rozbudowane koszty lokalne),
- **ograniczenia inżynierskie i środowiskowe** (odstępy, strefy wykluczeń, hałas, migotanie cienia, linie przesyłowe, nachylenie terenu),
- **optymalizatory** (gradientowe i/lub heurystyczne) wraz z restartami i badaniem wielu punktów startowych.

TOPFARM jest skryptowalny (Python), modularny i **przezroczysty obliczeniowo** – nadaje się do badań, projektowania koncepcyjnego i replikowalnych analiz.

### 2. Gdzie TOPFARM sprawdza się najlepiej?
- **Greenfield (layout od zera):** dobór liczby i pozycji turbin w granicach terenu.
- **Micro-siting:** drobne przesunięcia turbin dla minimalizacji strat wake lub ryzyk (hałas, cień, ptaki).
- **Repowering:** wymiana floty (większe średnice, większe wieże) z ograniczeniami istniejącej infrastruktury.
- **Dobór wariantu turbiny:** jednorodny (single WTG) vs. mieszany (mix WTG) pod konkretny rozkład wiatru.
- **Onshore/Offshore:** różne ograniczenia (batymetria, odległość od kabli, portów, głębokości, wrażliwość środowiskowa).

### 3. Dlaczego projektant powinien znać TOPFARM?
- **Otwartość i replikowalność:** pełna kontrola nad łańcuchem obliczeń i wersjonowaniem.
- **Praca z niepewnością:** łatwość parametryzacji scenariuszy (UQ, Monte Carlo, wrażliwość na TI, shear, rugosność).
- **Szybkie prototypowanie:** tworzenie własnych funkcji celu/kar i niestandardowych ograniczeń.
- **Integracje naukowe:** łączenie z bibliotekami GIS, narzędziami do optymalizacji, silnikami przepływowymi i narzędziami raportującymi.

> **Uwaga praktyczna:** TOPFARM nie jest narzędziem „klikanym” jak klasyczne GUI. To jego zaleta przy projektach badawczo‑rozwojowych, ale wymaga dyscypliny w **kontroli jakości danych** i **dokumentacji**.

### 4. Porównanie ideowe z innymi narzędziami
| Aspekt | TOPFARM | WindPRO / OpenWind / WindFarmer | QBlade |
|---|---|---|---|
| Interfejs | Python (skrypty) | GUI (komercyjne) | Gł. aero i profil łopaty, symulator turbiny |
| Cel | Optymalizacja layoutu, funkcje celu (AEP/LCOE) | Projekt + raporty + moduły compliance | Analiza aerodynamiki turbiny, BEM, łopaty |
| Modele wake | Wymienne (proste → zaawansowane) | Zależne od pakietu/modułu | Nie dotyczy makroskopowego layoutu |
| Elastyczność | Bardzo wysoka (tworzenie własnych komponentów) | Wysoka w ramach modułów | Wysoka, lecz skupiona na pojedynczej turbinie |
| Raporty | Programowalne (np. do LaTeX/Word/CSV) | Gotowe szablony | Wyniki aero, mniej farmowe |

### 5. Architektura logiczna (wysoki poziom)
1. **Dane wejściowe**: róża wiatru / rozkład sektorów, TI, shear, orografia, rugosność, granice poligonu, strefy wykluczeń, krzywe mocy i ciągu.
2. **Site & Turbines**: definicja lokalizacji i modeli turbin.
3. **Model wake**: wybór i parametryzacja (szybkość vs dokładność).
4. **Funkcja celu**: np. maksymalizacja AEP lub minimalizacja LCOE/NPV.
5. **Ograniczenia**: minimalne odstępy (np. ≥4–8D), hałas, cień, środowisko, nachylenie.
6. **Optymalizator**: dobór algorytmu, starty, ograniczenia i tolerancje.
7. **Post‑processing**: mapy produkcji, rozkład strat, CF, raport wyników.

### 6. Kluczowe pojęcia dla decyzji projektowych
- **AEP (Annual Energy Production)**, **straty wake**, **efficiency farmy**, **CF (capacity factor)**.
- **Krzywa mocy** i **krzywa współczynnika ciągu (Ct)** turbiny.
- **TI (turbulence intensity)**, **wind shear**, **stabilność atmosfery** — wpływ na wake.
- **Ograniczenia twarde/miękkie** (hard/soft constraints) oraz funkcje kar.
- **Jednorodny vs. mieszany park turbin** — kompromis między logistyką a dopasowaniem do rozkładu wiatru.

---

## [08-proces-topfarm.md] **Proces modelowania/projektowania w TOPFARM**

### Przegląd procesu (10 kroków)
1. **Zebranie i sanity-check danych**  
   Źródła: pomiary mast/LiDAR/SoDAR, modele mesoskalowe, DEM/DTM, pokrycie terenu, strefy zakazów, infrastruktura.  
   Sprawdź: jednostki, układ współrzędnych, kompletność sektorów, spójność krzywych mocy i Ct.

2. **Definicja obszaru i ograniczeń**  
   Granice (poligon), **strefy wykluczeń** (bufory od dróg, zabudowy, sieci, cieków, obszarów Natura 2000), **min. odstępy** (np. ≥4–8D wzdłuż kierunku dominującego), **maks. nachylenie**.

3. **Model turbiny**  
   Wybór turbiny (średnica *D*, hub height) i **krzywych mocy/Ct** (źródło producent). Przy mieszanych flotach: tablica typów.

4. **Wybór modelu wake i parametrów**  
   Zależnie od skali i danych: modele szybkie (np. gaussian/park-like) vs. dokładniejsze (kalibrowane). Parametryzacja TI, rozmycie wake, superpozycja.

5. **Funkcja celu**  
   - **AEP**: maksymalizacja rocznej produkcji (często pierwszy etap).  
   - **LCOE/NPV**: dodanie **modelu kosztu** (CAPEX, OPEX, straty dostępności), cen energii, stóp dyskonta.  
   - **Cele wielokryterialne**: np. AEP z karą hałasu/cienia lub minimalizacja ryzyka środowiskowego.

6. **Inicjalizacja układu**  
   Siatka regularna/hex, próbki quasirandom (Hammersley/Sobol), lub naprawa istniejącego layoutu. **Wiele punktów startowych** zwiększa szansę na optimum globalne.

7. **Wybór optymalizatora i ustawienia**  
   Algorytmy gradientowe (np. SLSQP, trust-constr) — szybkie przy gładkich modelach; heurystyczne/metaheurystyki — odporne na nieciągłości.  
   Ustaw: granice pozycji (bounds), tolerancje, limity iteracji, restart z perturbacjami.

8. **Uruchomienie optymalizacji**  
   Profiluj wydajność: liczba sektorów/klas prędkości, równoległość, cache wyników. Zapisuj **historię iteracji** i layouty pośrednie.

9. **Walidacja i wrażliwość**  
   Sprawdź wynik innym modelem wake, zrób **analizę wrażliwości** (TI, shear, rozdzielczość sektora), testy *hold-out* na innych danych wiatrowych.

10. **Raport i decyzja**  
   Mapa turbin, wektor produkcji sektorowej, **bilans strat** (wake, elektrownia, dostępność), CF, LCOE. Przygotuj warianty i rekomendację.

---

### Minimalny przykład (schemat) — Python
> Poniższy szkic ilustruje przepływ pracy; nazwy klas mogą się różnić między wersjami.

```python
import numpy as np
# 1) Dane zasobu i teren (tu: uproszczenie)
sectors = np.arange(0, 360, 30)  # 12 sektorów
wind_speeds = np.array([6, 8, 10, 12])
probabilities = np.ones((len(sectors), len(wind_speeds)))
probabilities /= probabilities.sum()

# 2) Teren i granice (poligon)
bounds = {"xmin": 0, "xmax": 5000, "ymin": 0, "ymax": 5000}

# 3) Model turbiny (krzywe mocy/Ct)
class SimpleWTG:
    D = 150.0
    hub_height = 120.0
    def power(self, u):
        # krzywa mocy (kW) — placeholder
        return np.clip((u - 3) / (12 - 3), 0, 1) * 6000
    def ct(self, u):
        return 0.8 * np.exp(-((u-8)/4)**2)

wtg = SimpleWTG()

# 4) Model wake (placeholder)
def wake_losses(layout_xy, sectors, wind_speeds):
    # zwraca macierz strat [%] na turbinę/sektor/prędkość — placeholder
    return 0.1  # 10% strat, dla szkicu

# 5) Funkcja celu: maksymalizacja AEP

def AEP(layout_xy):
    # layout_xy: shape (N,2)
    base = 0
    for th in sectors:
        for u in wind_speeds:
            p = wtg.power(u)
            loss = wake_losses(layout_xy, th, u)
            base += (1 - loss) * p
    return -base  # minus, by minimalizator minimalizował -AEP

# 6) Ograniczenie: minimalny odstęp >= 4D

def min_spacing_violation(layout_xy, D=wtg.D, k=4.0):
    from itertools import combinations
    min_allowed = k * D
    for i, j in combinations(range(len(layout_xy)), 2):
        d = np.linalg.norm(layout_xy[i] - layout_xy[j])
        if d < min_allowed:
            return True
    return False

# 7) Inicjalizacja i prosta optymalizacja (heurystyczna)
np.random.seed(0)
N = 12
layout = np.column_stack([
    np.random.uniform(bounds["xmin"], bounds["xmax"], N),
    np.random.uniform(bounds["ymin"], bounds["ymax"], N),
])

best = layout.copy()
best_val = AEP(best)
for it in range(200):
    cand = best + np.random.normal(0, 50, best.shape)
    # naprawa do granic
    cand[:,0] = np.clip(cand[:,0], bounds["xmin"], bounds["xmax"])
    cand[:,1] = np.clip(cand[:,1], bounds["ymin"], bounds["ymax"])
    if min_spacing_violation(cand):
        continue
    val = AEP(cand)
    if val < best_val:
        best, best_val = cand, val

print("Gotowe: AEP* =", -best_val)
```

> W praktyce zastępujemy powyższe „placeholdery” odpowiednimi komponentami TOPFARM (site, wake, objective, constraints, optimizer) i integrujemy z bibliotekami przepływowymi oraz GIS.

---

### Checklista danych wejściowych (QA)
- **Róża wiatru**: pełne pokrycie sektorów (0–360°), spójne klasy prędkości, właściwe prawdopodobieństwa (∑=1), ewentualnie rozkłady pory dnia i stabilności.
- **TI i shear**: reprezentatywne dla wysokości gondoli; sposób skalowania z poziomu referencyjnego jasno udokumentowany.
- **DEM/DTM** + **rugosność**: zgodny układ współrzędnych; rozdzielczość adekwatna do skali farmy.
- **Krzywe mocy i Ct**: z tej samej wersji turbiny (nazwa, firmware), właściwe jednostki, brak ekstrapolacji poza zakres.
- **Poligony i bufory**: kolejność wierzchołków, topologia (poligony bez samoprzecięć), SRID/CRS spójny z resztą.

---

### Typowe błędy i sposoby ich unikania
1. **Niedoszacowanie TI** → zbyt optymistyczne wyniki; zawsze dokumentuj źródło i niepewność.
2. **Zbyt „gęsta” siatka startowa** → wiele naruszeń odstępów; stosuj reparacje i filtry przed optymalizacją.
3. **Nieciągłości w funkcji celu** (twarde progi hałasu/cienia) → preferuj miękkie kary lub optymalizatory odporniejsze.
4. **Jedna inicjalizacja** → ryzyko optimum lokalnego; uruchamiaj **wiele startów**.
5. **Brak walidacji modelem alternatywnym** → dodaj co najmniej jeden niezależny model wake i porównaj bilans strat.

---

### Wzorzec raportu (co powinno być na końcu)
- **Mapa layoutu** z granicami i strefami.
- **AEP [MWh/rok]**, **straty wake [%]**, **CF [%]**, **LCOE [€/MWh]** (jeśli dotyczy),
- **Rozkład sektorowy produkcji** i **róża strat**,
- **Tabela odstępów** (min/med/max), naruszenia i naprawy,
- **Analiza wrażliwości** (±TI, ±shear),
- **Wnioski i rekomendacja wariantu** (np. A/B/C).

---

## Mini‑ćwiczenia na wykładzie (5–10 min każde)
1. **Kalibracja modelu wake**: jak zmienia się AEP przy ±10% TI?
2. **Odstęp 4D vs 6D**: wpływ na AEP i liczbę turbin.
3. **AEP vs LCOE**: pokaż przypadek, w którym layout o wyższym AEP ma gorsze LCOE (droższa logistyka/serwis).

---

## Zadanie domowe / Projekt (do oddania na kolejnych zajęciach)
**Temat:** Optymalizacja layoutu 10–20 turbin dla hipotetycznej lokalizacji onshore.  
**Warianty:** (A) maks. AEP, (B) min. LCOE z karą hałasu.  
**Oddanie:** notebook + raport PDF (max 6 stron) z mapą, tabelami, wnioskami.

**Kryteria oceny (rubryka):**
- Poprawność danych wejściowych i dokumentacja (20%)
- Poprawność definicji celu/ograniczeń (20%)
- Metodyka optymalizacji (wielo-start, ustawienia, uzasadnienie) (25%)
- Analiza wyników i wrażliwość (20%)
- Klarowność raportu i wnioski (15%)

---

## FAQ (dla projektantów)
- **Czy zawsze maksymalizować AEP?**  
  Nie. Przy wysokich kosztach logistycznych lub ograniczeniach środowiskowych **LCOE** bywa lepszą metryką.
- **Który model wake wybrać?**  
  Zacznij od szybkiego dla skanu wariantów; końcową decyzję waliduj modelem dokładniejszym.
- **Ile punktów startowych?**  
  Tyle, by zapewnić stabilność rozwiązania (zależnie od złożoności terenu i liczby turbin; często ≥10–20).  
- **Czy mieszać typy turbin?**  
  Tak, jeśli rozkład wiatru i ograniczenia terenowe uzasadniają; rośnie jednak złożoność logistyki.

---

### Dalsza praca
- Rozszerz model LCOE o **krzywe kosztów** zależne od odległości do dróg i nachylenia (GIS),
- Dodaj ograniczenia hałasu/cienia jako **miękkie kary** i porównaj działanie optymalizatorów,
- Przetestuj strategię **„cluster & refine”**: globalny skan + lokalna optymalizacja gradientowa.

---

> **Notatka dla prowadzącego:** przygotuj zestaw krótkich skryptów: (1) QA danych, (2) inicjalizacja layoutu, (3) uruchomienie optymalizacji AEP, (4) raport mapowy. Użyj jednego spójnego przykładu na całe 2h.

