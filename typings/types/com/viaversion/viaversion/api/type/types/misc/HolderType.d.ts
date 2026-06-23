import type { MappingData$MappingType } from '../../../../../../../com/viaversion/viaversion/api/data/MappingData$MappingType.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Key } from '../../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class HolderType<T extends unknown> extends Type<Holder<T>> {
    constructor()
    constructor(arg0: MappingData$MappingType)
    // private mappingType: MappingData$MappingType;
    identifier(arg0: Ops, arg1: number): Key;
    read(arg0: ByteBuf): Holder<T>;
    readDirect(arg0: ByteBuf): T;
    write(arg0: Ops, arg1: Holder<T>): void;
    write(arg0: ByteBuf, arg1: Holder<T>): void;
    writeDirect(arg0: Ops, arg1: T): void;
    writeDirect(arg0: ByteBuf, arg1: T): void;
}