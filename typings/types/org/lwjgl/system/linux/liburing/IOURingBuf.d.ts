import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingBuf extends Struct<IOURingBuf> implements NativeResource {
    static ADDR: number;
    static ALIGNOF: number;
    static BID: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static SIZEOF: number;
    static calloc(): IOURingBuf;
    static calloc(paramarg0: MemoryStack): IOURingBuf;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingBuf;
    static create(paramarg0: number): IOURingBuf;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingBuf;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingBuf;
    static malloc(paramarg0: MemoryStack): IOURingBuf;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddr(paramarg0: number): number;
    static naddr(paramarg0: number, paramarg1: number): void;
    static nbid(paramarg0: number): number;
    static nbid(paramarg0: number, paramarg1: number): void;
    static nlen(paramarg0: number): number;
    static nlen(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addr(): number;
    addr(arg0: number): IOURingBuf;
    bid(): number;
    bid(arg0: number): IOURingBuf;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingBuf;
    len(): number;
    len(arg0: number): IOURingBuf;
    set(arg0: number, arg1: number, arg2: number): IOURingBuf;
    set(arg0: IOURingBuf): IOURingBuf;
    sizeof(): number;
}