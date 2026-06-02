import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOCQRingOffsets } from '../../../../../org/lwjgl/system/linux/liburing/IOCQRingOffsets.d.ts'
import type { IOSQRingOffsets } from '../../../../../org/lwjgl/system/linux/liburing/IOSQRingOffsets.d.ts'
export class IOURingParams extends Struct<IOURingParams> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CQ_ENTRIES: number;
    static CQ_OFF: number;
    static FEATURES: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static SIZEOF: number;
    static SQ_ENTRIES: number;
    static SQ_OFF: number;
    static SQ_THREAD_CPU: number;
    static SQ_THREAD_IDLE: number;
    static WQ_FD: number;
    static calloc(): IOURingParams;
    static calloc(paramarg0: MemoryStack): IOURingParams;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingParams;
    static create(paramarg0: number): IOURingParams;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingParams;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingParams;
    static malloc(paramarg0: MemoryStack): IOURingParams;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncq_entries(paramarg0: number): number;
    static ncq_entries(paramarg0: number, paramarg1: number): void;
    static ncq_off(paramarg0: number): IOCQRingOffsets;
    static ncq_off(paramarg0: number, paramarg1: IOCQRingOffsets): void;
    static nfeatures(paramarg0: number): number;
    static nfeatures(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number, paramarg1: number): number;
    static nresv(paramarg0: number): IntBuffer;
    static nresv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nresv(paramarg0: number, paramarg1: IntBuffer): void;
    static nsq_entries(paramarg0: number): number;
    static nsq_entries(paramarg0: number, paramarg1: number): void;
    static nsq_off(paramarg0: number): IOSQRingOffsets;
    static nsq_off(paramarg0: number, paramarg1: IOSQRingOffsets): void;
    static nsq_thread_cpu(paramarg0: number): number;
    static nsq_thread_cpu(paramarg0: number, paramarg1: number): void;
    static nsq_thread_idle(paramarg0: number): number;
    static nsq_thread_idle(paramarg0: number, paramarg1: number): void;
    static nwq_fd(paramarg0: number): number;
    static nwq_fd(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cq_entries(): number;
    cq_entries(arg0: number): IOURingParams;
    cq_off(): IOCQRingOffsets;
    cq_off(arg0: (param0: IOCQRingOffsets) => void): IOURingParams;
    cq_off(arg0: IOCQRingOffsets): IOURingParams;
    create(arg0: number, arg1: ByteBuffer): IOURingParams;
    features(): number;
    features(arg0: number): IOURingParams;
    flags(): number;
    flags(arg0: number): IOURingParams;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: IOSQRingOffsets, arg8: IOCQRingOffsets): IOURingParams;
    set(arg0: IOURingParams): IOURingParams;
    sizeof(): number;
    sq_entries(): number;
    sq_entries(arg0: number): IOURingParams;
    sq_off(): IOSQRingOffsets;
    sq_off(arg0: (param0: IOSQRingOffsets) => void): IOURingParams;
    sq_off(arg0: IOSQRingOffsets): IOURingParams;
    sq_thread_cpu(): number;
    sq_thread_cpu(arg0: number): IOURingParams;
    sq_thread_idle(): number;
    sq_thread_idle(arg0: number): IOURingParams;
    wq_fd(): number;
    wq_fd(arg0: number): IOURingParams;
}