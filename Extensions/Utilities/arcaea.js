const Discord = require('discord.js');
module.exports = {
  name: 'arcaea',
  description: 'Arcaea難度表速查',
  args: true,
  usage: '<難度> <等級>',
  execute(msg, args, prefix, connection, command) {
    const nodata = new Discord.MessageEmbed().setColor('#0F1D57').setTitle('查無資料').setDescription(`該難度無等級${args[1]}的曲子`).setFooter('Copyright © 結城あやの From SJ Bots');
    if (args[0] === 'past') {
      if (args[1] === '9+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE PastLevel = 9.7;`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else if (args[1] === '10+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE PastLevel = 10.7;`, (err, rows) => {
          if (err) throw err;
          console.log(rows.length);
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE PastLevel = ${parseInt(args[1])};`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      }
    } else if (args[0] === 'present') {
      if (args[1] === '9+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE PresentLevel = 9.7;`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else if (args[1] === '10+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE PresentLevel = 10.7;`, (err, rows) => {
          if (err) throw err;
          console.log(rows.length);
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE PresentLevel = ${parseInt(args[1])};`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      }
    } else if (args[0] === 'future') {
      if (args[1] === '9+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE FutureLevel = 9.7;`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else if (args[1] === '10+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE FutureLevel = 10.7;`, (err, rows) => {
          if (err) throw err;
          console.log(rows.length);
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE FutureLevel = ${parseInt(args[1])};`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      }
    } else if (args[0] === 'beyond') {
      if (args[1] === '9+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE BeyondLevel = 9.7;`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else if (args[1] === '10+') {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE BeyondLevel = 10.7;`, (err, rows) => {
          if (err) throw err;
          console.log(rows.length);
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      } else {
        connection.query(`SELECT SongName FROM chaosjudge.arcaea WHERE BeyondLevel = ${parseInt(args[1])};`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) msg.channel.send(nodata);
          else {
            msg.channel.send(`共有${rows.length}首曲子：`);
            let end = rows.length;
            for (var counter = 0; counter < end; counter++) {
              msg.channel.send(rows[counter].SongName);
            }
          }
        });
      }
    } else msg.channel.send(`這條指令的用法應該要像這樣: \`${prefix}${command.name} ${command.usage}\``);
  },
};