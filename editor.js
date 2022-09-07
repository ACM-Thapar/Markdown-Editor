function run(){
    let htmlCode = document.querySelector(".container #html").value;
    let cssCode = "<style>" + document.querySelector(".container #css").value + "</style>";
    let jsCode = document.querySelector(".container #js").value;
    let output = document.querySelector(".output-code #output");
    // console.log(htmlCode, cssCode, jsCode, output);
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}
document.querySelector(".container #html").addEventListener("keyup", run);
document.querySelector(".container #css").addEventListener("keyup", run);
document.querySelector(".container #js").addEventListener("keyup", run);