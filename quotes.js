const quotes = [
    {
        "text": "Hayatta en hakiki mürşit ilimdir.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Egemenlik kayıtsız şartsız milletindir.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Yurtta sulh, cihanda sulh.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Benim naçiz vücudum bir gün elbet toprak olacaktır, fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Umutsuz durumlar yoktur, umutsuz insanlar vardır. Ben hiçbir zaman umudumu yitirmedim.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Biz cahil dediğimiz zaman, mektepte okumamış olanları kastetmiyoruz. Kastettiğimiz ilim, hakikati bilmektir.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Özgürlük ve bağımsızlık benim karakterimdir.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Sanatsız kalan bir milletin hayat damarlarından biri kopmuş demektir.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur!",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Bilelim ki milli benliğini bilmeyen milletler, brassica milletlerin avıdır.",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Şimdi ben ölüm oldum, dünyaların yok edicisi.",
        "author": "J. Robert Oppenheimer"
    },
    {
        "text": "Dünya, sadece bizim konforlu alanlarımızdan ibaret değil. Arkamızı döndüğümüz, görmezden geldiğimiz yerlerde de bambaşka hayatlar ve gerçekler var.",
        "author": "Ruhi Çenet"
    },
    {
        "text": "Ortak bir insanlık anlayışına sahip olmadığımız sürece, bilim yalnızca bir yıkım aracı olacaktır.",
        "author": "J. Robert Oppenheimer"
    },
    {
        "text": "Dünya değişiyor. Bunu hisseden ilk insan ben değilim.",
        "author": "J. Robert Oppenheimer"
    },
    {
        "text": "Bindik bir alamete, gedeyoz kıyamete...",
        "author": "Cem Karaca"
    },
    {
        "text": "İnsanın öğrenmesi gereken ilk dil, tatlı dildir.",
        "author": "Barış Manço"
    },
    {
        "text": "İyimser, bu dünyaların en iyisinde yaşadığımızı düşünür; kötümser ise bunun doğru olmasından korkar.",
        "author": "J. Robert Oppenheimer"
    },
    {
        "text": "Bilim adamı, her şeyden önce evrenin sırlarını çözmeye çalışan bir kaşiftir; onun gücünü kontrol etmeye çalışan bir politikacı değil.",
        "author": "J. Robert Oppenheimer"
    },
    {
        "text": "Sorgulanmamış bir hayat, yaşanmaya değer değildir.",
        "author": "Sokrates"
    },
    {
        "text": "Düşünüyorum, öyleyse varım.",
        "author": "René Descartes"
    },
    {
        "text": "Bildiğim tek şey, hiçbir şey bilmediğimdir.",
        "author": "Sokrates"
    },
    {
        "text": "Kendini bil.",
        "author": "Thales"
    },
    {
        "text": "Eğer kim olduğumu bilmiyorsan, belki de en doğrusu ayağını denk almandır.",
        "author": "Bay Beyaz"
    },
    {
        "text": "Hayat geriye doğru anlaşılır, ancak ileriye doğru yaşanır.",
        "author": "Søren Kierkegaard"
    },
    {
        "text": "Bizi öldürmeyen şey, güçlendirir.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "Karanlığı lanetlemektense, bir mum yakmak daha iyidir.",
        "author": "Konfüçyüs"
    },
    {
        "text": "Beni yargılama Cooper. Sen hiç benim test edildiğim gibi test edilmedin. Çok az insan edildi.",
        "author": "Dr. Mann"
    },
    {
        "text": "Zor zamanlar güçlü insanlar yaratır, güçlü insanlar iyi zamanlar yaratır. İyi zamanlar zayıf insanlar yaratır, zayıf insanlar zor zamanlar yaratır.",
        "author": "G. Michael Hopf"
    },
    {
        "text": "Gözler ancak ruh hazır olduğunda görür.",
        "author": "Bergson"
    },
    {
        "text": "İnsan özgür doğar, oysa her yerde zincirlere vurulmuştur.",
        "author": "Jean-Jacques Rousseau"
    },
    {
        "text": "Hiçbir şey keşfedilmeden kalmaz, yeter ki yeterince aransın.",
        "author": "Seneca"
    },
    {
        "text": "Öfke, kalbi karartan bir dumandır.",
        "author": "Platon"
    },
    {
        "text": "Mutluluk, paylaşıldığında çoğalan tek şeydir.",
        "author": "Albert Schweitzer"
    },
    {
        "text": "Cesaret insanı zafere, kararsızlık tehlikeye, korkaklık ise ölüme götürür.",
        "author": "Yavuz Sultan Selim"
    },
    {
        "text": "Ya ben İstanbul'u alırım, ya İstanbul beni!",
        "author": "Fatih Sultan Mehmet"
    },
    {
        "text": "Herkes her şeyi bilemez, bu normaldir. Ama bilmediği konuda hüküm vermek, işte bu cehalettir.",
        "author": "İlber Ortaylı"
    },
    {
        "text": "Hayat, bisiklete binmek gibidir. Dengenizi korumak için hareket etmeye devam etmelisiniz.",
        "author": "Albert Einstein"
    },
    {
        "text": "En büyük zafer hiç düşmemek değil, her düştüğünde ayağa kalkabilmektir.",
        "author": "Konfüçyüs"
    },
    {
        "text": "Olmak ya da olmamak, işte bütün mesele bu.",
        "author": "William Shakespeare"
    },
    {
        "text": "Gülün adı gül olmasaydı, yine de aynı güzel kokmayacak mıydı?",
        "author": "William Shakespeare"
    },
    {
        "text": "İnsan, yalnızca kalbiyle doğruyu görebilir. Asıl görülmesi gerekeni gözler göremez.",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "text": "Zaman her şeyin ilacıdır derler, ama aslında zaman sadece alışmayı öğretir.",
        "author": "Fyodor Dostoyevski"
    },
    {
        "text": "Kuş ölür, sen uçuşu hatırla.",
        "author": "Füruğ Ferruhzad"
    },
    {
        "text": "Güzel günler göreceğiz çocuklar, güneşli günler göreceğiz.",
        "author": "Nazım Hikmet"
    },
    {
        "text": "Cahiller.",
        "author": "İlber Ortaylı"
    },
    {
        "text": "Sevmek, sıradışı bir eylemdir; sıradan insanlar bunu anlayamaz.",
        "author": "Franz Kafka"
    },
    {
        "text": "Kelimeler tek başına dünyayı değiştiremez, ama insanları değiştirebilir.",
        "author": "Gabriel García Márquez"
    },
    {
        "text": "Herkes dünyayı değiştirmeyi düşünüyor, ama hiç kimse kendini değiştirmeyi düşünmüyor.",
        "author": "Lev Tolstoy"
    },
    {
        "text": "Umut, uyanık insanların rüyasıdır.",
        "author": "Aristoteles"
    },
    {
        "text": "Bir makine iyi doğaçlama yapamaz çünkü ona ölüm korkusu programlayamazsınız. Bizim hayatta kalma içgüdümüz, en büyük ilham kaynağımızdır.",
        "author": "Dr. Mann"
    },
    {
        "text": "Gözleriniz, ruhunuzun dünyaya açılan pencereleridir.",
        "author": "Oscar Wilde"
    },
    {
        "text": "İyi dostlar, iyi kitaplar ve kör bir vicdan; işte ideal hayat.",
        "author": "Mark Twain"
    },
    {
        "text": "Kaybettiğin her şey, başka bir surette geri döner.",
        "author": "Mevlana"
    },
    {
        "text": "Ya olduğun gibi görün ya da göründüğün gibi ol.",
        "author": "Mevlana"
    },
    {
        "text": "Bir insan için karakterini anlamak istiyorsanız, ona güç verin.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "Önemli olan sorgulamayı bırakmamaktır. Merakın kendi varoluş nedeni vardır.",
        "author": "Albert Einstein"
    },
    {
        "text": "Bir yerlerde inanılmaz bir şey keşfedilmeyi bekliyor.",
        "author": "Carl Sagan"
    },
    {
        "text": "Evrennde yalnız mıyız bilmiyorum ama eğer yalnızsak, bu büyük bir alan israfı olurdu.",
        "author": "Carl Sagan"
    },
    {
        "text": "Bilim, organize edilmiş bilgidir. Bilgelik ise organize edilmiş hayattır.",
        "author": "Immanuel Kant"
    },
    {
        "text": "Eğer daha uzağı görebildiysem, bu devlerin omuzlarında durduğum içindir.",
        "author": "Isaac Newton"
    },
    {
        "text": "Hayatta korkulacak hiçbir şey yoktur, sadece anlaşılacak şeyler vardır.",
        "author": "Marie Curie"
    },
    {
        "text": "Doğa, asla kurallarını çiğnemez.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Zeka, değişime uyum sağlama yeteneğidir.",
        "author": "Stephen Hawking"
    },
    {
        "text": "Evren, ne kadar büyük olduğunu umursamaz.",
        "author": "Richard Feynman"
    },
    {
        "text": "Biz bitti demeden bitmez.",
        "author": "Fatih Terim"
    },
    {
        "text": "Hata yapmak, keşfin kapısıdır.",
        "author": "James Joyce"
    },
    {
        "text": "Gelecek, hayallerinin güzelliğine inananlarındır.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Yapmadığın atışların %100'ünü kaçırırsın.",
        "author": "Wayne Gretzky"
    },
    {
        "text": "Bizler, evrenin kendisini anlayabilmesi için evren tarafından yaratılmış geçici aynalarız.",
        "author": "Çağrı Mert Bakırcı"
    },
    {
        "text": "Karanlıktan korkan bir çocuğu kolayca affedebiliriz; hayattaki gerçek trajedi, yetişkinlerin ışıktan korkmasıdır.",
        "author": "Platon"
    },
    {
        "text": "Dünyada görmek istediğin değişimin kendisi ol.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Zayıflar asla affedemez. Affetmek güçlülere hastır.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Büyük beyinler fikirleri tartışır, orta beyinler olayları tartışır, küçük beyinler ise insanları tartışır.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Başarı, nihai değildir; başarısızlık, ölümcül değildir. Önemli olan devam etme cesaretidir.",
        "author": "Winston Churchill"
    },
    {
        "text": "En karanlık gece bile sona erer ve güneş tekrar doğar.",
        "author": "Victor Hugo"
    },
    {
        "text": "Önemli olan ne kadar yaşadığın değil, nasıl yaşadığındır.",
        "author": "Seneca"
    },
    {
        "text": "Yarın, bugünden inşa edilir.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "Zorluklar, yeteneği ortaya çıkarır.",
        "author": "Horatius"
    },
    {
        "text": "Hiçbir şey imkansız değildir; kelimenin kendisi bile 'İmkansız değil' der.",
        "author": "Audrey Hepburn"
    },
    {
        "text": "Risk almamak, en büyük risktir.",
        "author": "Mark Zuckerberg"
    },
    {
        "text": "Gülümsemek, iki insan arasındaki en kısa mesafedir.",
        "author": "Victor Borge"
    },
    {
        "text": "Başkalarını bilen kimse bilgindir, kendini bilen kimse bilgedir.",
        "author": "Lao Tzu"
    },
    {
        "text": "Gerçek zenginlik, mal çokluğu değil, gönül tokluğudur.",
        "author": "Hz. Muhammed"
    },
    {
        "text": "Hayat, biz başka planlar yapmakla meşgulken başımızdan geçenlerdir.",
        "author": "John Lennon"
    },
    {
        "text": "Aç kal, budala kal.",
        "author": "Steve Jobs"
    },
    {
        "text": "Hızlı hareket et ve bir şeyleri yık. Eğer bir şeyleri yıkmıyorsan, yeterince hızlı hareket etmiyorsun demektir.",
        "author": "Mark Zuckerberg"
    },
    {
        "text": "Koş, yürüme! Ya yiyecek bulmak için koşuyorsundur ya da bir başkasına yiyecek olmamak için.",
        "author": "Jensen Huang"
    },
    {
        "text": "Sadece iki şekilde yaşayabilirsin: Biri, hiçbir şeyin mucize olmadığını düşünerek; diğeri ise her şeyin bir mucize olduğunu düşünerek.",
        "author": "Albert Einstein"
    },
    {
        "text": "Güzellik, baktığın şeyde değil, ona verdiğin anlamdadır.",
        "author": "Ömer Hayyam"
    },
    {
        "text": "Ağaç ne kadar yüksek olursa olsun, yaprakları yere düşer.",
        "author": "Çin Atasözü"
    },
    {
        "text": "Bir dostun yarası, düşmanın öpücüğünden daha iyidir.",
        "author": "Hz. Süleyman"
    },
    {
        "text": "Zamanı geri alamayız, ama önümüzdeki zamanı boşa harcamamayı seçebiliriz.",
        "author": "J.R.R. Tolkien"
    },
    {
        "text": "Sessizlik, en güçlü haykırıştır.",
        "author": "Laurell K. Hamilton"
    },
    {
        "text": "Akıllı insan tüm yumurtalarını aynı sepete koymaz.",
        "author": "Miguel de Cervantes"
    },
    {
        "text": "Düşmanımı bağışlarsam düşman kalmaz.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "Köksüz ağaç yaşamaz, geçmişini bilmeyen geleceğini kuramaz.",
        "author": "Anonim"
    },
    {
        "text": "Önyargıları yok etmek, atomu parçalamaktan daha zordur.",
        "author": "Albert Einstein"
    },
    {
        "text": "Başkalarının senin hakkında ne düşündüğü, seninle ilgili değildir.",
        "author": "Paulo Coelho"
    },
    {
        "text": "Hayat bir rüyadır, uyanan ölür.",
        "author": "Virginia Woolf"
    },
    {
        "text": "Bilgi güçtür.",
        "author": "Francis Bacon"
    },
    {
        "text": "Bir şeye inanmak kolaydır, asıl zor olan onu anlamaya çalışmaktır.",
        "author": "Çağrı Mert Bakırcı"
    },
    {
        "text": "Yolculuk, varılacak yerden daha önemlidir.",
        "author": "T.S. Eliot"
    },
    {
        "text": "Geçmiş bir kova küldür.",
        "author": "Carl Sandburg"
    },
    {
        "text": "Sabır, acıdır ama meyvesi tatlıdır.",
        "author": "Jean-Jacques Rousseau"
    },
    {
        "text": "Gerçek sevgi, her şeyi göze almaktır.",
        "author": "William Shakespeare"
    },
    {
        "text": "Hiç kimse geriye gidip yeni bir başlangıç yapamaz; ama bugün yeni bir son yapabilir.",
        "author": "Carl Bard"
    },
    {
        "text": "Kalp ritmini değiştiren her şey hayattır.",
        "author": "Anonim"
    },
    {
        "text": "Sükut, doğru sözün anasıdır.",
        "author": "Solon"
    },
    {
        "text": "Bizler, şartlar ne kadar acı olursa olsun, son ana kadar dövüşmekle yükümlüyüz.",
        "author": "Enver Paşa"
    },
    {
        "text": "Bizim lugatımızda (sözlüğümüzde) 'teslim olmak' kelimesi yoktur.",
        "author": "Enver Paşa"
    },
    {
        "text": "Newton'ın üçüncü yasası: İnsanların bir yere varabilmek için buldukları tek yol, arkalarında bir şey bırakmaktır.",
        "author": "T.A.R.S"
    },
    {
        "text": "Bir gün geriye dönüp baktığınızda, mücadele yıllarınızın en güzel yıllarınız olduğunu göreceksiniz.",
        "author": "Sigmund Freud"
    },
    {
        "text": "Dünya, acı çekenlerle dolu; ama aynı zamanda bunun üstesinden gelenlerle de dolu.",
        "author": "Helen Keller"
    },
    {
        "text": "Kimse sizin izniniz olmadan size kendinizi değersiz hissettiremez.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Hayat, çözülmesi gereken bir sorun değil, deneyimlenmesi gereken bir gerçekliktir.",
        "author": "Søren Kierkegaard"
    },
    {
        "text": "Günün sonunda, insanlar ne söylediğinizi unutur, ne yaptığınızı unutur ama onlara nasıl hissettirdiğinizi asla unutmaz.",
        "author": "Maya Angelou"
    },
    {
        "text": "Sakin denizler, yetenekli denizciler yetiştirmez.",
        "author": "Afrika Atasözü"
    },
    {
        "text": "En büyük ibadet, haksızlığa karşı çıkmaktır.",
        "author": "Hz. Ali"
    },
    {
        "text": "Ve her şey bittiğinde hatırlayacağımız şey düşmanlarımızın sözleri değil, dostlarımızın sessizliği olacaktır.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "Bir insan için küçük insanlık için devasa bir adım.",
        "author": "Neil Armstrong"
    },
    {
        "text": "Dünya mavi... Ne kadar muhteşem. İnanılmaz. Dünyayı uzaydan gören tüm insanlar, onun güzelliğini korumalı ve artırmalıyız, onu yok etmemeliyiz!",
        "author": "Yuri Gagarin"
    },
    {
        "text": "Houston bir sorunumuz var.",
        "author": "Jim Lovell"
    },
    {
        "text": "O noktaya tekrar bakın. İşte orası evimiz. O biziz. Sevdiğiniz herkes, tanıdığınız herkes, adını duyduğunuz herkes, gelmiş geçmiş tüm insanlık hayatını orada yaşadı.",
        "author": "Carl Sagan"
    },
    {
        "text": "Ay'a gitmeden önce tam bir çizgisel düşünce yapısına sahiptim: Kendi bilgisayarıma, kendi uçağıma, kendi dünyama odaklanmıştım. Ama oradan geriye baktığımda, 'sınır' dediğimiz şeylerin aslında sadece siyasi haritalarda olduğunu, Dünya'nın ise hepimize ait tek bir bütün olduğunu anladım.",
        "author": "Al Worden"
    },
    {
        "text": "Ben yalnızım. Tamamen yalnızım ve tüm dünyadaki yaşamdan tamamen soyutlanmış durumdayım. Bu his korkutucu değil, aksine bir tür huzur ve güven veriyor.",
        "author": "Michael Collins"
    },
    {
        "text": "Güzel bir manzaraydı ama dürüst olmak gerekirse, o an tek düşündüğüm eve sağ salim dönmekti.",
        "author": "Al Shepard"
    },
    {
        "text": "Muhteşem bir ıssızlık.",
        "author": "Buzz Aldrin"
    },
    {
        "text": "Sıfır yerçekimindeyim ve dışarıdaki manzara kelimelerle tarif edilemez derecede güzel. Gökyüzü kapkara, yıldızlar ise Dünya'da hiç görmediğim kadar parlak.",
        "author": "John Glenn"
    },
    {
        "text": "İçeri giriyorum... Ve bu hayatımın en üzücü anı.",
        "author": "Ed White"
    },
    {
        "text": "Gidiyoruz ama geldiğimiz gibi gidiyoruz ve Tanrı'nın izniyle, tüm insanlık için barış ve umutla geri döneceğiz.",
        "author": "Gene Cernan"
    },
    {
        "text": "Ay'ı keşfetmek için bunca yolu kat ettik ama en önemlisi, Dünya'yı keşfettik.",
        "author": "William Anders"
    },
    {
        "text": "Evrim bir inanç meselesi değildir. Evrim, yerçekimi gibi, dünya üzerindeki yaşamın nasıl çeşitlendiğini açıklayan somut ve gözlemlenebilir bir doğa yasasıdır.",
        "author": "Çağrı Mert Bakırcı"
    },
    {
        "text": "Uzaydayken sadece bir yere ait olduğunuzu hissetmiyorsunuz, tüm güneş sisteminin bir parçası olduğunuzu anlıyorsunuz.",
        "author": "Kalpana Chawla"
    },
    {
        "text": "Uzayda korkuya yer yoktur. Korku, hazırlıksız olmaktan doğar. Eğer her türlü tehlikeye karşı hazırlıklıysanız, korku yerini büyük bir hayranlığa bırakır.",
        "author": "Chris Hadfield"
    },
    {
        "text": "Merak olgunlaşmış bir zekanın en kesin belirtisidir",
        "author": "Isidore Ducasse"
    },
    {
        "text": "Hayal gücü, bilgiden daha önemlidir. Bilgi sınırlıdır, ancak hayal gücü tüm dünyayı kucaklar",
        "author": "Albert Einstein"
    },
    {
        "text": "Yıldızlara ulaşmak için karanlığı kabullenmek gerekir",
        "author": "Carl Sagan"
    },
    {
        "text": "Zorlukların göbeğinde fırsatlar yatar",
        "author": "Albert Einstein"
    },
    {
        "text": "Hepimiz bataklıktayız ama bazılarımız yıldızlara bakıyor",
        "author": "Oscar Wilde"
    },
    {
        "text": "Gerçeği arayanları sevin, ama bulduğunu iddia edenlerden korkun",
        "author": "Voltaire"
    },
    {
        "text": "Yeryüzü, çok geniş bir kozmik arenada yer alan çok küçük bir sahnedir",
        "author": "Carl Sagan"
    },
    {
        "text": "Öğrenmek, akıntıya karşı kürek çekmek gibidir; ilerleyemediğinizde gerilesiniz",
        "author": "Lao Tzu"
    },
    {
        "text": "Dünün acısı, bugünün gücüdür",
        "author": "Paulo Coelho"
    },
    {
        "text": "Evren, onu anlamaya çalışanlar için bir bulmaca değil, bir yuvadır",
        "author": "Stephen Hawking"
    },
    {
        "text": "Ekinler baş vermeden, kör buzağa topallamaz!",
        "author": "Recep İvedik"
    },
    {
        "text": "Eskiden gökyüzüne bakar, yıldızlar arasındaki yerimizi merak ederdik. Şimdi ise sadece yere bakıp çamurdaki yerimiz için endişeleniyoruz.",
        "author": "Dr. Cooper"
    },
    {
        "text": "En büyük güven, Kimseye güvenmemektir.",
        "author": "Napolyon Bonapart"
    },
    {
        "text": "Ayrıca iki tane Microsoft Outlook'um olduğunu görüyorum ve ikisi de çalışmıyor.",
        "author": "Reid Wisean"
    },
    {
        "text": "İnsanlık Dünya'da doğdu. Ama burada ölmesi gerekmiyordu.",
        "author": "Dr. Cooper"
    },
    {
        "text": "Kaybetmekten korktuğun her şeyi serbest bıraktığında özgürleşirsin",
        "author": "Gautama Buddha"
    },
    {
        "text": "Hiç kimse başarı merdivenlerini elleri cebinde tırmanmamıştır",
        "author": "Konfüçyüs"
    },
    {
        "text": "Sınırlar sadece zihnimizde mevcuttur. Hayal gücümüzü kullandığımızda olasılıklar sınırsızlaşır",
        "author": "Jamie Paolinetti"
    },
    {
        "text": "Gideceğiniz yeri bilmiyorsanız, vardığınız yer의 bir önemi yoktur",
        "author": "Lewis Carroll"
    },
    {
        "text": "Geleceği tahmin etmenin en iyi yolu, onu yaratmaktır",
        "author": "Peter Drucker"
    },
    {
        "text": "Adalet mülkün temelidir",
        "author": "Mustafa Kemal Atatürk"
    },
    {
        "text": "Köpekler havlıyor diye bulutlar yok olmaz",
        "author": "İbn Rüşd"
    },
    {
        "text": "Sessizlik, ruhun kendi kendine konuşma şeklidir",
        "author": "Platon"
    },
    {
        "text": "Ruhun ilacı kitaptır",
        "author": "Japon Atasözü"
    },
    {
        "text": "Doğa bize iki kulak ve bir ağız verdi, böylece söylediklerimizin iki katını dinleyebilelim",
        "author": "Epiktetos"
    },
    {
        "text": "Bir mum, diğer bir mumu yakmakla ışığından bir şey kaybetmez",
        "author": "Mevlana"
    },
    {
        "text": "Zamanın değerini, yapacak çok işi olanlar bilir",
        "author": "Bernard Shaw"
    },
    {
        "text": "Uzaklıklar, sadece göremeyenler içindir",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "text": "Şu fani dünyada kimseye eğmedim başımı, kimsenin önünde diz çökmedim. Yalnızca şarkılarımı söylerken eğilir başım, o da dinleyenlerime saygımdandır.",
        "author": "Ahmet Kaya"
    },
    {
        "text": "Uçmayı öğrenmeden önce, ayakta durmayı ve yürümeyi öğrenmelisiniz; doğrudan uçulmaz",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "İnsan, düşünen bir kamıştır",
        "author": "Blaise Pascal"
    },
    {
        "text": "Hak bellediğin bir yola yalnız gideceksin.",
        "author": "Tevfik Fikret"
    }
]
