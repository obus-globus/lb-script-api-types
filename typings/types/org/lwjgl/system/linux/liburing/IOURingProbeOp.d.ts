import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingProbeOp extends Struct<IOURingProbeOp> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static OP: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static RESV2: number;
    static SIZEOF: number;
    static calloc(): IOURingProbeOp;
    static calloc(paramarg0: MemoryStack): IOURingProbeOp;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingProbeOp;
    static create(paramarg0: number): IOURingProbeOp;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingProbeOp;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingProbeOp;
    static malloc(paramarg0: MemoryStack): IOURingProbeOp;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nop(paramarg0: number): number;
    static nop(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static nresv2(paramarg0: number): number;
    static nresv2(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingProbeOp;
    flags(): number;
    flags(arg0: number): IOURingProbeOp;
    op(): number;
    op(arg0: number): IOURingProbeOp;
    set(arg0: number, arg1: number): IOURingProbeOp;
    set(arg0: IOURingProbeOp): IOURingProbeOp;
    sizeof(): number;
}