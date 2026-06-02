import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DynamicType$DataReader<T extends Object | number | string | boolean> extends Object{
    read(arg0: ByteBuf, arg1: T): void;
}