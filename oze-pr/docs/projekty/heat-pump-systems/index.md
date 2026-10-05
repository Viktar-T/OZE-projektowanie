---
sidebar_position: 4
title: Projekt - Systemy pomp ciepła (4 godziny) - GeoT*SOL
---

# Projekt - Systemy pomp ciepła (4 godziny) - GeoT*SOL

## 🎯 Cel projektu

Zapoznanie się z oprogramowaniem **GeoT\*SOL** poprzez wykonanie projektu systemu pompy ciepła (powietrznej lub gruntowej) dla wybranego budynku jednorodzinnego. Zadanie polega na przeanalizowaniu przykładowego przypadku z webinaru GeoT\*SOL i odtworzeniu podobnego projektu z dostosowaniem do **warunków lokalnych w Polsce (np. Szczecin)**.

**Czas realizacji:** 4 godziny (2 zajęcia)

**Wymagania wstępne:**
- Zainstalowane oprogramowanie GeoT\*SOL (wersja próbna)
- Podstawowa wiedza z wykładów o pompach ciepła i systemach niskotemperaturowych
- Dostęp do materiałów pomocniczych (manual GeoT\*SOL, transkrypt webinaru, przykładowe dane obiektu)

## 📚 Źródła informacji

### Dokumentacja (30 min)

- **[GeoT\*SOL Help / Manual](https://help.valentin-software.com/geotsol/en/geotsol/)** – wbudowana pomoc kontekstowa (F1 w programie)
- **[GeoTSOL Basic Manual.pdf](./docs/GeoTSOL%20Basic%20Manual.pdf)** – Podstawowy podręcznik użytkownika GeoT\*SOL

### Materiały multimedialne

- **Webinar Valentin Software (język niemiecki) – planowanie systemów pomp ciepła w GeoT\*SOL**  
  

:::tip Wskazówka
Zalecamy, aby przed rozpoczęciem pracy w programie obejrzeć fragment webinaru lub przynajmniej przeanalizować jego transkrypt – szczególnie część dotyczącą **workflow w GeoT\*SOL** (definicja projektu, wybór danych klimatycznych, dobór pompy ciepła, tryby pracy, symulacja i analiza wyników).
:::
<iframe
  src="https://www.youtube.com/embed/z9tQNGKhjtw"
  title="Webinar Valentin Software - Planowanie systemów pomp ciepła w GeoT*SOL"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ width: '100%', height: '400px' }}
></iframe>

<details>
<summary><strong>📝 Transkrypcja webinaru (kliknij, aby rozwinąć)</strong></summary>

### Wprowadzenie

Witamy na webinarium Valentin Software. Dzisiaj pokażemy planowanie i projektowanie systemów pomp ciepła za pomocą naszego programu GeoT*SOL. Nazywam się Sigsten Fiedkauer i jestem jednym z prowadzących dzisiejsze webinarium.

Po mojej stronie jest mój kolega Thomas Nedeker. Cześć Thomas. Tak, cześć drodzy goście, cześć Sigsten.

Miło, że dołączyliście do nas na dzisiejszym webinarium. Sigsten już o tym wspomniał. Dzisiaj chodzi o planowanie i projektowanie systemów pomp ciepła, głównie dla domów jednorodzinnych i dwurodzinnych.

Zaczniemy od krótkiego wprowadzenia, czyli damy wam mały przegląd tego, jaki będzie dzisiaj zakres treści. Potem przełączymy się na program na żywo i przedstawimy nasze planowanie systemu. Dziękuję bardzo.

Tak, dokładnie tak. Czego możecie się spodziewać w ciągu następnych 40-45 minut? Chcemy przedstawić program GeoT*SOL. Na początku przejdziemy do ustawień ogólnych.

Następnie zaplanujemy system geotermalny, przygotowanie ciepłej wody użytkowej i wspomaganie ogrzewania. Podczas planowania przejdziemy do różnych źródeł ciepła, które można wybrać, a także do różnych systemów, które można wybrać. Tak, potem są różne metody pracy i na samym końcu oczywiście prezentacja i przegląd wyników.

Podczas webinarium macie również możliwość zadania nam kilku pytań. Proszę użyć funkcji czatu po prawej stronie ekranu. Jak zawsze, staramy się odpowiedzieć na jak najwięcej pytań.

Niestety, ze względu na ograniczony czas i liczbę uczestników, nie będzie możliwe odpowiedzenie na wszystko. Z góry za to przepraszamy. Co jeszcze mamy? Planujemy system geotermalny do wspomagania ogrzewania i ciepłej wody użytkowej.

Oznacza to oczywiście, że potrzebujemy również kilku specyfikacji, które musimy określić. Musimy zdefiniować zapotrzebowanie na ciepłą wodę użytkową, a także zapotrzebowanie na ogrzewanie. Teraz znaleźliśmy rachunek dla wniosku budowlanego.

Zobaczmy, jakie specyfikacje są tam zawarte. Co możecie z nami wykorzystać i czego w ogóle potrzebujecie? To również jest jasne. Z jednej strony potrzebujemy powierzchni obiektu.

W naszym przypadku mamy około 390 metrów kwadratowych. Co mamy dla ogrzewania ciepłej wody użytkowej? 4867 kWh rocznie. Musimy to wprowadzić.

Następnie mamy ogrzewanie. Musimy zdefiniować zapotrzebowanie na ogrzewanie. Tutaj mamy małą tabelę z miesięcznym rozkładem, którą możemy następnie wprowadzić do programu przy definiowaniu naszych wymagań.

### Uruchomienie programu i ustawienia ogólne

Dobrze. Teraz przełączylibyśmy się na program. To jest GeoT*SOL, ekran powitalny przy uruchamianiu programu.

Nie zdziwcie się, jest trochę mniejszy. Niestety, nie można go teraz powiększyć. Skalowanie do pełnej szerokości ekranu.

Ale mam nadzieję, że nadal wszystko widzicie całkiem dobrze. Zanim zaczniemy od właściwego planowania, Thomas, kilka słów o ustawieniach ogólnych. Dokładnie, to właśnie chciałem zrobić.

