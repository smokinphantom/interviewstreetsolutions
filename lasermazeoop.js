process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
 
var height;
var width;
var counter = 0;
var i,j,limit;
var room = [];
var flag = 0;
var rflag =0;var lflag=0; var uflag =0; var dflag =0;
 
  
var stringarr = input;
  
stringarr = stringarr.split(""); 
 
width = stringarr.indexOf('\n'); //width of the room
for(ij=0;ij<stringarr.length;ij++)
{
 var chara = stringarr.splice(ij,width);
 room.push(chara);
}
    
height=room.length;  //height of the room
limit = height*width;
  
    
for(j=0; j<height; j++){ //iterating the 2d array
for(i=0; i<width; i++){
  if(room[j][i]=="@") //@ is found. Now the count will begin
   flag=1;
   
  
 if(flag==1){
    
  counter++;
   				//redundant code start which can be replaced by checkDir();  
  if(room[j][i]=="v")
  {
     
    goDown();
    console.log(counter);
    return 0;
  }else if(room[j][i]=="<")
  {
    
    goLeft();
    console.log(counter);
    return 0;
  }else if(room[j][i]==">")
  {
    
    goRight();
    console.log(counter);
    return 0;
  }else if(room[j][i]=="^")
  {
    
    goUp();
    console.log(counter);
    return 0;
  }				//redundant code ends
  if(i==width-1)
  {
    console.log(counter);
    return 0;
  }
 }
}} 

function goDown() //in case v is encountered
{ 
	lflag = 0;dflag=1;rflag =0; uflag =0;

  	if(counter>limit) //check for a loop
  	{
    	counter=(-1);
    	return 0;
  	}
  	
	while(j<height-1)
	{
  		j++;
  		counter++;
  
  		if(room[j][i]=="-" || room[j][i]=="v") continue;
  		else{
    			checkDir();  //check for directions
    			return 0;
  			}

 	}
}
  
function goLeft() //in case < is encountered
{ 
lflag = 1;dflag=0;rflag =0; uflag =0;
 
while(i>0)
{
  	i--;
    counter++;
    
    if(room[j][i]=="-" || room[j][i]=="<") continue;
  	else{
    	checkDir();  //check for directions
    	return 0;
  		}
    
}
}
  
function goUp() //in case ^ is encountered
{
lflag = 0;dflag=0;rflag =0; uflag =1;

while(j>0)
{
  	j--;
  	counter++;
  
  	if(room[j][i]=="-" || room[j][i]=="^") continue;
  	else{
    	checkDir();  //check for directions
    	return 0;
  		}
  
}
}
  
function goRight() // in case > is encountered
{ 
lflag = 0;dflag=0;rflag =1; uflag =0;

while(i<width-1)
{
 	i++;
  	counter++;
  
  	if(room[j][i]=="-" || room[j][i]==">") continue;
  	else{
    	checkDir(); //check for directions
    	return 0;
  		}
  
}
}
  
  
function checkDir(){
  if(room[j][i]=="v")
  {
    
    if(uflag==1) counter =-1;
    else{
          goDown();
          return;
    	}
  }else if(room[j][i]=="^")
  { 
   
    if(dflag==1) counter =-1;
    else{
          goUp();
          return;
        }
  }else if(room[j][i]=="<")
  {  
    
   if(rflag==1) counter = -1;
    else{
          goLeft();
          return;
        }
  }else if(room[j][i]==">")
  {
    
    if(lflag==1) counter=-1;
    else{
          goRight();
          return;
        }
  }
    
}

});
