/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'cb2f7f0302', //hai kang recoder, bikin api sendiri di zenzapi.xyz pake email, jangan pake punya saya.
}

// KALO MAU RECODE TINGGALIN CREDIT DEVELOPER YA, JGN CUMA NUMPANG NAMA
global.owner = ['6281998903280','16124515978', '6283104719853']
global.premium = ['6288292024190']
global.packname = 'RaidenBot'
global.author = 'oleh kyura\n\n\ntemukan raidenbot di\ntelegram bit.ly/telekanao'
global.sessionName = 'sessionmultidevice'
global.prefa = ['','!','.','k','#']
global.sp = '⭔'
global.mess = {
    success: '*Berhasil !*\n\n\n_Bantu Subscribe youtube.com/c/KYURA_',
    admin: 'Fitur Khusus Admin Group.',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu.',
    owner: 'Fitur Khusus Owner Bot.',
    group: 'Fitur Digunakan Hanya Untuk Group.',
    private: 'Fitur Digunakan Hanya Untuk Private Chat.',
    bot: 'Fitur Khusus Pengguna Nomor Bot.',
    wait: '*Working on it...*\n\n\n\n_Jika tidak respon, berarti ada kesalahan, hubungi owner/coba lagi nanti._',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./thumb/thumbnail.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