Chciałem zacząć. Chodzi głównie o pasek menu, który widzimy tutaj w górnej krawędzi okna. Tutaj na przykład pod pozycją menu plik, zwykłe podejrzenia.

Mogę rozpocząć nowe projekty. Mogę otworzyć istniejące projekty. Mogę je zapisać w innym miejscu.

Tutaj mam również możliwość eksportu do PVSOL zapotrzebowania na moc pompy ciepła lub ewentualnie pompy źródłowej w profilu obciążenia. Istnieje interfejs w naszym programie fotowoltaicznym PVSOL Premium, który mogę wyeksportować jako system fotowoltaiczny. Następnie na przykład mogę zaimportować ten profil obciążenia pompy ciepła.

I oczywiście możemy również zakończyć program tutaj. Następnie jest następna pozycja, bazy danych. Wśród nich są oczywiście pompy ciepła, a mianowicie przystępne cenowo pompy ciepła oparte na liście WAFA.

Są również regularnie aktualizowane. Mamy również bazę danych kolektorów, którą pobieramy z T*SOL i bazę danych dla kotłów. Jeśli teraz przełączymy się na opcje, jest podzielone na cztery obszary.

Dane użytkownika, raport projektu, aktualizacja internetowa i podpis. Otwieramy całość i wtedy widzimy tutaj dane użytkownika. Oznacza to, że wprowadzacie dane swojej firmy, adres, dane kontaktowe i macie również możliwość załadowania logo firmy.

Całość pojawi się następnie na okładce prezentacji lub w nagłówku następnych stron. Następnie przechodzimy do raportu projektu. Tutaj mamy możliwość zdefiniowania treści za pomocą różnych pól wyboru, które powinny być zawarte w tym raporcie.

Kliknijcie w pole, oznacza to, że jest w środku. Jeśli usuniecie pole wyboru, zostanie usunięte. Dokładnie, potem aktualizacja internetowa.

Tutaj możemy sprawdzić, że powinno być sprawdzane raz dziennie przy pierwszym uruchomieniu programu, czy dostępna jest nowa wersja lub nawet nowa wersja programu. Ale jak widać, możecie również sprawdzić całość ręcznie tutaj przez "Teraz". I podpisy.

Chodzi o projekty i raporty projektowe. I możecie następnie użyć tej ikony folderu, aby określić, gdzie całość powinna być przechowywana i zabezpieczona. Tak, to były opcje.

Następnie mamy dwa języki, przez które możemy nawigować w menu. Niemiecki i angielski. I w pomocy widzimy, że mamy dostęp do pomocy online.

Więc jeśli naciśniecie klawisz F1 w odpowiednim oknie dialogowym, wtedy zostanie wyświetlona odpowiednia pomoc. I tutaj mogę również ręcznie sprawdzić aktualizacje ponownie i zajrzeć do rejestracji. Jeśli nie chcecie lub nie chcecie wiedzieć, której wersji programu nie macie, możecie również ponownie sprawdzić informacje w sekcji Informacje.

### Dane projektu i wybór danych klimatycznych

Tak więc to już wszystko z ustawieniami wstępnymi i informacjami. Teraz zaczynamy właściwe planowanie systemu. I aby to zrobić, przełączamy się na ten pasek menu tutaj.

To również reprezentuje przepływ pracy tutaj w programie. Oznacza to, że zaczynamy tutaj po lewej stronie na stronie powitalnej, a następnie musimy przejść w prawo, aż dojdziemy do wykresów wyników lub wyników symulacji. I całość dzieje się albo przez bezpośrednie kliknięcie na jedną z tych ikon, albo możemy również użyć dwóch klawiszy strzałek, które widzicie tutaj po lewej, do przodu i do tyłu.

I zaczniemy teraz od danych projektu. Tak, to są bardziej ogólne dane dla projektu. Więc możemy nadać mu tytuł, numer oferty, gdzie znajduje się lokalizacja systemu, informacje o kliencie.

Możecie utworzyć adres klienta. Jakie jest imię klienta? Możecie również napisać w opisie projektu. Jeśli macie dostępne zdjęcie projektu, możecie również załadować je tutaj.

JPEG, bitmapa, cokolwiek. I wszystkie te dane ostatecznie pojawią się na stronie okładki prezentacji. I wtedy macie ładną ulotkę.

W dolnej części widzimy dane klimatyczne. To jest pierwszy duży krok planowania, że tak powiem. Musimy wybrać nasze dane klimatyczne dla lokalizacji, w której planujemy.

Kliknijmy wybierz. Tak, a potem mogę otworzyć całe okno. Dokładnie, narzędzie wyboru danych klimatycznych z sym, które jest tutaj zaimplementowane.

I tutaj mam różne możliwości wyboru moich danych klimatycznych ponownie. Z jednej strony jest tutaj widok listy. W górnej części jest menu rozwijane, gdzie mogę wybrać różne kraje.

A w dolnej części poszczególne lokalizacje danych klimatycznych są tabelarycznie i alfabetycznie wymienione dla odpowiedniego kraju, który jest tutaj uwzględniony. Dla Niemiec jest to około 450 lokalizacji danych klimatycznych. Źródło danych, czyli dane Niemieckiej Służby Meteorologicznej.

I znajduję tutaj w tabeli dalsze informacje o numerze pocztowym, o promieniowaniu do poziomu. Następnie mamy średnią temperaturę zewnętrzną. I oczywiście bardzo ważny jest obszar pomiaru, w którym te dane zostały zebrane.

Jeśli mam połączenie z internetem, mogę również wybrać całość za pomocą widoku mapy. I tutaj mam tę zaletę, że mam wyszukiwanie numeru pocztowego. Więc nie muszę przewijać całej tabeli, aby zobaczyć, czy dostępny jest zestaw danych klimatycznych, którego chcę.

Jak się do tego zabrać? Oczywiście po prostu wprowadźcie numer pocztowy. W naszym przypadku jest to 14542. A potem klikamy przycisk Start.

A wtedy widzimy na czerwono wszystkie lokalizacje danych klimatycznych, które są również przechowywane w bazie danych. A na żółto, to jest lokalizacja, której szukam. A jeśli na to spojrzymy, to jest Werder Havel.

