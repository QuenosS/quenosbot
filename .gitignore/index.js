const Discord = require("discord.js");
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = (">")
var randum = 0

bot.on('ready', () => {
    bot.user.setPresence({game: { name: '[>help] = Aide', type: 0}});
    console.log("Bot Ready :");
})

bot.login('NDE4ODY5ODk2MjYxMjcxNTUy.DX3f2A.EZO3rVrnaViRIhFNTnklLApRGoo');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if(message.content === "merde"){
        message.delete("merde")
        message.reply("Pas d'insultes :no_entry: !")
    }

    if(message.content === "Merde"){
        message.delete("Merde")
        message.reply("Pas d'insultes :no_entry: !")
    }

    if (message.content === prefix + "help"){
        message.delete(prefix + "help")
        var help_embed = new Discord.RichEmbed()
            .setColor('21C6DF')
            .setTitle("Voici les commandes du bot :")
            .setThumbnail("https://i.imgur.com/CZMtvPt.png")
            .addField("ping :", "Le bot répond pong.")
            .addField(">help :", "Ouvre le menu d'aide.")
            .addField("ça va QuenosBOT ? :", "Il vous répondra !")
            .addField("/quenos (@Youtube#7039)", "Envoie un lien vers la Chaine de Quenos.")
            .addField("/kerresgfx(@Youtube#7039) ", "Envoie un lien vers la Chaine de Kerres GFX.")
            .addField("§quenos (@Twitter#4608)", "Envoie un lien vers le compte Twitter de Quenos.")
            .addField("Je suis un gentil Poulet magique !","Vous répondra.")
            .addField(">info", "Donne le informations du serveur.")
            .setFooter(`Quenos'World | ${message.author.username}`)
            .setTimestamp()
        message.channel.sendEmbed(help_embed);
        console.log("Commande Help demandée !")
    }

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb)
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)}
        
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] + 1}).write();

    if(message.content === prefix + "xp"){
        message.delete(prefix + "xp")
       var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
       var xpfinal = Object.values(xp);
       var xp_embed = new Discord.RichEmbed()
           .setTitle(`Taux d'XP de ${message.author.username}`)
           .setColor('21C6DF')
           .setDescription("Chargement du Taux d'XP...")
           .addField("XP:", `${xpfinal[1]} XP`)
           .setFooter("Enjoy !")
           .setFooter(`Quenos'World | ${message.author.username}`)
           .setTimestamp()
        message.channel.send({embed: xp_embed})};



    if(message.content === "ça va QuenosBOT ?"){
        random();

        if (randum == 0){
            console.log(randum);
        }

        if (randum == 1){
            message.reply("Bien merci !");
            console.log(randum);
        }

        if (randum == 2){
            message.reply("Plutôt bien, mais je suis une machine, je n'ai pas d'émotion !");
            console.log(randum);
        }

    }

    if(message.content === prefix + "info") {
        message.delete(prefix + "info")
        var embedinfo = new Discord.RichEmbed()
        .setTitle("Informations du Discord")
        .addField("Nom Du Discord :", message.guild.name)
        .addField("Crée le :", message.guild.createdAt)
        .addField("Tu as rejoins le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
        .setColor("21C6DF")
        .setFooter(`Quenos' World | ${message.author.username}`)
        .setTimestamp()
    message.channel.sendEmbed(embedinfo)

    }

    if(message.content.startsWith(prefix + "sondage")) {
            message.delete(prefix + "sondage")
            var embedsond = new Discord.RichEmbed()
                .addField("Que pensez-vous du serveur ?", "Répondre avec :white_check_mark: ou :x:")
                .setColor("21C6DF")
                .setFooter(`${message.guild.name} | ${message.author.username}`)
                .setTimestamp()
            message.channel.sendEmbed(embedsond)
            .then(function(message) {
                message.react("❌")
                message.react("✅")
                
            }).catch(function() {

            });
            }


        
    

    if(message.content === "Je suis un gentil Poulet magique !"){
        message.reply("Et tu manges des arc-en-ciel ? :joy:")
        console.log("jesuisunelicorne");
    }

    if (message.content === prefix + "adj"){
        annonce_random();

        if (randum == 1){
            message.delete(prefix + "adj");
            message.channel.send("Bonjour à tous. Passez une agréable journée !");
            console.log(randum)
        }

        if (randum == 2){
            message.delete(prefix + "adj");
            message.channel.send("Il y a déjà du monde ici ? Passez donc une bonne journée !");
            console.log(randum)
        }

        if (randum == 3){
            message.delete(prefix + "adj");
            message.channel.send("Bonne journée à tous sur le serveur !");
            console.log(randum)
        }
    }

    if(message.content === "bonsoir"){
        message.channel.send("Bonsoir, " + message.author) 
    }
});


function random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(2);
    randum = Math.floor(Math.random() * (max - min +1) + min);
}

function annonce_random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    randum = Math.floor(Math.random() * (max - min +1) + min);
}
