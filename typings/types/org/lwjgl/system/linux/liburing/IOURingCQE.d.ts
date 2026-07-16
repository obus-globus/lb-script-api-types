import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingCQE extends Struct<IOURingCQE> implements NativeResource {
    static ALIGNOF: number;
    static BIG_CQE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RES: number;
    static SIZEOF: number;
    static USER_DATA: number;
    static calloc(): IOURingCQE;
    static calloc(paramarg0: MemoryStack): IOURingCQE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingCQE;
    static create(paramarg0: number): IOURingCQE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingCQE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingCQE;
    static malloc(paramarg0: MemoryStack): IOURingCQE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbig_cqe(paramarg0: number): LongBuffer;
    static nbig_cqe(paramarg0: number, paramarg1: number): number;
    static nbig_cqe(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nbig_cqe(paramarg0: number, paramarg1: LongBuffer): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nres(paramarg0: number): number;
    static nres(paramarg0: number, paramarg1: number): void;
    static nuser_data(paramarg0: number): number;
    static nuser_data(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    big_cqe(): LongBuffer;
    big_cqe(arg0: LongBuffer): IOURingCQE;
    big_cqe(arg0: number): number;
    big_cqe(arg0: number, arg1: number): IOURingCQE;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingCQE;
    flags(): number;
    flags(arg0: number): IOURingCQE;
    res(): number;
    res(arg0: number): IOURingCQE;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): IOURingCQE;
    set(arg0: IOURingCQE): IOURingCQE;
    sizeof(): number;
    user_data(): number;
    user_data(arg0: number): IOURingCQE;
}