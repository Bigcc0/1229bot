/*CMD
  command: /Exampletwitter
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
        chat_id: chat_id,
        message_id: message_id
    })
var msgid = User.getProperty("ok")
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://soyking.finance/static/image/ExampleTWITTER-01.png", // it is picture!
  
  message_id: msgid,
  parse_mode: "Markdown",
  disable_web_page_preview: "true"
})
Bot.runCommand("/sendtwitter")



