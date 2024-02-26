// Solution 1
// Java.perform(function(){
//   const Activity = Java.use("uk.rossmarks.fridalab.MainActivity")
//   Java.choose("uk.rossmarks.fridalab.MainActivity", {
//     onMatch: function(arg){
//       Activity.chall08.implementation = function(){return true}
//       arg.chall08()
//     },
//     onComplete : function(){}

//   })
// })


// Solution 2
Java.perform(function(){
  console.warn("[-] Frida Start ...");

  Java.choose("uk.rossmarks.fridalab.MainActivity", {
    onMatch: function(arg){
      const checkId = arg.findViewById(0x7f07002f)  // View 객체를 받아올 것임
      const button = Java.use("android.widget.Button")
      const check = Java.cast(checkId, button)
      const string = Java.use("java.lang.String")
      check.setText(string.$new("Confirm"))
    },
    onComplete : function(){console.warn("[+] chall08 Success ! !");}
  })
})