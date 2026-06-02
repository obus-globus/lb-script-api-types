import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerPlayConnectionEvents$Disconnect } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents$Disconnect.d.ts'
import type { ServerPlayConnectionEvents$Init } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents$Init.d.ts'
import type { ServerPlayConnectionEvents$Join } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents$Join.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export class ServerPlayConnectionEvents extends Object {
    static DISCONNECT: Event<(param0: ServerGamePacketListenerImpl, param1: MinecraftServer) => void>;
    static INIT: Event<(param0: ServerGamePacketListenerImpl, param1: MinecraftServer) => void>;
    static JOIN: Event<(param0: ServerGamePacketListenerImpl, param1: PacketSender, param2: MinecraftServer) => void>;
    private constructor()
}