import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcBufferRange extends Struct<SpvcBufferRange> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEX: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RANGE: number;
    static SIZEOF: number;
    static calloc(): SpvcBufferRange;
    static calloc(paramarg0: MemoryStack): SpvcBufferRange;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcBufferRange;
    static create(paramarg0: number): SpvcBufferRange;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcBufferRange;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcBufferRange;
    static malloc(paramarg0: MemoryStack): SpvcBufferRange;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindex(paramarg0: number): number;
    static nindex(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static nrange(paramarg0: number): number;
    static nrange(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcBufferRange;
    index(): number;
    index(arg0: number): SpvcBufferRange;
    offset(): number;
    offset(arg0: number): SpvcBufferRange;
    range(): number;
    range(arg0: number): SpvcBufferRange;
    set(arg0: number, arg1: number, arg2: number): SpvcBufferRange;
    set(arg0: SpvcBufferRange): SpvcBufferRange;
    sizeof(): number;
}