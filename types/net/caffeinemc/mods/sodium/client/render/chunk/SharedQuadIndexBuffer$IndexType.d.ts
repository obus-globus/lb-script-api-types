import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { GlIndexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlIndexType.d.ts'
export class SharedQuadIndexBuffer$IndexType extends Enum<SharedQuadIndexBuffer$IndexType> {
    static INTEGER: SharedQuadIndexBuffer$IndexType;
    static SHORT: SharedQuadIndexBuffer$IndexType;
    static VALUES: (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SharedQuadIndexBuffer$IndexType;
    static values(): (Object | null)[];
    private constructor(arg2: GlIndexType, arg3: number)
    readonly format: GlIndexType;
    readonly maxElementCount: number;
    createIndexBuffer(arg0: ByteBuffer, arg1: number): void;
    getBytesPerElement(): number;
    getFormat(): GlIndexType;
    getMaxElementCount(): number;
    getMaxPrimitiveCount(): number;
    name(): "SHORT" | "INTEGER";
}