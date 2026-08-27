import type { RegistryKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { VarIntType } from '../../../../../../../com/viaversion/viaversion/api/type/types/VarIntType.d.ts'
import type { Key } from '../../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class RegistryValueType extends VarIntType implements RegistryKey {
    static varIntLength(paramarg0: number): number;
    constructor(arg0: Key, ...arg1: string[])
    // private keys: Key[];
    // private registry: Key;
    byId(arg0: number): Key;
    keys(): Key[];
    registry(): Key;
    write(arg0: Ops, arg1: number): void;
    write(arg0: ByteBuf, arg1: number): void;
}