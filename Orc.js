
var orc  ={

hair:"green",
age:26,
stomachFull:true,

eat:function(){
document.write("YUM YUM!!!");}
};

orc.stomachFull = false;

if( orc.stomachFull == true){
orc.eat();
recentAge= orc.age + 1;
document.write(" and i am " + recentAge);
}

else{
	document.write("No more");
	recentAge= orc.age;
	document.write(" and i am " + recentAge);
}
