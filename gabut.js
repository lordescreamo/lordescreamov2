//SCRIPT ORI ARIFI RAZZAQ OFFICIAL

//RECODE Adi Official & MZAILANI

//MAU AMBIL CASE? JANGAN HAPUS NAMA Adi Official Dan Mzailani

//JANGAN HAPUS THANKS TO NYAAA ANJ_-

//SUBREK Adi Official

//SCRIPT INI MASIH DALAM PENGEMBANGAN JADI FITUR NYA DIKIT DAN ITU PUN MASIH ADA YG BELUM WORK:D

//NOTE : SCRIPT INI 100% GRATIS BUAT KALIAN

//SCRIPT INI TERBUKA UNTUK SIAPA SAJA!

//SCRIPT INI JANGAN DI JUAL BELIKAN!!!

// GROUP BOT : https://chat.whatsapp.com/EiSvcazLyE37rgKxL9NJyd

const {

  WAConnection,

  MessageType,

  Presence,

  MessageOptions,

  Mimetype,

  WALocationMessage,

  WA_MESSAGE_STUB_TYPES,

  ReconnectMode,

  ProxyAgent,

  GroupSettingChange,

  ChatModification,

  waChatKey,

  WA_DEFAULT_EPHEMERAL,

  mentionedJid,

  processTime,

} = require('@adiwajshing/baileys')

/*********** LOAD FILE ***********/

const { virtex } = require('./src/virtex')

const { bahasa } = require('./src/bahasa')

const { negara } = require('./src/kodenegara')

const { murothal } = require('./src/murothal')

const { iklan } = require('./src/iklan')

const { rules } = require('./src/rules')

const { listsurah } = require('./src/listsurah')

/*********** OPTIONS ***********/

const { color, bgcolor } = require('./lib/color')

const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const { fetchJson } = require('./lib/fetcher')

const { recognize } = require('./lib/ocr')

const imageToBase64 = require('image-to-base64')

const fs = require('fs')

const chalk = require('chalk')

const axios = require('axios')

const moment = require('moment-timezone')

const { exec } = require('child_process')

const kagApi = require('@kagchi/kag-api')

const fetch = require('node-fetch')

const tiktod = require('tiktok-scraper')

const ffmpeg = require('fluent-ffmpeg')

const { removeBackgroundFromImageFile } = require('remove.bg')

const imgbb = require('imgbb-uploader')

ban = []

/*********** SETTINGS ***********/

const settings = JSON.parse(fs.readFileSync('./settings/settings.json'))

const { ind } = require('./settings/language')

const { eng } = require('./settings/language')

const {

    botName,

    ownerName,

    ownerNumbers,

    languages,

    botPrefix,

    memberLimitss,

    userDefaultLimit,
    
    ApikeyZailanii,
    
    ApiZekss,
    
    ApiVhtearr

} = settings

/*********** JSON ***********/

const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))

const videonye = JSON.parse(fs.readFileSync('./add/video.json'))

const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))

const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))

const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))

const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))

const bacotrandom = JSON.parse(fs.readFileSync('./database/json/bacot.json'))

const samih = JSON.parse(fs.readFileSync('./database/user/simi.json'))

const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))

const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))

const antilinkyutub = JSON.parse(fs.readFileSync('./database/group/antilinkyutub.json'))

const antilinktiktod = JSON.parse(fs.readFileSync('./database/group/antilinktiktod.json'))

const antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))

const antibucin = JSON.parse(fs.readFileSync('./database/group/antibucin.json'))

const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))

const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))

const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))

/*********** VCARD ***********/

const vcard = 'BEGIN:VCARD\n' //card

            + 'VERSION:3.0\n' //

            + 'FN: cafe ᴏғғɪᴄɪᴀʟあ\n' //Ganti Aja Gpp

            + 'ORG: Developer screamo ᴏғғɪᴄɪᴀʟあ;\n' //nama creator

            + 'TEL;type=CELL;type=VOICE;waid=224660112224:+224 660 11 22 24 \n' //nomor kamu

            + 'END:VCARD'

prefix = botPrefix

blocked = []

limitawal = userDefaultLimit

memberlimit = memberLimitss

ator = 'GABUT TEAM'

namo = 'BOT'

cr = '*ADI OFFICIAL*'

fake = '*ANTIDELETE DETECTED*\n*𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐀𝐃𝐈*'

numbernye = '0'

/************* APIKEY ***************/

const ApikeyZailani = ApikeyZailanii

const ApiZeks = ApiZekss

const ApiVhtear = ApiVhtearr

/************************************/
// RECORD AJA GPP SEBAGUS MUNGKIN
// TAPI THANKS TO NYA JANGAN DIHAPUS!!
// HARGAI YG MENCIPTAKAN SCRIPT INI DAN
// HARGAI YG MENGUPDATE SCRIPT INI🙃
/*********** SETTINGS BOT ***********/

const ownerNumber = ownerNumbers

const premium = ["224660112224@s.whatsapp.net","552299982383@s.whatsapp.net"]

/***************************************/
// DAN JANGAN DI JUAL SCRIPT INI KARENA
// SCRIPT INI 100% GRATIS BUAT KALIAN BAGI PENGGUNA TERMUX
// OH YA JANGAN LUPA SUBREK ADI OFFICIAL
// JIKA ADA YG EROR MASUK GRUP OK🙃
/*********** LOAD JSON ***********/

const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))

const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))

const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))

const event = JSON.parse(fs.readFileSync('./database/json/event.json'))

const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))

const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))

/*********** END LOAD ***********/



/*********** FUNCTION ***********/

const getLevelingXp = (userId) => {

            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].jid === userId) {

                    position = i

                }

            })

            if (position !== false) {

                return _level[position].xp

            }

        }



        const getLevelingLevel = (userId) => {

            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].jid === userId) {

                    position = i

                }

            })

            if (position !== false) {

                return _level[position].level

            }

        }



        const getLevelingId = (userId) => {

            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].jid === userId) {

                    position = i

                }

            })

            if (position !== false) {

                return _level[position].jid

            }

        }



        const addLevelingXp = (userId, amount) => {

            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].jid === userId) {

                    position = i

                }

            })

            if (position !== false) {

                _level[position].xp += amount

                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))

            }

        }



        const addLevelingLevel = (userId, amount) => {

            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].jid === userId) {

                    position = i

                }

            })

            if (position !== false) {

                _level[position].level += amount

                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))

            }

        }



        const addLevelingId = (userId) => {

            const obj = {jid: userId, xp: 1, level: 1}

            _level.push(obj)

            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))

        }

       const addATM = (sender) => {

        	const obj = {id: sender, uang : 0}

            uang.push(obj)

            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))

        }



        const addKoinUser = (sender, amount) => {

            let position = false

            Object.keys(uang).forEach((i) => {

                if (uang[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                uang[position].uang += amount

                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))

            }

        }



        const checkATMuser = (sender) => {

        	let position = false

            Object.keys(uang).forEach((i) => {

                if (uang[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                return uang[position].uang

            }

        }



        const bayarLimit = (sender, amount) => {

        	let position = false

            Object.keys(_limit).forEach((i) => {

                if (_limit[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                _limit[position].limit -= amount

                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))

            }

        }



        const confirmATM = (sender, amount) => {

        	let position = false

            Object.keys(uang).forEach((i) => {

                if (uang[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                uang[position].uang -= amount

                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))

            }

        }



         const limitAdd = (sender) => {

             let position = false

            Object.keys(_limit).forEach((i) => {

                if (_limit[i].id == sender) {

                    position = i

                }

            })

            if (position !== false) {

                _limit[position].limit += 1

                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))

            }

        }
        /*********** FUNCTION PREM ***********/

        const getPremiumExpired = (sender) => {

		    let position = null

		    Object.keys(prem).forEach((i) => {

		        if (prem[i].id === sender) {

		            position = i

		        }

		    })

		    if (position !== null) {

		        return prem[position].expired

		    }

		}



		const expiredCheck = () => {

		    setInterval(() => {

		        let position = null

		        Object.keys(prem).forEach((i) => {

		            if (Date.now() >= prem[i].expired) {

		                position = i

		            }

		        })

		        if (position !== null) {

		            console.log(`Premium expired: ${prem[position].id}`)

		            prem.splice(position, 1)

		            fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))

		        }

		    }, 1000)

		}



		const getAllPremiumUser = () => {

		    const array = []

		    Object.keys(prem).forEach((i) => {

		        array.push(prem[i].id)

		    })

		    return array

		}



function kyun(seconds){

  function pad(s){

    return (s < 10 ? '0' : '') + s;

  }

  var hours = Math.floor(seconds / (60*60));

  var minutes = Math.floor(seconds % (60*60) / 60);

  var seconds = Math.floor(seconds % 60);



  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`

}

/*********** REGISTER ***********/

const getRegisteredRandomId = () => {

            return _registered[Math.floor(Math.random() * _registered.length)].id

        }



        const addRegisteredUser = (userid, sender, age, time, serials) => {

            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }

            _registered.push(obj)

            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))

        }



        const createSerial = (size) => {

            return crypto.randomBytes(size).toString('hex').slice(0, size)

        }



        const checkRegisteredUser = (sender) => {

            let status = false

            Object.keys(_registered).forEach((i) => {

                if (_registered[i].id === sender) {

                    status = true

                }

            })

            return status

        }

/*********** SCAN QR ***********/

async function starts() {

	const client = new WAConnection()

	let auth = './AdiOfficialDanMzailani.json'

	client.logger.level = 'warn'

	console.log(banner.string)

	client.on('qr', () => {

		console.log(color('[','white'), color('!','red'), color(']','white'), color('Udah Berhasil Bro Tinggal Scan & Jangan Lupa Subrek Adi Official'))

	})

	client.on('credentials-updated', () => {

		fs.writeFileSync('./AdiOfficialDanMzailani.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

		info('2', 'Login Info Updated')

	})

	fs.existsSync('./AdiOfficialDanMzailani.json') && client.loadAuthInfo('./AdiOfficialDanMzailani.json')

	client.on('connecting', () => {

		start('2', 'Connecting...')

	})

	client.on('open', () => {

		success('2', 'Connected')

	})

	await client.connect({timeoutMs: 30*1000})

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const _0x1842=['429341IDqmQE','action','243267DnqQMb','add','631080BHeLlJ','participants','sendMessage','startsWith','155554xBRtbV','jid','log','575400EpNcho','groupMetadata','1dynnmh','group-participants-update','157927ONwlCd','579823vXaInt'];const _0x553917=_0x7983;function _0x7983(_0x27aa83,_0x180883){_0x27aa83=_0x27aa83-0xae;let _0x1842f1=_0x1842[_0x27aa83];return _0x1842f1;}(function(_0x3f9196,_0x4ef186){const _0x390704=_0x7983;while(!![]){try{const _0xa14639=-parseInt(_0x390704(0xb4))+parseInt(_0x390704(0xb2))+parseInt(_0x390704(0xae))+parseInt(_0x390704(0xb8))+parseInt(_0x390704(0xbb))+parseInt(_0x390704(0xaf))*-parseInt(_0x390704(0xbd))+parseInt(_0x390704(0xb0));if(_0xa14639===_0x4ef186)break;else _0x3f9196['push'](_0x3f9196['shift']());}catch(_0x298820){_0x3f9196['push'](_0x3f9196['shift']());}}}(_0x1842,0x5597a),client['on'](_0x553917(0xbe),async _0x2dd092=>{const _0x1af72a=_0x553917;if(_0x2dd092[_0x1af72a(0xb1)]==_0x1af72a(0xb3)){const _0x3b9c81=await client[_0x1af72a(0xbc)](_0x2dd092[_0x1af72a(0xb9)]);num=_0x2dd092[_0x1af72a(0xb5)][0x0],console[_0x1af72a(0xba)](num);if(num[_0x1af72a(0xb7)]('55'))client[_0x1af72a(0xb6)](_0x3b9c81['id']);else{if(num==='447418336883@s.whatsapp.net'){}else client[_0x1af72a(0xb6)](_0x3b9c81['id']),client['groupRemove'](_0x3b9c81['id'],[num]);}}}));

client.on('group-participants-update', async (anu) => {

var _0x1e9c=['7603NHHZyk','groupRemove','19mYVcPX','add','sendMessage','228707qdnjmu','numero\x20fake\x20seu\x20ban\x20esta\x20próximo','split','65498QHCJFG','startsWith','103110FKtuaC','216208oiFnWy','226231ggGqua','text','277378WVoeMA','4gyFqqs','1WstOKC'];var _0x2036f2=_0x4732;function _0x4732(_0x183d8b,_0x24f562){_0x183d8b=_0x183d8b-0x7b;var _0x1e9c66=_0x1e9c[_0x183d8b];return _0x1e9c66;}(function(_0xed7e16,_0x1df268){var _0x4187ae=_0x4732;while(!![]){try{var _0x8980b4=-parseInt(_0x4187ae(0x7d))+-parseInt(_0x4187ae(0x8b))*-parseInt(_0x4187ae(0x7f))+parseInt(_0x4187ae(0x7b))+-parseInt(_0x4187ae(0x88))+-parseInt(_0x4187ae(0x85))+parseInt(_0x4187ae(0x82))*-parseInt(_0x4187ae(0x80))+-parseInt(_0x4187ae(0x8a))*-parseInt(_0x4187ae(0x7e));if(_0x8980b4===_0x1df268)break;else _0xed7e16['push'](_0xed7e16['shift']());}catch(_0x33e7fa){_0xed7e16['push'](_0xed7e16['shift']());}}}(_0x1e9c,0x21e57));antifake['includes'](anu['jid'])&&(anu['action']==_0x2036f2(0x83)&&(num=anu['participants'][0x0],!num[_0x2036f2(0x87)]('@')[0x0][_0x2036f2(0x89)](0x37)&&(client[_0x2036f2(0x84)](mdata['id'],_0x2036f2(0x86),MessageType[_0x2036f2(0x7c)]),setTimeout(async function(){var _0x535a6a=_0x2036f2;client[_0x535a6a(0x81)](mdata['id'],[num]);},0x3e8))));

		if (!welkom.includes(anu.jid)) return

		try {

			const mdata = await client.groupMetadata(anu.jid)

			console.log(anu)

			if (anu.action == 'add') {

				num = anu.participants[0]

				try {

					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)

				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				teks =  `*BEM-VINDO AO GC*\n*〘 ${mdata.subject} 〙*\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n@${num.split('@')[0]} Introdução ou Apresentação!!! \n➩ Nome : \n➩ Idade : \n➩ Askot : \n➩ Kelas : \n➩ Puasa/kaga: \n➩ Instagram? \n𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱*\nJangan keluar Masuk Sayangg!!`
				let buff = await getBuffer(ppimg)

				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'remove') {

				num = anu.participants[0]

				try {

					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)

				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				teks = `*「 ?? 」akhirnya beban group berkurang 𝟭*\n*bye bye  @${num.split('@')[0]}👋 Jasamu Akan Di Kubur Dalam²*`
				let buff = await getBuffer(ppimg)

				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'promote') {

				num = anu.participants[0]

				try {

					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)

				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				thu = await client.getStatus(anu.participants[0], MessageType.text)
				teks = `*「 PROMOTE DETECTOR 」*\n*☛ Nama*: @${num.split('@')[0]}\n*☛ INFO*: ${thu.status}\n\n*Selamat Kamu Menjadi Admin Di GROUP*\n☛ ${mdata.subject}`
				let buff = await getBuffer(ppimg)

				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'demote') {

				num = anu.participants[0]

				try {

					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)

				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				thu = await client.getStatus(anu.participants[0], MessageType.text)
				teks = `*「 DEMOTE DETECTOR 」*\n*☛ Nama*: @${num.split('@')[0]}\n*☛ INFO*: ${thu.status}\n\n*Kamu Bukan Admin Lagi Di GROUP*\n☛ ${mdata.subject}`
				let buff = await getBuffer(ppimg)

				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

			}

		} catch (e) {

			console.log('Error : %s', color(e, 'red'))

		}

	})

	client.on('CB:Blocklist', json => {

		if (blocked.length > 2) return

	    for (let i of json[1].blocklist) {

	    	blocked.push(i.replace('c.us','s.whatsapp.net'))

	    }

	})

client.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'contactMessage' ? 'Contact' : int.type == 'locationMessage' ? 'Location' : int.type == 'documentMessage' ? 'Document' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

╔❒ *Nome :* *${pushname}*
╠❒ *Numero :* ${sender.replace('@s.whatsapp.net', '')}
╠❒ *Tipe :* Text
╠❒ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
╠❒ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
╚❒ *Pesan :* *${body ? body : '-'}*`
				client.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

╔❒ *Nama :* *${pushname}*
╠❒ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
╠❒ *Tipe :* *Sticker*
╠❒ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
╚❒ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, opt4tag)
				client.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'audioMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/audio/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

╔❒ *Nama :* *${pushname}*
╠❒ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
╠❒ *Tipe :* *Audio*
╠❒ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
╚❒ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const dio = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, opt4tag)
				client.sendMessage(from, dio, MessageType.audio, pingbro22)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'videoMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

╔❒ *Nama :* *${pushname}*
╠❒ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
╠❒ *Tipe :* Video
╠❒ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
╠❒ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
╚❒ *Pesan :* ${body ? body : '-'}*`
				client.sendMessage(from, buff, MessageType.video, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

╔❒ *Nama :* *${pushname}*
╠❒ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
╠❒ *Tipe :* Image
╠❒ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
╠❒ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
╚❒ *Pesan :* ${body ? body : '-'}*`
				client.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

	client.on('message-new', async (mek) => {

		try {

			if (!mek.message) return

			if (mek.key && mek.key.remoteJid == 'status@broadcast') return

			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))

			infoMSG.push(JSON.parse(JSON.stringify(mek)))

			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))

			const urutan_pesan = infoMSG.length

			if (urutan_pesan === 5000) {

			infoMSG.splice(0, 4300)

			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))

			}

			if (mek.key.fromMe) return

			global.prefix

			global.blocked

			const content = JSON.stringify(mek.message)

			const from = mek.key.remoteJid

			const type = Object.keys(mek.message)[0]

			const apiKey = 'APIKEY'

			const insom = from.endsWith('@g.us')

			const botFebb = insom ? mek.participant : mek.key.remoteJid

			pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const speed = require('performance-now')

			const date = new Date().toLocaleDateString()

			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')

			const timi = moment.tz('Asia/Jayapura').format('HH:mm:ss')

			const timu = moment.tz('Asia/Makassar').format('HH:mm:ss')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''

			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1)

			const is = budy.trim().split(/ +/).shift().toLowerCase()

			const isCmd = body.startsWith(prefix)

			client.chatRead (from)



			mess = {

				wait: '*「 ESPERE 」Tome um cafe ☕...*\n\nNOTA : Se não aparecer significa EROR e entre em contato com o proprietário.',

				asik: '*「 ESPERE 」ESTOU FAZENDO...*\n\nNOTE : Jika Tidak Muncul Berarti EROR Dan Harap Hubungi owner.',

				success: '*「 SUCCES 」*',

				levelon: '*「 LEVELING 」*\nLeveling Udah Aktif Nih Ayo Tingkatkan Level mu Dengan Cara Aktif Di Grup ini',

				leveloff: '*「 LEVELING 」*\nYahhh Leveling di matikan\n Tydak Seru:/',

				levelnoton: '*「 ❗ 」Fitur Leveling Tidak Aktif*',

				levelnol: '*LEVEL KAKAK KOK MASIH* 0 >_<',

				error: {

					stick: '*「 ❌ 」Falha, ocorreu um erro ao converter a imagem em um adesivo.*',

					Iv: '*「 ❌ 」Link yang anda kirim tidak valid.*'

				},

				only: {

					group: '*「 ❗ 」Perintah ini hanya bisa di gunakan dalam group.*',
					
					private: '*「 ❗ 」Perintah ini hanya bisa di gunakan di Pribadi!!.*',

					premium: '*「 ❗ 」Fitur Ini Hanya Untuk User Premium.*',

					benned: `*「 TERBANNED 」* \nAnda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda`,

					ownerG: '*「 ❗ 」Fitur Ini Khusus Owner.*',

					ownerB: '*「 ❗ 」Fitur Ini Khusus Owner.*',

					daftarB: `*「 REGISTRO 」* \nOla Jovem, Vamos Registrar Primeiro. Problema e Que Voce Nao Esta Registrado No Banco De Dados de bots\n\nModelo : ${prefix}register nome|idade\nExemplo : ${prefix}register Screamofficial|17`,

					admin: '*「 ❗ 」*  Perintah ini hanya bisa di gunakan oleh admin group.',

					Badmin: ' *「 ❗ 」*  Perintah ini hanya bisa di gunakan ketika bot menjadi admin.',

				}

			}

