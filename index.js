let Turn="X"
let gameover=false
//change turn 
const changeTurn = () =>{
    if (Turn==="X") {
        return "O"

    }
    else{
        return "X"
    }
    //return Turn === "X" ? "O" : "X";

}
//to check a win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins=[
        [0, 1, 2, 5, 5, 0],   // top row
        [3, 4, 5, 5, 15, 0],  // middle row
        [6, 7, 8, 5, 25, 0],  // bottom row
        [0, 3, 6, -5, 15, 90], // left column
        [1, 4, 7, 5, 15, 90],  // middle column
        [2, 5, 8, 15, 15, 90], // right column
        [0, 4, 8, 5, 15, 45],  // diagonal \
        [2, 4, 6, 5, 15, 135]  // diagonal top-right to bottom-left
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !== '' )){
            document.querySelector(".turn").innerText=boxtext[e[0]].innerText +" won"
            gameover=true
            document.querySelector(".turn").style.color="red"
            document.querySelector(".turn").style.fontSize="30px"
            document.querySelector(".image").getElementsByTagName('img')[0].style.width="200px"
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

        }
    

        })
}
//Game logic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=Turn;

            Turn=changeTurn()
            checkWin()
            if(!gameover){
                document.getElementsByClassName("turn")[0].innerText='Turn for '+Turn
            }
            
        }
    })
})
//reset button
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText= ""
        Turn="X"
        gameover=false
        document.getElementsByClassName("turn")[0].innerText='Turn for '+Turn
        document.querySelector(".image").getElementsByTagName('img')[0].style.width="0px"
        document.querySelector(".line").style.width="0vw"

    })

})
