import BotWhatsapp from '@bot-whatsapp/bot';
import { generatePromptDate } from '@/services/openai/prompt';
import { runDetermineDate } from '@/services/openai';

/**
 * Un flujo que revisa la disponibilidad para un día en particuar
 */
export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¿Me puedes escribir la fecha que tienes en mente?',{capture:true}, 
    async(ctx, {state}) => {
        await state.update({date:ctx.body.toLowerCase()})
    })
    .addAction(async (ctx, {flowDynamic, state}) => {
        const date = state.get('date')
        const dateFormat = await runDetermineDate(date)
        //TODO: Ver disponibilidad
        await flowDynamic(`Si tenemos disponibilidad para el ${dateFormat}`)
    })