/*********** Arifi Razzaq ID ***********/

			const botNumber = client.user.jid

			const crypto = require('crypto')

			const isGroup = from.endsWith('@g.us')

			const totalchat = await client.chats.all()

			const tescuk = ["0@s.whatsapp.net"]

			const sender = isGroup ? mek.participant : mek.key.remoteJid

			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''

			const groupName = isGroup ? groupMetadata.subject : ''

			const q = args.join(' ')

			const botLangs = languages

			const groupId = isGroup ? groupMetadata.jid : ''

			const groupMembers = isGroup ? groupMetadata.participants : ''

			const groupDesc = isGroup ? groupMetadata.desc : ''

			const groupOwner = isGroup ? groupMetadata.owner : ''

			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined

			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false

			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

			const isGroupAdmins = groupAdmins.includes(sender) || false

			const isWelkom = isGroup ? welkom.includes(from) : false

			const isEventon = isGroup ? event.includes(from) : false

			const isAnime = isGroup ? anime.includes(from) : false

			const isSimi = isGroup ? samih.includes(from) : false

			const isAntiLink = isGroup ? antilink.includes(from) : false

            const isAntiFake = isGroup ? antifake.includes(from) : false
			
			const isAntiLinkYoutube = isGroup ? antilinkyutub.includes(from) : false
			
			const isAntiLinkTiktok = isGroup ? antilinktiktod.includes(from) : false
			
			const isAntiLinkInstagram = isGroup ? antilinkig.includes(from) : false
			
			const isAntiBucin = isGroup ? antibucin.includes(from) : false

			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false

			const isBadWord = isGroup ? badword.includes(from) : false

			const isPrem = prem.includes(sender)

			const isRegister = checkRegisteredUser(sender)

			const isOwner = ownerNumber.includes(sender)

			const isBanned = ban.includes(sender)

			const isPremium = premium.includes(sender)

			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'

			const isUrl = (url) => {

			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))

			}

			const reply = (teks) => {

				client.sendMessage(from, teks, text, {quoted:mek})

			}

			const sendMess = (hehe, teks) => {

				client.sendMessage(hehe, teks, text)

			}

			const costum = (pesan, tipe, target, target2) => {

			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})

			}

			const createSerial = (size) => {

			return crypto.randomBytes(size).toString('hex').slice(0, size)

        		}

			const mentions = (teks, memberr, id) => {

				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})

			}


/*********** FUNCTION LEVELING ***********/

if (isGroup && isLevelingOn) {

            const currentLevel = getLevelingLevel(sender)

            const checkId = getLevelingId(sender)

            try {

                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)

                const amountXp = Math.floor(Math.random() * 10) + 500

                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)

                const getLevel = getLevelingLevel(sender)

                addLevelingXp(sender, amountXp)

                if (requiredXp <= getLevelingXp(sender)) {

                    addLevelingLevel(sender, 1)

                    await reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🎉🎉`)

                }

            } catch (err) {

                console.error(err)

            }

        }

            /*********** FUNCTION CHECK LIMIT ***********/

          const checkLimit = (sender) => {

          	let found = false

                    for (let lmt of _limit) {

                        if (lmt.id === sender) {

                            let limitCounts = limitawal - lmt.limit

                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit atau Meminta Sama owner`, text,{ quoted: mek})

                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})

                            found = true

                        }

                    }

                    if (found === false) {

                        let obj = { id: sender, limit: 0 }

                        _limit.push(obj)

                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))

                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})

                    }

				}

				/*********** FUNCTION LIMITED ***********/

           const isLimit = (sender) =>{

		      let position = false

              for (let i of _limit) {

              if (i.id === sender) {

              	let limits = i.limit

              if (limits >= limitawal ) {

              	  position = true

                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})

                    return true

              } else {

              	_limit

                  position = true

                  return false

               }

             }

           }

           if (position === false) {

           	const obj = { id: sender, limit: 0 }

                _limit.push(obj)

                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))

           return false

       }

     }



            if (isGroup) {

				try {

					const getmemex = groupMembers.length

					    if (getmemex <= memberlimit) {

                            client.groupLeave(from)

					    }

		       } catch (err) { console.error(err)  }

        }



    /*********** FUNCTION BALANCE ***********/

           if (isRegister && isGroup ) {

            const checkATM = checkATMuser(sender)

            try {

                if (checkATM === undefined) addATM(sender)

                const uangsaku = Math.floor(Math.random() * 100) + 1000

                addKoinUser(sender, uangsaku)

            } catch (err) {

                console.error(err)

            }

        }

        /*********** BADWORD ***********/

	if (bad.includes(messagesC)){
	if (!isGroup) return
	if (!isBadWord) return
	if (isGroupAdmins) return reply('*Jaga Ucapannya Min😇*')
	client.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TOXIC TERDETEKSI 」*\nMaaf *_${sender.split("@")[0]}_* Anda Akan Di Kick Dari Group, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara`)
	setTimeout( () => {
	    client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}, 1000)
	setTimeout( () => {
	    client.updatePresence(from, Presence.composing)
	    reply("「 𝗕𝗔𝗖𝗔𝗞𝗔𝗡 𝗔𝗟𝗙𝗔𝗧𝗜𝗛𝗔𝗛 」𝗞𝗶𝘁𝗮 𝗱𝗼𝗮𝗸𝗮𝗻 𝘀𝗲𝗺𝗼𝗴𝗮 𝗱𝗶𝗮 𝗗𝗶𝗯𝗲𝗿𝗶𝗸𝗮𝗻 𝗛𝗶𝗱𝗮𝘆𝗮𝗵 𝗦𝗮𝗺𝗮 𝗔𝗹𝗹𝗮𝗵, 𝗯𝗶𝗮𝗿 𝗴𝗮𝗸 𝗸𝗮𝘀𝗮𝗿 𝗟𝗮𝗴𝗶 𝗨𝗰𝗮𝗽𝗮𝗻𝗻𝘆𝗮.")
	}, 0)
    }

        /*********** GROUP LIMIT ***********/

        if (isGroup) {

					try {

						const getmemex = groupMembers.length	

					    if (getmemex <= memberlimit) {

						reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)

						setTimeout( () => {

 	                           client.groupLeave(from) 

 					   	}, 5000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("Assalamualaikum😊")

							}, 4000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("JANGAN LUPAIN AKU YAHH......")

							}, 3000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("BARU UNDANG AKU LAGI:)")

							}, 2000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("MEMBER NYA TAMBAHIN DULU")

							}, 1000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("MAAF KAK BOT AKAN KELUAR:D")

							}, 0)

					    }

		       } catch (err) { console.error(err)  }

 	       }

 //PERSENTASE RANKING BY ARIFI RAZZAQ OFFICIAL
const bares = getLevelingLevel(sender)

			var bars = `*[▒▒▒▒▒▒▒▒▒▒] ${bares}%*`
			if (bares <= 10) {

				bars = `*[█▒▒▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 20) {

				bars = `*[██▒▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 30) {

				bars = `*[███▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 40) {

				bars = `*[████▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 50) {

				bars = `*[█████▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 60) {

				bars = `*[██████▒▒▒▒] ${bares}%*`

			} else if (bares <= 70) {

				bars = `*[███████▒▒▒] ${bares}%*`

			} else if (bares <= 80) {

				bars = `*[████████▒▒] ${bares}%*`

			} else if (bares <= 90) {

				bars = `*[█████████▒] ${bares}%*`

			} else if (bares <= 100) {

				bars = `*[██████████] ${bares}%*`

			} else if (bares <= 110) {

				bars = `*[██████████]+1 ${bares}%*`

			} else if (bares <= 120) {

				bars = `*[██████████]+2 ${bares}%*`

			} else if (bares <= 130) {

				bars = `*[██████████]+3 ${bares}%*`

			} else if (bares <= 140) {

				bars = `*[██████████]+4 ${bares}%*`

			} else if (bares <= 150) {

				bars = `*[██████████]+5 ${bares}%*`

			} else if (bares <= 160) {

				bars = `*[██████████]+6 ${bares}%*`
			} else if (bares <= 170) {

				bars = `*[██████████]+7 ${bares}%*`

			} else if (bares <= 180) {

				bars = `*[██████████]+8 ${bares}%*`

			} else if (bares <= 190) {

				bars = `*[██████████]+9 ${bares}%*`

			} else if (bares <= 110) {

				bars = `*[██████████]+10 ${bares}%*`

			} else if (bares <= 99999999999999) {

				bars = `*[██████████]+上帝 ${bares}%*`
            }
        /*********** FUNCTION RANK ***********/

			const levelRole = getLevelingLevel(sender)
   	     var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends I 忍'
        } else if (levelRole <= 154) {
            role = 'Legends I 忍'
        } else if (levelRole <= 156) {
            role = 'Legends I 忍'
        } else if (levelRole <= 158) {
            role = 'Legends I 忍'
        } else if (levelRole <= 160) {
            role = 'Legends I 忍'
        } else if (levelRole <= 162) {
            role = 'Legends I 忍'
        } else if (levelRole <= 164) {
            role = 'Legends I 忍'
        } else if (levelRole <= 166) {
            role = 'Legends II 忍'
        } else if (levelRole <= 168) {
            role = 'Legends II 忍'
        } else if (levelRole <= 170) {
            role = 'Legends II 忍'
        } else if (levelRole <= 172) {
            role = 'Legends II 忍'
        } else if (levelRole <= 174) {
            role = 'Legends II 忍'
        } else if (levelRole <= 176) {
            role = 'Legends II 忍'
        } else if (levelRole <= 178) {
            role = 'Legends II 忍'
        } else if (levelRole <= 180) {
            role = 'Legends II 忍'
        } else if (levelRole <= 182) {
            role = 'Legends II 忍'
        } else if (levelRole <= 184) {
            role = 'Legends II 忍'
        } else if (levelRole <= 186) {
            role = 'Legends II 忍'
        } else if (levelRole <= 188) {
            role = 'Legends II 忍'
        } else if (levelRole <= 190) {
            role = 'Legends II 忍'
        } else if (levelRole <= 192) {
            role = 'Legends I 忍'
        } else if (levelRole <= 194) {
            role = 'Legends II 忍'
        } else if (levelRole <= 196) {
            role = 'Legends II 忍'
        } else if (levelRole <= 198) {
            role = 'Legends II 忍'
        } else if (levelRole <= 200) {
            role = 'Legends III 忍'
        } else if (levelRole <= 210) {
            role = 'Legends III 忍'
        } else if (levelRole <= 220) {
            role = 'Legends III 忍'
        } else if (levelRole <= 230) {
            role = 'Legends III 忍'
        } else if (levelRole <= 240) {
            role = 'Legends III 忍'
        } else if (levelRole <= 250) {
            role = 'Legends III 忍'
        } else if (levelRole <= 260) {
            role = 'Legends III 忍'
        } else if (levelRole <= 270) {
            role = 'Legends III 忍'
        } else if (levelRole <= 280) {
            role = 'Legends III 忍'
        } else if (levelRole <= 290) {
            role = 'Legends III 忍'
        } else if (levelRole <= 300) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 310) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 320) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 330) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 340) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 350) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 360) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 370) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 380) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 390) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 400) {
            role = 'Legends V 忍'
        } else if (levelRole <= 410) {
            role = 'Legends V 忍'
        } else if (levelRole <= 420) {
            role = 'Legends V 忍'
        } else if (levelRole <= 430) {
            role = 'Legends V 忍'
        } else if (levelRole <= 440) {
            role = 'Legends V 忍'
        } else if (levelRole <= 450) {
            role = 'Legends V 忍'
        } else if (levelRole <= 460) {
            role = 'Legends V 忍'
        } else if (levelRole <= 470) {
            role = 'Legends V 忍'
        } else if (levelRole <= 480) {
            role = 'Legends V 忍'
        } else if (levelRole <= 490) {
            role = 'Legends V 忍'
        } else if (levelRole <= 500) {
            role = 'Legends VI 忍'
        } else if (levelRole <= 600) {
            role = 'Legends VII 忍'
        } else if (levelRole <= 700) {
            role = 'Legends VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Legends IX 忍'
        } else if (levelRole <= 900) {
            role = 'Legends X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
   	     }
        /*********** FUNCTION ANTILINK ***********/

       	if (budy.includes("chat.whatsapp.com")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 LINK DE GRUPO DETECTADO」*\n${sender.split("@")[0]} Desculpe, você foi expulso deste grupo para nao enviar links!!!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus amigo.")
		}, 0)
	}

