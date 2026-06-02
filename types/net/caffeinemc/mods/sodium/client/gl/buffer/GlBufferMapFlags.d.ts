import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { EnumBit } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/util/EnumBit.d.ts'
export class GlBufferMapFlags extends Enum<GlBufferMapFlags> implements EnumBit {
    static COHERENT: GlBufferMapFlags;
    static EXPLICIT_FLUSH: GlBufferMapFlags;
    static INVALIDATE_BUFFER: GlBufferMapFlags;
    static INVALIDATE_RANGE: GlBufferMapFlags;
    static PERSISTENT: GlBufferMapFlags;
    static READ: GlBufferMapFlags;
    static UNSYNCHRONIZED: GlBufferMapFlags;
    static WRITE: GlBufferMapFlags;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlBufferMapFlags;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private bit: number;
    getBits(): number;
    name(): "READ" | "WRITE" | "PERSISTENT" | "INVALIDATE_BUFFER" | "INVALIDATE_RANGE" | "EXPLICIT_FLUSH" | "COHERENT" | "UNSYNCHRONIZED";
}