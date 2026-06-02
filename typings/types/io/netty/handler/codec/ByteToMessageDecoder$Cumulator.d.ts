import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ByteToMessageDecoder$Cumulator extends Object{
    cumulate(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: ByteBuf): ByteBuf;
}