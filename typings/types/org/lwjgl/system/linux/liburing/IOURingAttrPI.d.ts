import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingAttrPI extends Struct<IOURingAttrPI> implements NativeResource {
    static ADDR: number;
    static ALIGNOF: number;
    static APP_TAG: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RSVD: number;
    static SEED: number;
    static SIZEOF: number;
    static calloc(): IOURingAttrPI;
    static calloc(paramarg0: MemoryStack): IOURingAttrPI;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingAttrPI;
    static create(paramarg0: number): IOURingAttrPI;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingAttrPI;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingAttrPI;
    static malloc(paramarg0: MemoryStack): IOURingAttrPI;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddr(paramarg0: number): number;
    static naddr(paramarg0: number, paramarg1: number): void;
    static napp_tag(paramarg0: number): number;
    static napp_tag(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlen(paramarg0: number): number;
    static nlen(paramarg0: number, paramarg1: number): void;
    static nrsvd(paramarg0: number): number;
    static nrsvd(paramarg0: number, paramarg1: number): void;
    static nseed(paramarg0: number): number;
    static nseed(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addr(): number;
    addr(arg0: number): IOURingAttrPI;
    app_tag(): number;
    app_tag(arg0: number): IOURingAttrPI;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingAttrPI;
    flags(): number;
    flags(arg0: number): IOURingAttrPI;
    len(): number;
    len(arg0: number): IOURingAttrPI;
    rsvd(): number;
    rsvd(arg0: number): IOURingAttrPI;
    seed(): number;
    seed(arg0: number): IOURingAttrPI;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): IOURingAttrPI;
    set(arg0: IOURingAttrPI): IOURingAttrPI;
    sizeof(): number;
}