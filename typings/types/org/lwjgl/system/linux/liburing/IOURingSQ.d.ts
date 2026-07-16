import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingSQE } from '../../../../../org/lwjgl/system/linux/liburing/IOURingSQE.d.ts'
export class IOURingSQ extends Struct<IOURingSQ> implements NativeResource {
    static ALIGNOF: number;
    static ARRAY: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static KDROPPED: number;
    static KFLAGS: number;
    static KHEAD: number;
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
    static SQES: number;
    static SQE_HEAD: number;
    static SQE_TAIL: number;
    static calloc(): IOURingSQ;
    static calloc(paramarg0: MemoryStack): IOURingSQ;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingSQ;
    static create(paramarg0: number): IOURingSQ;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingSQ;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingSQ;
    static malloc(paramarg0: MemoryStack): IOURingSQ;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narray(paramarg0: number, paramarg1: number): IntBuffer;
    static narray(paramarg0: number, paramarg1: IntBuffer): void;
    static nkdropped(paramarg0: number, paramarg1: number): IntBuffer;
    static nkdropped(paramarg0: number, paramarg1: IntBuffer): void;
    static nkflags(paramarg0: number, paramarg1: number): IntBuffer;
    static nkflags(paramarg0: number, paramarg1: IntBuffer): void;
    static nkhead(paramarg0: number, paramarg1: number): IntBuffer;
    static nkhead(paramarg0: number, paramarg1: IntBuffer): void;
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
    static nsqe_head(paramarg0: number): number;
    static nsqe_head(paramarg0: number, paramarg1: number): void;
    static nsqe_tail(paramarg0: number): number;
    static nsqe_tail(paramarg0: number, paramarg1: number): void;
    static nsqes(paramarg0: number): IOURingSQE;
    static nsqes(paramarg0: number, paramarg1: IOURingSQE): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    array(arg0: IntBuffer): IOURingSQ;
    array(arg0: number): IntBuffer;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingSQ;
    kdropped(arg0: IntBuffer): IOURingSQ;
    kdropped(arg0: number): IntBuffer;
    kflags(arg0: IntBuffer): IOURingSQ;
    kflags(arg0: number): IntBuffer;
    khead(arg0: IntBuffer): IOURingSQ;
    khead(arg0: number): IntBuffer;
    kring_entries(arg0: IntBuffer): IOURingSQ;
    kring_entries(arg0: number): IntBuffer;
    kring_mask(arg0: IntBuffer): IOURingSQ;
    kring_mask(arg0: number): IntBuffer;
    ktail(arg0: IntBuffer): IOURingSQ;
    ktail(arg0: number): IntBuffer;
    ring_entries(): number;
    ring_entries(arg0: number): IOURingSQ;
    ring_mask(): number;
    ring_mask(arg0: number): IOURingSQ;
    ring_ptr(): ByteBuffer;
    ring_ptr(arg0: ByteBuffer): IOURingSQ;
    ring_sz(): number;
    set(arg0: IntBuffer, arg1: IntBuffer, arg2: IntBuffer, arg3: IntBuffer, arg4: IntBuffer, arg5: IntBuffer, arg6: IntBuffer, arg7: IOURingSQE, arg8: number, arg9: number, arg10: ByteBuffer, arg11: number, arg12: number): IOURingSQ;
    set(arg0: IOURingSQ): IOURingSQ;
    sizeof(): number;
    sqe_head(): number;
    sqe_head(arg0: number): IOURingSQ;
    sqe_tail(): number;
    sqe_tail(arg0: number): IOURingSQ;
    sqes(): IOURingSQE;
    sqes(arg0: IOURingSQE): IOURingSQ;
}