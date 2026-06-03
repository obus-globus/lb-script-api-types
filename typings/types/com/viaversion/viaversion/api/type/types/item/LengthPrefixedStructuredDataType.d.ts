import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { StructuredDataType } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataType.d.ts'
import type { StructuredDataTypeBase } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataTypeBase.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LengthPrefixedStructuredDataType extends Type<StructuredData<Object>> implements StructuredDataTypeBase {
    constructor(arg0: StructuredDataType)
    // private wrapped: StructuredDataType;
    key(arg0: number): StructuredDataKey<Object>;
    read(arg0: ByteBuf): StructuredData<Object>;
    write(arg0: Ops, arg1: StructuredData<Object>): void;
    write(arg0: ByteBuf, arg1: StructuredData<Object>): void;
}