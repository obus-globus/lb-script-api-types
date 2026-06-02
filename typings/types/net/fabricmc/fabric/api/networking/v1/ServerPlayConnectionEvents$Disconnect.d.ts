import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export interface ServerPlayConnectionEvents$Disconnect extends Object{
    onPlayDisconnect(arg0: ServerGamePacketListenerImpl, arg1: MinecraftServer): void;
}