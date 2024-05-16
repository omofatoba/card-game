
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
let comp_spec=0;
let choice_card='';
let spf='';


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
            let count=0;

          let tyh= setInterval(() => {
              count+1;
              comp_mart();
            
               special--;

  
              if (count===special) {
                clearInterval(tyh);
                special=0
              }
             
            }, 10);
           

              //special=0;

        }else{
setTimeout(() => {
    let des=document.querySelector(".des");
    let des_type='';
    let des_id=des.id;

    choice_card=spf;

    if (choice_card !='') {
        console.log(choice_card)
        des_type=choice_card;
    }else{
        console.log(choice_card+"1")
        des_type=des.getAttribute("card_type");
    }

    for (let i = 0; i < comp_card.length; i++) {
        const card = comp_card[i];

        
        let card_id=card.id;
        let card_type=card.getAttribute("card_type");

        console.log(card_type+"=")

        if (((card_type == des_type) || (card_id ==des_id)) || card_type=="whot" ) {
            yh='yes';
            let src=card.src
            change_deck(src,card_type,card_id)

            card.remove();

            if (card_id==2) {
                comp_spec=2;
                check=0;
            }else if (card_id == 14) {
                comp_spec = 1;
                check=0;
            }else if (card_id == 1) {
                comp_clicked()
            }else if(card_type =="whot"){
                    comp_choose()
            }
            
            else{
                check=0;
            }

            // insert removed card to get div
            chan(card_type,card_id)

            document.querySelector(".err").innerHTML='';  

            choice_card='';
            




             break
           }}

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
            if (comp_spec !== 0) {
                document.querySelector(".err").innerHTML=`pick ${comp_spec} from the market`;  
                console.log(comp_spec+"user")
            }else{
           
            if (check === 0) {  
           idk(card)
           
         
            }else{
                document.querySelector(".err").innerHTML='Not Your Turn';  
            }
        }
        })
    });
    }


    function idk(card) {
        let des=document.querySelector(".des");
        let des_type='';
        let des_id=des.id;
        if (spf != '') {
            console.log(spf)
            des_type=spf;
            choice_card=spf;
        }else{  
            console.log(spf+"1")
            des_type=des.getAttribute("card_type");
        }
        let card_type=card.getAttribute("card_type");
        let card_id=card.id;
      
        if (((card_type == des_type) || (card_id ==des_id)) || card_type =="whot" ) {
           spf==''
            document.querySelector(".message").style.display="none"

        let src=card.src
        change_deck(src,card_type,card_id)

         // insert removed card to get div
         chan(card_type,card_id)


        card.remove()
        document.querySelector(".err").innerHTML='';  

        if (Number(card_id) == 2) {
            special=2;
            check =1;

            comp_clicked();

        }else if (Number(card_id)==14) {
            special=1;
            check =1;

            comp_clicked();
        }else if(Number(card_id ==1)){
            
        }else if(card_type=="whot"){
            choice() 
        }
        else{
            check =1;
            comp_clicked();
        }
       
       


       
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
    
        console.log("sd"+special)
      
    }

    //clicking on the mak img;

    document.querySelector(".mak").addEventListener("click",()=>{


        if (comp_spec!==0) {
            let counter=0;
        let inter=    setInterval(() => {
               counter+1;
                comp_spec--;
               mart("user");
               if (counter === comp_spec) {
                clearInterval(inter);
                check = 1;
                user_clicked();
                comp_clicked();
               
               }
                
            }, 10);
        }else{
            mart("user")
            check =1;
            user_clicked();
            comp_clicked();
        }
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


    //user choose

    function choice() {
        document.querySelector(".modal").style.display="block";
        let joks=document.querySelectorAll(".jok");
        joks.forEach((card)=>{
            card.addEventListener("click",()=>{
               choice_card=card.getAttribute("card_type");

               check=1;
               comp_clicked();
               document.querySelector(".modal").style.display="none";

            })
        })
    }

    function comp_choose(params) {
        let comp_card=document.querySelectorAll(".comp");
       
        comp_card.forEach(card => {
      
            if (card.id == 2 || card.id == 14 || card.id == 1) {
                choice_card=card.getAttribute("card_type")

            }else{
              
                choice_card=comp_card[1].getAttribute("card_type")
            
        }

        });

        let message=document.querySelector(".message");
        message.style.display="block";
        message.innerHTML=`Give Me A ${choice_card} Card`;
       spf=choice_card;
check=0
    }