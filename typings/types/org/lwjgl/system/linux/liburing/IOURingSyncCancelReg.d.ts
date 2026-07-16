import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { KernelTimespec } from '../../../../../org/lwjgl/system/linux/KernelTimespec.d.ts'
export class IOURingSyncCancelReg extends Struct<IOURingSyncCancelReg> implements NativeResource {
    static ADDR: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FD: number;
    static FLAGS: number;
    static OPCODE: number;
    static PAD: number;
    static PAD2: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TIMEOUT: number;
    static calloc(): IOURingSyncCancelReg;
    static calloc(paramarg0: MemoryStack): IOURingSyncCancelReg;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingSyncCancelReg;
    static create(paramarg0: number): IOURingSyncCancelReg;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingSyncCancelReg;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingSyncCancelReg;
    static malloc(paramarg0: MemoryStack): IOURingSyncCancelReg;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddr(paramarg0: number): number;
    static naddr(paramarg0: number, paramarg1: number): void;
    static nfd(paramarg0: number): number;
    static nfd(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nopcode(paramarg0: number): number;
    static nopcode(paramarg0: number, paramarg1: number): void;
    static npad(paramarg0: number, paramarg1: number): number;
    static npad(paramarg0: number): ByteBuffer;
    static npad(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad(paramarg0: number, paramarg1: ByteBuffer): void;
    static npad2(paramarg0: number): LongBuffer;
    static npad2(paramarg0: number, paramarg1: number): number;
    static npad2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npad2(paramarg0: number, paramarg1: LongBuffer): void;
    static ntimeout(paramarg0: number): KernelTimespec;
    static ntimeout(paramarg0: number, paramarg1: KernelTimespec): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addr(): number;
    addr(arg0: number): IOURingSyncCancelReg;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingSyncCancelReg;
    fd(): number;
    fd(arg0: number): IOURingSyncCancelReg;
    flags(): number;
    flags(arg0: number): IOURingSyncCancelReg;
    opcode(): number;
    opcode(arg0: number): IOURingSyncCancelReg;
    set(arg0: number, arg1: number, arg2: number, arg3: KernelTimespec, arg4: number): IOURingSyncCancelReg;
    set(arg0: IOURingSyncCancelReg): IOURingSyncCancelReg;
    sizeof(): number;
    timeout(): KernelTimespec;
    timeout(arg0: (param0: KernelTimespec) => void): IOURingSyncCancelReg;
    timeout(arg0: KernelTimespec): IOURingSyncCancelReg;
}