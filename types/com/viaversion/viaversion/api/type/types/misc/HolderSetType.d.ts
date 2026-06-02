import type { HolderSet } from '../../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { RegistryKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Key } from '../../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class HolderSetType extends Type<HolderSet> {
    constructor()
    constructor(arg0: RegistryKey)
    // private registryKey: RegistryKey;
    // private key(arg0: Ops, arg1: number): Key;
    read(arg0: ByteBuf): HolderSet;
    write(arg0: Ops, arg1: HolderSet): void;
    write(arg0: ByteBuf, arg1: HolderSet): void;
}