import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export interface ServerPlayConnectionEvents$Join extends Object{
    onPlayReady(arg0: ServerGamePacketListenerImpl, arg1: PacketSender, arg2: MinecraftServer): void;
}