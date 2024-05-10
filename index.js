
document.querySelector(".start").addEventListener('click',()=>{
    computer_st()
    user_st()
    deck()
   
    setTimeout(() => {
        user_clicked()  
        document.querySelector(".card_rem").innerHTML=document.querySelectorAll(".pl").length;
    }, 50);
   
})

let special=0;

function chan(card_type, id) {
    
            // inserting removed to get div
            let np=document.createElement("p");
            np.className='rm';
            np.setAttribute("card_type",card_type);
            np.id=id;
            document.querySelector(".get").append(np)
}

let check=0;

function  computer_st() {
 
    let c_holder=document.querySelector(".c-holder");
        
      let inter=  setInterval(() => {
            let pls=document.querySelectorAll(".pl");

            if (c_holder.childElementCount < 5) {

            let rand=Math.floor(Math.random()*52);

            let choose=pls[rand];

            if (choose === undefined) {
                
            }else{
            let card_type=choose.getAttribute("card_type");
            let id=choose.id;
            let card_name=card_type+id+".jpg";
        
            let img=document.createElement("img");
            img.className="card sp comp";
        img.src="images/"+card_name;

        img.setAttribute("card_type",card_type);
        img.id=id
            c_holder.append(img)
    
            pls[rand].remove();

            // inserting removed to get div
           chan(card_type,id)

            }

        }else{
            clearInterval(inter)
        }
    
        }, 5);
  
 
}


function user_st(params) {
  
    let p_holder=document.querySelector(".p-holder");

    
        
     let inter=   setInterval(() => {
            let pls=document.querySelectorAll(".pl");
            if (p_holder.childElementCount < 5) {

            let rand=Math.floor(Math.random()*52);

            let choose=pls[rand];

            if (choose === undefined) {
                
            }else{
                let card_type=choose.getAttribute("card_type");
                let id=choose.id;
                let card_name=card_type+id+".jpg";
               
                let img=document.createElement("img");
                img.className="card sp user";
            img.src="images/"+card_name;


            img.setAttribute("card_type",card_type);
        img.id=id

                p_holder.append(img)
        
                
            // inserting removed to get div
            chan(card_type,id)

                pls[rand].remove();
    
            }

           

        }else{
clearInterval(inter);
        }
    
        }, 5);
  
       
    }    



    function deck() {
        let deck=document.querySelector(".deck");
        let pls=document.querySelectorAll(".pl");
       

        let rand=Math.floor(Math.random()*52);

        let choose=pls[rand];

        if (choose === undefined) {
            
        }else{
            let card_type=choose.getAttribute("card_type");
            let id=choose.id;
            let card_name=card_type+id+".jpg";
           
            let img=document.createElement("img");
            img.className="card des";
        img.src="images/"+card_name;

        img.setAttribute("card_type",card_type);
        img.id=id

            deck.append(img)
            chan(card_type,id)
            pls[rand].remove();

        }

       

    
    }



    ///computer click on card;

    function comp_clicked(params) {
        let yh=null;
        if (check === 0){}
        else{
        let comp_card=document.querySelectorAll(".comp");
        if (special !== 0) {

            console.log("p"+special)

            for (let i = 0; i <special ; i++) {
             comp_mart();
             check=0;
              }
              special=0;

        }else{
setTimeout(() => {

    for (let i = 0; i < comp_card.length; i++) {
        const card = comp_card[i];

        let des=document.querySelector(".des");
        let des_type=des.getAttribute("card_type");
        let des_id=des.id;
        let card_type=card.getAttribute("card_type");
        let card_id=card.id;

        if ((card_type == des_type) || (card_id ==des_id) ) {
yh='yes';
            let src=card.src
            change_deck(src,card_type,card_id)

            // insert removed card to get div
            chan(card_type,card_id)


            card.remove()
            document.querySelector(".err").innerHTML='';  

            check=0;

           
            user_clicked()
             break
           }else{
            
           }
    }
    if (yh == null) {
        console.log(yh)
        comp_mart()
    }
}, 700)};
      
       
                
      
}       
    
}

    /// user click on card;

    function user_clicked(params) {
        
    let user_card=document.querySelectorAll(".user");
    user_card.forEach(card => {
        card.addEventListener("click",()=>{
           
            if (check === 0) {  
           idk(card)
           
         
            }else{
                document.querySelector(".err").innerHTML='Not Your Turn';  
            }

        })
    });
    }


    function idk(card) {
        let des=document.querySelector(".des");
        let des_type=des.getAttribute("card_type");
        let des_id=des.id;
        let card_type=card.getAttribute("card_type");
        let card_id=card.id;
      
        if ((card_type == des_type) || (card_id ==des_id) ) {
        let src=card.src
        change_deck(src,card_type,card_id)

         // insert removed card to get div
         chan(card_type,card_id)


        card.remove()
        document.querySelector(".err").innerHTML='';  

        if (Number(card_id) == 2) {
            special=2;
        }else if (Number(card_id)==14) {
            special=1;
        }
       
        check =1;

        comp_clicked();


       
       }else{
        document.querySelector(".err").innerHTML="Card Do Not Match"
       }
    }

    function change_deck(card_src,type,id) {
        let des=document.querySelector(".des");
        des.src=card_src
        des.setAttribute("card_type",type);
        des.id=id
    }


    //market time


    function comp_mart(params) {
   
        
        if (special===0) {
            
        }{
            mart("comp")
        }
        check = 0;
       special=0;
        console.log("sd"+special)
      
    }

    //clicking on the mak img;

    document.querySelector(".mak").addEventListener("click",()=>{

        mart("user")
        check =1;
        user_clicked();
        comp_clicked()
    })


    function mart(user_type) {
        let holder='';
        let cn='';
        if (user_type === 'user') {
           holder =document.querySelector(".p-holder");
           cn='user'
        }else{
            holder=document.querySelector(".c-holder");
            cn='comp'
        }
        let pls=document.querySelectorAll(".pl");

        let rand=Math.floor(Math.random()*(pls.length-1));

            let choose=pls[rand];

            if (choose === undefined) {
                
            }else{
            let card_type=choose.getAttribute("card_type");
            let id=choose.id;
            let card_name=card_type+id+".jpg";
        
            let img=document.createElement("img");
            img.className=`card sp ${cn} `;
        img.src="images/"+card_name;

        img.setAttribute("card_type",card_type);
        img.id=id;

            holder.append(img)
    
            pls[rand].remove();
            }

            document.querySelector(".card_rem").innerHTML=document.querySelectorAll(".pl").length;


            if (document.querySelectorAll(".pl").length === 0 ) {

                let rm=document.querySelectorAll(".rm");
                
                rm.forEach((card)=>{
                card.className='pl';


                })
            }

    }