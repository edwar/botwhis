import BotWhatsapp from '@bot-whatsapp/bot';
import { ChatCompletionMessageParam } from 'openai/resources';
import { runDetermineDate } from '@/services/openai';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('Por favor, dime para qué fecha quieres la cita.',{capture:true}, 
    async(ctx, {state}) => {
        await state.update({date:ctx.body.toLowerCase()})
    })
    .addAnswer('Estamos agendando tu cita...')
    .addAction(async (ctx, {flowDynamic, state}) => {
        try {
            const history = (state.getMyState()?.history ?? []) as ChatCompletionMessageParam[]
            const date = state.get('date')
            const dateFormat = await runDetermineDate(date)
            //TODO: Crear cita
            await flowDynamic(`Se creo una cita para el ${dateFormat}`)
        } catch (err) {
            console.log(err)
        }
    })