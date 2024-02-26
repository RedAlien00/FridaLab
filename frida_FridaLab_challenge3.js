Java.perform(function(){
  console.warn("[+] Frida Start ...");

  const Activaity = Java.use("uk.rossmarks.fridalab.MainActivity")
  Activaity.chall03.implementation = function(){return true}
  console.warn("[+] chall03 Success ! !");
})