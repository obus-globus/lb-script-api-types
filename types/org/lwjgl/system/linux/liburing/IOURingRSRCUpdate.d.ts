import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingRSRCUpdate extends Struct<IOURingRSRCUpdate> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static SIZEOF: number;
    static calloc(): IOURingRSRCUpdate;
    static calloc(paramarg0: MemoryStack): IOURingRSRCUpdate;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingRSRCUpdate;
    static create(paramarg0: number): IOURingRSRCUpdate;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingRSRCUpdate;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingRSRCUpdate;
    static malloc(paramarg0: MemoryStack): IOURingRSRCUpdate;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): number;
    static ndata(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingRSRCUpdate;
    data(): number;
    data(arg0: number): IOURingRSRCUpdate;
    offset(): number;
    offset(arg0: number): IOURingRSRCUpdate;
    set(arg0: number, arg1: number): IOURingRSRCUpdate;
    set(arg0: IOURingRSRCUpdate): IOURingRSRCUpdate;
    sizeof(): number;
}