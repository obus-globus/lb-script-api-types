import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class RegistryEntryType extends Type<RegistryEntry> {
    constructor()
    read(arg0: ByteBuf): RegistryEntry;
    write(arg0: ByteBuf, arg1: RegistryEntry): void;
}