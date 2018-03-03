const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = (">")
var randum = 0

bot.on('ready', () => {
    bot.user.setPresence({game: { name: '[>help] = Aide', type: 0}});
    console.log("Bot Ready :");
})

bot.login(process.env.TOKEN);

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
        var help_embed = new Discord.RichEmbed()
            .setColor('55D755')
            .addField("Commande du bot :", "   - >help : Affiche les commandes du bot.")
            .addField("Interaction", "ping : Le bot répond pong")
            .setFooter("C'est tout pour ce embed")
        //message.channel.sendEmbed(help_embed);       
        message.channel.send("Voici les commandes du bot :\n-***>help*** : afficher les commandes.\n-***ping*** : il vous ponguera !\n-***>humeur*** : il vous répondra !\n-***>adj*** : Fera une annonce pour dire bonne journée !");
        console.log("Commande Help demandée !")
    }

    if(message.content === prefix + "humeur"){
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
            console.log(randum)
        }

    }

    if (message.content === prefix + "adj"){
        annonce_random();

        if (randum == 1){
            message.channel.send("Bonjour à tous. Passez une agréable journée !");
            console.log(randum)
        }

        if (randum == 2){
            message.channel.send("Il y a déjà du monde ici ? Passez donc une bonne journée !");
            console.log(randum)
        }

        if (randum == 3){
            message.channel.send("Bonne journée à tous sur le serveur !");
            console.log(randum)
        }
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
