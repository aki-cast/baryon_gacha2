const items = [
    { name: "Item1", image: "Item1.jpg", probability: 0.5 },
    { name: "Item2", image: "Item2.jpg", probability: 0.4 },
    { name: "Item3", image: "Item3.jpg", probability: 0.06 },
    { name: "Item4", image: "Item4.jpg", probability: 0.03 },
    { name: "Item5", image: "Item6.jpg", probability: 0.009 },
    { name: "Item6", image: "Item5.jpg", probability: 0.001 }
];
let summary0Counter = 0;
let summary1Counter = 0;
let summary2Counter = 0;
let summary3Counter = 0;
let summary4Counter = 0;
let summary5Counter = 0;
let summary6Counter = 0;
let summary7Counter = 0;
let summary8Counter = 0;
let summary9Counter = 0;
let summary10Counter = 0;
let summary11Counter = 0;
let summary12Counter = 0;
let summary13Counter = 0;
let summary14Counter = 0;
let summary15Counter = 0;
let summary16Counter = 0;
let summary17Counter = 0;
let summary18Counter = 0;
let summary19Counter = 0;
let summary20Counter = 0;
let summary21Counter = 0;
let summary22Counter = 0;
let summary23Counter = 0;
let summary24Counter = 0;
let summary25Counter = 0;
let summary26Counter = 0;
let summary27Counter = 0;
let summary28Counter = 0;
let summary29Counter = 0;
let summary30Counter = 0;
let summary31Counter = 0;
let summary32Counter = 0;
let summary33Counter = 0;
let summary34Counter = 0;
let summary35Counter = 0;


const itemElements = document.querySelectorAll(".item img");
const spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", spinGacha);

function spinGacha() {
    // ガチャを引いたらボタンを無効化する
    spinButton.disabled = true;

    // アイテムを一旦 'ItemA.jpg' にリセット
    resetItems();

    // 新しいアイテムを表示する（0.5秒ごとに）
    let currentIndex = 0;
    let selectedItems = [];

    function displayNextItem() {
        if (currentIndex < 3) {
            setTimeout(() => {
                const selectedPrize = selectPrize();
                itemElements[currentIndex].src = selectedPrize.image;
                itemElements[currentIndex].alt = `ゲットしたアイテム: ${selectedPrize.name}`;
                selectedItems.push(selectedPrize.name);
                currentIndex++;
                displayNextItem();
            }, 500); // 0.5秒の遅延
        } else {
            // 3つのアイテムをすべて表示したらコメントを表示（0.5秒後）
            setTimeout(() => {
                displayComment(selectedItems);
            }, 500);
        }
    }

    // 初めてのアイテム表示を開始
    displayNextItem();
}

function resetItems() {
    for (let i = 0; i < itemElements.length; i++) {
        itemElements[i].src = "ItemA.jpg";
        itemElements[i].alt = "ItemA.jpg";
    }
}

function selectPrize() {
    // アイテムをランダムに選択（排出率に基づいて）
    const random = Math.random();
    let cumulativeProbability = 0;

    for (const item of items) {
        cumulativeProbability += item.probability;
        if (random <= cumulativeProbability) {
            return item;
        }
    }

    // どのアイテムも選択されなかった場合は、最後のアイテムを返す
    return items[items.length - 1];
}

