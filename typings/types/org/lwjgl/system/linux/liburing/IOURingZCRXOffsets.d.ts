import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingZCRXOffsets extends Struct<IOURingZCRXOffsets> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RQES: number;
    static SIZEOF: number;
    static TAIL: number;
    static __RESV: number;
    static __RESV2: number;
    static calloc(): IOURingZCRXOffsets;
    static calloc(paramarg0: MemoryStack): IOURingZCRXOffsets;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingZCRXOffsets;
    static create(paramarg0: number): IOURingZCRXOffsets;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingZCRXOffsets;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingZCRXOffsets;
    static malloc(paramarg0: MemoryStack): IOURingZCRXOffsets;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__resv(paramarg0: number): LongBuffer;
    static n__resv(paramarg0: number, paramarg1: number): number;
    static n__resv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static n__resv(paramarg0: number, paramarg1: LongBuffer): void;
    static n__resv2(paramarg0: number): number;
    static n__resv2(paramarg0: number, paramarg1: number): void;
    static nhead(paramarg0: number): number;
    static nhead(paramarg0: number, paramarg1: number): void;
    static nrqes(paramarg0: number): number;
    static nrqes(paramarg0: number, paramarg1: number): void;
    static ntail(paramarg0: number): number;
    static ntail(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingZCRXOffsets;
    head(): number;
    head(arg0: number): IOURingZCRXOffsets;
    rqes(): number;
    rqes(arg0: number): IOURingZCRXOffsets;
    set(arg0: number, arg1: number, arg2: number): IOURingZCRXOffsets;
    set(arg0: IOURingZCRXOffsets): IOURingZCRXOffsets;
    sizeof(): number;
    tail(): number;
    tail(arg0: number): IOURingZCRXOffsets;
}