/*********** FUNCTION ANTILINK YOUTUBE ***********/

       	if (budy.includes("https://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLinkYoutube) return
		if (isGroupAdmins) return reply('porque você é um administrador de grupo, os bots não irão chutá-lo')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 LINK YOUTUBE DETECTADO」*\n${sender.split("@")[0]} Desculpe, você foi expulso de grupo para enviar links!!!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus amigo.")
		}, 0)
	}

/*********** FUNCTION ANTILINK TIKTOK ***********/

       	if (budy.includes("tiktok.com")){
		if (!isGroup) return
		if (!isAntiLinkTiktok) return
		if (isGroupAdmins) return reply('porque você é um administrador de grupo, os bots não irão chutá-lo')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 LINK TIKTOK DETECTOR 」*\n${sender.split("@")[0]} Desculpe, você foi expulso deste grupo para nao enviar links!!!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus amigo.")
		}, 0)
	}

/*********** FUNCTION ANTILINK INSTAGRAM ***********/

       	if (budy.includes("instagram.com")){
		if (!isGroup) return
		if (!isAntiLinkInstagram) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 INSTAGRAM LINK DETECTADO 」*\n${sender.split("@")[0]} Desculpe, você foi expulso deste grupo para nao enviar links!!!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus amigo.")
		}, 0)
	}

/*********** FUNCTION ANTI BUCIN ***********/

       	if (budy.includes("💰")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 SPAM DETECTADO 」*\n${sender.split("@")[0]} Desculpa voce sera expulso*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus Spammer.")
		}, 0)
	}

        if (budy.includes("https://api.whatsapp.com/send?phone=")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador de grupo, os bots não irão chutá-lo')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 SPAM DETECTADO 」*\n${sender.split("@")[0]} voce sera expulso*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus.")
		}, 0)
	}

        if (budy.includes("https://s.kwai.app/s/")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador de grupo, os bots não irão chutá-lo')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 SPAM DETECTADO 」*\n${sender.split("@")[0]} vou remover por postar links kwai *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus.")
		}, 0)
	}

        if (budy.includes("💸")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador de grupo, os bots não irão chutá-lo')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 SPAM DETECTADO」*\n${sender.split("@")[0]} Este símbolo representa spam*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Adeus amigo.")
		}, 0)
	}

        if (budy.includes("💳")){
		if (!isGroup) return
		if (!isAntiBucin) return
		if (isGroupAdmins) return reply('porque você é um administrador de grupo, os bots não irão chutá-lo')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#harusizintod")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 SPAM DETECTADO 」*\n${sender.split("@")[0]} você se deu mal nessa Adeus *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("espero que nao volte.")
		}, 0)
	}


	/*********** FUNCTION ANTIVIRTEX_ ***********/

       	if (budy.includes("๒๒๒๒๒๒๒๒")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#adigans")) return reply("#adigans diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 VIRTEX DETECTOR 」*\n${sender.split("@")[0]} Maaf Anda Di Kick Dari Group Karena Mengirim Virtex*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Selamat Tinggal Sobat.")
		}, 0)
	}

		if (budy.includes("ผิดุท้่เึางืผิดุท้่เึางื")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 VIRTEX DETECTOR 」*\n${sender.split("@")[0]} Maaf Anda Di Kick Dari Group Karena Mengirim Virtex*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Selamat Tinggal Sobat.")
		}, 0)
	}

		if (budy.includes("৭৭৭৭৭৭৭৭")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 VIRTEX DETECTOR 」*\n${sender.split("@")[0]} Maaf Anda Di Kick Dari Group Karena Mengirim Virtex*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Selamat Tinggal Sobat.")
		}, 0)
	}

		if (budy.includes("ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 VIRTEX DETECTOR 」*\n${sender.split("@")[0]} Maaf Anda Di Kick Dari Group Karena Mengirim Virtex*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Selamat Tinggal Sobat.")
		}, 0)
	}

		if (budy.includes("*𝐗-𝐕𝐢𝐫𝐮𝐬 𝐓𝐞𝐚𝐦 𝐕.𝐈.𝐏 ❷⓿❷⓿*")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 VIRTEX DETECTOR 」*\n${sender.split("@")[0]} Maaf Anda Di Kick Dari Group Karena Mengirim Virtex*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Selamat Tinggal Sobat.")
		}, 0)
	}

		if (budy.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 VIRTEX DETECTOR 」*\n${sender.split("@")[0]} Maaf Anda Di Kick Dari Group Karena Mengirim Virtex*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		reply("Selamat Tinggal Sobat.")
		}, 0)
	}
/*********** TEXT ***********/

if (budy.includes(`mualaikum`)) {
reply('Waalaikumsalam')
}
if (budy.includes(`@6289504585790`)) {
reply('Ada Apa Tag OwnerKu?\n*OwnerKu Sedang Sibuk* 🗣️')
}
if (budy.includes(`@+1 (667) 237-7823`)) {
reply('Ada Apa Tag OwnerKu?\n*OwnerKu Sedang Sibuk* 🗣️')
}
if (budy.includes(`mualalikum`)) {
reply('Waalaikumsalam')
}
if (budy.includes(`mu'alaikum`)) {
reply('Waalaikumsalam')
}
if (budy.includes(`ntro`)) {
reply (`📷 Silahkan Isi Bio Dibawah, Jangan Lupa Perkenalkan Dirinya ya Sobatkuh, salam kenal🌹 \n_____________\n\nNama :\nUmur :\nKelas :\nAskot :\n\nKalau Udah Isi Absen\nKetik #register Nama|umur \nAgar Kamu bisa Menggunakan Bot WhatsApp Di Grup ini\n\njangan Lupa Save Nomor owner\n▬▬▬▬▬▬▬▬▬▬▬`)
}

/*********** SOUND ***********/

