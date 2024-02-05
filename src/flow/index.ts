import BotWhatsapp from '@bot-whatsapp/bot'
import helloFlow from '@/flow/hello.flow'
import welcomeFlow from '@/flow/welcome.flow'
import callFlow from '@/flow/call.flow'
import scheduleFlow from '@/flow/schedule.flow'
import availabilityFlow from '@/flow/availability.flow'

export default BotWhatsapp.createFlow([
    helloFlow,
    welcomeFlow,
    callFlow,
    scheduleFlow,
    availabilityFlow
])