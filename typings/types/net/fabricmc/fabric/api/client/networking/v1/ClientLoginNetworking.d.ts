import type { ChannelFutureListener } from '../../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLoginNetworking$LoginQueryRequestHandler } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientLoginNetworking$LoginQueryRequestHandler.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientHandshakePacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl.d.ts'
import type { FriendlyByteBuf } from '../../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientLoginNetworking extends Object {
    static getGlobalReceivers(): Identifier[];
    static registerGlobalReceiver(paramarg0: Identifier, paramarg1: (param0: Minecraft, param1: ClientHandshakePacketListenerImpl, param2: FriendlyByteBuf, param3: (param0: ChannelFutureListener) => void) => CompletableFuture<FriendlyByteBuf>): boolean;
    static registerReceiver(paramarg0: Identifier, paramarg1: (param0: Minecraft, param1: ClientHandshakePacketListenerImpl, param2: FriendlyByteBuf, param3: (param0: ChannelFutureListener) => void) => CompletableFuture<FriendlyByteBuf>): boolean;
    static unregisterGlobalReceiver(paramarg0: Identifier): (param0: Minecraft, param1: ClientHandshakePacketListenerImpl, param2: FriendlyByteBuf, param3: (param0: ChannelFutureListener) => void) => CompletableFuture<FriendlyByteBuf>;
    static unregisterReceiver(paramarg0: Identifier): (param0: Minecraft, param1: ClientHandshakePacketListenerImpl, param2: FriendlyByteBuf, param3: (param0: ChannelFutureListener) => void) => CompletableFuture<FriendlyByteBuf>;
    private constructor()
}