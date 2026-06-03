import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ComponentType extends Type<JsonElement> {
    constructor()
    read(arg0: ByteBuf): JsonElement;
    write(arg0: Ops, arg1: JsonElement): void;
    write(arg0: ByteBuf, arg1: JsonElement): void;
}