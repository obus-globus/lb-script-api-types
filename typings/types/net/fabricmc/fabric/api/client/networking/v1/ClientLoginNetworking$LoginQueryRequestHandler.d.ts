import type { ChannelFutureListener } from '../../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientHandshakePacketListenerImpl } from '../../../../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl.d.ts'
import type { FriendlyByteBuf } from '../../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export interface ClientLoginNetworking$LoginQueryRequestHandler extends Object {
    receive(arg0: Minecraft, arg1: ClientHandshakePacketListenerImpl, arg2: FriendlyByteBuf, arg3: (param0: ChannelFutureListener) => void): CompletableFuture<FriendlyByteBuf>;
}