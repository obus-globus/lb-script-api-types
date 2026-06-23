import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteBufWriter<T extends unknown> extends Object{
    write(arg0: ByteBuf, arg1: T): void;
}