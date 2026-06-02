import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingBufReg extends Struct<IOURingBufReg> implements NativeResource {
    static ALIGNOF: number;
    static BGID: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static RING_ADDR: number;
    static RING_ENTRIES: number;
    static SIZEOF: number;
    static calloc(): IOURingBufReg;
    static calloc(paramarg0: MemoryStack): IOURingBufReg;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingBufReg;
    static create(paramarg0: number): IOURingBufReg;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingBufReg;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingBufReg;
    static malloc(paramarg0: MemoryStack): IOURingBufReg;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbgid(paramarg0: number): number;
    static nbgid(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): LongBuffer;
    static nresv(paramarg0: number, paramarg1: number): number;
    static nresv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nresv(paramarg0: number, paramarg1: LongBuffer): void;
    static nring_addr(paramarg0: number): number;
    static nring_addr(paramarg0: number, paramarg1: number): void;
    static nring_entries(paramarg0: number): number;
    static nring_entries(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bgid(): number;
    bgid(arg0: number): IOURingBufReg;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingBufReg;
    flags(): number;
    flags(arg0: number): IOURingBufReg;
    ring_addr(): number;
    ring_addr(arg0: number): IOURingBufReg;
    ring_entries(): number;
    ring_entries(arg0: number): IOURingBufReg;
    set(arg0: number, arg1: number, arg2: number, arg3: number): IOURingBufReg;
    set(arg0: IOURingBufReg): IOURingBufReg;
    sizeof(): number;
}