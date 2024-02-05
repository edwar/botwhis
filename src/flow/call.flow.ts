import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('Por favor, ingresa tu número de celular.',{capture:true}, 
    async(ctx, {state, fallBack}) => {
        
        if(!/3\d{9}/.test(ctx.body)){
            return fallBack('Disculpa, ese número de teléfono no es válido.')
        }
        await state.update({phone:ctx.body.toLowerCase()})
    })
    .addAnswer('Creando solicitud de llamada, nos pondremos en contacto contigo...')
    .addAction(async (ctx, {flowDynamic, state}) => {
        const phone = state.get('phone')
        //TODO: Registrar solicitud de llamada
        await flowDynamic(`Se creó una solicitud de llamada al ${phone}`)
    })