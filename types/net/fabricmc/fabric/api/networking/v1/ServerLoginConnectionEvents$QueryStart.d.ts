import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoginPacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/LoginPacketSender.d.ts'
import type { ServerLoginNetworking$LoginSynchronizer } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginSynchronizer.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLoginPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl.d.ts'
export interface ServerLoginConnectionEvents$QueryStart extends Object{
    onLoginStart(arg0: ServerLoginPacketListenerImpl, arg1: MinecraftServer, arg2: LoginPacketSender, arg3: (param0: Future<Object>) => void): void;
}