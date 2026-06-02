import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Key } from '../../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class KeyType extends Type<Key> {
    constructor()
    read(arg0: ByteBuf): Key;
    write(arg0: Ops, arg1: Key): void;
    write(arg0: ByteBuf, arg1: Key): void;
}