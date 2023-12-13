// Code your solution in this file!
let position=42
function distanceFromHqInBlocks(pickup){
const num_blocks=Math.abs(pickup-position) 
return num_blocks

}
distanceFromHqInBlocks(50)
let feet=264
function distanceFromHqInFeet(pickup){
let distance_feet=distanceFromHqInBlocks(pickup)* feet
return distance_feet
}
function distanceTravelledInFeet(start,end){
return Math.abs(start-end)*264
}

const calculatesFarePrice= (start,end)=>{
    let dist= distanceTravelledInFeet(start, end)
    if(dist<=400){
        return 0
    }else if(dist >400 &&  dist<=2000){
return (dist-400)* 0.02
    }else if(dist>2000 && dist<2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}