// 해결방법 1
// Java.perform(function(){
//   console.log("[+] Frida Start ...");
//   let Main_Act = Java.choose("uk.rossmarks.fridalab.MainActivity",{
//     onMatch : function(arg){
//       let chall06_Act = Java.use("uk.rossmarks.fridalab.challenge_06")
//       chall06_Act.confirmChall06.implementation = function(){return true}
//       arg.chall06(1);
//     },
//     onComplete : function(){console.warn("Done !");}
//   })
// })


// 해결방법 2
Java.perform( console.warn("[+] Frida Start ..."))

setTimeout(function(){
  Java.perform(function(){
    Java.choose("uk.rossmarks.fridalab.MainActivity",{
      onMatch : function(arg){
        let Activity = Java.use("uk.rossmarks.fridalab.challenge_06")
        const value = Activity.chall06.value
        arg.chall06(value)
      },
      onComplete : function(){}
    })
    console.warn("[+] chall06 Success ! !");
  })
}
, 10000);