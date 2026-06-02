import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { TypeConverter } from '../../../../../../com/viaversion/viaversion/api/type/TypeConverter.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BooleanType extends Type<boolean> implements TypeConverter<boolean> {
    constructor()
    from(arg0: Object): boolean;
    read(arg0: ByteBuf): boolean;
    write(arg0: Ops, arg1: boolean): void;
    write(arg0: ByteBuf, arg1: boolean): void;
}