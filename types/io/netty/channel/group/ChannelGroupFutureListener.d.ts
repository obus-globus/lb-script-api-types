import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChannelGroupFutureListener extends GenericFutureListener<ChannelFuture[]>, Object{
}