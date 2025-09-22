---
sidebar_position: 1
title: "Wykład 1: Wprowadzenie do projektowania instalacji OZE (1,5 h)"
---
## Cele wykładuRola oprogramowania w projektowaniu systemów OZE

- Zacznę od opisu oprogramowania, rodzaje, licencje.
- Co to jest program (konsolowy; web, Android, …). z czego składa się: FrontEnd, Logika, Symulacje, DBs. używanie, typy DBs na przykładzie PV*SOL.
- Etapy procesu projektowego — od koncepcji do realizacji. przykład z ATUM p. 7.1.
- Zaczynam z PV*SOL. Zbudować projekt szybko żeby zobaczyć w całości

## Rola oprogramowania w projektowaniu systemów OZE

Omówienie klas narzędzi: modelowanie zasobów, dobór komponentów, symulacja pracy, analiza ekonomiczna, dokumentacja.

## Przegląd technologii OZE

PV, wiatr, biomasa/biogaz, hydro, geotermia, magazyny energii, systemy hybrydowe.

## Etapy procesu projektowego

Koncepcja → studium wykonalności → projekt budowlany/wykonawczy → realizacja → odbiory → eksploatacja.

## PV*SOL premium. Sybki start

<iframe width="560" height="315" src="https://www.youtube.com/embed/qg7CDJuqcdc" title="PV*SOL premium tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>Transcrypcja do video</summary>

00:00:01 - 00:00:43
Ten samouczek jest przeznaczony dla początkujących. Pokaże Ci podstawowe kroki projektowania systemu PV równoległego do dachu w PV*SOL premium. Przeprowadzi Cię od samego początku do końcowej symulacji. Po uruchomieniu PV*SOL zobaczysz stronę powitalną. Tutaj możesz rozpocząć nowy projekt lub otworzyć istniejący, bezpośrednio otworzyć jeden z ostatnich projektów albo zapoznać się z przykładami, aby zobaczyć możliwości PV*SOL. W tym samouczku rozpoczniemy nowy projekt. Klikając lewym przyciskiem myszy przycisk, przejdziemy do kolejnego kroku.

00:00:43 - 00:01:30
Zostaniemy przeniesieni do strony „Dane projektu". Zawsze możesz przełączać się między poszczególnymi krokami projektu, klikając lewym przyciskiem strzałki lub bezpośrednio przycisk szybkiego dostępu. Na tej stronie możesz dodać informacje o projekcie, które zostaną pokazane w końcowej prezentacji. Możliwe jest również dodanie logo firmy. Po zakończeniu możemy przejść do następnej strony. Najpierw wybieramy, jaki rodzaj systemu chcemy symulować. W tym samouczku użyjemy systemu PV podłączonego do sieci z odbiornikami elektrycznymi i magazynem energii. Dla dokładnych danych o nasłonecznieniu i temperaturze

00:01:30 - 00:02:30
możesz wybrać spośród ponad 8000 lokalizacji na całym świecie. Istnieje także możliwość tworzenia nowych lokalizacji w module danych klimatycznych MeteoSyn, klikając symbol globu. Użytkownicy PV*SOL premium mogą wybrać między dwoma opcjami projektowania: 2D i 3D. Klikając pole wyboru, możesz przełączać się między nimi. W tym samouczku zaplanujemy system 3D. W tym celu pozostawiamy domyślną opcję i przechodzimy do następnej strony. Na stronie „Zużycie" możesz zaimportować własny profil obciążenia lub wybrać istniejący. Kliknij „Dodaj zużycie", aby zobaczyć dostępne opcje.

00:02:36 - 00:03:18
Przechodzimy teraz do strony projektowania 3D. Otwieramy wizualizację 3D za pomocą przycisku „Edytuj". W nowym projekcie możemy wybrać spośród kilku opcji początkowych. Zaimportuj własny model 3D lub wybierz spośród gotowych struktur, które można później modyfikować. Możliwe jest również użycie map, zdjęć satelitarnych lub planów budynków, z których łatwo można wyciągnąć bryły. W tym samouczku wybieramy „Fragment mapy" z menu rozwijanego, a następnie klikamy „Nowy fragment mapy". W oknie dialogowym możemy wybrać

00:03:18 - 00:04:02
między różnymi dostawcami map, takimi jak Google, Bing lub lokalne serwisy. Wprowadzamy szczegóły adresu, powiększamy widok na budynek i klikamy „Wybierz". Skala i orientacja fragmentu mapy są przyjmowane automatycznie. Teraz kliknij przycisk „Start", aby rozpocząć projektowanie 3D. Wizualizacja 3D rozpoczyna się w widoku obiektów. Widzimy tu otwartą przestrzeń z wybranym fragmentem mapy w widoku z lotu ptaka. Opisy na krawędziach i kompas w prawym rogu pomagają w orientacji. Możemy teraz użyć narzędzia wielokąta 3D, aby

00:04:07 - 00:04:49
narysować obrys naszego budynku. W tym celu klikamy narożniki budynku zgodnie z ruchem wskazówek zegara i definiujemy powierzchnię bazową. Następnie naciskamy klawisz Enter, aby zakończyć rysowanie podstawy i narysować kalenicę. Potem naciskamy klawisz Escape, aby opuścić tryb rysowania. Następnie klikamy prawym przyciskiem myszy zaznaczony obszar. Tutaj mamy opcję ustawienia powierzchni jako pionowej. Kolejnym kliknięciem możemy wyciągnąć budynek jako obiekt 3D. Dach czterospadowy jest automatycznie rozpoznawany dzięki kalenicy. Niektóre parametry budynku, takie jak

