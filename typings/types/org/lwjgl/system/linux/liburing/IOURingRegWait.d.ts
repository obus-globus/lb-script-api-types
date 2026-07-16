import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { KernelTimespec } from '../../../../../org/lwjgl/system/linux/KernelTimespec.d.ts'
export class IOURingRegWait extends Struct<IOURingRegWait> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MIN_WAIT_USEC: number;
    static PAD: number;
    static PAD2: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIGMASK: number;
    static SIGMASK_SZ: number;
    static SIZEOF: number;
    static TS: number;
    static calloc(): IOURingRegWait;
    static calloc(paramarg0: MemoryStack): IOURingRegWait;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingRegWait;
    static create(paramarg0: number): IOURingRegWait;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingRegWait;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingRegWait;
    static malloc(paramarg0: MemoryStack): IOURingRegWait;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmin_wait_usec(paramarg0: number): number;
    static nmin_wait_usec(paramarg0: number, paramarg1: number): void;
    static npad(paramarg0: number, paramarg1: number): number;
    static npad(paramarg0: number): IntBuffer;
    static npad(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad(paramarg0: number, paramarg1: IntBuffer): void;
    static npad2(paramarg0: number): LongBuffer;
    static npad2(paramarg0: number, paramarg1: number): number;
    static npad2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad2(paramarg0: number, paramarg1: LongBuffer): void;
    static nsigmask(paramarg0: number): number;
    static nsigmask(paramarg0: number, paramarg1: number): void;
    static nsigmask_sz(paramarg0: number): number;
    static nsigmask_sz(paramarg0: number, paramarg1: number): void;
    static nts(paramarg0: number): KernelTimespec;
    static nts(paramarg0: number, paramarg1: KernelTimespec): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingRegWait;
    flags(): number;
    flags(arg0: number): IOURingRegWait;
    min_wait_usec(): number;
    min_wait_usec(arg0: number): IOURingRegWait;
    set(arg0: KernelTimespec, arg1: number, arg2: number, arg3: number, arg4: number): IOURingRegWait;
    set(arg0: IOURingRegWait): IOURingRegWait;
    sigmask(): number;
    sigmask(arg0: number): IOURingRegWait;
    sigmask_sz(): number;
    sigmask_sz(arg0: number): IOURingRegWait;
    sizeof(): number;
    ts(): KernelTimespec;
    ts(arg0: (param0: KernelTimespec) => void): IOURingRegWait;
    ts(arg0: KernelTimespec): IOURingRegWait;
}