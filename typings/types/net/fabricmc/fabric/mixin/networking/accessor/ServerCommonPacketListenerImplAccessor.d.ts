import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerCommonPacketListenerImplAccessor extends Object{
    getConnection(): Connection;
    getServer(): MinecraftServer;
}