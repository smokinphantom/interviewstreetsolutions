process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
 
var height;
var width;
var counter = 0;
var i,j,limit;
var room = [];
var flag = 0;
 
  
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
     
  if(room[j][i]=="v")
  {
     
    godown();
    console.log(counter);
    return 0;
  }else if(room[j][i]=="<")
  {
    
    goleft();
    console.log(counter);
    return 0;
  }else if(room[j][i]==">")
  {
    
    goright();
    console.log(counter);
    return 0;
  }else if(room[j][i]=="^")
  {
    
    goup();
    console.log(counter);
    return 0;
  }
  if(i==width-1)
  {
    console.log(counter);
    return 0;
  }
 }
}} 
function godown() //in case v is encountered
{ 
  if(counter>limit)
  {
    counter=(-1);
    return 0;
  }
while(j<height-1){
  j++;
  counter++;
  if(room[j][i]=="<")
   {
     
     goleft();
     return;
   }else if(room[j][i]==">")
   {
     
     goright();
     return;
   }else if(room[j][i]=="^")
   {
     counter=(-1);
     return;
   }
 }
  
  
}
function goleft() //in case < is encountered
{
  while(i>0){
  i--;
    counter++;
    if(room[j][i]=="^")
    {
      
      goup();
      return;
    }else if(room[j][i]=="v")
    {
      
      godown();
      return;
    }else if(room[j][i]==">")
    {
      counter=(-1);
      return;
    }
  }
}
function goup() //in case ^ is encountered
{
while(j>0){
  j--;
  counter++;
  if(room[j][i]==">")
  {
    
    goright();
    return;
  }else if(room[j][i]=="<")
  {
    
    goleft();
    return;
  }else if(room[j][i]=="v")
  {
    counter=(-1);
    return;
  }
  
  }
}
  
function goright() // in case > is encountered
{
while(i<width-1)
{
 i++;
  counter++;
  if(room[j][i]=="v")
  {
    
    godown();
    return;
  }else if(room[j][i]=="^")
  {
     
    goup();
    return;
  }else if(room[j][i]=="<")
  {
    counter=(-1);
    return;
  }
  
}
}
});
