import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { TypeConverter } from '../../../../../../com/viaversion/viaversion/api/type/TypeConverter.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VarLongType extends Type<number> implements TypeConverter<number> {
    constructor()
    from(arg0: Object): number;
    read(arg0: ByteBuf): number;
    readPrimitive(arg0: ByteBuf): number;
    write(arg0: Ops, arg1: number): void;
    write(arg0: ByteBuf, arg1: number): void;
    writePrimitive(arg0: ByteBuf, arg1: number): void;
}