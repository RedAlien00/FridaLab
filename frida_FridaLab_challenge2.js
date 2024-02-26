Java.perform(function(){
  console.warn("[+] Frida Start ...");

  Java.choose("uk.rossmarks.fridalab.MainActivity", {
    onMatch : function(arg){arg.chall02()},
    onComplete : function(){console.warn("[+] chall02 Success ! !");}
  })
})