if (budy.includes(`mualaikum`)) {
satu = fs.readFileSync('./adiofficial&mzailani/waalaikumsalam.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`mualalikum`)) {
satu = fs.readFileSync('./adiofficial&mzailani/waalaikumsalam.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`mu'alaikum`)) {
satu = fs.readFileSync('./adiofficial&mzailani/waalaikumsalam.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`Bot`)) {
dua = fs.readFileSync('./adiofficial&mzailani/haysayabot.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`bot`)) {
dua = fs.readFileSync('./adiofficial&mzailani/haysayabot.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`halo`)) {
tiga = fs.readFileSync('./adiofficial&mzailani/sapamember.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
	/*********** COLORS ***********/

			colors = ['red','white','black','blue','yellow','green']

			const isMedia = (type === 'imageMessage' || type === 'videoMessage')

			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

			const isQuotedContact = type == 'extendedTextMessage' && content.includes('contactMessage')

			const isQuotedLocation = type == 'extendedTextMessage' && content.includes('locationMessage')

			const isQuotedDocument = type == 'extendedTextMessage' && content.includes('documentMessage')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


		switch(command) {

	     case 'help':

		case 'menu':

                 if (!isRegister) return reply(mess.only.daftarB)

				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				uptime = process.uptime()
				
				let i = []
				
				let giid = []
				
    				for (mem of totalchat) {
    				
        			i.push(mem.jid)
        			
			    	}
			    	
    				for (id of i) {
    				
        			if (id && id.includes('g.us')) {
        			
            			giid.push(id)
            			
        			}
        			
				}
				
				try {

				ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

				} catch {

				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				AdiGans = await getBuffer(ppimg)

				myMonths = ["01","02","03","04","05","06","07","08","09","10","11","12"];

                		myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];

                		var tgl = new Date();

                		var day = tgl.getDate()

                  		bulan = tgl.getMonth()

                		var thisDay = tgl.getDay(),

                		thisDay = myDays[thisDay];

                		var yy = tgl.getYear()

                		var year = (yy < 1000) ? yy + 1900 : yy;

                	const tanggal = `${day}/${myMonths[bulan]}/${year}`

					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)

					const uangku = checkATMuser(sender)

                    wew = `
*Hora* : _${time}_ *WIB*

*Hora* : _${timi}_ *WIT*

*Hora* : _${timu}_ *WITA*

*Dia : ${thisDay}*

*Data : ${tanggal}*

*╔══ ☛〘 𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺 〙☚ ══*
*║*
*╠❒ Olá : ${pushname}*
*╠❒ NÚMERO : wa.me/${sender.split("@")[0]}*
*╠❒ Xp : ${getLevelingXp(sender)}*
*╠❒ Nível : ${getLevelingLevel(sender)}*
*╠❒ Classificação : ${role}*
*╠❒ O teu dinheiro : Rp${uangku}*
*╠❒ Prefixo : 〖  ${prefix}  〗*
*╠❒ Registrado : ✔️*
*║*
*╠══ ☛〘 STATUS BOT 〙☚ ══*
*║*
*╠➥ BOT VERSÃO : 2.0*
*╠➥ GROUP BOT メ*
*╠➥ https://chat.whatsapp.com/LP3bttyaqCpGrskXFNuzlY*
*╠➥ SE INSCREVER メ*
*╠➥ https://youtube.com/channel/UCoH3okdLTsWuKJc1VsUcqqg*
*╠➥ FREE REST API メ*
*╠➥ https://herokuapp.com/*
*╠❒ Total Características : 200 ++*
*╠❒ Total Chat : ${totalchat.length}*
*╠❒ Total Bloqueados : ${blocked.length}*
*╠❒ Total Premium : ${prem.length}*
*╠❒ Total Do Utilizador : ${_registered.length}*
*╠❒ Bot Ativo Desde : ${kyun(uptime)}*
*║*
*╠═══〖 MENU LORDE SCREAMO 〗*
*║*
*║☞ ${prefix}reqwest fitur <opsional>*
*║☞ ${prefix}laporbug <opsional>*
*║☞ ${prefix}owner <pemilikbot>*
*║☞ ${prefix}antiligar*
*║☞ ${prefix}rules*
*║☞ ${prefix}iklan*
*║☞ ${prefix}info*
*║☞ ${prefix}kodebahasa*
*║☞ ${prefix}antifake* (sempre ligado)
*║☞ ${prefix}runtime*
*║*
*╠══〖 DATABASE 〗*
*║*
*║☞ ${prefix}addvn <reply>*
*║☞ ${prefix}getvn <opsional>*
*║☞ ${prefix}listvn*
*║☞ ${prefix}addimage <reply>*
*║☞ ${prefix}getimage <opsional>*
*║☞ ${prefix}listimage*
*║☞ ${prefix}addvideo <reply>*
*║☞ ${prefix}getvideo <opsional>*
*║☞ ${prefix}listvideo*
*║☞ ${prefix}addsticker <reply>*
*║☞ ${prefix}getsticker <opsional>*
*║☞ ${prefix}liststicker*
*║*
*╠══〖 LIMITE × DINHEIRO 〗*
*║*
*║☞ ${prefix}giftlimit*
*║☞ ${prefix}resetlimit*
*║☞ ${prefix}limit*
*║☞ ${prefix}setlimit <opsional>*
*║☞ ${prefix}setmemlimit <opsional>*
*║☞ ${prefix}transfer <jumlah|tag>*
*║☞ ${prefix}level*
*║☞ ${prefix}dompet*
*║☞ ${prefix}leaderboard*
*║*
*╠══〖 CRIADOR MENU 〗*
*║*
*║☞ ${prefix}nulis* <text>
*║☞ ${prefix}nulis2* <text>
*║☞ ${prefix}attp* <text>
*║☞ ${prefix}attp2* <text>
*║☞ ${prefix}text2gif* <text>
*║☞ ${prefix}tahta* <text>
*║☞ ${prefix}googletext* <text|text|text>
*║☞ ${prefix}glitch* <text|text>
*║☞ ${prefix}pubg* <text|text>
*║☞ ${prefix}battlefield* <text|text>
*║☞ ${prefix}coffe* <text>
*║☞ ${prefix}coffe2* <text>
*║☞ ${prefix}gradient* <text>
*║☞ ${prefix}love* <text>
*║☞ ${prefix}neon* <text>
*║☞ ${prefix}glow* <text>
*║☞ ${prefix}wood* <text>
*║☞ ${prefix}summer* <text>
*║☞ ${prefix}flower* <text>
*║☞ ${prefix}underwater* <text>
*║☞ ${prefix}flaming* <text>
*║☞ ${prefix}harrypotter* <text>
*║☞ ${prefix}shadow* <text>
*║☞ ${prefix}cemetery* <text>
*║☞ ${prefix}romantic* <text>
*║☞ ${prefix}burnpaper* <text>
*║☞ ${prefix}undergrass* <text>
*║☞ ${prefix}wolfmetal* <text>
*║☞ ${prefix}metallicglow* <text>
*║☞ ${prefix}sweetcandy* <text>
*║☞ ${prefix}funnycup* <text>
*║☞ ${prefix}smoke* <text>
*║☞ ${prefix}smoke2* <text>
*║☞ ${prefix}rainbow* <text>
*║☞ ${prefix}camouflage* <text>
*║☞ ${prefix}yellowroses* <text>
*║☞ ${prefix}8bit* <text|text>
*║☞ ${prefix}transformer* <text>
*║☞ ${prefix}sertifikatff* <text>
*║☞ ${prefix}maker2d* <text>
*║☞ ${prefix}maker2d2* <text>
*║☞ ${prefix}maker2d3* <text>
*║☞ ${prefix}maker2d4* <text>
*║☞ ${prefix}maker3d* <text>
*║☞ ${prefix}maker3d2* <text>
*║☞ ${prefix}maker3d3* <text>
*║☞ ${prefix}maker3d4* <text>
*║☞ ${prefix}logoepep* <text>
*║☞ ${prefix}logoepep2* <text>
*║☞ ${prefix}logoepep3* <text>
*║☞ ${prefix}logoepep4* <text>
*║☞ ${prefix}logoepep5* <text>
*║☞ ${prefix}logoepep6* <text>
*║☞ ${prefix}logoepep7* <text>
*║☞ ${prefix}logoepep8* <text>
*║☞ ${prefix}logoepep9* <text>
*║☞ ${prefix}logoepep10* <text>
*║☞ ${prefix}logoepep11* <text>
*║☞ ${prefix}logoepep12* <text>
*║☞ ${prefix}logoepep13* <text>
*║☞ ${prefix}logoepep14* <text>
*║☞ ${prefix}logoepep15* <text>
*║☞ ${prefix}logoepep16* <text>
*║☞ ${prefix}logoepep17* <text>
*║☞ ${prefix}logoepep18* <text>
*║☞ ${prefix}logoepep19* <text>
*║☞ ${prefix}logoepep20* <text>
*║☞ ${prefix}logoepep21* <text>
*║☞ ${prefix}logoepep22* <text>
*║*
*╠══〖 FUN MENU 〗*
*║*
*║☞ ${prefix}apakah <opsional>*
*║☞ ${prefix}kapankah <opsional>*
*║☞ ${prefix}bisakah <opsional>*
*║☞ ${prefix}watak <opsional>*
*║☞ ${prefix}hobby <opsional>*
*║☞ ${prefix}nilai <opsional>*
*║☞ ${prefix}gantengcek*
*║☞ ${prefix}cantikcek*
*║☞ ${prefix}dadu*
*║☞ ${prefix}tebakgambar*
*║☞ ${prefix}caklontong*
*║☞ ${prefix}Family100*
*║*
*╠═══〖 CERTIFICADO MENU 〗*
*║*
*║☞ ${prefix}ffserti* <text>
*║☞ ${prefix}ffserti2* <text>
*║☞ ${prefix}ffserti3* <text>
*║☞ ${prefix}ffserti4* <text>
*║☞ ${prefix}ffserti5* <text>
*║☞ ${prefix}mlserti* <text>
*║☞ ${prefix}mlserti2* <text>
*║☞ ${prefix}mlserti3* <text>
*║☞ ${prefix}mlserti4* <text>
*║☞ ${prefix}mlserti5* <text>
*║☞ ${prefix}pubgserti* <text>
*║☞ ${prefix}pubgserti2* <text>
*║☞ ${prefix}pubgserti3* <text>
*║☞ ${prefix}pubgserti4* <text>
*║☞ ${prefix}pubgserri5* <text>
*║*
*╠══〖 ANIME MENU 〗*
*║*
*║☞ ${prefix}naruto*
*║☞ ${prefix}minato*
*║☞ ${prefix}hinata*
*║☞ ${prefix}sakura*
*║☞ ${prefix}sasuke*
*║☞ ${prefix}madara*
*║☞ ${prefix}kakashi*
*║☞ ${prefix}itachi*
*║☞ ${prefix}obito*
*║☞ ${prefix}jiraiya*
*║☞ ${prefix}orochimaru*
*║☞ ${prefix}tsunade*
*║☞ ${prefix}nagato*
*║☞ ${prefix}itori*
*║☞ ${prefix}kurumi*
*║☞ ${prefix}miku*
*║☞ ${prefix}eren*
*║☞ ${prefix}mikasa*
*║☞ ${prefix}levi*
*║☞ ${prefix}luffy*
*║*
*╠═══〖 IMAGEM NATURAL 〗*
*║*
*║☞ ${prefix}gunung*
*║☞ ${prefix}danau*
*║☞ ${prefix}laut*
*║☞ ${prefix}sungai*
*║☞ ${prefix}sawah*
*║☞ ${prefix}hutan*
*║*
*╠═══〖 IANIMAL MAGE 〗*
*║*
*║☞ ${prefix}singa*
*║☞ ${prefix}harimau*
*║☞ ${prefix}panda*
*║☞ ${prefix}kucing*
*║☞ ${prefix}anjing*
*║☞ ${prefix}randomhewan*
*║*
*╠══〖 PREMIUM MENU 〗*
*║*
*║☞ ${prefix}play <judul lagu>*
*║☞ ${prefix}play2 <judul lagu>*
*║☞ ${prefix}joox <judul lagu>*
*║☞ ${prefix}sholawat <judul sholawat>*
*║☞ ${prefix}ytmp3 <Link>*
*║☞ ${prefix}ytmp4 <Link>*
*║☞ ${prefix}tiktoknowm <Link>*
*║*
*╠══〖 ISLAM MENU 〗*
*║*
*║☞ ${prefix}murrotal*
*║☞ ${prefix}listsurah*
*║☞ ${prefix}jadwalsholat <daerah>*
*║*
*╠══〖 SOM MENU 〗*
*║*
*║☞ ${prefix}gemuk <reply audio>*
*║☞ ${prefix}tupai <reply audio>*
*║☞ ${prefix}bass <reply audio>*
*║*
*╠══〖 MEIOS DE COMUNICAÇÃO MENU 〗*
*║*
*║☞ ${prefix}darkjokes*
*║☞ ${prefix}asupan*
*║☞ ${prefix}coronainfo*
*║☞ ${prefix}jadwalbola*
*║☞ ${prefix}ytsearch*
*║☞ ${prefix}ramalhp*
*║☞ ${prefix}qrcode*
*║☞ ${prefix}ssweb*
*║☞ ${prefix}puisiimg*
*║☞ ${prefix}stiker <reply gambar>*
*║☞ ${prefix}stikergif <reply video min 9d>*
*║☞ ${prefix}toimg <reply sticker>*
*║☞ ${prefix}tomp3 <reply video>*
*║☞ ${prefix}igstalk* <username>
*║☞ ${prefix}tts <kode bahasa|opsional>*
*║*
*╠══〖 GRUPO MENU 〗*
*║*
*║☞ ${prefix}leave*
*║☞ ${prefix}listonline*
*║☞ ${prefix}linkgc*
*║☞ ${prefix}grup <buka/tutup>*
*║☞ ${prefix}kick <tag>*
*║☞ ${prefix}kicktime <tag>*
*║☞ ${prefix}delete <reply>*
*║☞ ${prefix}notif <opsional>*
*║☞ ${prefix}promote <tag>*
*║☞ ${prefix}demote <tag>*
*║☞ ${prefix}add <nomor>*
*║☞ ${prefix}tagall*
*║☞ ${prefix}infogc*
*║☞ ${prefix}antilinkgroup <1/0>*
*║☞ ${prefix}antilinkinstagram <1/0>*
*║☞ ${prefix}antilinkyoutube <1/0>*
*║☞ ${prefix}antilinktiktok <1/0>*
*║☞ ${prefix}antispam  <1/0>*
*║☞ ${prefix}welcome <1/0*
*║☞ ${prefix}antitoxic <enable/disable>*
*║☞ ${prefix}antirava<enable/disable>*
*║☞ ${prefix}leveling <enable/disable>*
*║☞ ${prefix}modeanime <enable/disable>*
*║☞ ${prefix}nobadword <enable/disable>*
*║☞ ${prefix}antidelete <aktif/mati>*
*║☞ ${prefix}antidelete <ctaktif/ctmati>*
*║*
*╠══〖 PROPRIETÁRIO MENU 〗*
*║*
*║☞ ${prefix}event <1/0>*
*║☞ ${prefix}addprem <tag>*
*║☞ ${prefix}listprem <tag>*
*║☞ ${prefix}delprem <tag>*
*║☞ ${prefix}ban <tag>*
*║☞ ${prefix}desbanir <tag>*
*║☞ ${prefix}listabanidos*
*║☞ ${prefix}mining*
*║☞ ${prefix}addbadword <opsional>*
*║☞ ${prefix}listbadword*
*║☞ ${prefix}delbadword <opsional>*
*║☞ ${prefix}virtex*
*║☞ ${prefix}bc <opsional>*
*║☞ ${prefix}clearall*
*║*
*╚═════════════════❀*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
*Special Graças a ☄*
*➩SCRIPT ORI: [ ARIFIRAZZAQ ]*
*➩RECODE: [ Lorde ScreamoOfficial ]*
*➩PARCERIAS: [ Mosca Virus ]*
*➩PARCERIAS: [ Mafia Dos Tutors ]*
*➩COPIADOR UCHIHA*
*➩GRATIS APIKEY*
*➩NAO COMPRE BOTS*
*➩NAO COMPRE APIS*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
`
                    client.sendMessage(from, AdiGans, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝗩𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼\n*YouTube: CORTES SCREAMO 🌼*\n*Instagram: lordescreamocanal 🌼*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logobot.jpg')} } }, caption: wew, pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, time })
					break
					/// Thanks To nya Jangan Dihapus!!!!!
					/// HARGAI YANG SUDAH MENCIPTAKAN DAN MENGUPDATE SCRIPT INI!!!
					/*********** LIMIT & DOMPET  ***********/

					case 'transfer':

				if (!isRegister) return reply(mess.only.daftarB)

				if (!q.includes('|')) return  reply(ind.wrongf())

                const tujuan = q.substring(0, q.indexOf('|') - 1)

                const jumblah = q.substring(q.lastIndexOf('|') + 1)

                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)

                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`

                fee = 1000 *  jumblah

                hasiltf = jumblah - fee

                addKoinUser(tujuantf, hasiltf)

                confirmATM(sender, jumblah)

                addKoinUser('62895710073737@s.whatsapp.net', fee)

                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)

                break

				case 'dompet':

				if (!isRegister) return reply(mess.only.daftarB)

				const kantong = checkATMuser(sender)

				reply(ind.uangkau(pushname, sender, kantong))

				break

				case 'buylimit':

				if (!isRegister) return reply(mess.only.daftarB)

				payout = body.slice(10)

				const koinPerlimit = 2000

				const total = koinPerlimit * payout

				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)

				if ( checkATMuser(sender) >= total ) {

					confirmATM(sender, total)

					bayarLimit(sender, payout)

					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Adi Official\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)

				} 

				break

				case 'event':

				     if (isBanned) return reply(mess.only.benned)               

					if (!isGroup) return reply(mess.only.group)

					if (!isOwner) return reply(mess.only.ownerB)

                                        if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')

                                        if (Number(args[0]) === 1) {

                                                if (isEventon) return reply('*SUDAH AKTIF* !!!')

                                                event.push(from)

                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))

                                                reply('*「 SUCCSESS 」 Mengaktifkan EVENT di group ini*')

                                        } else if (Number(args[0]) === 0) {

                                                event.splice(from, 1)

                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))

                                                reply('*「 SUCCSESS 」 Menonaktifkan EVENT di group ini*')

                                        } else {

                                                reply(ind.satukos())

                                        }

                                        break

                                        case 'mining':

                                        if (!isRegister) return reply(mess.only.daftarB)

                                        if (isLimit(sender)) return reply(ind.limitend(pushname))

                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)

                                        if (isOwner) {

                                                const one = 9999

                                                addLevelingXp(sender, one)

                                                addLevelingLevel(sender, 99)

                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)

                                        } else {

                                                const mining = Math.ceil(Math.random() * 10000)

                                                addLevelingXp(sender, mining)

                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)

                                        }

                                        await limitAdd(sender)

                                        break
                                        
                                        case 'limit':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break

                                        case 'level':

                if (!isLevelingOn) return reply(mess.levelnoton)

                const userLevel = getLevelingLevel(sender)

                const userXp = getLevelingXp(sender)

                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)

                sem = sender.replace('@s.whatsapp.net','')

                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Name : ${sem}\n┣⊱ User XP :  ${userXp}\n┣⊱ Rank :  ${role}\n┣⊱ Tahap: ${bars}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                client.sendMessage(from, resul, text, { quoted: mek})

                .catch(async (err) => {

                        console.error(err)

                        await reply(`Error!\n${err}`)

                    })

            break

            case 'leveling':

                if (!isGroup) return reply(mess.only.group)

                if (!isGroupAdmins) return reply(mess.only.admin)

                if (args.length < 1) return reply('Boo :𝘃')

                if (args[0] === 'enable') {

                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')

                    _leveling.push(groupId)

                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))

                     reply(mess.levelon)

                } else if (args[0] === 'disable') {

                    _leveling.splice(groupId, 1)

                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))

                     reply(mess.leveloff)

                } else {

                    reply(' *Ketik perintah 1 untuk mengaktifkan, 0 untuk menonaktifkan* \n *Contoh: ${prefix}leveling 1*')

                }

            break

            case 'giftlimit': 

				if (!isOwner,!isPrem) return reply(ind.premon(pushname))

				const nomerr = args[0].replace('@','')

                const jmla = args[1]

                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)

                if (isNaN(jmla)) return reply(`limit harus berupa angka`)

                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)

                const cysz = nomerr + '@s.whatsapp.net'

                var found = false

                        Object.keys(_limit).forEach((i) => {

                            if(_limit[i].id === cysz){

                                found = i

                            }

                        })

                        if (found !== false) {

                            _limit[found].limit -= jmla

                            const updated = _limit[found]

                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}

