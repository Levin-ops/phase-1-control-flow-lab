function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return `This one is on me!`;
  }else if(distance>=2000 && distance<=2500){
    return 'I will gladly take your thirty bucks.'
  } else{
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city =='NYC'? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip == 'generous'){
    return `Thank you so much.`;
  }else if(tip == 'not as generous'){
    return 'Thank you.'
  } else{
    return 'Bye.'
  }
}