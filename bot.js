const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Discord Adlı Platformda Oluşturduğunuz ${client.user.tag} Adındaki Bot Aktif`);
});

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Witcher ❤️ Star Code" }, status: "dnd" });
  let botVoiceChannel = client.channels.cache.get(ayarlar.botVoiceChannelID);
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});


client.login(ayarlar.token);