A następna lokalizacja to byłby Poczdam. I teraz muszę pomyśleć, czy chcę użyć tej następnej lokalizacji, czy chcę użyć innej funkcjonalności tutaj w Meteosyn. A to oznacza, że mogę również utworzyć własne lub nowe lokalizacje klimatyczne.

I uruchamiam tę opcję tutaj w lewym dolnym rogu za pomocą przycisku "Utwórz nową lokalizację". Tak, wtedy otwiera się nowe okno. Nie wygląda jak to, co właśnie widzieliśmy.

Mamy ponownie wybór krajów na górze. Mamy funkcję wyszukiwania. Możecie również wyszukać nazwę lokalną, szerokość i długość geograficzną lub po prostu numer pocztowy.

Teraz wchodzimy tutaj, 14542, klikamy Start. Wtedy odpowiedni wynik wyszukiwania jest ponownie przybliżony. W naszym przypadku czerwony znacznik.

Kliknijcie na niego, zaznaczcie, że tak powiem. Wtedy lokalizacja systemu jest przejęta. Możecie teraz dodać numer pocztowy.

I teraz musimy zdecydować, czy chcemy interpolować, czy mam własne zmierzone dane? Interpolacja oznacza, że istniejące zestawy danych są uwzględniane w bazie danych i nowe dane są z nich interpolowane dla żądanej lokalizacji. Jeśli mam własne dane, przechodzę do "Zmierzone dane". Obraz zmienia się trochę.

Mogę uzyskać dostęp do źródła danych na górze. Oczywiście musisz wprowadzić okres pomiaru. To byłoby bardzo korzystne.

Wtedy wiecie, z którego roku pochodzą dane. I w małej tabeli tutaj muszę odpowiednio wprowadzić wartości promieniowania. Klikam na to.

Możecie wybrać różne jednostki. Jeśli nadal macie temperatury, mogę je również wprowadzić. Jeśli nie, są one automatycznie interpolowane z istniejących zestawów danych.

Zrobię teraz szybką interpolację. Kliknijcie na Meteonorm. Wszystko w porządku? Wtedy nowy zestaw danych jest generowany i przechowywany w bazie danych.

Później, gdy macie inne projekty w tej samej lokalizacji, możecie kontynuować planowanie z tym. Oto jest, Werder Havel. Tutaj jest uwaga, że każdy okres pomiaru nieznacznie odbiega od tego z Niemieckiej Służby Meteorologicznej, od oryginalnych danych.

Wszystkie nowo utworzone opierają się na Meteonorm, podobnie jak te poza Niemcami. Mają okres pomiaru od 1991 do 2010. Tak to działa.

Zestaw danych został przejęty. Możemy teraz przejść do następnej ikony. To jest właściwy wybór systemu w tym obszarze.

### Wybór systemu i źródła ciepła

Jest trochę podzielony. Najpierw musimy zdefiniować źródła ciepła. To może być ciepło gruntowe, sonda gruntowa lub kolektor gruntowy.

Następnie jest powietrze zewnętrzne i woda gruntowa. Dzisiaj zdecydowaliśmy się zaplanować system z powietrzem zewnętrznym. W drugim obszarze muszę wybrać system pompy ciepła, którego chcę.

Teraz jest opcja w prawym górnym rogu. Który widok chcę? Czy chcę widok ikon, czyli ikony systemów, czy chcę wybór listy dostępnych systemów? Po prawej stronie jest rodzaj funkcji filtrowania. Ustawmy wszystkie na bezczynności.

Wtedy mamy wyświetlony pełny zakres wszystkich dostępnych systemów. Wspomaganie ogrzewania jest zawsze wybrane. Następnie mogę wybierać między ciepłą wodą użytkową, systemem hybrydowym, który ma drugi nośnik energii, np. kocioł, który również zapewnia ciepło i wspomaganie ogrzewania, lub może inny system solarny.

Zdecydowaliśmy się dodać system ogrzewania ciepłej wody użytkowej i kocioł, który wspomaga pompę ciepła. Chcemy zrezygnować z systemu solarnego. Wtedy mamy teraz cztery dostępne systemy.

Wśród nich wybraliśmy system dla systemu pompy ciepła numer 8. To jest system pompy ciepła z przełącznikiem hydraulicznym. Ma oddzielne magazyny buforowe dla ogrzewania i ciepłej wody użytkowej. Klikamy na to i wybieramy.

Wtedy całość jest przejęta, również tutaj w przeglądzie, po prawej stronie okna. Teraz chodzi o zdefiniowanie wymagań. Sixten wspomniał o tym na początku, że jest ogrzewanie i ciepła woda użytkowa.

### Definicja zapotrzebowania na ogrzewanie

Przełączmy się na następne okno. Najpierw chodzi o ogrzewanie. Pamiętamy tabelę na początku, gdzie teraz potrzebujemy wartości.

Ale najpierw musimy określić, jakie są procenty obiegu grzewczego niskiej i wysokiej temperatury. W naszym przypadku mamy nowoczesny dom. Mamy tylko obieg grzewczy niskiej temperatury.

Więc możemy to zostawić na 100%. Następnie muszą być zdefiniowane temperatury zasilania i powrotu, że odpowiednie obiegi grzewcze, 35 stopni Celsjusza i 28 stopni Celsjusza, są już obiegami grzewczymi wysokiej temperatury. Ale tego nie mamy.

Więc całość jest odpowiednio posortowana. Nie mogę tam wprowadzić żadnych zmian. Potem chodzi o właściwe zapotrzebowanie.

Są różne możliwości. Możecie wprowadzić obciążenie grzewcze, potem sumę roczną, jeśli to mam. Lub, jak w naszym przypadku, mamy wartości miesięczne.

Kliknijcie miesięczne, kliknijcie mały link, wartości miesięczne. I teraz musimy wprowadzić nasze wartości dla poszczególnych miesięcy. I tak, to jest styczeń 1515, następnie 1241.

