// Solution 1 

// Java.perform(function(){
//   console.log("[+] Frida Start ...");
//   Java.choose("uk.rossmarks.fridalab.MainActivity",{
//     onMatch: function(arg){
//       let Act_chall07 = Java.use("uk.rossmarks.fridalab.challenge_07")
//       Act_chall07.check07Pin.implementation = function(){return true}
//       arg.chall07('A')
//     },
//     onComplete : function(arg){console.log("[+] Done !");}
//   })
// })

// Solution 2

Java.perform(function(){
  console.warn("[+] Frida Start ...")
  Java.choose("uk.rossmarks.fridalab.MainActivity",{
    onMatch: function(arg){
      const chall07 = Java.use("uk.rossmarks.fridalab.challenge_07")
      for(let i=1000; i<9999+1; i++){
        if(chall07.check07Pin(String(i))){
          console.warn(`Found ! ${i}`);
          arg.chall07(String(i))
          break
        }
        console.warn(`Brute Force : ${i}`);
      }
    },
    onComplete : function(arg){}
  })
  console.warn("[+] chall07 Success ! !");
})


