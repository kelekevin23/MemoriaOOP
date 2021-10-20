class Kartya{
    constructor(fajlnev, elem){
        this.elem = elem;
        this.fajlnev = fajlnev;
        //console.log(this.fajlnev);
        // az img elem, akkor elem.attr("src",fajlnev)

        this.kepElem = elem.children("img"); //div elem képeleme lesz

        this.allapot = false;
        this.hatter = "kepek/hatter.jpg";
        this.setLap();

        this.elem.on("click", ()=>{
            this.atvalt();
            this.kattintasTrigger();
        })
    }

    atvalt(){
        this.allapot =! this.allapot;
        this.setLap();
    }

    setLap(){
        if(this.allapot){
            this.kepElem.attr("src", this.fajlnev);
        } else{
            this.kepElem.attr("src", this.hatter);
        }
    }


    kattintasTrigger(){
        //let esemeny = new Event("kartyaKattintas");
        let esemeny = new CustomEvent("kartyaKattintas", {detail:this});
        window.dispatchEvent(esemeny);

    }

    eltuntet(){
        this.elem.css("visibility","hidden");
    }
}