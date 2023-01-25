
const body = document.body;

// CHERCHIVE
const frame = document.createElement("div");
frame.style.width = "502px";
frame.style.height = "502px";
frame.style.border = "1px solid black";
frame.style.margin = "100px auto auto auto";
frame.style.display = "flex";
frame.style.flexWrap = "wrap";
body.appendChild(frame);

// XANALAR

for(let i=1;i<=25;i++){
    for(let j=1;j<=25;j++){
        const square = document.createElement("div");
        square.style.width = "20px";
        square.style.height = "20px";
        square.style.borderRadius = "30%"
        // square.style.border = "1px solid green";
        square.id = `square-${i}-${j}`
        frame.appendChild(square);
    }
}




let snake = []

const snakeStart = frame.children[Math.ceil(Math.random() * 626)];

const snakeArray = snakeStart.id.split("-");
snakeArray[1] = Number(snakeArray[1]);
snakeArray[2] = Number(snakeArray[2]);

snake[0] = snakeStart
snake[0].style.backgroundColor = "#01120c";
// console.log(snake[0])
snake = snake.reverse()

let food = frame.children[Math.ceil(Math.random() * 626)];
food.style.backgroundColor = "#078387";

let foodArray = food.id.split("-");
foodArray[1] = Number(foodArray[1]);
foodArray[2] = Number(foodArray[2]);




let arrow = 0;
let flag = false;

 
const moveSnake = setInterval (() => {

   

    document.addEventListener("keydown", (e) => {

        switch(e.key){
            case "ArrowRight": if(arrow != 4){arrow = 2};
            break;
            case "ArrowDown": if(arrow != 1){arrow = 3};
            break;
            case "ArrowLeft": if(arrow != 2){arrow = 4};
            break;
            case "ArrowUp": if(arrow != 3){arrow = 1};
            break;
            default: arrow = 0;
        }

    })
   
            switch(arrow){
                case 1: snakeArray[1]--
                break;
                case 2: snakeArray[2]++
                break;
                case 3: snakeArray[1] ++
                break;
                case 4: snakeArray[2]--
                break;
            }
        
        
            
            if(snakeArray[1] > 25){
                snakeArray[1] = 1
            }
            if(snakeArray[1] < 1){
                snakeArray[1] = 25
            }
           if(snakeArray[2] > 25){
            snakeArray[2] = 1
        }
        if(snakeArray[2] < 1){
            snakeArray[2] = 25
        }
        
        snake.unshift(document.getElementById(`square-${snakeArray[1]}-${snakeArray[2]}`)) 

        if((foodArray[1] != snakeArray[1]) || (foodArray[2] != snakeArray[2])){
 
            snake.pop().style.backgroundColor = "white";
 
        }
        else {
           
            food = frame.children[Math.ceil(Math.random() * 626)];
            snake.map((value) => {

                
                while(value.id == food.id){
                    // console.log("kesisdi")
                    // console.log(snake)
                    // console.log(food)
                    food = frame.children[Math.ceil(Math.random() * 626)];
                   
                }
                foodArray = food.id.split("-");
                foodArray[1] = Number(foodArray[1]);
                foodArray[2] = Number(foodArray[2]);
                food.style.backgroundColor = "#078387";
            })
        }
           

        snake.map((value) => {
            value.style.backgroundColor = "#210103";
            snake[0].style.backgroundColor = "#01120c"
            for(let index = 1;index<snake.length;index++){
                if(snake[0].id == snake[index].id){
                   
                    clearInterval(moveSnake)
                
                }
            }
  
        })


   
   
}, 200)



