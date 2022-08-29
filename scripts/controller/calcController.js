// OS MÉTODOS DE CONTROLE DE REGRAS FICARÃO AQUI 
class CalcController{

    constructor(){
        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){
        this.setDisplayDateTime(); //METODO

     // FAZENDO O JAVASCRIPT MUDAR O HTML 

    setInterval(()=>{ 
        this.setDisplayDateTime(); //METODO
        }, 1000);   // SET INTERVAL PARA PEGAR O HORARIO CORRETO COM MILISEGUNDOS

    }

    setDisplayDateTime(){ //METODO
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;

    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
        
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}