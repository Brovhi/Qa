import fetch from 'node-fetch'

const handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🦇 *مــرحــبــا بــك انـا ${command} عــلــيــك كــتــابــة نــص لــكـي ارد عــلـيـك*\n\n*مثال:*\n*${usedPrefix + command}*من انت؟`, m)
try {
let prompt = `انت ستيف بطل انمي ملائكة الموت لديك قوة قتاليا فريدة ولديك شخصية غامضة و تحدث فقط باللهجة اليمنيه و استخدم الايموجي كثيراً و مطورك هو "ستيف" أن سالك من صانعك قل له أن من صنعك هو ستيف`;

await m.react('🕒')

const apii = await fetch(`https://artst-three.vercel.app/chatgpt?text=${text}&prompt=${prompt}`)
const res = await apii.json()
await conn.reply(m.chat, res.result, m)
await m.react('✅️')
} catch (error) {
await m.react('✖️')
console.error(error)
return conn.reply(m.chat, '🚩 *خطاء*', m)
}}

handler.command = ['ستيف']
handler.help = ['Z A C K']
handler.tags = ['ai'];
export default handler