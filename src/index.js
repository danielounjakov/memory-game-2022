document.addEventListener('DOMContentLoaded',() =>{

    //card options
    //array of objects
    // make reference from index.html file 
    const imgsArray = [
        {
            name:'fries',
            img:'src/images/fries.png'
        },
        {
            name:'chessburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name:' hotdog',
            img:'src/images/hotdog.png'
        },
        {
            name:'fries',
            img:'src/images/fries.png'
        },
        {
            name:'chessburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name:' hotdog',
            img:'src/images/hotdog.png'
        }
       
    ]
    // this array sorts the array randomly 
    imgsArray.sort(()=>0.5 - Math.random()) // gets a random number , if number is less than 0.5 it becomes negative, if greater its positive , therefore every value gets sorted randomly 

 
 
    console.log(imgsArray)

    const body = document.querySelector('body')
    const grid = document.querySelector('.grid')
    const buttonSection = document.querySelector('.end_section')
    let imgsArrayChosen = []
    let imgsArrayChosenIds = []
    const cardsArr = []
    const removeCardArr = []
    let score = 0
    let scoreDisplay = document.getElementById('result')
    let moves = 0 
    let movesDisplay = document.getElementById('moves')
    //let movesDisplay


    // Timer variables ***************************************************************************************************
     
   
    // //Practice Timer -> remove later
    // function changeScreen()
    // {
    //     cards = document.querySelectorAll('img')
    //      /* for(let i = 0 ; i<cards.length;i++){
    //         cards[i].style.display =''
    //      } */
          
    //     //cards.style.display = 'none'
    //     console.log(cards)
    //    for(let i = 0; i<12;i++){
    //     cards[i].remove()
    //    }

    //    const timer_3 = setTimeout(createBoard,1000)


    // }
    
    // const timer_2 = setTimeout(changeScreen, 3000); // timer 1 interval 
    
    function changeScreen(){
        cards = document.querySelectorAll('img')
        for(let i = 0; i<12;i++){
                //cards[i].remove()
               }
        grid.classList.toggle('gameover')
        const button_1 = document.getElementById('button') // why does get by ID work but query selector and get by class Name does not ?
        console.log(button_1)
        button_1.style.display= 'flex'
        button_1.innerHTML = "Play Again"
        
        
         
        
        //console.log(button)
         
        //buttonSection.classList.add('button')
        //grid.classList.add('button')
        //grid.classList.add('button')
        
        
        //const gameOver = document.getElementsByClassName('grid gameover')
        //console.log(gameOver)

       // gameOver.classList.add('button')
        
        //const gameOver = document.querySelector('grid gameover')
        //console.log(gameOver)
        //gameOver.classList.add('button')
       


    }

    //const timer_2 = setTimeout(changeScreen, 3000)


    //
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    const timer_1 = setInterval(setTime, 1000); // timer 1 interval 
    console.log("timer_1 # : " + timer_1.toString())

    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
      if(score == 6 ){
        clearInterval(timer_1)
        //grid.classList.remove(cards)
        changeScreen()
        
         

        //grid.appendChild('.button')
        
      }
      
    }
    
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }


//**********************************************************************************************************************

    // functions , creates card , gives attribute to src and img path , and puts card into grid 
    function createBoard(){
        for(let i = 0;i<imgsArray.length;i++){
            cardsArr[i] = document.createElement('img')
            cardsArr[i].setAttribute('src', 'src/images/blank.png')
            cardsArr[i].setAttribute('data-id',i)
            cardsArr[i].addEventListener('click',flipCard)
            grid.appendChild(cardsArr[i])
            console.log('populate')
             
            
            
        }

    }
console.log(cardsArr)

    
    //createBoard()



    function flipCard(){                             // Main function for handling clicking
        let cardId =this.getAttribute('data-id')
        console.log('click')
        imgsArrayChosen.push(imgsArray[cardId].name)
        imgsArrayChosenIds.push(cardId)
        this.setAttribute('src',imgsArray[cardId].img)
         
        if (imgsArrayChosenIds.length>=2){
            for(let i = 0; i<imgsArray.length;i++){
                cardsArr[i].removeEventListener('click',flipCard)
            }
            setTimeout(checkForMatch,1000)
        }

        console.log(imgsArrayChosen)
        console.log(imgsArrayChosenIds)
        console.log(score)
    }

  
  
  function checkForMatch(){
    const cards = document.querySelectorAll('img')
    if (imgsArrayChosenIds[0]== imgsArrayChosenIds[1]){
        alert('You have clicked the same image twice , try finding pairs !')
        cards[imgsArrayChosenIds[0]].setAttribute('src','src/images/blank.png')
        imgsArrayChosen= []
        imgsArrayChosenIds=[]
        console.log(imgsArrayChosen)
        console.log(imgsArrayChosenIds)
    }
    
    else if (imgsArrayChosenIds[0]!= imgsArrayChosenIds[1] && imgsArrayChosen[0]!=imgsArrayChosen[1]){
        cards[imgsArrayChosenIds[0]].setAttribute('src','src/images/blank.png')
        cards[imgsArrayChosenIds[1]].setAttribute('src','src/images/blank.png')
        //cards[imgsArrayChosenIds[0]].document.
        cards[imgsArrayChosenIds[1]]
        imgsArrayChosen= []
        imgsArrayChosenIds=[]
        console.log(imgsArrayChosen)
        console.log(imgsArrayChosenIds)
        moves +=1
        movesDisplay.innerHTML = ' ' + moves.toString()

    }

    else{
        cards[imgsArrayChosenIds[0]].style.opacity = 0.3 
        cards[imgsArrayChosenIds[1]].style.opacity = 0.3 
        //alert('You got a match !!!')
        //cardsArr.splice(imgsArrayChosenIds[0],1)
        //cardsArr.splice(imgsArrayChosenIds[1],1)
        removeCardArr.push(imgsArrayChosenIds[0])
        removeCardArr.push(imgsArrayChosenIds[1])
        imgsArrayChosen= []
        imgsArrayChosenIds=[]
        score+=1
        console.log(imgsArrayChosen)
        console.log(imgsArrayChosenIds)
        console.log(removeCardArr)
        scoreDisplay.innerHTML = ' ' + score.toString()
        moves +=1
        movesDisplay.innerHTML = ' ' + moves.toString()

    }

   /*   for(let i = 0; i<cardsArrLength;i++){
        cardsArr[i].addEventListener('click',flipCard)
    }  */

    for(let i = 0; i<imgsArray.length;i++){
        cardsArr[i].addEventListener('click',flipCard)
    }

    for(let i = 0; i<removeCardArr.length;i++){
        cardsArr[removeCardArr[i]].removeEventListener('click',flipCard)
    }
}
createBoard()

 if (score==6){
     grid.classList.remove('grid')
}
 

})
