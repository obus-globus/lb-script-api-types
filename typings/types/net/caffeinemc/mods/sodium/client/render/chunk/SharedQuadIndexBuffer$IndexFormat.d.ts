import type { IndexType } from '../../../../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SharedQuadIndexBuffer$IndexFormat extends Enum<SharedQuadIndexBuffer$IndexFormat> {
    static INTEGER: SharedQuadIndexBuffer$IndexFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SharedQuadIndexBuffer$IndexFormat;
    static values(): SharedQuadIndexBuffer$IndexFormat[];
    private constructor(arg2: IndexType, arg3: number)
    readonly format: IndexType;
    readonly maxElementCount: number;
    createIndexBuffer(arg0: ByteBuffer, arg1: number): void;
    getBytesPerElement(): number;
    getFormat(): IndexType;
    getMaxElementCount(): number;
    getMaxPrimitiveCount(): number;
    name(): "INTEGER";
}