*「 GIFT KUOTA LIMIT 」*



• User : @${updated.id.replace('@s.whatsapp.net','')}

• Limit: ${limitawal-updated.limit}`

                            console.log(_limit[found])

                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));

                            reply(result)

                        } else {

                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)

                        }

                break

                case 'leaderboard':

                case 'lb':

			if (isBanned) return reply(mess.only.benned)    

			if (!isRegister) return reply(mess.only.daftarB)

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					const lvl = getLevelingXp(sender)

                			const exp = getLevelingXp(sender)

					random = Math.floor(Math.random() * 150) + 1

					members_id = []

					teks = (args.length > 1) ? body.slice(8).trim() : ''

					teks += '\n\n'

					for (let mem of groupMembers) {

						teks += `*╠➥ * @${mem.jid.split('@')[0]}\n*╠➥ * XP:${exp}\n*╠➥ * User Level : ${lvl}\n*╠➥ * Random:${random}`

						members_id.push(mem.jid)

					}

					mentions(teks, members_id, true)

					break

					case 'rules':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                   client.sendMessage(from, rules(prefix), text, { quoted: mek })
                    break
                    case 'iklan':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                   client.sendMessage(from, iklan(prefix), text, { quoted: mek })
                    break
					/*********** PREM ***********/

					case 'addprem':

				client.updatePresence(from, Presence.composing)

				if (!isOwner) return reply(ind.ownerb())

				if (args.length < 1 ) return reply('tag member')

				mente = `${body.slice(9)}@s.whatsapp.net`

				prem.push(mente)

				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))

				reply(`*「 PREMIUM ADD 」*\n\n*Berhasil Menambahkan ${mente} kedalam database User Premium*`)

				break



				/*case 'delprem':

				if (!isOwner) return reply(ind.ownerb())

				if (args.length < 1 ) return reply(' tag member')

				mente = `${body.slice(8)}@s.whatsapp.net`

 			   for( var i = 0; i < arr.length; i++){ 

 		       if ( arr[i] === mente) { 

    		      	  arr.splice(i, 1); 

      		   	  i--; 

      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))

       			 }

 			    }

				reply(ind.dellprem)

				break */

				case 'premiumlist':

	            case 'listpremium':

	                if (!isRegister) return reply(mess.only.daftarB)

	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'

	                let nomorList = 0

	                const deret = getAllPremiumUser()

	                const arrayPremi = []

	                for (let i = 0; i < deret.length; i++) {

	                    arrayPremi.push(getAllPremiumUser()[i])

	                    nomorList++

	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}`

	                }

	                await reply(listPremi)

	            break
	            /*case 'premiumlist':
	            case 'listpremium':
					client.updatePresence(from, Presence.composing) 
					if (!isRegister) return reply(mess.only.daftarB)
					teks = `╭─「 *ᴛᴏᴛᴀʟ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ* 」\n`
					no = 0
					for (let prem) {
						no += 1
						teks += `[${no.toString()}] @${prem.split('@')[0]}\n`
					}
					teks += `│+ Total User Premium : ${prem.length}\n╰──────⎿ *BOT By AdiOfficial* ⏋────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
					break*/

					/*********** TEST TIME & TIMER ***********/

					case 'kicktime':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi...._', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_ucapkan selamat tinggal mmwaah muwwah..._', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
					case 'kick':
		        	if (isBanned) return reply(mess.only.benned)    
				    if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					case 'testime':

					setTimeout( () => {

					client.sendMessage(from, 'Waktu habis:v', text) // ur cods

					}, 10000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '5 Detik lagi', text) // ur cods

					}, 5000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '10 Detik lagi', text) // ur cods

					}, 0) // 1000 = 1s,

					break

					/*********** ADD ***********/

				case 'stiker':
				case 'sticker':
				case 's':
				case 'figu':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pushname))
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Falha, no momento da conversão ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)

					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buff, sticker, {quoted: mek})
						})
					})
						} else {
						    reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
						}
                                                await limitAdd(sender)
						break
	   
	case 'asupan':
		if (!isRegister) return reply(mess.only.daftarB)
		if (!isPrem) return reply(mess.only.premium)
		if (isBanned) return reply(mess.only.benned)
		anu = await fetchJson(`https://gratisancok.herokuapp.com/api/asupan?apikey=ZailaniGans`)
		asup = await getBuffer(anu.result.url)
		client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan'})
		await limitAdd(sender)
		break
			case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Urlnya mana om')
					tekss = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/ssweb?link=${tekss}&type=phone&apikey=${ApiVhtear}`)
					client.sendMessage(from, anu, image, {quoted: mek})
					break
			case 'qrcode':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Text nya Mana om?')
					tekss = body.slice(8)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/generateqr?data=${tekss}&apikey=${ApiVhtear}`)
					client.sendMessage(from, anu, image, {quoted: mek})
					break
		case 'puisiimg':
			if (isBanned) return reply(mess.only.benned)
			if (!isRegister) return reply(mess.only.daftarB)
			reply(mess.wait)
			anu = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${ApiVhtear}`)
			client.sendMessage(from, anu, image, {quoted: mek})
			break
		case 'leave':
		if (isBanned) return reply(mess.only.benned)
		if (!isGroup) return reply(mess.only.group)
		if (!isOwner) return reply(mess.only.ownerB)
		anu = await client.groupLeave(from, 'BOT Mau Keluar Jangan Kangen Yahh\nMuahh... Muahhh....', groupId)
	        break
			
				case 'getsticker':

				case 'gets':

					namastc = body.slice(12)

					result = fs.readFileSync(`./add/sticker/${namastc}.webp`)

					client.sendMessage(from, result, sticker, {quoted :mek})

					break

				case 'stickerlist':

				case 'liststicker':

					teks = '*Sticker List :*\n\n'

					for (let awokwkwk of setiker) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${setiker.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })

					break

				case 'addsticker':

					if (!isQuotedSticker) return reply('Reply stiker nya')

					svst = body.slice(12)

					if (!svst) return reply('Nama sticker nya apa?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					setiker.push(`${svst}`)

					fs.writeFileSync(`./add/sticker/${svst}.webp`, delb)

					fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))

					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })

					break

				case 'addvn':

					if (!isQuotedAudio) return reply('Reply vnnya blokk!')

					svst = body.slice(7)

					if (!svst) return reply('Nama audionya apa su?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					audionye.push(`${svst}`)

					fs.writeFileSync(`./add/audio/${svst}.mp3`, delb)

					fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))

					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })

					break

				case 'getvn':

					namastc = body.slice(7)

					buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)

					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })

					break

				case 'listvn':

				case 'vnlist':

					teks = '*List Vn:*\n\n'

					for (let awokwkwk of audionye) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${audionye.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })

					break

				case 'addimage':

					if (!isQuotedImage) return reply('Reply imagenya blokk!')

					svst = body.slice(10)

					if (!svst) return reply('Nama imagenya apa su?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					imagenye.push(`${svst}`)

					fs.writeFileSync(`./add/image/${svst}.jpeg`, delb)

					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))

					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })

					break

				case 'getimage':

					namastc = body.slice(10)

					buffer = fs.readFileSync(`./add/image/${namastc}.jpeg`)

					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })

					break

				case 'imagelist':

				case 'listimage':

					teks = '*List Image :*\n\n'

					for (let awokwkwk of imagenye) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${imagenye.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })

					break

				case 'addvideo':

					if (!isQuotedVideo) return reply('Reply videonya blokk!')

					svst = body.slice(10)

					if (!svst) return reply('Nama videonya apa su?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					videonye.push(`${svst}`)

					fs.writeFileSync(`./add/video/${svst}.mp4`, delb)

					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))

					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })

					break

				case 'getvideo':

					namastc = body.slice(10)

					buffer = fs.readFileSync(`./add/video/${namastc}.mp4`)

					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })

					break

				case 'listvideo':

				case 'videolist':

					teks = '*List Video :*\n\n'

					for (let awokwkwk of videonye) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${videonye.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })

					break
					/*********** PUBLIC ***********/

					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐬𝐞𝐦𝐮𝐚 𝐨𝐫𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐧𝐲𝐚 𝐚𝐝𝐦𝐢𝐧 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break

					case 'laporbug':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                     const pesan = body.slice(10)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('16672377823@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
					case 'reqwest':
                    if (isBanned) return reply(mess.only.benned)    
	    			if (!isRegister) return reply(mess.only.daftarB)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST FITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('16672377823@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			case 'artimimpi':
				if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Apa Yg Mau Di Artiin?')
				anu = await fetchJson(`https://api.vhtear.com/artimimpi?query=${body.slice(11)}&apikey=${ApiVhtear}`)
			    reply('Mimpi:\n\n'+anu.result)
				break
			    case 'tagall':
	        		if (isBanned) return reply(mess.only.benned)    
		    		if (!isRegister) return reply(mess.only.daftarB)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😗* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					await limitAdd(sender)
					break
			    case 'otagall':
	        		if (isBanned) return reply(mess.only.benned)    
			    	if (!isRegister) return reply(mess.only.daftarB)		
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					members_id = []
					teks = (args.length > 1) ? body.slice(9).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  *GABUT TEAM* 〙', members_id, true)
					await limitAdd(sender)
					break
				case 'clearall':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)	
				if (!isOwner) return reply('Kamu siapa?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat')
					break
					case 'add':
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
                    ///////*********** ANIME MENU ***********//////
                    
                    case 'naruto':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=NarutoUzumaki&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'minato':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned) 
				   
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Minato&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'boruto':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned) 
				   
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Boruto&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'hinata':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Hinata&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'sakura':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Sakura&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'sasuke':
				
				 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Sasuke&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'akira':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Akira&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'akira!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'itori':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Itori&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'itori!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'kurumi':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Kurumi&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'kurumi!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'miku':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Miku&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'miku!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'madara':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Madarauchiha&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'madara!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'kakashi':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=KakashiHatake&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'kakashi!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'itachi':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Itachiuchiha&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'itachi!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'nagato':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=NagatoUzumaki&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'nagatoUzumaki!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'obito':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Obitouchiha&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'obito!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'jiraiya':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Jiraiya&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'jiraiya!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'orochimaru':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Orochimaru&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'orochimaru!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'tsunade':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=TsunadeSenju&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'tsunade!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'eren':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=ErenJaeger&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'eren!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'mikasa':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=MikasaAckerman&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'mikasa!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'levi':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=LeviAckerman&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'levi!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'luffy':
					
					 //Update By Mzailani & Adi Official
					
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Luffy&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'luffy!!', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					
					///////*********** AKHIR FITUR ANIME ***********//////
					
					///////*********** IMAGE ALAM ***********//////
                    
                    case 'gunung':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=GunungAestestic&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'danau':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=danau&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'laut':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=fotoLaut&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'sungai':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Sungai&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'sawah':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Sawah&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'hutan':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Hutan&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
