import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingFileIndexRange extends Struct<IOURingFileIndexRange> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LEN: number;
    static OFF: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static SIZEOF: number;
    static calloc(): IOURingFileIndexRange;
    static calloc(paramarg0: MemoryStack): IOURingFileIndexRange;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingFileIndexRange;
    static create(paramarg0: number): IOURingFileIndexRange;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingFileIndexRange;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingFileIndexRange;
    static malloc(paramarg0: MemoryStack): IOURingFileIndexRange;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlen(paramarg0: number): number;
    static nlen(paramarg0: number, paramarg1: number): void;
    static noff(paramarg0: number): number;
    static noff(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingFileIndexRange;
    len(): number;
    len(arg0: number): IOURingFileIndexRange;
    off(): number;
    off(arg0: number): IOURingFileIndexRange;
    set(arg0: number, arg1: number): IOURingFileIndexRange;
    set(arg0: IOURingFileIndexRange): IOURingFileIndexRange;
    sizeof(): number;
}