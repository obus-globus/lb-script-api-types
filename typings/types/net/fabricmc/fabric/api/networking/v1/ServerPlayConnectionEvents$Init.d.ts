import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export interface ServerPlayConnectionEvents$Init extends Object{
    onPlayInit(arg0: ServerGamePacketListenerImpl, arg1: MinecraftServer): void;
}