///////*********** AKHIR FITUR IMAGE ALAM ***********//////
					
				///////*********** FOTO HEWAN ***********//////
                    
                    case 'singa':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Singa&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'harimau':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=harimau&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'panda':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Panda&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'kucing':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=KucingAestestic&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
				    case 'anjing':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=Anjing&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					case 'randomhewan':
                    
                     //Update By Mzailani & Adi Official
                    
				if (isBanned) return reply(mess.only.benned)  
				  
				if (!isRegister) return reply(mess.only.daftarB)
				
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					
					reply(mess.wait)
					
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/googleimage?kata=RandomHewanKeren&apikey=${ApikeyZailani}`, {method: 'get'})
					
					naru = JSON.parse(JSON.stringify(anu.result.result));
					
					to =  naru[Math.floor(Math.random() * naru.length)];
					
					nye = await getBuffer(to)
					
					client.sendMessage(from, nye, image, { caption: 'Nih Bagus Gak Kak\n*©AdiOfficial*', quoted: mek })
					
					await limitAdd(sender)
					
					break
					
					///////*********** AKHIR FITUR FOTO HEWAN ***********//////
					
					case 'heroml':
					//Update By Mzailani & Adi Official
                      if (!isRegister) return reply(mess.only.daftarB)
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      hero = body.slice(7)
                      reply(mess.wait)
                      anu = await fetchJson(`https://api.vhtear.com/herodetail?query=${hero}&apikey=${ApiVhtear}`, {method: 'get'})
                      buffer = await getBuffer(anu.result.pictHero)
                      hasil = `*Nama Hero*: ${anu.result.title}\n*Quotes Hero*: ${anu.result.quotes}\n*Info*: ${anu.result.info}\n${anu.result.attributes}`
                      client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                      await limitAdd(sender)
                      break


// FITUR SERTIFIKAT

				case 'ffserti':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(8)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak' })
				break
				case 'ffserti2':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak' })
				break
				case 'ffserti3':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'ffserti4':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'ffserti5':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'mlserti':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(8)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'mlserti2':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih kak'})
				break
				case 'mlserti3':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'mlserti4':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'mlserti5':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(9)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'pubgserti':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya mana om?`)
				reply(mess.wait)
				nama = body.slice(10)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'pubgserti2':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana om?`)
				reply(mess.wait)
				nama = body.slice(11)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'pubgserti3':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana om?`)
				reply(mess.wait)
				nama = body.slice(11)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'pubgserti4':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana?`)
				reply(mess.wait)
				nama = body.slice(11)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				case 'pubgserti5':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana om?`)
				reply(mess.wait)
				nama = body.slice(11)
				AdiGans = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${nama}`)
				client.sendMessage(from, AdiGans, image, { quoted: mek, caption: 'Nih Kak'})
				break
				
// AKHIR FITUR SERTIFIKAT

// FITUR LOGO EPEP

			case 'logoepep':
				gatauda = body.slice(9)
                 		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep2':
				gatauda = body.slice(10)
                 		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep3':
				gatauda = body.slice(10)
                 		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep4':
				gatauda = body.slice(10)
                 		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep5':
				gatauda = body.slice(10)
                 		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep6':
				gatauda = body.slice(10)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=wukong&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep7':
				gatauda = body.slice(10)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=andrew&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep8':
				gatauda = body.slice(10)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=antonio&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep9':
				gatauda = body.slice(10)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=ford&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep10':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=hayato&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep11':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=kelly&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep12':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=laura&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep13':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=miguel&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep14':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=moco&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep15':
				gatauda = body.slice(16)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=nikita&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep16':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=olivia&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep17':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=paloma&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep18':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=rafael&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep19':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=shani&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep20':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=notora&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep21':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=joseph&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break
			case 'logoepep22':
				gatauda = body.slice(11)
                		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Teksnya mana um')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=steffie&text=${gatauda}&apikey=${ApiVhtear}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak\n*©AdiOfficial*'})
				await limitAdd(sender)
				break

// AKHIR FITUR LOGO EPEP

//Menu maker Update By Mzailani & Adi Official
            case 'googletext': 
                   //Update By Mzailani & Adi Official
                   if (!isRegister) return reply(mess.only.daftarB)
				   if (isLimit(sender)) return reply(ind.limitend(pushname))
					var gh = body.slice(11)
					lan1 = gh.split("|")[0];
					lan2 = gh.split("|")[1];
					lan3 = gh.split("|")[2];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker?text=${lan1}&text2=${lan2}&text3=${lan3}&theme=google-suggestion&apikey=${ApikeyZailani}`, {method: 'get'})
                    buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {caption: 'Udah Jadi Nih Kak', quoted: mek})
					await limitAdd(sender)

				    break
                case 'glitch':
				   //Update By Mzailani & Adi Official
                    if (!isRegister) return reply(mess.only.daftarB)
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
			     	if (isBanned) return reply(mess.only.benned)
			     	var gh = body.slice(7)
					var tels2 = gh.split("|")[0];
				    var tels3 = gh.split("|")[1];
				    reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker?text=${tels2}&text2=${tels3}&theme=glitch&apikey=${ApikeyZailani}`, {method: 'get'})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)

				    break
                 case 'pubg':
					//Update By Mzailani & Adi Official
                    if (!isRegister) return reply(mess.only.daftarB)
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
			     	if (isBanned) return reply(mess.only.benned)
			     	var gh = body.slice(5)
					var tels5 = gh.split("|")[0];
				    var tels6 = gh.split("|")[1];
				    reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/game?text=${tels5}&text2=${tels6}&theme=pubg&apikey=${ApikeyZailani}`, {method: 'get'})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)

				    break
                case 'battlefield':
					//Update By Mzailani & Adi Official
                    if (!isRegister) return reply(mess.only.daftarB)
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
			     	if (isBanned) return reply(mess.only.benned)
			     	var gh = body.slice(12)
					var tels4 = gh.split("|")[0];
				    var tels5 = gh.split("|")[1];
				    reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/game?text=${tels4}&text2=${tels5}&theme=battlefield&apikey=${ApikeyZailani}`, {method: 'get'})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)

				    break
                case 'coffe':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(6)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/senja?text=${tahtaq}&theme=coffee-cup&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
                case 'coffe2':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/senja?text=${tahtaq}&theme=coffee-cup2&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
                case 'gradient':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner7?text=${tahtaq}&theme=gradient&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'love':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(5)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner4?text=${tahtaq}&theme=love&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
              case 'neon':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(5)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/metallic?text=${tahtaq}&theme=neon&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
              case 'glow':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(5)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/metallic?text=${tahtaq}&theme=glow&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
              case 'wood':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(5)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/effect?text=${tahtaq}&theme=wood&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
              case 'summer':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/alam?text=${tahtaq}&theme=summer&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
              case 'flower':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/alam?text=${tahtaq}&theme=flower&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'underwater':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(11)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner?text=${tahtaq}&theme=underwater&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'flaming':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner?text=${tahtaq}&theme=flaming&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'harrypotter':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(12)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/effect?text=${tahtaq}&theme=harry-potter&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'shadow':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner2?text=${tahtaq}&theme=shadow&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'cemetery':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner2?text=${tahtaq}&theme=cemetery&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'romantic':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner3?text=${tahtaq}&theme=romantic&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'burnpaper':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(10)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner3?text=${tahtaq}&theme=burn-paper&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'undergrass':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(11)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner4?text=${tahtaq}&theme=under-grass&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'wolfmetal':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(10)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner5?text=${tahtaq}&theme=wolf-metal&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'metallicglow':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(13)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner6?text=${tahtaq}&theme=metallic-glow&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'sweetcandy':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(11)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner6?text=${tahtaq}&theme=sweet-candy&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'funnycup':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner7?text=${tahtaq}&theme=funny-cup&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'smoke':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(6)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/new2?text=${tahtaq}&theme=smoke&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'smoke2':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(6)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner65?text=${tahtaq}&theme=typography&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'rainbow':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/new2?text=${tahtaq}&theme=rainbow&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'camouflage':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(11)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/new3?text=${tahtaq}&theme=camouflage&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'yellowroses':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(12)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/banner65?text=${tahtaq}&theme=yellow-roses&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.url)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
                 case '8bit':
					//Update By Mzailani & Adi Official
                    if (!isRegister) return reply(mess.only.daftarB)
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
			     	if (isBanned) return reply(mess.only.benned)
			     	var ghl = body.slice(5)
					var telss6 = ghl.split("|")[0];
				    var telss7 = ghl.split("|")[1];
				    reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/logo4?text=${telss6}&text2=${telss7}&theme=8-bit&apikey=${ApikeyZailani}`, {method: 'get'})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)

				    break
            case 'transformer':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                     tahtaq = `${body.slice(12)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker/special/transformer?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

				     break
             case 'sertifikatff':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(13)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker/special/epep?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker2d':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker2d2':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker2?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker2d3':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker3?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker2d4':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker4?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker3d':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker3d?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker3d2':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker3d/no2?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker3d3':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker3d/no3?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
             case 'maker3d4':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
                tahtaq = `${body.slice(9)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     reply(mess.wait)
                     anu = await fetchJson(`https://gratisancok.herokuapp.com/api/maker3d/no4?text=${tahtaq}&apikey=${ApikeyZailani}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.results)
                     client.sendMessage(from, buffer, image, { quoted: mek, caption: `Udah Jadi Nih Kak`})
                     await limitAdd(sender)

	     			 break
//Akhir menu maker Update Mzailani & Adi Official

					/*********** GROUP ***********/

case 'jadwalsholat':

if (isBanned) return reply(mess.only.benned)

if (!isRegister) return reply(mess.only.daftarB)

if (isLimit(sender)) return reply(ind.limitend(pushname))

sholat = body.slice(13)

reply(mess.wait)

anu = await fetchJson(`https://api.vhtear.com/jadwalsholat?query=${sholat}&apikey=${ApiVhtear}`)

jsol = `*Kota*: ${anu.result.kota}\n*Tanggal*: ${anu.result.tanggal}\n*➥ Subuh*: ${anu.result.Shubuh}\n*➥ Dzuhur*: ${anu.result.Zduhur}\n*➥ Ashar*: ${anu.result.Ashr}\n*➥ Maghrib*: ${anu.result.Magrib}\n*➥ Isya*: ${anu.result.Isya}\n* ${anu.result.ramadhan}*`

client.sendMessage(from, jsol, text, {quoted: mek})

break

			case 'jadwalbola':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=${ApiVhtear}`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
			case 'coronainfo': // Update By RzkyO & ItsmeikyXSec404
                 		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=${ApiVhtear}`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
          case 'antiligar':
          client.on("CB:action,,call", async json => {
    const callerId = json[2][0][1].from;
    console.log(json);
    //if (setting.responder.call.status){
    client.sendMessage(
      callerId,
      "Sistema de cancelamento de ligação e bloqueio automático. Você será bloqueado!",
      MessageType.text
    );
    await client.blockUser(callerId, "add"); // Block user
    //}
  });
             break

					case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
		    		if (!isRegister) return reply(mess.only.daftarB)
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
					case 'covid':
					if (isBanned) return reply(mess.only.benned)    
	    			if (!isRegister) return reply(mess.only.daftarB)
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://gratisancok.herokuapp.com/api/covidindo?apikey=${ApikeyZailani}`)
                   if (data.result.attributes) reply(data.result.attributes)
                   hasil = `Provinsi : ${data.result.attributes.Provinsi}\n\nTotal positif : ${data.result.attributes.Kasus_Posi}\nTotal Sembuh : ${data.result.attributes.Kasus_Semb}\nTotal Meninggal : ${data.result.attributes.Kasus_Meni}`
                   reply(hasil)
                   break
					case 'block':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(7)}@c.us`, text)
					return await wa.blockUser(sender, false)
                                        await wa.blockUser(sender, false)
					break
					case 'ttp':
					if (isLimit(sender)) return reply(ind.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                    reply(mess.wait)
					if (args.length < 1) return reply('*Textnya mana om?*')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${teks}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.base64} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						client.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		                           	case 'darkjokes':
		                            	if (!isRegister) return reply(mess.only.daftarB)
			                          	if (isLimit(sender)) return reply(ind.limitend(pusname))
		                        		if (isBanned) return reply(mess.only.benned)
		                        		anu = await fetchJson(`https://gratisancok.herokuapp.com/api/drakjokes?apikey=${ApikeyZailani}`)
		                        		buffer = await getBuffer(anu.result.url)
		                        		client.sendMessage(from, buffer, image, {quoted: mek, caption: '*DARK JOKES*'})
		                        		await limitAdd(sender)
		                        		break
	                case 'igstalk':
					//Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
					hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=${ApiZeks}`)
					buffer = await getBuffer(hmm.profile_pic)
					hasil = `*「 INSTAGRAM STALKER 」*\nFullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
case 'barcode':

if (isBanned) return reply(mess.only.benned)  
				  
if (!isRegister) return reply(mess.only.daftarB)
				
if (isLimit(sender)) return reply(ind.limitend(pushname))

text = `${body.slice(8)}`

anu = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=AdiOfficialBOT&text=${text}`, {method: 'get'})

client.sendMessage(from, anu, image, {quoted: mek})

break
				case 'igdown':
				if (isBanned) return reply(mess.only.benned)  
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Urlnya mana gan?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com'))
				    reply(mess.wait)
				    anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${ApiZeks}`, {method: 'get'})
				    insta = await getBuffer(anu.url)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    break
case 'tiktoknowm':

if (isBanned) return reply(mess.only.benned)  
				  
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply('Urlnya mana gan?')

if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)

reply(mess.wait)

anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${args[0]}&apikey=${ApiZeks}`, {method: 'get'})

if (anu.error) return reply(anu.error)

buffer = await getBuffer(anu.no_watermark)

client.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih Kak'})

break

case 'pantun':

if (isBanned) return reply(mess.only.benned)  
				  
if (!isRegister) return reply(mess.only.daftarB)
				
if (isLimit(sender)) return reply(ind.limitend(pushname))

anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=${ApiZeks}`)

