Java.perform(function(){
  console.warn("[+] Frida Start ...");

  const Activaity = Java.use("uk.rossmarks.fridalab.challenge_01")
  Activaity.chall01.value = 1
  console.warn("[+] chall01 Success ! !");
})