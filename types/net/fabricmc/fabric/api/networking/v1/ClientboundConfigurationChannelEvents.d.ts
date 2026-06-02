import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientboundConfigurationChannelEvents$Register } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ClientboundConfigurationChannelEvents$Register.d.ts'
import type { ClientboundConfigurationChannelEvents$Unregister } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ClientboundConfigurationChannelEvents$Unregister.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class ClientboundConfigurationChannelEvents extends Object {
    static REGISTER: Event<(param0: ServerConfigurationPacketListenerImpl, param1: PacketSender, param2: MinecraftServer, param3: Identifier[]) => void>;
    static UNREGISTER: Event<(param0: ServerConfigurationPacketListenerImpl, param1: PacketSender, param2: MinecraftServer, param3: Identifier[]) => void>;
    private constructor()
}