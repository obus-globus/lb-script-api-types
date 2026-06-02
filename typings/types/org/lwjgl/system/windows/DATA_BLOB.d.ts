import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class DATA_BLOB extends Struct<DATA_BLOB> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CBDATA: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PBDATA: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): DATA_BLOB;
    static calloc(paramarg0: MemoryStack): DATA_BLOB;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): DATA_BLOB;
    static create(paramarg0: number): DATA_BLOB;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): DATA_BLOB;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): DATA_BLOB;
    static malloc(paramarg0: MemoryStack): DATA_BLOB;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncbData(paramarg0: number): number;
    static ncbData(paramarg0: number, paramarg1: number): void;
    static npbData(paramarg0: number): ByteBuffer;
    static npbData(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cbData(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): DATA_BLOB;
    pbData(): ByteBuffer;
    pbData(arg0: ByteBuffer): DATA_BLOB;
    set(arg0: DATA_BLOB): DATA_BLOB;
    sizeof(): number;
}