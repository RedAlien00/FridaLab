Java.perform(()=>{
  console.warn("[+] Frida Start ...");
  
  let Activity = Java.use("uk.rossmarks.fridalab.MainActivity")
  Activity.chall05.overload("java.lang.String").implementation = function(arg){
    this.chall05("frida")
  }
   console.warn("[+] chall05 Success ! !");
})