Potem mamy 583 w marcu. W kwietniu mamy tylko bardzo mało, trzy. A w miesiącach od maja do września w ogóle nie mamy zapotrzebowania na ogrzewanie.

Od października zaczyna się ponownie, powoli, 22 kWh. Potem mamy łącznie 1001 kWh w listopadzie. W grudniu było ponownie 1674.

Tak więc teraz przenieśliśmy naszą małą tabelę tutaj. To jest tutaj wypełnione. Wszystko jest tutaj w porządku.

Czego jeszcze potrzebujemy tutaj na tej stronie? Musimy wprowadzić ogrzewaną powierzchnię użytkową. Nasze 389,4 metry kwadratowe, które również wybraliśmy z pracy budowlanej. Chcemy temperaturę pokojową 21 stopni.

Potem odgrywa rolę temperatura graniczna ciepła. Oczywiście nie ma standardu, chcę mieć K40, czy mam standardowe budynki i tak dalej? Weźmy tutaj 12, złoty środek, NF2009 lub wyższy. Temperatura zewnętrzna, minus 14 stopni, pasuje.

Zostawmy to tak. I tym samym ostatecznie zdefiniowaliśmy nasze zapotrzebowanie na ogrzewanie. Następny punkt.

### Definicja zapotrzebowania na ciepłą wodę użytkową

Przechodzimy jedno okno dalej. Teraz chodzi o ciepłą wodę użytkową. Pamiętamy, że mieliśmy zapotrzebowanie na 4865 kWh.

Więc już znamy zużycie. Musimy wprowadzić 291 litrów, aby uzyskać naszą odpowiednią liczbę kWh. Ponieważ chcemy temperaturę 50 stopni Celsjusza.

Zobaczmy, 4865 pasuje. Obliczmy temperatury zimnej wody z danych klimatycznych. Są tam temperatury.

Jeśli chcę, mogę oczywiście również zdefiniować tutaj cyrkulację. Nie robimy tego w tym przypadku. Tym samym ostatecznie ukończyliśmy podstawy.

Zdefiniowaliśmy naszego konsumenta wody, zdefiniowaliśmy nasze ogrzewanie, nasze zapotrzebowanie na ogrzewanie. Teraz chodzi o parametryzację systemu. Musimy wybrać, jaką pompę ciepła chcemy użyć, jaki kocioł i tak dalej.

### Dobór pompy ciepła i kotła

Dokładnie. Następnie musimy wybrać pompę ciepła i kocioł, jak właśnie wspomniałem. I tutaj na prawej krawędzi okna jest możliwość otwarcia bazy danych lub dostępu do bazy danych.

Więc kliknijcie wybierz. A następnie w następnym kroku wybierzcie żądanego producenta tutaj po lewej. Wybierzcie po obu stronach.

Kliknijcie raz, a następnie wprowadźcie początkowe litery, jeśli to możliwe. Chcemy mieć pompę ciepła powietrze-woda. I tutaj mamy kolejne okno wyszukiwania.

Tutaj możecie wprowadzić części oznaczenia, aby to trochę ograniczyć. W naszym przypadku jest to 8 IAR. A potem potrzebujemy zmiennej i B. A potem mamy nadzieję, że to odpowiednio ograniczy.

I tutaj już jesteśmy. Tutaj mamy naszą pompę ciepła. Tutaj mamy współczynnik wydajności.

I mamy również moc znamionową 8 kW. Więc chcemy tego użyć w przyszłości. Jeśli pompy ciepła nie są dostępne, wyślijcie e-mail na database.valentin-software.com. A wtedy dodalibyśmy więcej pomp ciepła z listy buforowej.

Inną opcją byłoby skopiowanie jednej z istniejących pomp ciepła. Robi się to poprzez wybranie jednej. Następnie kliknijcie prawym przyciskiem myszy na kopiuj.

I w kopii mamy możliwość nadpisania nazwy lub wybrania innego producenta. A następnie mamy również dostęp do punktów kontrolnych, które możemy następnie zmienić. Lub możemy również dodać informacje do obszaru zastosowania.

Standardowe zestawy danych nie mogą być edytowane. Ale jeśli wcześniej utworzycie kopię, wtedy macie odpowiedni dostęp. Dobrze, pompa ciepła jest wybrana.

Kopiujemy ją i jest następnie skopiowana. To samo dotyczy teraz kotła. Wybierzcie go raz.

Następnie chcemy również użyć typu produktu kotła gazowego. Wprowadzamy to tutaj odpowiednio. I tutaj mamy również możliwość, ze względu na dużą liczbę kotłów, wprowadzenia małego terminu wyszukiwania.

A to byłoby w tym przypadku GB172. A potem zobaczmy, że ograniczamy wybór tutaj trochę. Dokładnie.

Już się stało. Wybieramy teraz ten najmniejszy kocioł, ten z 14,2 kW. Jest kliknięty.

Wybierz. A potem całość jest tutaj przejęta. I możemy kontynuować nasze planowanie i teraz przechodzimy do definicji źródła ciepła.

### Definicja źródła ciepła

W naszym przypadku jest to stosunkowo proste. Nie możemy tutaj wprowadzić żadnych dalszych wpisów. To wszystko jest pobrane z zestawu danych.

Nazwa wentylatora i prąd objętościowy. To jest po prostu w zestawie danych. Gdybyśmy wybrali inne źródło ciepła, na przykład sondę źródła ciepła lub kolektor, wtedy byłoby kilka dodatkowych informacji do wprowadzenia, do obszaru i tak dalej.

Może wrócimy do tego na samym końcu, aby zobaczyć nieco inny obraz, aby uzyskać wrażenie, co mogłoby być ewentualnie wymagane. Następnie przechodzimy do następnego kroku. Chodzi o definicję metod pracy.

### Definicja trybów pracy

Dokładnie. Następnie musimy określić, czy całość jest monowalentna, monoenergetyczna. I już widać w systemach z kotłami, że możliwe są tylko dwuwartościowe metody pracy.

