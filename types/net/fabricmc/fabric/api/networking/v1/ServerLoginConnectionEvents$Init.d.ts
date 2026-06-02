import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLoginPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl.d.ts'
export interface ServerLoginConnectionEvents$Init extends Object{
    onLoginInit(arg0: ServerLoginPacketListenerImpl, arg1: MinecraftServer): void;
}