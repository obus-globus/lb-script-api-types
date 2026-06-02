import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingCQ } from '../../../../../org/lwjgl/system/linux/liburing/IOURingCQ.d.ts'
import type { IOURingSQ } from '../../../../../org/lwjgl/system/linux/liburing/IOURingSQ.d.ts'
export class IOURing extends Struct<IOURing> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CQ: number;
    static ENTER_RING_FD: number;
    static FEATURES: number;
    static FLAGS: number;
    static INT_FLAGS: number;
    static PAD: number;
    static PAD2: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RING_FD: number;
    static SIZEOF: number;
    static SQ: number;
    static calloc(): IOURing;
    static calloc(paramarg0: MemoryStack): IOURing;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURing;
    static create(paramarg0: number): IOURing;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURing;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURing;
    static malloc(paramarg0: MemoryStack): IOURing;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncq(paramarg0: number): IOURingCQ;
    static ncq(paramarg0: number, paramarg1: IOURingCQ): void;
    static nenter_ring_fd(paramarg0: number): number;
    static nenter_ring_fd(paramarg0: number, paramarg1: number): void;
    static nfeatures(paramarg0: number): number;
    static nfeatures(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nint_flags(paramarg0: number): number;
    static nint_flags(paramarg0: number, paramarg1: number): void;
    static npad(paramarg0: number, paramarg1: number): number;
    static npad(paramarg0: number): ByteBuffer;
    static npad(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad(paramarg0: number, paramarg1: ByteBuffer): void;
    static npad2(paramarg0: number): number;
    static npad2(paramarg0: number, paramarg1: number): void;
    static nring_fd(paramarg0: number): number;
    static nring_fd(paramarg0: number, paramarg1: number): void;
    static nsq(paramarg0: number): IOURingSQ;
    static nsq(paramarg0: number, paramarg1: IOURingSQ): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cq(): IOURingCQ;
    cq(arg0: (param0: IOURingCQ) => void): IOURing;
    cq(arg0: IOURingCQ): IOURing;
    create(arg0: number, arg1: ByteBuffer): IOURing;
    enter_ring_fd(): number;
    enter_ring_fd(arg0: number): IOURing;
    features(): number;
    features(arg0: number): IOURing;
    flags(): number;
    flags(arg0: number): IOURing;
    int_flags(): number;
    int_flags(arg0: number): IOURing;
    ring_fd(): number;
    ring_fd(arg0: number): IOURing;
    set(arg0: IOURing): IOURing;
    set(arg0: IOURingSQ, arg1: IOURingCQ, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): IOURing;
    sizeof(): number;
    sq(): IOURingSQ;
    sq(arg0: (param0: IOURingSQ) => void): IOURing;
    sq(arg0: IOURingSQ): IOURing;
}