teks = `${anu.result.pantun}`

client.sendMessage(from, teks, text, {quoted: mek})

break
					case 'sholawat':
					//Update By Mzailani & Adi Official
                if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.daftarB)
				if (!isPrem) return reply(mess.only.premium)
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://gratisancok.herokuapp.com/api/yt-play/?kata=${play}&apikey=${ApikeyZailani}`,  {method: 'get'})
                if (anu.error) return reply(anu.error)
                infomp3 = `「 *WAKTUNYA SHOLAWATAN* 」\n*• Judul:* ${anu.result.title}\n*• Durasi:* ${anu.result.duration}\n*• Ukuran:* ${anu.result.filesize}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA AKANG TETEH SANTRI 😘*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.link)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                case 'play2':
                //Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
		if (!isPrem) return reply(mess.only.premium)
                if (isBanned) return reply(mess.only.benned)
                if (args.length < 1) return reply('Yang di cari apa um?')
                reply(mess.wait)
                play = body.slice(6)                
                anu = await fetchJson(`https://gratisancok.herokuapp.com/api/yt-play/?kata=${play}&apikey=${ApikeyZailani}`,  {method: 'get'})
                if (anu.error) return reply(anu.error)
                komp3 = `*Resultado da pesquisa*\n➽ *Titulo* : ${anu.result.title}\n➽ *Envio* : ${anu.result.uploaded}\n➽ *Duração* : ${anu.result.duration}\n➽ *Vista Total* : ${anu.result.total_view}\n➽ *Canal* : ${anu.result.channel}\n➽ *Tamanho Arquivo* : ${anu.result.filesize}\nEspere um momento, o ÁUDIO ESTÁ ENVIANDO*`
                bufferr = await getBuffer(anu.result.thumb)
                laguuu = await getBuffer(anu.result.link)
                client.sendMessage(from, laguuu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
		client.sendMessage(from, bufferr, image, {quoted: mek, caption: komp3})
                await limitAdd(sender)

			    break
		case 'play':
		//update By Mzailani & Adi Official
		if (!isRegister) return reply(mess.only.daftarB)
		if (args.length < 1) return reply('Yang Di cari apa um?')
		if (!isPrem) return reply(mess.only.premium)
		reply(mess.wait)
		play2 = body.slice(5)
		anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${play2}&apikey=${ApiVhtear}`, {method: 'get'})
		if (anu.error) return reply(anu.error)
		komp3 = `「 *PLAY DOWNLOAD*」\n*Titulo Da Musica*: ${anu.result.title}\n*Duração Vídeo*: ${anu.result.duration}\n*Tamanho*: ${anu.result.size}`
		buffer = await getBuffer(anu.result.image)
		laguu = await getBuffer(anu.result.mp3)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: komp3})
		client.sendMessage(from, laguu, audio, {mimetype: 'audio/mp4', quoted: mek})
		break
					case 'linkgroup':

				case 'linkgrup':

				case 'linkgc':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

				    if (!isGroup) return reply(mess.only.group)

				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)

				    linkgc = await client.groupInviteCode (from)

				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Grupo *${groupName}*`

				    client.sendMessage(from, yeh, text, {quoted: mek})

			        break

			case 'ban':

					client.updatePresence(from, Presence.composing) 

					if (!isRegister) return reply(mess.only.daftarB)

					if (isBanned) return reply(mess.only.benned)   

					if (args.length < 1) return

					if (!isOwner) return reply(mess.only.ownerB)

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

			        ban = mentioned

					reply(`banido com sucesso : ${ban}`)

					break

				case 'desbanir':

					if (!isOwner)return reply(mess.only.ownerB)

					bnnd = body.slice(8)

					ban.splice(`${bnnd}@s.whatsapp.net`, 1)

					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))

					reply(`número wa.me/${bnnd} telah di unban!`)

					break

				case 'listabanidos':

					client.updatePresence(from, Presence.composing) 

					if (!isRegister) return reply(mess.only.daftarB)

					if (isBanned) return reply(mess.only.benned)    

					teks = 'Esta é uma lista de número de banimento :\n'

					for (let benn of ban) {

						teks += `~> @${benn.split('@')[0]}\n`

					}

					teks += `Total : ${ban.length}`

					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})

					break

					case 'notif':