Monowalentny zasadniczo oznacza, że pompa ciepła dostarcza całe ciepło grzewcze aż do najniższej temperatury zewnętrznej. Drugi generator ciepła, taki jak kocioł, nie byłby konieczny. Monoenergetyczny oznacza, że oprócz systemu grzewczego pompa ciepła mogłaby ewentualnie używać drugiego rodzaju energii, takiego jak ogrzewanie elektryczne.

To byłoby monoenergetyczne. Ale jak powiedziałem, to nie jest możliwe w naszym przypadku, ponieważ mamy kocioł. Dla kotła musimy teraz zdefiniować, jak to wszystko działa.

Dla kotła oba działają równolegle. Bivalent równoległy oznaczałby, że kocioł i pompa ciepła stale działają równolegle w tym samym czasie. Następnie mogę określić bivalent alternatywny, czyli albo-albo.

Albo pompa ciepła, albo kocioł działają. Jeśli klikniemy na to, wtedy musimy określić temperaturę po prawej, do której pompa ciepła i do której pompa ciepła działa. A powyżej temperatury lub poniżej temperatury działałby tylko kocioł.

A potem jest znowu bivalent równoległy. Oznacza to, że w pewnym zakresie temperatur działają zarówno pompa ciepła, jak i kocioł. Powyżej temperatury działa tylko pompa ciepła.

A poniżej dolnej temperatury działałby tylko kocioł. W naszym przypadku to jest 7 stopni. Powyżej 7 działa tylko pompa ciepła.

Aż do minus 10 stopni. Poniżej tej temperatury działałby tylko kocioł. A w zakresie między 7 a minus 10 oba działają równolegle.

I w dolnym zakresie jest możliwość zdefiniowania taryf i terminów. Tak to jest. Klikamy na to raz.

Wtedy otwiera się małe okno. Nie wiem, czy chcemy wchodzić w taryfy, bo nie chcemy tak dokładnie patrzeć na ekonomię. Ale tutaj moglibyście wprowadzić cenę podstawową, a następnie pracować z taryfami wysokimi i niskimi, jeśli chcecie.

A następnie zdefiniować odpowiednie czasy taryfowe. To jest tutaj całkiem interesujące. Czasami dostawcy energii również przepisują terminy.

Możecie je odpowiednio zdefiniować tutaj na dole. Wtedy musicie kliknąć na to. A następnie, w zależności od tego, co otrzymacie, musicie odpowiednio wprowadzić czasy.

Na przykład od 7 do 8. Drugi termin powinien być między 12:30 a 14:00. Widzicie to tutaj na dole. Pojawiają się teraz komunikaty. Czasami terminy muszą być krótsze niż dwie godziny i tak dalej.

Wtedy również otrzymujecie wskazówki. Jeśli coś się znowu stanie, wprowadzicie liczbę nieprawidłowo i tak dalej. Wtedy otrzymujecie ostrzeżenie.

Dobrze. Trzeci termin jest od 6 do 19:00. I to wszystko. Tutaj jest napisane OK.

Zdefiniujcie terminy. I okno byłoby tutaj teraz zakończone. Przejdźmy do następnego kroku planowania.

### Wymiarowanie zasobników

Chodzi o to, jaki magazyn jest używany, lub nie możecie wybrać typu magazynu, ale musicie zdefiniować rozmiar magazynu. Dokładnie. Musimy zdefiniować objętość i grubość izolacji dla naszego magazynu ciepłej wody użytkowej, a także dla naszego magazynu ogrzewania.

Objętość magazynu ciepłej wody użytkowej powinna pozostać na 300 litrach. A magazyn buforowy ogrzewania robimy trochę mniejszy, 120 litrów. A dla izolacji pozostajemy na 100 milimetrach.

Teraz jesteśmy tutaj w pasku symboli. Następnym byłby kolektor słoneczny. Wybraliśmy system bez wspomagania solarnego termicznego.

Dlatego ten kolektor jest teraz wyszarzony. Jeśli oczywiście wybrany jest inny system, wtedy również byłby do edycji. A wtedy również, jak już wspomniano na początku, uzyskalibyśmy dostęp do naszej bazy danych kolektorów.

### Symulacja i wyniki

Tak, wtedy możemy ładnie symulować i spojrzeć na wyniki symulacji. Co teraz ma miejsce, to dynamiczna symulacja minutowa dla całego roku. Za pomocą tego ostatecznie określimy wszystkie istotne charakterystyki, zarówno pompy ciepła, systemu pompy ciepła, jak i całego systemu generatora.

Więc gdybym miał na przykład system solarny termiczny, wtedy również byłby widoczny. I tak, zobaczymy za chwilę. Następnie otrzymujemy różne roczne współczynniki pracy, energię, która jest dostarczana i tak dalej.

Symulacja jest zakończona. To jest strona wyników. Mamy różne zakładki tam na górze, jak widzimy.

Roczne współczynniki pracy, energia, a potem są jeszcze dwa z tych praw termicznych. Jedno jest ważne ogólnokrajowo dla nowych budynków, a jest też jedno dla istniejących budynków, które jest tylko w Badenii-Wirtembergii, na końcu jest dodatkowo znowu. Ale zacznijmy od rocznych współczynników pracy.

Już widzimy, że są również bardzo różne. Rocznym współczynnikiem pracy jest zasadniczo stosunek użycia do wysiłku. I jest wydawany raz dla właściwej pompy ciepła, 3,75 w naszym przypadku, dla całego systemu pompy ciepła.

A gdybyśmy mieli system z dodatkowymi kolektorami, wtedy otrzymalibyśmy również wartość dla rocznego współczynnika pracy dla tego systemu generatora. 3,75 wygląda całkiem OK. A po prawej stronie tutaj jest trochę inaczej.

To jest obliczanie rocznych współczynników pracy według VDI 4650. To jest właściwie to, co jest głównie używane do promocji lub jest wymagane. I tam już widzimy, że mamy różnicę 4,05. Jeśli nie jesteście pewni, co jest czym teraz, możecie również kliknąć na ten mały znak zapytania tutaj.

Wtedy zostaniecie pomożeni. I tutaj znajdziecie również wyjaśnienie dla odpowiednich rocznych współczynników pracy. Jest też cała masa.

