const input = document.querySelector("input");
const log = document.getElementById("log");

input.onkeydown = logKey;

let address = 0;
let htmladdress = 0;
let wordcount = 0;

function logKey(e){
    if (e.key.length == 1){
        //通常のアルファベットを入力した場合
        //現在地と全体の文字数を+1する
        address += 1;
        htmladdress += 1;
        wordcount += 1;
        //現在地に文字を挿入する
        log.innerHTML = log.innerHTML.slice(0,address - 1) + `${e.key}` + log.innerHTML.slice(address - 1);
    } else if (e.key === "ArrowLeft"){
        //左入力した場合
        console.log(log,log.innerHTML.slice(0,address),log.innerHTML.slice(address))
        //html上、現在地が先頭でないときの処理
        if (log.innerHTML.slice(htmladdress - 4,htmladdress) === "<br>"){
            htmladdress -= 4
        } else if (htmladdress !== 0){
            htmladdress -= 1
        }
        //表示上、現在地が先頭でないなら、現在地を-1する
        if (address !== 0){
            address -= 1;
        }
    } else if (e.key === "ArrowRight"){
        //右入力した場合
        console.log(log,log.innerHTML.slice(0,address),log.innerHTML.slice(address))
        //html上、現在地が末尾でないときの処理
        if (log.innerHTML.slice(htmladdress,htmladdress + 4) === "<br>"){
            htmladdress += 4
        } else if (htmladdress < log.innerHTML.length){
            htmladdress += 1
        }
        //現在地が末尾でないなら、現在地を+1する
        if (address !== wordcount){
            address += 1;
        }
    } else if (e.key === "Backspace"){
        //バックスペースを押した場合
        //html上の処理
        if (log.innerHTML.slice(htmladdress - 4,htmladdress) === "<br>"){
            log.innerHTML = log.innerHTML.slice(0, htmladdress - 4) + log.innerHTML.slice(htmladdress + 1);
            htmladdress -= 4;
        } else if (htmladdress !== 0){
                htmladdress -= 1;}
        //表示上の処理
        if (address !== 0){
            address -= 1;
            wordcount -= 1;
            log.innerHTML = log.innerHTML.slice(0, address) + log.innerHTML.slice(address + 1);  
        }
        console.log(log)
    } else if (e.key === "Enter"){
        //改行を押した場合
        console.log("Enter押したよ")
        let a = log.innerHTML.slice(0,htmladdress);
        let b = log.innerHTML.slice(htmladdress);
        console.log(a,b)
        log.innerHTML = a + "<br>" + b;
        console.log(log , log.innerHTML.length, address)
    }
    //console.log("全体の文字数は" + wordcount)
    //console.log("表示上の現在地は" + address)
    //console.log("表示上の現在地は" + log.innerHTML.slice(address - 1,address) + "と" +log.innerHTML.slice(address , address + 1) + "の間にいます")
    console.log("html上の現在地は" + log.innerHTML.slice(htmladdress - 1,htmladdress) + "と" +log.innerHTML.slice(htmladdress , htmladdress + 1) + "の間にいます")
}
