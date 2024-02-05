import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'buenas', 'ole', 'hi', 'hello', 'como esta', 'oe', 'que dice'])
    .addAction(async (ctx, { flowDynamic }) => {
        flowDynamic(`Hola ${ctx.pushName}, buen día 😊.`)
    })
    .addAnswer('Mucho gusto me llamo *Botwhis* 🤖, soy un asistente virtual.')
    .addAnswer('Estoy programado para ayudarte a gestionar la creación de tu propio asistente virtual.')
    .addAnswer('Me puedes pedir que te agende una cita, te diga la disponibilidad o que solicite que un asesor te llame')
    .addAnswer('Dime cómo te gustaría que te ayude.')