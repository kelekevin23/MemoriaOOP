$(function(){

    const szuloElem = $("article");
    const sablonElem = $(".kartya");
    const meret = 3;
    const kivalasztottKartyak = [];

    for (let index = 0; index < meret; index++) {
        for (let k = 0; k < 2; k++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const kartya = new Kartya("kepek/kep"+(index+1)+".jpg", ujElem);
        }
        
    }

    sablonElem.remove();
    
    //felfordított kártya számolása

    $(window).on("kartyaKattintas", (event)=>{
        //console.log(event.detail);// aktuális kártya adata
        kivalasztottKartyak.push(event.detail);

        if(kivalasztottKartyak.length === 2){
            if(kivalasztottKartyak[0].fajlnev === kivalasztottKartyak[1].fajlnev){
                kivalasztottKartyak[0].eltuntet();
                kivalasztottKartyak[1].eltuntet();

                kivalasztottKartyak.splice(0,2);
            } else {
                setTimeout(function(){
                    kivalasztottKartyak[0].atvalt();
                    kivalasztottKartyak[1].atvalt();
                    kivalasztottKartyak.splice(0,2);
                },1000);
               
            }

            
        }
    });
});