To może być mylące. Ale tutaj mamy na przykład według VDI 4650, jest mały opis. W górnej części mamy ostatecznie te roczne współczynniki pracy dla różnych systemów, czyli systemów pomp reklamowych lub systemów generatorów.

Możecie to ponownie przeczytać. Dobrze. Możemy zamknąć pomoc ponownie.

Co jeszcze mamy tutaj? Mamy tutaj energię. Więc to, co dostarcza odpowiednia pompa ciepła lub kocioł. W naszym przypadku pompa ciepła dostarcza około 70 procent.

Więc około 7650 kilowatogodzin. Około jednej trzeciej kotła jest dostarczane. Więc przyczyniło się do naszych potrzeb.

A potem widzimy tutaj z energią, co jest dostarczane gdzie. Dla ogrzewania około 6000 kilowatogodzin. Dla ciepłej wody użytkowej około 4880 kilowatogodzin.

Wszystko eleganckie. Co mamy tutaj na dole? Jest energia elektryczna, która jest tam potrzebna. Te 2043 kilowatogodziny.

To jest ostatecznie to, co mógłbym na przykład wyeksportować. To, co mieliśmy na samym początku, Thomas powiedział, że to jest eksport do PVSOL. To może być następnie wyeksportowane do takiego profilu obciążenia.

Ten profil obciążenia może być następnie zaimportowany do PVSOL. A wtedy możecie zobaczyć, czy na dachu jest system PV, czy to może ostatecznie zaspokoić potrzeby naszej pompy ciepła. Po prawej stronie widzimy tylko straty magazynowe w naszym przypadku.

Około 750 kilowatogodzin. Gdybyśmy teraz mieli system z cyrkulacją, a także z kolektorem, wtedy nadal mielibyśmy straty magazynowe i tak dalej. W naszym przypadku tego nie ma.

Dlatego nie otrzymujemy żadnych wartości. Wtedy przeskoczylibyśmy tutaj do wykresów wyników. Możecie spojrzeć na całość ponownie dla poszczególnych miesięcy.

Myślę, że są tutaj pokazane nawet wartości tygodniowe lub 10-dniowe, te poszczególne punkty. Roczny przebieg obciążenia tutaj przez cały rok. Możecie na to spojrzeć.

A także jakie energie są generowane.

</details>

<details>
<summary><strong>🔑 Kluczowe parametry przykładowego systemu z webinaru (kliknij, aby rozwinąć)</strong></summary>

### Parametry obiektu

- **Powierzchnia użytkowa:** 389,4 m²
- **Temperatura pokojowa:** 21°C
- **Temperatura zewnętrzna projektowa:** -14°C
- **Standard budynku:** NF2009 lub wyższy
- **Temperatura graniczna ciepła:** 12°C

### Zapotrzebowanie energetyczne

**Ogrzewanie (rozkład miesięczny):**
- Styczeń: 1515 kWh
- Luty: 1241 kWh
- Marzec: 583 kWh
- Kwiecień: 3 kWh
- Maj–Wrzesień: 0 kWh
- Październik: 22 kWh
- Listopad: 1001 kWh
- Grudzień: 1674 kWh
- **Suma roczna:** ~6039 kWh

**Ciepła woda użytkowa:**
- **Zapotrzebowanie roczne:** 4867 kWh/rok
- **Zużycie:** 291 l/dzień
- **Temperatura:** 50°C
- **Cyrkulacja:** brak

### Lokalizacja i dane klimatyczne

- **Lokalizacja:** Werder Havel, Niemcy
- **Kod pocztowy:** 14542
- **Źródło danych:** Interpolacja z Meteonorm (okres pomiaru: 1991-2010)
- **Alternatywne lokalizacje:** Potsdam (najbliższa w bazie danych)

### Konfiguracja systemu

**Źródło ciepła:**
- Powietrze zewnętrzne (pompa ciepła powietrze–woda)

**System hydrauliczny:**
- System nr 8 – pompa ciepła z przełącznikiem hydraulicznym
- Oddzielne bufory dla ogrzewania i ciepłej wody użytkowej
- Brak wspomagania solarnego termicznego

**Pompa ciepła:**
- **Typ:** Powietrze–woda
- **Model:** 8 IAR (przykładowy model z bazy danych)
- **Moc znamionowa:** 8 kW
- **Współczynnik wydajności (COP):** zgodnie z danymi producenta
- **Źródło danych:** Baza danych GeoT*SOL (pompy ciepła z listy WAFA, regularnie aktualizowane)
- **Uwaga:** Standardowe zestawy danych nie mogą być edytowane, ale można utworzyć kopię i modyfikować

**Kocioł wspomagający:**
- **Typ:** Kocioł gazowy (gas burner boiler)
- **Model:** GB172 (przykładowy model z bazy danych)
- **Moc znamionowa:** 14,2 kW
- **Źródło danych:** Baza danych kotłów w GeoT*SOL

### Tryb pracy systemu

**Tryb bivalentny równoległy z zakresem temperatur:**
- **Powyżej 7°C:** pracuje wyłącznie pompa ciepła
- **W zakresie 7°C do -10°C:** praca równoległa pompy ciepła i kotła
- **Poniżej -10°C:** pracuje wyłącznie kocioł

**Obieg grzewczy:**
- **Typ:** Niskotemperaturowy (100% udział)
- **Temperatura zasilania:** 35°C
- **Temperatura powrotu:** 28°C
- **Uwaga:** Wysokotemperaturowe obiegi grzewcze (35/28°C) są już ustawione jako wysokotemperaturowe w programie, ale w tym przypadku nie są używane

**Taryfy i terminy (opcjonalne, nieaktywne w przykładzie):**
- Możliwość definicji taryf energii elektrycznej (wysokie/niskie)
- Możliwość ustawienia okien czasowych blokady pracy pompy ciepła (np. 7-8, 12:30-14:00, 18-19)
- W przykładzie z webinaru taryfy nie były aktywne

### Zasobniki i magazynowanie

- **Zasobnik c.w.u.:** 300 l
- **Bufor ogrzewania:** 120 l
- **Grubość izolacji:** 100 mm

