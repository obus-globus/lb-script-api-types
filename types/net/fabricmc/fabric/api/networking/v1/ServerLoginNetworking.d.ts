import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoginPacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/LoginPacketSender.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerLoginNetworking$LoginQueryResponseHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginQueryResponseHandler.d.ts'
import type { ServerLoginNetworking$LoginSynchronizer } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerLoginNetworking$LoginSynchronizer.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLoginPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl.d.ts'
export class ServerLoginNetworking extends Object {
    static getGlobalReceivers(): Identifier[];
    static getSender(paramarg0: ServerLoginPacketListenerImpl): LoginPacketSender;
    static getServer(paramarg0: ServerLoginPacketListenerImpl): MinecraftServer;
    static registerGlobalReceiver(paramarg0: Identifier, paramarg1: (param0: MinecraftServer, param1: ServerLoginPacketListenerImpl, param2: boolean, param3: FriendlyByteBuf, param4: (param0: Future<Object>) => void, param5: PacketSender) => void): boolean;
    static registerReceiver(paramarg0: ServerLoginPacketListenerImpl, paramarg1: Identifier, paramarg2: (param0: MinecraftServer, param1: ServerLoginPacketListenerImpl, param2: boolean, param3: FriendlyByteBuf, param4: (param0: Future<Object>) => void, param5: PacketSender) => void): boolean;
    static unregisterGlobalReceiver(paramarg0: Identifier): (param0: MinecraftServer, param1: ServerLoginPacketListenerImpl, param2: boolean, param3: FriendlyByteBuf, param4: (param0: Future<Object>) => void, param5: PacketSender) => void;
    static unregisterReceiver(paramarg0: ServerLoginPacketListenerImpl, paramarg1: Identifier): (param0: MinecraftServer, param1: ServerLoginPacketListenerImpl, param2: boolean, param3: FriendlyByteBuf, param4: (param0: Future<Object>) => void, param5: PacketSender) => void;
    private constructor()
}