00:04:49 - 00:05:39
wysokość okapu i kąt nachylenia dachu, można wprowadzić tutaj i zatwierdzić przyciskiem OK. Korzystając z menu rozwijanych u góry, możesz przeciągać i upuszczać dodatkowe obiekty, takie jak domy, drzewa i ściany. W tym projekcie dodamy dwa drzewa. Jeśli chcesz zmienić właściwości obiektów, po prostu kliknij je dwukrotnie i zmień wartości w oknie dialogowym. Teraz kopiujemy drzewo, klikając je prawym przyciskiem i wybierając kopiowanie. Następnie wybieramy wschodnią stronę dachu, klikamy prawym przyciskiem i wybieramy „Aktywuj". Najpierw definiujemy odległości od krawędzi dla

00:05:39 - 00:06:25
naszej powierzchni dachowej i wybieramy „Wartości standardowe dla systemu bez montażu". Obiekty zacieniające, takie jak kominy czy anteny satelitarne, są dostępne w menu jako gotowe modele do przeciągania i upuszczania. Możemy edytować te obiekty i wprowadzać odległości blokujące. Po zakończeniu modelowania otoczenia czas na dodanie modułów PV. Istnieją dwa różne sposoby instalacji modułów: „pokrycie modułami" i „montaż modułów". Oba można zastosować na dowolnym aktywnym obiekcie. Ponieważ chcemy zamontować moduły PV na dachu czterospadowym, użyjemy pokrycia równoległego do dachu.

00:06:33 - 00:07:33
Najpierw musimy wybrać moduł. Kliknij przycisk z zielonym znakiem plus i dodaj wybrany moduł z bazy danych. Nasz system jest teraz wyświetlany w lewym górnym rogu. Istnieją trzy sposoby umieszczania modułów na dachu. Możesz przeciągnąć i upuścić pojedynczy moduł. Możesz wypełnić obszar, przeciągając prostokąt myszką. Możesz też pokryć całą powierzchnię obiektu modułami. Teraz obliczamy częstotliwość zacienienia dla naszego dachu. Jeśli jakiś moduł jest zacieniony, możemy go usunąć.

00:07:33 - 00:08:21
Przechodzimy teraz do zachodniej części dachu, klikając strzałkę nad kalenicą. Ponownie wprowadzamy odległości od krawędzi w widoku obiektu, a następnie pokrywamy dach modułami. Kolejnym krokiem jest podłączenie naszych modułów PV do falownika. Odbywa się to w „Konfiguracji modułów". Możliwe jest podłączenie modułów z różnych obszarów i powierzchni. W tym przypadku mamy dwie powierzchnie dachowe, więc wybieramy opcję „Skonfiguruj wszystkie nieskonfigurowane moduły". W lewym górnym rogu zaznaczamy oba obszary dachu

00:08:21 - 00:09:09
i klikamy „Skonfiguruj obszary modułów razem". Widzimy, że mają one łączną moc około 13 kilowatów szczytowych. W „Wybór falownika" możemy wybrać falowniki, które chcemy wykorzystać do automatycznej konfiguracji, z bazy danych. Możemy na przykład filtrować według producenta falownika oraz według mocy. Zielone strzałki pokazują zakres dostępnych falowników. Klikając przycisk „Zaproponuj konfigurację", PV*SOL automatycznie obliczy najlepsze ustawienia spośród wybranych falowników.

00:09:09 - 00:10:03
W menu „Wybierz konfigurację" możesz także zobaczyć inne możliwe ustawienia. Oczywiście możesz również stworzyć własną konfigurację w głównym oknie. Kliknięcie przycisku OK zastosuje konfigurację do Twojego systemu. Wróciwszy do panelu projektowania 3D, możemy zobaczyć nasz falownik z dwoma MPPT. Poniżej możemy wybrać kierunek, punkt początkowy i przebieg układu stringów. Następnie możemy przeglądać i modyfikować układ stringów w widoku planu kabli. W ostatnim kroku zatwierdzamy dane. W następnym oknie kliknij „OK", aby

00:10:06 - 00:11:08
rozpocząć symulację zacienienia. Następnie przechodzimy do strony „System magazynowania energii". Najpierw wybieramy markę falownika. Następnie dodajemy kompatybilny system magazynowania. Strona „Przewody" pozwala określić całkowite straty w kablach lub wprowadzić bardziej szczegółowe informacje, np. długości przewodów lub symbole obwodów. Strona „Plany i części" pozwala wyświetlić, wydrukować i wyeksportować rysunek techniczny systemu. Możesz dodać legendę i pole rysunku oraz wyeksportować je do pliku PDF, PNG lub SVG. Na stronie „Analiza finansowa" możesz

00:11:08 - 00:12:03
zdefiniować aspekty finansowe projektu. Szczegółowe parametry można skonfigurować przyciskiem „Edytuj". Taryfy feed-in dla wielu krajów są zawarte w bazie danych. Oczywiście zawsze możesz dodać własne taryfy. Proces projektowania jest teraz zakończony i projekt można zasymulować. Aby to zrobić, kliknij przycisk szybkiego dostępu „Wyniki". Strona Wyniki zawiera różne tabele i wykresy do analizy i wizualizacji wyników symulacji. Wszystkie wyniki są podsumowane w konfigurowalnej prezentacji, którą można

00:12:04 - 00:12:34
wyeksportować do MS Word lub bezpośrednio do PDF. Dane surowe można także wyeksportować do MS Excel w celu dalszej edycji. To kończy nasze wprowadzenie. Dziękujemy za obejrzenie! Odwiedź naszą stronę internetową, aby pobrać bezpłatną 30-dniową wersję próbną i odkryć możliwości, jakie oferuje PV*SOL premium.

</details>
