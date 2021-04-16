const Discord = require('discord.js');
module.exports = {
	name: 'deemo',
	description: 'Deemo難度表速查',
	args: true,
	// aliases: ['種樹遊戲'],
	usage: '<難度> [等級]',
	needSQL: true,
	execute(msg, args, prefix, command, author, master, connection) {
		const list = [];
		const nodata = new Discord.MessageEmbed().setColor('#0F1D57').setTitle('查無資料').setDescription(`該難度無等級${args[1]}的曲子`).setFooter('Copyright © 結城あやの From SJ Bots');
		if (args[0] === 'easy') {
			connection.query(`SELECT SongName FROM chaosjudge.deemo WHERE EasyLevel = ${parseInt(args[1])};`, (err, rows) => {
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
			connection.query(`SELECT SongName FROM chaosjudge.deemo WHERE NormalLevel = ${parseInt(args[1])};`, (err, rows) => {
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
			connection.query(`SELECT SongName FROM chaosjudge.deemo WHERE HardLevel = ${parseInt(args[1])};`, (err, rows) => {
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
		} else if (args[0] === 'extra') {
			connection.query(`SELECT SongName FROM chaosjudge.deemo WHERE ExtraLevel;`, (err, rows) => {
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
		} else msg.channel.send(`這條指令的用法應該要像這樣: \`${prefix}${command.name} ${command.usage}\``);
	},
};
