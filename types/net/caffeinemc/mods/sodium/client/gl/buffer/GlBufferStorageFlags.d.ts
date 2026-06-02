import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { EnumBit } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/util/EnumBit.d.ts'
export class GlBufferStorageFlags extends Enum<GlBufferStorageFlags> implements EnumBit {
    static CLIENT_STORAGE: GlBufferStorageFlags;
    static COHERENT: GlBufferStorageFlags;
    static MAP_READ: GlBufferStorageFlags;
    static MAP_WRITE: GlBufferStorageFlags;
    static PERSISTENT: GlBufferStorageFlags;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlBufferStorageFlags;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly bits: number;
    getBits(): number;
    name(): "PERSISTENT" | "MAP_READ" | "MAP_WRITE" | "CLIENT_STORAGE" | "COHERENT";
}