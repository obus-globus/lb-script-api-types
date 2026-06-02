import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingCQE } from '../../../../../org/lwjgl/system/linux/liburing/IOURingCQE.d.ts'
export class IOURingCQ extends Struct<IOURingCQ> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CQES: number;
    static KFLAGS: number;
    static KHEAD: number;
    static KOVERFLOW: number;
    static KRING_ENTRIES: number;
    static KRING_MASK: number;
    static KTAIL: number;
    static PAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RING_ENTRIES: number;
    static RING_MASK: number;
    static RING_PTR: number;
    static RING_SZ: number;
    static SIZEOF: number;
    static calloc(): IOURingCQ;
    static calloc(paramarg0: MemoryStack): IOURingCQ;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingCQ;
    static create(paramarg0: number): IOURingCQ;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingCQ;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingCQ;
    static malloc(paramarg0: MemoryStack): IOURingCQ;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncqes(paramarg0: number): IOURingCQE;
    static ncqes(paramarg0: number, paramarg1: IOURingCQE): void;
    static nkflags(paramarg0: number, paramarg1: number): IntBuffer;
    static nkflags(paramarg0: number, paramarg1: IntBuffer): void;
    static nkhead(paramarg0: number, paramarg1: number): IntBuffer;
    static nkhead(paramarg0: number, paramarg1: IntBuffer): void;
    static nkoverflow(paramarg0: number, paramarg1: number): IntBuffer;
    static nkoverflow(paramarg0: number, paramarg1: IntBuffer): void;
    static nkring_entries(paramarg0: number, paramarg1: number): IntBuffer;
    static nkring_entries(paramarg0: number, paramarg1: IntBuffer): void;
    static nkring_mask(paramarg0: number, paramarg1: number): IntBuffer;
    static nkring_mask(paramarg0: number, paramarg1: IntBuffer): void;
    static nktail(paramarg0: number, paramarg1: number): IntBuffer;
    static nktail(paramarg0: number, paramarg1: IntBuffer): void;
    static npad(paramarg0: number, paramarg1: number): number;
    static npad(paramarg0: number): IntBuffer;
    static npad(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad(paramarg0: number, paramarg1: IntBuffer): void;
    static nring_entries(paramarg0: number): number;
    static nring_entries(paramarg0: number, paramarg1: number): void;
    static nring_mask(paramarg0: number): number;
    static nring_mask(paramarg0: number, paramarg1: number): void;
    static nring_ptr(paramarg0: number): ByteBuffer;
    static nring_ptr(paramarg0: number, paramarg1: ByteBuffer): void;
    static nring_sz(paramarg0: number): number;
    static nring_sz(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cqes(): IOURingCQE;
    cqes(arg0: IOURingCQE): IOURingCQ;
    create(arg0: number, arg1: ByteBuffer): IOURingCQ;
    kflags(arg0: IntBuffer): IOURingCQ;
    kflags(arg0: number): IntBuffer;
    khead(arg0: IntBuffer): IOURingCQ;
    khead(arg0: number): IntBuffer;
    koverflow(arg0: IntBuffer): IOURingCQ;
    koverflow(arg0: number): IntBuffer;
    kring_entries(arg0: IntBuffer): IOURingCQ;
    kring_entries(arg0: number): IntBuffer;
    kring_mask(arg0: IntBuffer): IOURingCQ;
    kring_mask(arg0: number): IntBuffer;
    ktail(arg0: IntBuffer): IOURingCQ;
    ktail(arg0: number): IntBuffer;
    ring_entries(): number;
    ring_entries(arg0: number): IOURingCQ;
    ring_mask(): number;
    ring_mask(arg0: number): IOURingCQ;
    ring_ptr(): ByteBuffer;
    ring_ptr(arg0: ByteBuffer): IOURingCQ;
    ring_sz(): number;
    set(arg0: IntBuffer, arg1: IntBuffer, arg2: IntBuffer, arg3: IntBuffer, arg4: IntBuffer, arg5: IntBuffer, arg6: IOURingCQE, arg7: ByteBuffer, arg8: number, arg9: number): IOURingCQ;
    set(arg0: IOURingCQ): IOURingCQ;
    sizeof(): number;
}