### Wyniki symulacji

**Symulacja:**
- **Typ:** Dynamiczna symulacja minutowa dla całego roku
- **Okres:** Rok kalendarzowy

**Współczynniki efektywności (SPF / JAZ):**
- **SPF pompy ciepła:** 3,75 (stosunek użycia do wysiłku dla samej pompy ciepła)
- **SPF całego systemu pompy ciepła:** 3,75
- **SPF wg VDI 4650:** 4,05 (wymagany do promocji i certyfikacji)
- **Uwaga:** W systemie z dodatkowymi kolektorami solarnymi byłby również SPF dla całego systemu generatora

**Bilans energetyczny:**
- **Energia z pompy ciepła:** ~7650 kWh (~70% zapotrzebowania)
- **Energia z kotła:** ~33% zapotrzebowania (około jedna trzecia)
- **Energia elektryczna pompy ciepła:** 2043 kWh/rok
- **Straty magazynowe:** ~750 kWh/rok
- **Uwaga:** W systemie z cyrkulacją i kolektorami byłyby dodatkowe straty

**Rozkład energii:**
- **Ogrzewanie:** ~6000 kWh
- **Ciepła woda użytkowa:** ~4880 kWh

**Dodatkowe informacje:**
- **Eksport do PVSOL:** Możliwość eksportu profilu obciążenia (mocy/zużycia energii elektrycznej pompy ciepła) do PVSOL Premium w celu analizy współpracy z instalacją fotowoltaiczną
- **Wykresy wyników:** Dostępne wykresy miesięczne, tygodniowe i 10-dniowe pokazujące roczny przebieg obciążenia i generowane energie

</details>

## 📋 Zakres projektu

### Krok 1: Analiza przykładowego przypadku z webinaru (30 min)

1. **Zapoznaj się z transkryptem webinaru:**
   - Przeczytaj transkrypcję webinaru powyżej
   - Zwróć uwagę na **strukturę pracy w GeoT\*SOL**:
     - ekran powitalny i dane projektu,
     - wybór danych klimatycznych (Meteosyn / Meteonorm),
     - wybór typu systemu i źródła ciepła,
     - definicję zapotrzebowania na ciepło i c.w.u.,
     - dobór pompy ciepła i kotła,
     - wybór trybu pracy (bivalentne / monoenergetyczne),
     - wymiarowanie zasobników i buforów,
     - uruchomienie symulacji i interpretację wyników.

2. **Zidentyfikuj kluczowe parametry przykładowego systemu:**
   - Rodzaj źródła dolnego (np. powietrze zewnętrzne)
   - Typ i moc pompy ciepła (np. ~8 kW, powietrze–woda)
   - Obecność dodatkowego źródła ciepła (kocioł gazowy, sposób pracy bivalentnej)
   - Zapotrzebowanie na ciepło budynku (rozkład miesięczny)
   - Zapotrzebowanie na c.w.u. (kWh/rok, odpowiadający przepływ w [l/dzień])
   - Wybrane **tryby pracy** (bivalent równoległy / alternatywny, graniczne temperatury pracy)
   - Pojemności zasobników (c.w.u. i bufor grzewczy)

### Krok 2: Przygotowanie własnego projektu w GeoT\*SOL (2 godziny)

:::info Uwaga
Własny projekt może być **dowolny** – możesz wybrać dowolny obiekt, lokalizację, typ pompy ciepła i konfigurację systemu. Poniższe wskazówki są jedynie przykładowe i mogą być dostosowane do Twojego projektu.
:::

1. **Utworzenie nowego projektu:**
   - Uruchom GeoT\*SOL i utwórz nowy projekt.
   - Wprowadź podstawowe dane:
     - tytuł projektu, numer oferty (opcjonalnie),
     - dane klienta i lokalizacja budynku,
     - krótki opis systemu (np. „Powietrzna pompa ciepła z kotłem gazowym – dom jednorodzinny”).

2. **Dobór lokalizacji i danych klimatycznych:**
   - Wybierz kraj: **Polska** i lokalizację możliwie blisko **Szczecina** (lub innego wybranego miasta).
   - Skorzystaj z narzędzia **Meteosyn/Meteonorm**:
     - wyszukaj lokalizację po nazwie lub kodzie pocztowym,
     - alternatywnie – utwórz nową lokalizację poprzez interpolację danych (jak w webinarze).

3. **Definicja obiektu i zapotrzebowania:**
   - Przyjmij budynek jednorodzinny o powierzchni użytkowej **150–220 m²** (lub dane z zadania prowadzącego).
   - Zdefiniuj **zapotrzebowanie na ogrzewanie**:
     - wykorzystaj miesięczny rozkład energii [kWh/m‑c] lub roczną wartość z bilansu cieplnego,
     - ustaw **niskotemperaturowy obieg grzewczy** (np. 35/28°C, udział 100%).
   - Zdefiniuj **zapotrzebowanie na c.w.u.**:
     - liczba użytkowników: 3–5 osób,
     - zużycie: 40–50 l/osobę/dzień przy temp. 50°C,
     - zweryfikuj odpowiadającą energię [kWh/rok] (analogicznie do przykładu z webinaru).

4. **Wybór systemu i konfiguracja hydrauliczna:**
   - W zakładce **system selection** wybierz:
     - źródło ciepła: **powietrze zewnętrzne** lub **grunt (sondy / kolektor)**,
     - system z pompą ciepła oraz **dodatkowym kotłem** (schemat z osobnym buforem i zasobnikiem c.w.u., jak w webinarze).
   - Upewnij się, że w schemacie uwzględnione są:
     - oddzielny bufor dla ogrzewania,
     - zasobnik c.w.u. z wężownicą,
     - pompy obiegowe i elementy mieszające zgodnie z wybranym schematem.

5. **Dobór pompy ciepła i kotła:**
   - Otwórz bazę danych urządzeń:
     - wybierz **powietrzną lub gruntową pompę ciepła** o mocy nominalnej zbliżonej do wymaganego obciążenia (np. 6–10 kW),
     - zwróć uwagę na współczynnik wydajności (COP) i krzywe pracy.
   - Dobierz **kocioł gazowy** (lub inne drugie źródło) z bazy:
     - moc znamionowa ok. 10–20 kW (w zależności od przyjętego obciążenia szczytowego),
     - zapisz typ i producenta do sprawozdania.

