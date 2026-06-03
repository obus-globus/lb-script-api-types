import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { KeyType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/KeyType.d.ts'
import type { Key } from '../../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class TagKeyType extends KeyType {
    constructor()
    write(arg0: Ops, arg1: Key): void;
    write(arg0: ByteBuf, arg1: Key): void;
}