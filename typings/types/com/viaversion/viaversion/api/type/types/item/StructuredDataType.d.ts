import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { StructuredDataType$DataFiller } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataType$DataFiller.d.ts'
import type { StructuredDataTypeBase } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataTypeBase.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StructuredDataType extends Type<StructuredData<Object>> implements StructuredDataTypeBase {
    constructor()
    // private types: StructuredDataKey<Object>[];
    filler(arg0: Protocol<Object, Object, Object, Object>): StructuredDataType$DataFiller;
    key(arg0: number): StructuredDataKey<Object>;
    read(arg0: ByteBuf): StructuredData<Object>;
    readData<T extends Object | number | string | boolean>(arg0: ByteBuf, arg1: StructuredDataKey<T>, arg2: number): StructuredData<T>;
    write(arg0: Ops, arg1: StructuredData<Object>): void;
    write(arg0: ByteBuf, arg1: StructuredData<Object>): void;
    // private writeGeneric<V extends Object | number | string | boolean>(arg0: Ops, arg1: StructuredData<V>): void;
}