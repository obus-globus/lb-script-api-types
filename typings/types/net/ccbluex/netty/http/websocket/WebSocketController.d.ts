import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
export class WebSocketController extends Object {
    constructor(serverChannel: Channel)
    // private activeContexts: ChannelHandlerContext[];
    // private scope: CoroutineScope;
    // private serverChannel: Channel;
    addContext(context: ChannelHandlerContext): void;
    broadcast(text: CharSequence, charset: Charset, onFailure: (param0: ChannelHandlerContext, param1: Throwable) => void | null): Job;
    disconnect(): void;
    removeContext(context: ChannelHandlerContext): void;
}