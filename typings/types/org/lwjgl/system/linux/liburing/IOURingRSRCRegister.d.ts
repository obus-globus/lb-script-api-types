import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingRSRCRegister extends Struct<IOURingRSRCRegister> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static FLAGS: number;
    static NR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV2: number;
    static SIZEOF: number;
    static TAGS: number;
    static calloc(): IOURingRSRCRegister;
    static calloc(paramarg0: MemoryStack): IOURingRSRCRegister;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingRSRCRegister;
    static create(paramarg0: number): IOURingRSRCRegister;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingRSRCRegister;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingRSRCRegister;
    static malloc(paramarg0: MemoryStack): IOURingRSRCRegister;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): number;
    static ndata(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nnr(paramarg0: number): number;
    static nnr(paramarg0: number, paramarg1: number): void;
    static nresv2(paramarg0: number): number;
    static nresv2(paramarg0: number, paramarg1: number): void;
    static ntags(paramarg0: number): number;
    static ntags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingRSRCRegister;
    data(): number;
    data(arg0: number): IOURingRSRCRegister;
    flags(): number;
    flags(arg0: number): IOURingRSRCRegister;
    nr(): number;
    nr(arg0: number): IOURingRSRCRegister;
    set(arg0: number, arg1: number, arg2: number, arg3: number): IOURingRSRCRegister;
    set(arg0: IOURingRSRCRegister): IOURingRSRCRegister;
    sizeof(): number;
    tags(): number;
    tags(arg0: number): IOURingRSRCRegister;
}