import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerboundConfigurationChannelEvents$Register } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ServerboundConfigurationChannelEvents$Register.d.ts'
import type { ServerboundConfigurationChannelEvents$Unregister } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ServerboundConfigurationChannelEvents$Unregister.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientConfigurationPacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientConfigurationPacketListenerImpl.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundConfigurationChannelEvents extends Object {
    static REGISTER: Event<(param0: ClientConfigurationPacketListenerImpl, param1: PacketSender, param2: Minecraft, param3: Identifier[]) => void>;
    static UNREGISTER: Event<(param0: ClientConfigurationPacketListenerImpl, param1: PacketSender, param2: Minecraft, param3: Identifier[]) => void>;
    private constructor()
}