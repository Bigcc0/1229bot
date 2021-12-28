👫 Referral

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{
var balance = Libs.ResourcesLib.userRes("balance");
let res = Libs.ResourcesLib.userRes("referral");
//let reflink=Libs.ReferralLib.currentUser.getRefLink("SoyKingAirdrop_bot","");
let link=Libs.ReferralLib.getLink();
// let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed()+" ₹\n\n⚜️Refer And Earn More\n⏯️ Total Invites : "+refList.length+" Users\n\n⛔️ Per Referral 0.5 ₹\n\n🔗 Referral Link ⬇️\n"+link+"*");

}

//Bot.sendMessage(link);
// 💰 Balance

// var balance = Libs.ResourcesLib.userRes("balance")
// var lib = Libs.ReferralLib
// var refList = lib.currentUser.refList.get();
// Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed()+" ₹\n\n⚜️Refer And Earn More*")