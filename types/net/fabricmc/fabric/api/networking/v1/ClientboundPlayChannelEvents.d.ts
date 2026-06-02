import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientboundPlayChannelEvents$Register } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ClientboundPlayChannelEvents$Register.d.ts'
import type { ClientboundPlayChannelEvents$Unregister } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ClientboundPlayChannelEvents$Unregister.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export class ClientboundPlayChannelEvents extends Object {
    static REGISTER: Event<(param0: ServerGamePacketListenerImpl, param1: PacketSender, param2: MinecraftServer, param3: Identifier[]) => void>;
    static UNREGISTER: Event<(param0: ServerGamePacketListenerImpl, param1: PacketSender, param2: MinecraftServer, param3: Identifier[]) => void>;
    private constructor()
}