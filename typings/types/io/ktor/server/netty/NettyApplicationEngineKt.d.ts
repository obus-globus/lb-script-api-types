import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class NettyApplicationEngineKt extends Object {
    static getChannelClass(): KClass<ServerSocketChannel>;
}