// 요소 값 가져오기
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const btnResult = document.querySelector("#btnResult");
const btnReset = document.querySelector("#btnReset");
const txtResult = document.querySelector("#txtResult");
const elNum = document.querySelector('#txtResult .num');
const elTxt = document.querySelector('#txtResult .txt');


function showAlertTxt(msg, _biman, bgColor){
    const elResult = document.querySelector(".biman #txtResult");   
    txtResult.style.display = 'flex';
    btnReset.style.display = 'flex';
    elNum.textContent = Math.round(_biman*100)/100; 
    elTxt.textContent = msg;
    elResult.style.backgroundColor = bgColor;
   
}


function resetForm(){
    inputHeight.value = '';
    inputWeight.value = '';
    txtResult.style.display = 'none';
    btnReset.style.display = 'none';
}

btnResult.addEventListener("click", function(){
    let myHeight = inputHeight.value;
    let myWeight = inputWeight.value;

    if(myHeight === "") {
        alert('키를 입력해주세요');
    } else if(myWeight === "") {
        alert('몸무게를 입력해주세요');
    } else {        
        let meterHeight = myHeight/100;
        let biman = myWeight / (meterHeight * meterHeight); 

        if(biman < 18.5 ){
            showAlertTxt('저체중입니다.',biman,'gray');
        } else if(biman < 23) {
            showAlertTxt('정상체중입니다.',biman,'green');
        } else if(biman < 25) {
            showAlertTxt('과체중입니다.',biman,'pink');
        } else {
            showAlertTxt('비만입니다.',biman,'red');
        }

    }
    
});


btnReset.addEventListener('click',function(){
    resetForm();
});