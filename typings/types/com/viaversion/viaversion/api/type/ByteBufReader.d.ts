import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteBufReader<T extends unknown> extends Object{
    read(arg0: ByteBuf): T;
}