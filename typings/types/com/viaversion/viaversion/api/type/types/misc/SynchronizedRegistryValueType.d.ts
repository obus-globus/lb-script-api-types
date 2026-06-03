import type { RegistryKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { VarIntType } from '../../../../../../../com/viaversion/viaversion/api/type/types/VarIntType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class SynchronizedRegistryValueType extends VarIntType {
    static varIntLength(paramarg0: number): number;
    constructor(arg0: RegistryKey)
    // private registryKey: RegistryKey;
    write(arg0: Ops, arg1: number): void;
    write(arg0: ByteBuf, arg1: number): void;
}