6. **Definicja trybu pracy systemu (operating modes):**
   - Wybierz odpowiedni **tryb bivalentny**:
     - bivalent równoległy,
     - bivalent alternatywny,
     - bivalent równoległy z zakresem temperatur (jak w przykładzie: np. 7°C / –10°C).
   - Ustal temperatury przełączania:
     - powyżej temperatury górnej – pracuje sama pompa ciepła,
     - w zakresie pośrednim – praca równoległa pompy ciepła i kotła,
     - poniżej temperatury dolnej – pracuje wyłącznie kocioł.
   - (Opcjonalnie) Zdefiniuj **taryfy energii elektrycznej** i ewentualne **okna czasowe blokady** pracy pompy ciepła.

7. **Wymiarowanie zasobników i strat ciepła:**
   - Ustal objętość zasobników:
     - zasobnik c.w.u.: 200–300 l (analogicznie do przykładu – 300 l),
     - bufor ogrzewania: 80–150 l (np. 120 l w przykładzie).
   - Zdefiniuj grubość izolacji (np. 100 mm) i oceń wpływ strat magazynowania na bilans energetyczny.

### Krok 3: Symulacja i analiza wyników (1 godzina)

1. **Uruchomienie symulacji:**
   - Wykonaj roczną, dynamiczną symulację (krok minutowy).
   - Zapisz projekt po ukończeniu symulacji.

2. **Analiza wyników energetycznych:**
   - Odczytaj:
     - **sezonowy współczynnik efektywności (SPF / JAZ)** samej pompy ciepła,
     - sezonowy współczynnik efektywności całego systemu,
     - wartości wg **VDI 4650** (jeśli prezentowane w wynikach),
     - rozkład energii dostarczonej na ogrzewanie i c.w.u. [kWh/rok],
     - zużycie energii elektrycznej pompy ciepła [kWh/rok].
   - Porównaj uzyskane wartości z wynikami zaprezentowanymi w webinarze (relacje udziału pompy ciepła i kotła, poziom SPF).

3. **Analiza ekonomiczna i środowiskowa (w zarysie):**
   - Oszacuj koszty energii na podstawie:
     - zużycia energii elektrycznej,
     - zużycia paliwa dla kotła (jeśli dane dostępne w wynikach).
   - Oceń:
     - udział odnawialnej energii w pokryciu zapotrzebowania,
     - potencjalne redukcje emisji CO₂ w porównaniu z systemem wyłącznie kotłowym.

4. **Eksport profilu obciążenia (opcjonalnie):**
   - Wyeksportuj profil mocy / zużycia energii elektrycznej pompy ciepła do pliku,
   - Omów możliwość importu tego profilu do **PVSOL** w celu analizy współpracy z instalacją fotowoltaiczną.

## 📸 Sprawozdanie

Ze względu na pracę w wersji trial (ograniczenia w eksporcie), sprawozdanie powinno opierać się głównie na **screenshotach z GeoT\*SOL** i krótkim opisie wyników.

### Wymagane elementy sprawozdania:

1. **Screenshoty z GeoT\*SOL:**
   - Ekran danych projektu (Project data) z informacjami o lokalizacji i danych klimatycznych,
   - Okno wyboru systemu (system selection) z wybranym schematem hydraulicznym,
   - Definicja zapotrzebowania na ogrzewanie (miesięczne wartości energii),
   - Definicja zapotrzebowania na c.w.u. (profil zużycia, temperatura),
   - Okno z wybranym typem pompy ciepła i kotła (database view),
   - Ustawienia trybu pracy (operating mode) – bivalent/monovalent,
   - Wyniki symulacji: strona z **sezonowymi współczynnikami efektywności**, strona z **bilansami energii**,
   - (Opcjonalnie) Wykresy czasowe pracy systemu (result graphs).

2. **Krótki opis projektu:**
   - Lokalizacja i dane klimatyczne (źródło danych, sposób doboru),
   - Parametry techniczne systemu:
     - typ i moc pompy ciepła,
     - rodzaj i moc kotła,
     - objętości zasobników, główne temperatury pracy,
   - Zapotrzebowanie roczne na ciepło i c.w.u. oraz przyjęte założenia,
   - Główne wyniki symulacji:
     - sezonowe współczynniki efektywności,
     - zużycie energii elektrycznej i udział pracy kotła.

3. **Wnioski:**
   - Ocena, czy zaprojektowany system jest **energetycznie efektywny** (SPF, udział OZE),
   - Ocena **opłacalności** na tle konwencjonalnego źródła (w ujęciu jakościowym),
   - Identyfikacja parametrów możliwych do optymalizacji (np. nastawy temperatur, wybór trybu bivalentnego, pojemność buforów),
   - Krótkie porównanie z przypadkiem z webinaru (podobieństwa i różnice).

### Format sprawozdania:

- Dokument w formacie **PDF lub Word**,
- Wszystkie screenshoty powinny być **czytelne i opisane** (podpis pod rysunkiem),
- Objętość: **3–5 stron** (bez załączników),
- Na pierwszej stronie: dane studentów, temat projektu, data.

## 🔗 Dodatkowe zasoby

### Oprogramowanie

- **GeoT\*SOL (Valentin Software)** – narzędzie do projektowania systemów pomp ciepła  
  Strona producenta i wersja testowa – patrz materiały z wykładu / strona kursu.

### Materiały pomocnicze

- **Valentin Software YouTube** – oficjalny kanał z webinarami i przykładami projektów
- **Dane klimatyczne Meteonorm / Meteosyn** – wbudowane w GeoT\*SOL

### Normy i wytyczne

- **VDI 4650** – wyznaczanie sezonowych współczynników efektywności (JAZ) pomp ciepła
- Krajowe przepisy dotyczące efektywności energetycznej budynków (wg aktualnego stanu prawnego)

---

*Ostatnia aktualizacja: Październik 2025*
