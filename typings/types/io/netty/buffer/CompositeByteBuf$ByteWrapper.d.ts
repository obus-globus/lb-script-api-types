import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CompositeByteBuf$ByteWrapper<T extends unknown> extends Object{
    isEmpty(arg0: T): boolean;
    wrap(arg0: T): ByteBuf;
}