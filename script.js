//your JS code here. If required.
let promise1=new Promise((res,rej)=>{
	setTimeout(()=>{
	return document.getElementById("p1").InnerHTML.value="Promise 1"},2000);
	
let promise2=new Promise((res,rej)=>{
	setTimeout(()=>{
	return console.log("Promise 2")},1000)
});
let promise3=new Promise((res,rej)=>{
	setTimeout(()=>{
	return console.log("Promise 3")},3000)
});
let promise4=new Promise((res,rej)=>{
	setTimeout(()=>{
	return console.log("Total")},2000)
});
Promise.all([promise1,promise2,promise3,promise4]).then((res)=>{
	return "RES",res
}).catch((e)=>{
	console.log("ERROR",e);
});

