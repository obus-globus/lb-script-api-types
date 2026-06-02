import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingMemRegionReg extends Struct<IOURingMemRegionReg> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REGION_UPTR: number;
    static SIZEOF: number;
    static __RESV: number;
    static calloc(): IOURingMemRegionReg;
    static calloc(paramarg0: MemoryStack): IOURingMemRegionReg;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingMemRegionReg;
    static create(paramarg0: number): IOURingMemRegionReg;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingMemRegionReg;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingMemRegionReg;
    static malloc(paramarg0: MemoryStack): IOURingMemRegionReg;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__resv(paramarg0: number): LongBuffer;
    static n__resv(paramarg0: number, paramarg1: number): number;
    static n__resv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static n__resv(paramarg0: number, paramarg1: LongBuffer): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nregion_uptr(paramarg0: number): number;
    static nregion_uptr(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingMemRegionReg;
    flags(): number;
    flags(arg0: number): IOURingMemRegionReg;
    region_uptr(): number;
    region_uptr(arg0: number): IOURingMemRegionReg;
    set(arg0: number, arg1: number): IOURingMemRegionReg;
    set(arg0: IOURingMemRegionReg): IOURingMemRegionReg;
    sizeof(): number;
}