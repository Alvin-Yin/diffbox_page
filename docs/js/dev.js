function randomString(e) {
    e = e || 32;
    var t = " ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678 ,.?",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
//alert(randomString(100));
//function showInfo() {
//		document.getElementById("doc_body").innerHTML=randomString(100);
//	}

//showInfo()
