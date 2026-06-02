import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingZCRXAreaReg extends Struct<IOURingZCRXAreaReg> implements NativeResource {
    static ADDR: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DMABUF_FD: number;
    static FLAGS: number;
    static LEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RQ_AREA_TOKEN: number;
    static SIZEOF: number;
    static __RESV2: number;
    static calloc(): IOURingZCRXAreaReg;
    static calloc(paramarg0: MemoryStack): IOURingZCRXAreaReg;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingZCRXAreaReg;
    static create(paramarg0: number): IOURingZCRXAreaReg;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingZCRXAreaReg;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingZCRXAreaReg;
    static malloc(paramarg0: MemoryStack): IOURingZCRXAreaReg;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__resv2(paramarg0: number): LongBuffer;
    static n__resv2(paramarg0: number, paramarg1: number): number;
    static n__resv2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static n__resv2(paramarg0: number, paramarg1: LongBuffer): void;
    static naddr(paramarg0: number): number;
    static naddr(paramarg0: number, paramarg1: number): void;
    static ndmabuf_fd(paramarg0: number): number;
    static ndmabuf_fd(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlen(paramarg0: number): number;
    static nlen(paramarg0: number, paramarg1: number): void;
    static nrq_area_token(paramarg0: number): number;
    static nrq_area_token(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addr(): number;
    addr(arg0: number): IOURingZCRXAreaReg;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingZCRXAreaReg;
    dmabuf_fd(): number;
    dmabuf_fd(arg0: number): IOURingZCRXAreaReg;
    flags(): number;
    flags(arg0: number): IOURingZCRXAreaReg;
    len(): number;
    len(arg0: number): IOURingZCRXAreaReg;
    rq_area_token(): number;
    rq_area_token(arg0: number): IOURingZCRXAreaReg;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): IOURingZCRXAreaReg;
    set(arg0: IOURingZCRXAreaReg): IOURingZCRXAreaReg;
    sizeof(): number;
}