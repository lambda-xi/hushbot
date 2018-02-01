const telegraf = require('telegraf');

const bot = new telegraf(process.env.BTOKEN);

bot.start((ctx) =>
{
        ctx.telegram.sendMessage(ctx.message.chat.id, "Silencing...");
});

bot.on('message', (ctx) => 
{
        if ((ctx.message.document == undefined) ||  (ctx.message.document.mime_type !== "video/mp4"))
                ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
        //console.log("\n ", ctx.message.document);
});

bot.command('stop', bot.stop());
bot.startPolling();
