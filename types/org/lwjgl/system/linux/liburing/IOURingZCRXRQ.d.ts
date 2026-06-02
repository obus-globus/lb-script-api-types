import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingZCRXRQE } from '../../../../../org/lwjgl/system/linux/liburing/IOURingZCRXRQE.d.ts'
export class IOURingZCRXRQ extends Struct<IOURingZCRXRQ> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static KHEAD: number;
    static KTAIL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RING_ENTRIES: number;
    static RING_PTR: number;
    static RQES: number;
    static RQ_TAIL: number;
    static SIZEOF: number;
    static calloc(): IOURingZCRXRQ;
    static calloc(paramarg0: MemoryStack): IOURingZCRXRQ;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingZCRXRQ;
    static create(paramarg0: number): IOURingZCRXRQ;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingZCRXRQ;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingZCRXRQ;
    static malloc(paramarg0: MemoryStack): IOURingZCRXRQ;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nkhead(paramarg0: number, paramarg1: number): IntBuffer;
    static nkhead(paramarg0: number, paramarg1: IntBuffer): void;
    static nktail(paramarg0: number, paramarg1: number): IntBuffer;
    static nktail(paramarg0: number, paramarg1: IntBuffer): void;
    static nring_entries(paramarg0: number): number;
    static nring_entries(paramarg0: number, paramarg1: number): void;
    static nring_ptr(paramarg0: number): number;
    static nring_ptr(paramarg0: number, paramarg1: number): void;
    static nrq_tail(paramarg0: number): number;
    static nrq_tail(paramarg0: number, paramarg1: number): void;
    static nrqes(paramarg0: number): IOURingZCRXRQE;
    static nrqes(paramarg0: number, paramarg1: IOURingZCRXRQE): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingZCRXRQ;
    khead(arg0: IntBuffer): IOURingZCRXRQ;
    khead(arg0: number): IntBuffer;
    ktail(arg0: IntBuffer): IOURingZCRXRQ;
    ktail(arg0: number): IntBuffer;
    ring_entries(): number;
    ring_entries(arg0: number): IOURingZCRXRQ;
    ring_ptr(): number;
    ring_ptr(arg0: number): IOURingZCRXRQ;
    rq_tail(): number;
    rq_tail(arg0: number): IOURingZCRXRQ;
    rqes(): IOURingZCRXRQE;
    rqes(arg0: IOURingZCRXRQE): IOURingZCRXRQ;
    set(arg0: IntBuffer, arg1: IntBuffer, arg2: number, arg3: number, arg4: IOURingZCRXRQE, arg5: number): IOURingZCRXRQ;
    set(arg0: IOURingZCRXRQ): IOURingZCRXRQ;
    sizeof(): number;
}