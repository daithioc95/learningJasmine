whatCanIDrink = function(){
    this.value = 0;
}

whatCanIDrink = function(number){
    if(typeof(number) == "number"){
        if(number<0){
            return "Sorry. I can’t tell what drink because that age is incorrect!";
        }
        if(number<14){
            return "Drink Toddy";
        }
        if(number<18){
            return "Drink Coke"
                }
        if(number<24){
            return "Drink Beer";
                        }
        if(number<130){
            return "Drink Whisky";
                        }
    } else{
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}
