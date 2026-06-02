import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface StructuredDataTypeBase extends Object{
    key(arg0: number): StructuredDataKey<Object>;
    read(arg0: ByteBuf): StructuredData<Object>;
    write(arg0: ByteBuf, arg1: StructuredData<Object>): void;
}