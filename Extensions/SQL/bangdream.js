const Discord = require('discord.js');
module.exports = {
  name: 'bangdream',
  description: '邦邦難度表速查',
  args: true,
  aliases: ['邦邦'/*,'養婆遊戲'*/],
  usage: '<難度> [等級]',
  needSQL: true,
  async execute(msg, args, prefix, command, author, master, connection) {
    const list = [];
    const nodata = new Discord.MessageEmbed().setColor('#0F1D57').setTitle('查無資料').setDescription(`該難度無等級${args[1]}的曲子`).setFooter('Copyright © 結城あやの From SJ Bots');
    if (args[0] === 'easy') {
      await connection.query(`SELECT SongName FROM chaosjudge.bangdream WHERE EasyLevel = ${parseInt(args[1])};`, (err, rows) => {
        if (err) throw err;
        if (rows.length < 1) msg.channel.send(nodata);
        else {
          list.push(`共有**${rows.length}**首曲子：\n`);
          let end = rows.length;
          for (var counter = 0; counter < end; counter++) {
            let songs = rows[counter].SongName;
            list.push(songs);
          }
          msg.channel.send(list);
        }
      });
    } else if (args[0] === 'normal') {
      await connection.query(`SELECT SongName FROM chaosjudge.bangdream WHERE NormalLevel = ${parseInt(args[1])};`, (err, rows) => {
        if (err) throw err;
        if (rows.length < 1) msg.channel.send(nodata);
        else {
          list.push(`共有**${rows.length}**首曲子：\n`);
          let end = rows.length;
          for (var counter = 0; counter < end; counter++) {
            let songs = rows[counter].SongName;
            list.push(songs);
          }
          msg.channel.send(list);
        }
      });
    } else if (args[0] === 'hard') {
      await connection.query(`SELECT SongName FROM chaosjudge.bangdream WHERE HardLevel = ${parseInt(args[1])};`, (err, rows) => {
        if (err) throw err;
        if (rows.length < 1) msg.channel.send(nodata);
        else {
          list.push(`共有**${rows.length}**首曲子：\n`);
          let end = rows.length;
          for (var counter = 0; counter < end; counter++) {
            let songs = rows[counter].SongName;
            list.push(songs);
          }
          msg.channel.send(list);
        }
      });
    } else if (args[0] === 'special') {
      await connection.query(`SELECT SongName FROM chaosjudge.bangdream WHERE SpecialLevel = ${parseInt(args[1])};`, (err, rows) => {
        if (err) throw err;
        if (rows.length < 1) msg.channel.send(nodata);
        else {
          list.push(`共有**${rows.length}**首曲子：\n`);
          let end = rows.length;
          for (var counter = 0; counter < end; counter++) {
            let songs = rows[counter].SongName;
            list.push(songs);
          }
          msg.channel.send(list);
        }
      });
    } else await msg.channel.send(`這條指令的用法應該要像這樣: \`${prefix}${command.name} ${command.usage}\``);
    connection.end();
    console.log('查詢完畢！\n已將資料庫斷線');
  },
};