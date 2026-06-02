import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingZCRXRQE extends Struct<IOURingZCRXRQE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LEN: number;
    static OFF: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static __PAD: number;
    static calloc(): IOURingZCRXRQE;
    static calloc(paramarg0: MemoryStack): IOURingZCRXRQE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingZCRXRQE;
    static create(paramarg0: number): IOURingZCRXRQE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingZCRXRQE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingZCRXRQE;
    static malloc(paramarg0: MemoryStack): IOURingZCRXRQE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__pad(paramarg0: number): number;
    static n__pad(paramarg0: number, paramarg1: number): void;
    static nlen(paramarg0: number): number;
    static nlen(paramarg0: number, paramarg1: number): void;
    static noff(paramarg0: number): number;
    static noff(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingZCRXRQE;
    len(): number;
    len(arg0: number): IOURingZCRXRQE;
    off(): number;
    off(arg0: number): IOURingZCRXRQE;
    set(arg0: number, arg1: number): IOURingZCRXRQE;
    set(arg0: IOURingZCRXRQE): IOURingZCRXRQE;
    sizeof(): number;
}