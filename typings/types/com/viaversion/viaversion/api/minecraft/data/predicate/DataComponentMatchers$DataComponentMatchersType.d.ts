import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { DataComponentMatchers } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentMatchers.d.ts'
import type { DataComponentPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentPredicate.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DataComponentMatchers$DataComponentMatchersType extends Type<DataComponentMatchers> {
    constructor(arg0: Type<StructuredData<Object>[]>, arg1: Type<DataComponentPredicate[]>)
    // private dataArrayType: Type<StructuredData<Object>[]>;
    // private predicateArrayType: Type<DataComponentPredicate[]>;
    read(arg0: ByteBuf): DataComponentMatchers;
    write(arg0: ByteBuf, arg1: DataComponentMatchers): void;
}