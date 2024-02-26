Java.perform(function(){
  console.warn("[+] Frida Start ...");
  
  let Activity = Java.choose("uk.rossmarks.fridalab.MainActivity", {
    onMatch : function(arg){arg.chall04("frida")},
    onComplete : ()=>{console.warn("[+] chall04 Success !");}
  })
})