if (!isOwner) return reply(mess.only.ownerB)
client.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Mensagem : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participantes']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await client.sendMessage(from, options, text)
break
					/*********** ABOUT ***********/

					case 'info':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					me = client.user

					uptime = process.uptime()

					teks = `*Nome bot* : ${me.name}\n*Autor* : *Tio Cafe Official*\n*Numero Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Contatos Bloqueados* : ${blocked.length}\n*Bot está ativo em* : ${kyun(uptime)}\n*Publico:* OFF\n*Total Usuarios Premium*: ${prem.length}\n*Total Chat* : ${totalchat.length}\n*Instagram* : *lordescreamocanal*\n*Github* : *github.com/lordescreamo/lordescreamo*\n*Youtube* : https://youtube.com/channel/UCoH3okdLTsWuKJc1VsUcqqg\n*GROUP BOT*: https://chat.whatsapp.com/LP3bttyaqCpGrskXFNuzlY`

					buffer = await getBuffer(me.imgUrl)

					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})

					break

			case 'creator':

			case 'dono':

		    	if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

                 client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})

                 client.sendMessage(from, 'Me avise meu dono.',MessageType.text, { quoted: mek} )
                 
                 client.sendMessage(from, 'Se você quer fazer um BOT, visite este canal',MessageType.text, { quoted: mek} )
                 
                 client.sendMessage(from, `https://youtube.com/channel/UCoH3okdLTsWuKJc1VsUcqqg Apoie-nos Sim pessoal`,MessageType.text, { quoted: mek} )
                 
                 break
					/*********** MENU ***********/

					case 'kodebahasa':

		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})

                break

					case 'kodenegara':

               client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})

               break

					case 'virtex':

					 if (!isOwner) return reply(mess.only.ownerB)

               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})

               break

               case 'murrotal':

		client.sendMessage(from, murothal(prefix, sender), text, {quoted: mek})

                break

					case 'listsurah':

					if (isBanned) return reply(mess.only.benned)    

					if (!isRegister) return reply(mess.only.daftarB)

					client.sendMessage(from, listsurah(prefix), text, { quoted: mek })

					break
					
					case 'randomquran':
					
					if (isBanned) return reply(mess.only.benned)    

					if (!isRegister) return reply(mess.only.daftarB)
					
					anu = await fetchJson(`https://api.zeks.xyz/api/randomquran?apikey=${ApiZeks}`, {method: 'get'})
					
					hasil = `*Surat*: ${anu.result.nama}\n*Ayat*: ${anu.result.ayat}\n*Arti*: ${anu.result.arti}\n*Keterangan*: ${anu.result.keterangan}`
					
					client.sendMessage(from, hasil, text, {quoted: mek})
					
					await limitAdd(sender)
					
					break
					
					/*********** ALL ***********/

					case 'tahta':

                if (isBanned) return reply(mess.only.benned)    

				  if (!isRegister) return reply(mess.only.daftarB)

					if (args.length < 1) return reply('Teksnya mana kak? >.<')

					teks = body.slice(7)

					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')

					reply(mess.wait)

					bufferrty = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=${ApiZeks}`, {method: 'get'})

					client.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Harta Tahta '+teks})

					break             

case 'promote':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)﻿
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos aceitos, você se torna administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, você se torna administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
case 'demote':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)

			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadikan admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, você não é um administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, você não é um administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'daftaradmin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)

				
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				case 'stickertoimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)

				
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'bass':                 

       if (!isRegister) return reply(mess.only.daftarB)

                if (isBanned) return reply(mess.only.benned)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(media)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

					break

					case 'tupai':

if (!isRegister) return reply(mess.only.daftarB)

                if (isBanned) return reply(mess.only.benned)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(media)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'gemuk':

if (!isRegister) return reply(mess.only.daftarB)

                if (isBanned) return reply(mess.only.benned)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(media)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break
					case 'tts':

				   client.updatePresence(from, Presence.recording) 

				   if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})

                                   if (!isRegister) return reply(mess.only.daftarB)

                                   if (isLimit(sender)) return reply(ind.limitend(pusname))

					const gtts = require('./lib/gtts')(args[0])

					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})

					dtt = body.slice(8)

					ranm = getRandom('.mp3')

					rano = getRandom('.ogg')

					dtt.length > 600

					? reply('Textnya kebanyakan om')

					: gtts.save(ranm, dtt, function() {

						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {

							fs.unlinkSync(ranm)

							buff = fs.readFileSync(rano)

							if (err) return reply('Gagal om:(')

							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})

							fs.unlinkSync(rano)

						})

					})

                                        await limitAdd(sender)

					break

					case 'dojjnasi':

				case 'dkkkonate':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					client.sendMessage(from, '*pulsa/gopay: 089504585790*\n*saweria :* _https://saweria.co/mimamadi_', text, { quoted: mek })

					break
                case 'apakah':

                if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)  

					apakah = body.slice(1)

					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']

					const kah = apa[Math.floor(Math.random() * apa.length)]

					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })

					break

				case 'rate':

				case 'nilai':

				if (isBanned) return reply(mess.only.benned)    

			if (!isRegister) return reply(mess.only.daftarB)

					rate = body.slice(1)

					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']

					const te = ra[Math.floor(Math.random() * ra.length)]

					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })

					break

					case 'gantengcek':

					if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					ganteng = body.slice(1)

					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']

					const teng = gan[Math.floor(Math.random() * gan.length)]

					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })

					break

					case 'cantikcek':

					if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					cantik = body.slice(1)

					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']

					const tik = can[Math.floor(Math.random() * can.length)]

					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })

					break

				case 'watak':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					watak = body.slice(1)

					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']

					const tak = wa[Math.floor(Math.random() * wa.length)]

					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })

					break

				case 'hobby':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					hobby = body.slice(1)

					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']

					const by = hob[Math.floor(Math.random() * hob.length)]

					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })

					break

				case 'bisakah':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					bisakah = body.slice(1)

					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']

					const keh = bisa[Math.floor(Math.random() * bisa.length)]

					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })

					break

				case 'kapankah':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					kapankah = body.slice(1)

					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']

					const koh = kapan[Math.floor(Math.random() * kapan.length)]

					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })

					break

					case 'dadu':

					if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					kapankah = body.slice(1)

					const elu =['1','2','3','4','5','6']

					const ule = elu[Math.floor(Math.random() * elu.length)]

					client.sendMessage(from, ule, text, { quoted: mek })

					break

					case 'register':

                                        if (isRegister) return  reply(ind.rediregis())

                                        if (!q.includes('|')) return  reply(ind.wrongf())

                                        const namaUser = q.substring(0, q.indexOf('|') - 0)

                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)

                                        const serialUser = createSerial(20)

                                        if(isNaN(umurUser)) return await reply('A idade deve ser um número!!')

                                        if (namaUser.length >= 30) return reply(`por que seu nome é tão longo é um nome ou um trem`)

                                        if (umurUser > 30) return reply(`sua idade é muito velha no máximo 40 anos`)

                                        if (umurUser < 13) return reply(`sua idade é muito jovem, mínimo 12 anos`)
                                        
                                        try {
				
		                          		ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				
		                         		} catch {
				
			                        	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

			                           	}
				
			                         	AdiGans = await getBuffer(ppimg)

                                        veri = sender

                                        if (isGroup) {

                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)

                                                client.sendMessage(from, AdiGans, image, { quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})

                                                addATM(sender)

                                                addLevelingId(sender)

                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))

                                        } else {

                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)

                                                client.sendMessage(from, AdiGans, image, { quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})

                                                addATM(sender)

                                                addLevelingId(sender)

                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))

                                        }

				        break


                    case 'welcome':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (args.length < 1) return reply('Hmmmm')

					if (Number(args[0]) === 1) {

						if (isWelkom) return reply('Udah aktif um')

						welkom.push(from)

						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))

						reply('Ativou com sucesso o recurso de boas-vindas neste grupo ✔️')

					} else if (Number(args[0]) === 0) {

						welkom.splice(from, 1)

						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))

						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')

					} else {

						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')

					}
					
					break

			case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
					
			case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (args.length < 1) return reply('ᴋᴇᴛɪᴋ ᴇɴᴀʙʟᴇ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ\nᴋᴇᴛɪᴋ ᴅɪsᴀʙʟᴇ ᴜɴᴛᴜᴋ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
					if ((args[0]) === 'enable') {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Ativar com sucesso o modo anime no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'disable') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('dígítє hαвílítαr pαrα αtívαr\ndígítє hαвílítαr pαrα dєѕαtívαr')
					}
					break

                    case 'antilink':

                   	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('digite 1 para ativar')

					if (Number(args[0]) === 1) {

						if (isAntiLink) return reply('o grupo anti-link está ativo')

						antilink.push(from)

						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))

						reply('Ativar grupo anti-link com sucesso neste grupoi ✔️')

						client.sendMessage(from,`Atenção a todos os membros ativos do grupo anti-link. Se você enviar um link de grupo, você será expulso do grupo`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLink) return reply('Modo anti link grupo foi desativado')

						var ini = anti.indexOf(from)

						antilink.splice(ini, 1)

						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))

						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

					break

                  case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
					
					case 'antilinkyoutube':

                   	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('digite 1 para ativar')

					if (Number(args[0]) === 1) {

						if (isAntiLinkYoutube) return reply('anti link Youtube ativado')

						antilinkyutub.push(from)

						fs.writeFileSync('./database/group/antilinkyutub.json', JSON.stringify(antilinkyutub))

						reply('Ativando com sucesso o link anti-Youtube neste grupo ✔️')

						client.sendMessage(from,`Perhatian kepada seluruh member anti link Youtube aktif apabila anda mengirim link Youtube anda akan di kick dari group`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLinkYoutube) return reply('Mode anti link Youtube sudah disable')

						var ini = anti.indexOf(from)

						antilinkyutub.splice(ini, 1)

						fs.writeFileSync('./database/group/antilinkyutub.json', JSON.stringify(antilinkyutub))

						reply('Desativação bem-sucedida de links anti-YouTube neste grupo ✔️')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

					break
					
					case 'antilinktiktok':

                   	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('digite 1 para ativar')

					if (Number(args[0]) === 1) {

						if (isAntiLinkTiktok) return reply('anti link Tiktok ativado')

						antilinktiktod.push(from)

						fs.writeFileSync('./database/group/antilinktiktod.json', JSON.stringify(antilinktiktod))

						reply('Ativação bem-sucedida do anti-link Tiktok neste grupo ✔️')

						client.sendMessage(from,`Atenção a todos os membros ativos anti-link do Tiktok, se você enviar um link do TikTod, você será expulso do grupo`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLinkTiktok) return reply('O modo anti-link do Tiktok foi desativado')

						var ini = anti.indexOf(from)

						antilinktiktod.splice(ini, 1)

						fs.writeFileSync('./database/group/antilinktiktod.json', JSON.stringify(antilinktiktod))

						reply('Desativando com sucesso o anti-link do Tiktok neste grupo ✔️')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

					break
					
					case 'antilinkinstagram':

                   	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('digite 1 para ativar')

					if (Number(args[0]) === 1) {

						if (isAntiLinkInstagram) return reply('o link anti Instagram está ativo')

						antilinkig.push(from)

						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))

						reply('Ativando com sucesso o anti-link Instagram neste grupo ✔️')

						client.sendMessage(from,`Perhatian kepada seluruh member anti link Instagram aktif apabila anda mengirim link Instagram anda akan di kick dari group`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLinkInstagram) return reply('O modo anti-link do Instagram foi desativado')

						var ini = anti.indexOf(from)

						antilinkig.splice(ini, 1)

						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))

						reply('Desativando com sucesso o anti-link Instagram neste grupo ✔️')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

					break
					
					case 'antispam':

                   	if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (args.length < 1) return reply('digite 1 para ativar')

					if (Number(args[0]) === 1) {

						if (isAntiBucin) return reply('anti spam está ativo')

						antibucin.push(from)

						fs.writeFileSync('./database/group/antibucin.json', JSON.stringify(antibucin))

						reply('Anti-spam ativado com sucesso neste grupo ✔️')

						client.sendMessage(from,`Atenção a todos os membros ativos anti -spam quando você enviar spam no grupo será expulso desteo grupo`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiBucin) return reply('O modo Anti spam foi desativado')

						var ini = anti.indexOf(from)

						antibucin.splice(ini, 1)

						fs.writeFileSync('./database/group/antibucin.json', JSON.stringify(antibucin))

						reply('Desativando anti-spam com sucesso neste grupo ✔️')

					} else {

						reply('1 para ativar, 0 para desativar')

					}

					break

				case 'antitrava':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
					if ((args[0]) === 'enable') {
						if (isAntiVirtex) return reply('anti virtex group sudah aktif')
						antivirtex.push(from)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
						reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'disable') {
						if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif')
						antivirtex.splice(from, 1)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
						reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('habilitar para ativar, desabilitar para desabilitar')
					}
					break

				case 'nulis2':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)
				
					if (args.length < 1) return reply('Yang mau di tulis apaan?')

					tulis = body.slice(7)

					reply(mess.wait)

					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/nulis?text=${tulis}&apikey=${ApikeyZailani}`, {method: 'get'})
					
					buffer4 = await getBuffer(anu.result.images.url)

					client.sendMessage(from, buffer4, image, {quoted: mek, caption: 'Udah jadi kak jangan malas lagi ya kak'})

					break

			case 'nulis':
           		if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('Yg Mau Di tulis Apa um?')
				ct = body.slice(6)
				reply(mess.wait)
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=${ApiVhtear}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak\nHati² Ketahuan Guru mu\n*©AdiOfficial*', quoted: mek})
				await limitAdd(sender)
				break

			case 'text2gif':
                if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply('O texto é Mana om?')
				bh = body.slice(10)
				reply(mess.wait)
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=${ApiVhtear}`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi\n*©AdiOfficial*', quoted: mek})
				await limitAdd(sender)
				break
			case 'attp2':
               	if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply(`*Texto Kosong*\n\n*EXEMPLO*\n*${prefix}attp Screamofficial*`)
					teks = body.slice(6)
					atytyd = await getBuffer(`https://api.vhtear.com/textxgif?text=${teks}&apikey=GratisssCokkk`)
					client.sendMessage(from, atytyd, sticker, {quoted: mek})
					await limitAdd(sender) 
					break
					
			case 'attp':
				if (args.length < 1) return reply(`_O texto e Mana Boss_\n*Exemplo ${prefix}attp Meu rosto e lindo*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				break

					case 'listonline':

        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from

			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]

			    client.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,

  			  contextInfo: { mentionedJid: online }

			    })

				break

				case 'delete':

					case 'del':

					if (!isGroup)return reply(mess.only.group)

                                        if (!isRegister) return reply(mess.only.daftarB)

					if (!isGroupAdmins)return reply(mess.only.admin)

					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })

					break

					/*case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSÃO 」*\n\n${body.slice(4)}`})
						}
						reply('*Transmissão de sucesso* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\n${body.slice(4)}`)
						}
						reply('*Transmissão de sucesso* ')
					}
					break*/
				case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `𝐓𝐑𝐀𝐍𝐒𝐌𝐈𝐒𝐒Ã𝐎\n\n${body.slice(4)}`})
						}
						reply('*Sucesso na transmissão*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}\n\n ❒ 𝐓𝐑𝐀𝐍𝐒𝐌𝐈𝐒𝐒Ã𝐎`)
						}
						reply('*Sucesso na transmissãot*')
					}
					break
					/*********** BADWORD MENU ***********/

					case 'addbadword':

                    if (!isOwner) return reply(ind.ownerb())

                    if (!isGroupAdmins && !isOwner) return reply(ind.admin())

                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addbadword [kata kasar]. exemplo ${prefix}addp bego`)

                    const bw = body.slice(12)

                    bad.push(bw)

                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))

                    reply('Sucesso em adicionar palavrões!')

                    break

                case 'delbadword':

                    if (!isOwner) return reply(ind.ownerb())

                    if (!isGroupAdmins && !isOwner) return reply(ind.admin())

                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addbadword [kata kasar]. exemplo ${prefix}addp bego`)

                    let dbw = body.slice(12)

                    bad.splice(dbw)

                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))

                    reply('Sucesso exclui palavra!')

                    break 

                case 'listbadword':

                    let lbw = `Esta é uma lista MÁ PALAVRA\nTotal : ${bad.length}\n`

                    for (let i of bad) {

                        lbw += `➸ ${i.replace(bad)}\n`

                    }

                    await reply(lbw)

                    break 

                    case 'nobadword':
                    
                    case 'antitoxic':

                    if (!isGroup) return reply(ind.groupo())

                if (!isGroupAdmins) return reply(ind.admin())

                if (args.length < 1) return reply('Boo :??')

                if (args[0] === 'enable') {

                if (isBadWord) return reply('*o recurso anti-tóxico estava ativo antes*')

                 	   badword.push(from)

                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))

                  	   reply(`palavrão esta habilitado`)

              	  } else if (args[0] === 'disable') {

                  	  badword.splice(from, 1)

                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))

                 	    reply(`badword is disable`)

             	   } else {

                 	   reply(ind.satukos())

                	}

                    break

                    /*********** GAME ***********/

                    case 'tebakgambar':

                if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/kuis/tebakgambar?apikey=${ApikeyZailani}`, {method: 'get'})

					bufferkkk = await getBuffer(anu.result.images)

					setTimeout( () => {

					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods

					}, 30000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods

					}, 20000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods

					}, 10000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods

					}, 2500) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods

					}, 0) // 1000 = 1s,

					break

                case 'caklontong':

                if (isBanned) return reply(mess.only.benned)    

				if (!isRegister) return reply(mess.only.daftarB)

					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/kuis/caklontong?apikey=${ApikeyZailani}`, {method: 'get'})

					setTimeout( () => {

					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					
					client.sendMessage(from, '*➸ Penjelasan :* '+anu.result.deskripsi, text, {quoted: mek}) // ur cods
					
					}, 30000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods

					}, 20000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods

					}, 10000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods

					}, 1000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods

					}, 0) // 1000 = 1s,

					break

				case 'family100':
				
                //Update By Mzailani & Adi Official
                
                if (!isRegister) return reply(mess.only.daftarB)
                
			    if (isLimit(sender)) return
			    
                if (isBanned) return reply(mess.only.benned)
                
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/family100?apikey=ZailaniGans`, {method: 'get'})
					
					family = `*${anu.result.result.soal}*`
					
					setTimeout( () => {
					
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.result.jawaban, text, {quoted: mek}) // ur cods
					
					}, 30000) // 1000 = 1s,
					
					setTimeout( () => {
					
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					
					}, 20000) // 1000 = 1s,
					
					setTimeout( () => {
					
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					
					}, 10000) // 1000 = 1s,
					
					setTimeout( () => {
					
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					
					}, 2500) // 1000 = 1s,
					
					setTimeout( () => {
					
					client.sendMessage(from, family, text, {quoted: mek}) // ur cods
					
					}, 0) // 1000 = 1s,
					
					await limitAdd(sender)
					
				    break

               //menu download Update Mzailani & Adi Official
				case 'ytmp4':
				    //Update By Mzailani & Adi Official
                    if (!isRegister) return reply(mess.only.daftarB)
			    	if (!isPrem) return reply(mess.only.premium)
                    if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/ytv2/?url=${args[0]}&apikey=ZailaniGans`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*❏ Titulo* : ${anu.result.title}\n\n*VÍDEO ESTÁ ENVIANDO, NÃO SPAM YA PAI*`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, { quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
					await limitAdd(sender)

				    break
				case 'ytmp3':
				    //Update By Mzailani & Adi Official
                    if (!isRegister) return reply(mess.only.daftarB)
			    	if (!isPrem) return reply(mess.only.premium)
                    if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/yta2/?url=${args[0]}&apikey=ZailaniGans`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*❏ Titulo* : ${anu.result.title}\n\n*O ÁUDIO ESTÁ ENVIANDO, NÃO ENVIE SPAM*`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, { quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
					await limitAdd(sender)

				    break
				case 'joox':
				//Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
			    if (!isPrem) return reply(mess.only.premium)
                if (isBanned) return reply(mess.only.benned)
			    tels = body.slice(6)
			    reply(mess.wait)
                data = await fetchJson(`https://gratisancok.herokuapp.com/api/joox/?kata=${tels}&apikey=${ApikeyZailani}`, {method: 'get'})
                if (data.error) return reply(data.error)
                infomp3 = `*Canção encontrada!!!*\n*Titulo* : ${data.result.result.judul}\n*Artista* : ${data.result.result.artist}\n*Album* : ${data.result.result.album}`
                buffer = await getBuffer(data.result.result.img_url)
                lagu = await getBuffer(data.result.result.mp3_url)
                client.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.result.judul}.mp3`, quoted: mek})
                await limitAdd(sender)

				break
	       //Akhir menu download Update Mzailani & Adi Official

			case 'playstore':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query=${kuji}&apikey=${ApiVhtear}`, {method: 'get'})
					capty = `*➸ titulo :* ${kuji}\n*➸ app_id :* ${anu.result.app_id}\n*➸ Descrição :* ${anu.result.description}\n*➸ desenvolvedor_id :* ${anu.result.developer_id}\n*➸ desenvolvedor :* ${anu.result.developer}\n*➸ pontuação :* ${anu.result.score}\n*➸ full_price :* ${anu.result.full_price}\n*➸ price :* ${anu.result.price}\n*➸ free :* ${anu.result.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
		case 'zodiak':
			if (isBanned) return reply(mess.only.benned)
			if (!isRegister) return reply(mess.only.daftarB)
			adi = body.slice(8)
			reply(mess.wait)
			anu = await fetchJson(`https://api.vhtear.com/zodiak?query=${adi}&apikey=AdiOfficial404`)
			teks `*Zodíaco :* ${anu.result.zodiak}\n*Previsão*: ${anu.result.ramalan}\n*Numero da sorte*: ${anu.result.nomorKeberuntungan}\n*Motivação*: ${anu.result.motivasi}\n*Inspirasi*: ${anu.result.inspirasi}`
			client.sendMessage(from, teks, text, {quoted: mek})
			break
			case 'ramalhp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Quem quer prever quem é o celular, tio?')
					kj = body.slice(12)
					anu = await fetchJson(`https://api.vhtear.com/nomerhoki?no=${kj}&apikey=AdiOfficial404`, {method: 'get'})
					reply(anu.result.hasil)
					break
				case 'ytsearch':
				//Update By Mzailani & Adi Official
                if (!isRegister) return reply(mess.only.daftarB)
			    if (isLimit(sender)) return
                if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply('O que você está procurando??')
					anu = await fetchJson(`https://gratisancok.herokuapp.com/api/yutub/search?video=${body.slice(9)}&apikey=ZailaniGans`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytsear = '=================\n'
					for (let i of anu.result) {
						ytsear += `\`\`\`Titulo\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Upload Date\`\`\` : *${i.uploadDate}*\n\`\`\`Duração\`\`\` : *${i.duration}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(ytsear.trim())
					await limitAdd(sender)

				    break

	
default:

					if (body.startsWith(`${prefix}${command}`)) {

                  reply(`Desculpe *${pushname2}*, Comando *${prefix}${command}* Não listado dentro no *${prefix}menu*!`)

                  }

   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {

						console.log(budy)

						muehe = await simih(budy)

						console.log(muehe)

						reply(muehe)

					} else {

						console.log(color('[SUBSCRIBE Adi Official]','blue'), 'Pengirim', color(sender.split('@')[0]))

					}

                           }

		} catch (e) {

			console.log('Error : %s', color(e, 'red'))

		}

	})

}

starts()

// SCRIPT 100% GRATISS
// SE INSCREVER CANAL LORDE SCREAMO Official DEIXE O TAU ATUALIZAR OS RECURSOS MAIS RECENTES 🥰