// コメントと画像をモーダルウィンドウに表示
function displayComment(selectedItems) {
    // コメントを作成
    let resultSummary = "";
    const itemCounts = {};

    // アイテムの組み合わせをカウント
    selectedItems.forEach(item => {
        if (itemCounts[item]) {
            itemCounts[item]++;
        } else {
            itemCounts[item] = 1;
        }
    });

    // アイテムの組み合わせに応じてresult-summaryを設定
    if (itemCounts["Item1"] === 3) {
        resultSummary = "summary1";
    } else if (itemCounts["Item1"] === 2 && itemCounts["Item2"] === 1) {
        resultSummary = "summary2";
    } else if (itemCounts["Item1"] === 2 && itemCounts["Item3"] === 1 ) {
        resultSummary = "summary3";
    } else if (itemCounts["Item1"] === 2 && itemCounts["Item4"] === 1 ) {
        resultSummary = "summary4";
    } else if (itemCounts["Item1"] === 2 && itemCounts["Item5"] === 1 ) {
        resultSummary = "summary5";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item2"] === 2 ) {
        resultSummary = "summary6";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item2"] === 1 && itemCounts["Item3"] === 1) {
        resultSummary = "summary7";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item2"] === 1 && itemCounts["Item4"] === 1) {
        resultSummary = "summary8";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item2"] === 1 && itemCounts["Item5"] === 1) {
        resultSummary = "summary9";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item3"] === 2) {
        resultSummary = "summary10";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item3"] === 1 && itemCounts["Item4"] === 1) {
        resultSummary = "summary11";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item3"] === 1 && itemCounts["Item5"] === 1) {
        resultSummary = "summary12";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item4"] === 2) {
        resultSummary = "summary13";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item4"] === 1 && itemCounts["Item5"] === 1) {
        resultSummary = "summary14";
    } else if (itemCounts["Item1"] === 1 && itemCounts["Item5"] === 2) {
        resultSummary = "summary15";
    } else if (itemCounts["Item2"] === 3) {
        resultSummary = "summary16";
    } else if (itemCounts["Item2"] === 2 && itemCounts["Item3"] === 1) {
        resultSummary = "summary17";
    } else if (itemCounts["Item2"] === 2 && itemCounts["Item4"] === 1) {
        resultSummary = "summary18";
    } else if (itemCounts["Item2"] === 2 && itemCounts["Item5"] === 1) {
        resultSummary = "summary19";
    } else if (itemCounts["Item2"] === 1 && itemCounts["Item3"] === 2) {
        resultSummary = "summary20";
    } else if (itemCounts["Item2"] === 1 && itemCounts["Item3"] === 1 && itemCounts["Item4"] === 1) {
        resultSummary = "summary21";
    } else if (itemCounts["Item2"] === 1 && itemCounts["Item3"] === 1 && itemCounts["Item5"] === 1) {
        resultSummary = "summary22";
    } else if (itemCounts["Item2"] === 1 && itemCounts["Item4"] === 2) {
        resultSummary = "summary23";
    } else if (itemCounts["Item2"] === 1 && itemCounts["Item4"] === 1 && itemCounts["Item5"] === 1) {
        resultSummary = "summary24";
    } else if (itemCounts["Item2"] === 1 && itemCounts["Item5"] === 2) {
        resultSummary = "summary25";
    } else if (itemCounts["Item3"] === 3) {
        resultSummary = "summary26";
    } else if (itemCounts["Item3"] === 2 && itemCounts["Item4"] === 1) {
        resultSummary = "summary27";
    } else if (itemCounts["Item3"] === 2 && itemCounts["Item5"] === 1) {
        resultSummary = "summary28";
    } else if (itemCounts["Item3"] === 1 && itemCounts["Item4"] === 2) {
        resultSummary = "summary29";
    } else if (itemCounts["Item3"] === 1 && itemCounts["Item4"] === 1 && itemCounts["Item5"] === 1) {
        resultSummary = "summary30";
    } else if (itemCounts["Item3"] === 1 && itemCounts["Item5"] === 2) {
        resultSummary = "summary31";
    } else if (itemCounts["Item4"] === 3) {
        resultSummary = "summary32";
    } else if (itemCounts["Item4"] === 2 && itemCounts["Item5"] === 1) {
        resultSummary = "summary33";
    } else if (itemCounts["Item4"] === 1 && itemCounts["Item5"] === 2) {
        resultSummary = "summary34";
    } else if (itemCounts["Item5"] === 3) {
        resultSummary = "summary35";
    }   else if (itemCounts["Item6"] === 1||itemCounts["Item6"] === 2||itemCounts["Item6"] === 3) {
        resultSummary = "summary0";
    }

     // カウンターを更新
     if (resultSummary === "summary1") {
        summary1Counter++;
        document.getElementById("summary1Count").textContent = summary1Counter;
    } else if (resultSummary === "summary2") {
        summary2Counter++;
        document.getElementById("summary2Count").textContent = summary2Counter;
    } else if (resultSummary === "summary3") {
        summary3Counter++;
        document.getElementById("summary3Count").textContent = summary3Counter;
    } else if (resultSummary === "summary4") {
        summary4Counter++;
        document.getElementById("summary4Count").textContent = summary4Counter;
    } else if (resultSummary === "summary5") {
        summary5Counter++;
        document.getElementById("summary5Count").textContent = summary5Counter;
    } else if (resultSummary === "summary6") {
        summary6Counter++;
        document.getElementById("summary6Count").textContent = summary6Counter;
    } else if (resultSummary === "summary7") {
        summary7Counter++;
        document.getElementById("summary7Count").textContent = summary7Counter;
    } else if (resultSummary === "summary8") {
        summary8Counter++;
        document.getElementById("summary8Count").textContent = summary8Counter;
    } else if (resultSummary === "summary9") {
        summary9Counter++;
        document.getElementById("summary9Count").textContent = summary9Counter;
    } else if (resultSummary === "summary10") {
        summary10Counter++;
        document.getElementById("summary10Count").textContent = summary10Counter;
    } else if (resultSummary === "summary11") {
        summary11Counter++;
        document.getElementById("summary11Count").textContent = summary11Counter;
    } else if (resultSummary === "summary12") {
        summary12Counter++;
        document.getElementById("summary12Count").textContent = summary12Counter;
    } else if (resultSummary === "summary13") {
        summary13Counter++;
        document.getElementById("summary13Count").textContent = summary13Counter;
    } else if (resultSummary === "summary14") {
        summary14Counter++;
        document.getElementById("summary14Count").textContent = summary14Counter;
    } else if (resultSummary === "summary15") {
        summary15Counter++;
        document.getElementById("summary15Count").textContent = summary15Counter;
    } else if (resultSummary === "summary16") {
        summary16Counter++;
        document.getElementById("summary16Count").textContent = summary16Counter;
    } else if (resultSummary === "summary17") {
        summary17Counter++;
        document.getElementById("summary17Count").textContent = summary17Counter;
    } else if (resultSummary === "summary18") {
        summary18Counter++;
        document.getElementById("summary18Count").textContent = summary18Counter;
    } else if (resultSummary === "summary19") {
        summary19Counter++;
        document.getElementById("summary19Count").textContent = summary19Counter;
    } else if (resultSummary === "summary20") {
        summary20Counter++;
        document.getElementById("summary20Count").textContent = summary20Counter;
    } else if (resultSummary === "summary21") {
        summary21Counter++;
        document.getElementById("summary21Count").textContent = summary21Counter;
    } else if (resultSummary === "summary22") {
        summary22Counter++;
        document.getElementById("summary22Count").textContent = summary22Counter;
    } else if (resultSummary === "summary23") {
        summary23Counter++;
        document.getElementById("summary23Count").textContent = summary23Counter;
    } else if (resultSummary === "summary24") {
        summary24Counter++;
        document.getElementById("summary24Count").textContent = summary24Counter;
    } else if (resultSummary === "summary25") {
        summary25Counter++;
        document.getElementById("summary25Count").textContent = summary25Counter;
    } else if (resultSummary === "summary26") {
        summary26Counter++;
        document.getElementById("summary26Count").textContent = summary26Counter;
    } else if (resultSummary === "summary27") {
        summary27Counter++;
        document.getElementById("summary27Count").textContent = summary27Counter;
    } else if (resultSummary === "summary28") {
        summary28Counter++;
        document.getElementById("summary28Count").textContent = summary28Counter;
    } else if (resultSummary === "summary29") {
        summary29Counter++;
        document.getElementById("summary29Count").textContent = summary29Counter;
    } else if (resultSummary === "summary30") {
        summary30Counter++;
        document.getElementById("summary30Count").textContent = summary30Counter;
    } else if (resultSummary === "summary31") {
        summary31Counter++;
        document.getElementById("summary31Count").textContent = summary31Counter;
    } else if (resultSummary === "summary32") {
        summary32Counter++;
        document.getElementById("summary32Count").textContent = summary32Counter;
    } else if (resultSummary === "summary33") {
        summary33Counter++;
        document.getElementById("summary33Count").textContent = summary33Counter;
    } else if (resultSummary === "summary34") {
        summary34Counter++;
        document.getElementById("summary34Count").textContent = summary34Counter;
    } else if (resultSummary === "summary35") {
        summary35Counter++;
        document.getElementById("summary35Count").textContent = summary35Counter;
    } else {
        summary0Counter++;
        document.getElementById("summary0Count").textContent = summary0Counter;
    }


    let comment = "";
    let baryon ="";
    let starCount = 4; // デフォルトの星の数


    // コメントを作成
    if (resultSummary === "summary1") {
        comment = "アップクォークが3つ集まってできたバリオンです。一見同じクォークが三つ集まっているように見えますが、"+
        "3つともそれぞれR,G,Bの別々のカラーチャージを持っています。また、+2の電荷を持っており、"+
        "クォークモデルが作られるとき、重要な手掛かりになりました。半減期はおよそ5.6&#215;10<sup>-24</sup>秒です。";
        baryon = "uuu:デルタ粒子++";
        starCount =2;
    
    } else if (resultSummary === "summary2") {
        comment = "最も軽いバリオンで、中性子とともに身の回りの原子の核を構成しています。"+
        "標準模型によれば崩壊しませんが、大統一理論では崩壊が予言されており、世界中で陽子の崩壊を観測しようとする実験が行われてきました。"+
        "しかし、いまだに陽子の崩壊は観測されていません。大統一理論に基づく半減期はおよそ10<sup>31</sup>~10<sup>36</sup>年です。";
        baryon = "uud:陽子";
        starCount =1;
   
    } else if (resultSummary === "summary3") {
        comment = "アップクォークとストレンジクォークからできています。陽子や中性子より数割重く、不安定です。"+
        "中性子星にもわずかに含まれていることがわかっており、ハイペロンと他の核子の相互作用については盛んに研究が行われています。"+
        "ハイペロンのビームを実験的に作ることが難しいので、この研究はもっぱらハイパー核を対象にすることが多いです。"+
        "J-PARCのハドロン実験施設でもハイパー核を作る実験を行っています。";
        baryon = "uus:シグマハイペロン";
        starCount = 2;
    } else if (resultSummary === "summary4") {
        comment = "アップクォークが2つ、チャームクォークが1つで電荷は+2です。"+
        "ストレンジクォークよりさらに重いチャームクォークを含むため、不安定で、半減期はおよそ3.5&#215;10<sup>-22</sup>秒です。";
        baryon = "uuc:チャームドシグマ";
        starCount =3;
    } else if (resultSummary === "summary5") {
        comment = "アップクォークが2つ、ボトムクォークが1つで電荷は+1です。"+
        "第3世代のクォークを含むため極めて不安定で、半減期はおよそ1.3&#215;10<sup>-22</sup>秒です。";
        baryon = "uub:ボトムシグマ";
        starCount =4;
    } else if (resultSummary === "summary6") {
        comment = "陽子とともに身の回りの原子の核を構成しています。"+
        "電荷を持たない粒子で、陽子よりほんのわずかに重いです。"+
        "太陽の8倍より重い星がつぶれると、超新星爆発を起こし、中心に「中性子星」ができます。"+
        "中性子星には中性子がぎっしりと詰まっています。"+
        "中性子星の質量は最大でも太陽の1.5倍くらいだとされていましたが、"+
        "2010年に太陽のおよそ2倍の質量の中性子星が発見されました。"+
        "どうしてそんなに重い中性子星が存在できるのかについてはまだ解明されておらず、"+
        "現在研究が進められています。";
        baryon = "udd:中性子";
        starCount =1;
    
    } else if (resultSummary === "summary7") {
        comment = "電荷は0,半減期は2.6&#215;10<sup>-10</sup>秒です。"+
        "1950年の8月にメルボルン大学で発見され、予想されていたよりもはるかに長い寿命を持っていたことからストレンジクォークの発見につながりました。"+
        "ハイペロンの一種です。ハイパー核を形成します。";
        baryon = "uds:ラムダ0";
        starCount =2;
    } else if (resultSummary === "summary8") {
        comment = "1977年にCERNで行われたWA17実験で存在が確認されました。"+
        "電荷は+1,半減期は2.0&#215;10<sup>-13</sup>秒です。";
        baryon = "udc:チャームドラムダ+";
        starCount =2;
    } else if (resultSummary === "summary9") {
        comment = "電荷は0,半減期は1.4&#215;10<sup>-12</sup>秒です。";
        baryon = "udb:ボトムラムダ";
        starCount =3;
    } else if (resultSummary === "summary10") {
        comment = "第一世代のクォークを1つ、s,c,bのうちから2つのクォークを含む準粒子はグザイバリオン、もしくは、カスケード粒子と呼ばれます。"+
        "カスケード粒子と呼ばれるのは、不安定ですぐに軽い粒子に放射性崩壊するからです。"+
        "中性のカスケード粒子は、ローレンス・バークレー研究所で1959年に初めて発見されました。";
        baryon = "uss:中性カスケードハイペロン";
        starCount =3;

    } else if (resultSummary === "summary11") {
        comment = "電荷は+1,半減期は4.4&#215;10<sup>-13</sup>秒です。";
        baryon = "usc:チャームドグザイ";
        starCount =3;
    } else if (resultSummary === "summary12") {
        comment =  "三つの世代のクォーク全てを含んでいます。"+
        "電荷は0,半減期は1.4&#215;10<sup>-12</sup>秒です。";
        baryon = "usb:ボトムグザイ粒子";
        starCount =3;

    } else if (resultSummary === "summary13") {
        comment = "2017年にLHCbで発見されました。アップクォーク1つとチャームクォーク2つを含み、電荷は+2です。"+
        "陽子の3.8倍の重さがあり、半減期は0.256&#215;10<sup>-12</sup>秒です。";
        baryon = "ucc:ダブルチャームドグザイ";
        starCount =3;

    } else if (resultSummary === "summary14") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        baryon = "ucb:チャームドボトムグザイ";
        starCount =4;
    
    } else if (resultSummary === "summary15") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        baryon = "ubb:ダブルボトムグザイ";
        starCount =4;

    } else if (resultSummary === "summary16") {
        comment = "ダウンクォークが3つ集まってできたバリオンです。"+
        "1232Mevの質量を持ち、5.6&#215;10<sup>-24</sup>秒でパイオンと中性子に崩壊します。";
        baryon = "ddd:デルタ粒子-";
        starCount =2;
    } else if (resultSummary === "summary17") {
        comment = "電荷は-1、半減期は1.5&#215;10<sup>-10</sup>秒です。"+
        "第一世代のクォークとストレンジクォークを含む粒子なので、ハイペロンの一種です。";
        baryon = "dds:シグマ粒子";
        starCount =2;
    } else if (resultSummary === "summary18") {
        comment = "電荷は0、半減期は3.6&#215;10<sup>-22</sup>秒です。";
        baryon = "ddc:チャームドシグマ";
        starCount =2;

    } else if (resultSummary === "summary19") {
        comment = "電荷は-1、半減期は1.2&#215;10<sup>-22</sup>秒です。"+
        "ラムダ粒子とパイオンに崩壊します。";
        baryon = "ddb:ボトムシグマ";
        starCount =3;

    } else if (resultSummary === "summary20") {
        comment = "電荷は-1、半減期は1.6&#215;10<sup>-10</sup>秒です。";
        baryon = "dss:グザイマイナス粒子";
        starCount =3;

    } else if (resultSummary === "summary21") {
        comment = "電荷は0、半減期は1.5&#215;10<sup>-13</sup>秒です。";
        baryon = "dsc:チャームドグザイ粒子";
        starCount =3;
    } else if (resultSummary === "summary22") {
        comment = "三つの世代の粒子を一つずつ含むカスケード粒子としては初めて発見されました。"+
        "発見したのはフェルミ研究所で、2007年の7月12日に発見が発表されました。";
        baryon = "dsb:カスケードB粒子";
        starCount =3;
    } else if (resultSummary === "summary23") {
        comment = "見つかったのか見つかってないのか論争中です。半減期もよくわかっていません。";
        baryon = "dcc:ダブルチャームドグザイ";
        starCount =3;

    } else if (resultSummary === "summary24") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "dcb:チャームドボトムグザイ";
        starCount =4;

    } else if (resultSummary === "summary25") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        baryon = "dbb:ダブルボトムグザイ";
        starCount =4;

    } else if (resultSummary === "summary26") {
        comment =  "第一世代のクォークを一つも含まない準粒子をオメガ粒子と言います。"
        +"初めて見つかったオメガ粒子がオメガマイナス粒子です。1964年に発見されました。"
        +"弱い相互作用でしか崩壊しないので、第一世代のクォークを含まないにも関わらず寿命が長いです。"
        +"電荷は-1、半減期は8.2&#215;10<sup>-11</sup>秒です。";
        baryon = "sss:オメガマイナス粒子";
        starCount =3;

    } else if (resultSummary === "summary27") {
        comment = "電荷は0、半減期は2.7&#215;10<sup>-13</sup>秒です。"+
        "1985年に発見されました。";
        baryon = "ssc:チャームドオメガ";
        starCount =3;
    } else if (resultSummary === "summary28") {
        comment = "電荷は-1、半減期は1.1&#215;10<sup>-12</sup>秒です。";
        baryon = "ssb:ボトムオメガ";
        starCount =3;

    } else if (resultSummary === "summary29") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "scc:ダブルチャームドオメガ";
        starCount =4;

    } else if (resultSummary === "summary30") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "scb:チャームドボトムオメガ";
        starCount =4;
    } else if (resultSummary === "summary31") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "sbb:ダブルボトムオメガ";
        starCount =4;
    } else if (resultSummary === "summary32") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "ccc:トリプルチャームドオメガ";
        starCount =4;
    } else if (resultSummary === "summary33") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "ccb:ダブルチャームドボトムオメガ";
        starCount =4;
    } else if (resultSummary === "summary34") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "cbb:チャームドダブルボトムオメガ";
        starCount =4;
    } else if (resultSummary === "summary35") {
        comment = "この粒子は標準模型によりその存在を予言されているものの、現在まで実験的に作られたことのない未発見粒子です。";
        
        baryon = "bbb:トリプルボトムオメガ";
        starCount =5;
    }else {
        comment = "標準模型によれば、トップクォークの半減期は5x10-25秒であり、あまりにも短いためハドロン(バリオンや中間子）を形成しません。"+
        "小林益川理論で第三世代のクォークの存在が1973年に予言され、アメリカのフェルミ国立加速器研究所によって1994年に発見が発表されました。"+
        "トップクォークは、極めて重いクオークで、CERNとフェルミ国立加速 研究所が互いの加速の性能の限界に挑戦しながら20年かけて探し続けた末の発見でした。";
        baryon = "なし";
        starCount =0;
    }

    // 画像のパスを設定
    let imagePath = "B0.jpg"; // デフォルト画像のパス
    if (resultSummary === "summary1") {
        imagePath = "B1.jpg"; // summary1の画像のパス
    } else if (resultSummary === "summary2") {
        imagePath = "B2.jpg"; // summary2の画像のパス
    } else if (resultSummary === "summary3") {
        imagePath = "B3.jpg"; // summary3の画像のパス
    } else if (resultSummary === "summary4") {
        imagePath = "B4.jpg"; // summary4の画像のパス
    } else if (resultSummary === "summary5") {
        imagePath = "B5.jpg"; // summary5の画像のパス
    } else if (resultSummary === "summary6") {
        imagePath = "B6.jpg"; // summary6の画像のパス
    } else if (resultSummary === "summary7") {
        imagePath = "B7.jpg"; // summary7の画像のパス
    } else if (resultSummary === "summary8") {
        imagePath = "B8.jpg"; // summary8の画像のパス
    } else if (resultSummary === "summary9") {
        imagePath = "B9.jpg"; // summary9の画像のパス
    } else if (resultSummary === "summary10") {
        imagePath = "B10.jpg"; // summary10の画像のパス
    } else if (resultSummary === "summary11") {
        imagePath = "B11.jpg"; // summary11の画像のパス
    } else if (resultSummary === "summary12") {
        imagePath = "B12.jpg"; // summary12の画像のパス
    } else if (resultSummary === "summary13") {
        imagePath = "B13.jpg"; // summary13の画像のパス
    } else if (resultSummary === "summary14") {
        imagePath = "B14.jpg"; // summary14の画像のパス
    } else if (resultSummary === "summary15") {
        imagePath = "B15.jpg"; // summary15の画像のパス
    } else if (resultSummary === "summary16") {
        imagePath = "B16.jpg"; // summary16の画像のパス
    } else if (resultSummary === "summary17") {
        imagePath = "B17.jpg"; // summary17の画像のパス
    } else if (resultSummary === "summary18") {
        imagePath = "B18.jpg"; // summary18の画像のパス
    } else if (resultSummary === "summary19") {
        imagePath = "B19.jpg"; // summary19の画像のパス
    } else if (resultSummary === "summary20") {
        imagePath = "B20.jpg"; // summary20の画像のパス
    } else if (resultSummary === "summary21") {
        imagePath = "B21.jpg"; // summary21の画像のパス
    } else if (resultSummary === "summary22") {
        imagePath = "B22.jpg"; // summary22の画像のパス
    } else if (resultSummary === "summary23") {
        imagePath = "B23.jpg"; // summary23の画像のパス
    } else if (resultSummary === "summary24") {
        imagePath = "B24.jpg"; // summary24の画像のパス
    } else if (resultSummary === "summary25") {
        imagePath = "B25.jpg"; // summary25の画像のパス
    } else if (resultSummary === "summary26") {
        imagePath = "B26.jpg"; // summary26の画像のパス
    } else if (resultSummary === "summary27") {
        imagePath = "B27.jpg"; // summary27の画像のパス
    } else if (resultSummary === "summary28") {
        imagePath = "B28.jpg"; // summary28の画像のパス
    } else if (resultSummary === "summary29") {
        imagePath = "B29.jpg"; // summary29の画像のパス
    } else if (resultSummary === "summary30") {
        imagePath = "B30.jpg"; // summary30の画像のパス
    } else if (resultSummary === "summary31") {
        imagePath = "B31.jpg"; // summary31の画像のパス
    } else if (resultSummary === "summary32") {
        imagePath = "B32.jpg"; // summary32の画像のパス
    } else if (resultSummary === "summary33") {
        imagePath = "B33.jpg"; // summary33の画像のパス
    } else if (resultSummary === "summary34") {
        imagePath = "B34.jpg"; // summary34の画像のパス
    } else if (resultSummary === "summary35") {
        imagePath = "B35.jpg"; // summary35の画像のパス
    }
    

    // モーダルウィンドウの要素を取得
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("myModalContent");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // 星の数を表示するHTMLを作成
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < starCount) {
            starsHTML += '<span class="star star-yellow">&#9733;</span>'; // 黄色い星
        } else {
            starsHTML += '<span class="star star-gray">&#9733;</span>'; // 灰色の星
        }
    }

    // モーダルウィンドウのコンテンツを設定
    modalContent.innerHTML = `
        <p>あなたがゲットしたバリオンは、、、</p>
        <h1>${baryon}</h1>
        <div class="stars">${starsHTML}</div>
        <img src="${imagePath}" alt="アイテム画像">
        <p>${comment}</p>
    
    `;

    // モーダルウィンドウを表示
    modal.style.display = "block";

    // 「とじる」ボタンをクリックしたときの処理
    closeModalBtn.onclick = function () {
        modal.style.display = "none";
        spinButton.disabled = false;

    };

    // クリックした場所がモーダルウィンドウ外の場合も閉じる
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            spinButton.disabled = false;
        }
    };
}
