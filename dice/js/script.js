//Dice

g1 = math.floor( math.random() * 6) + 1;

cpu = math.floor( math.random() * 6) + 1;

for(let i=0; i <= 6; i++){
    
console.log('g1 ha fatto ${g1}');
console.log('cpu ha fatto ${cpu}');


    if(g1 == cpu){
        console.log('pareggio');
    }

    else if(g1 < cpu){
        console.log('g1 win')
    }

    else{
        console.log('cpu win')
    }
}