import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingProbeOp } from '../../../../../org/lwjgl/system/linux/liburing/IOURingProbeOp.d.ts'
export class IOURingProbe extends Struct<IOURingProbe> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAST_OP: number;
    static OPS: number;
    static OPS_LEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static RESV2: number;
    static SIZEOF: number;
    static calloc(): IOURingProbe;
    static calloc(paramarg0: MemoryStack): IOURingProbe;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingProbe;
    static create(paramarg0: number): IOURingProbe;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingProbe;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingProbe;
    static malloc(paramarg0: MemoryStack): IOURingProbe;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlast_op(paramarg0: number): number;
    static nlast_op(paramarg0: number, paramarg1: number): void;
    static nops(paramarg0: number, paramarg1: number): IOURingProbeOp;
    static nops(paramarg0: number): (Object | null)[];
    static nops(paramarg0: number, paramarg1: number, paramarg2: IOURingProbeOp): void;
    static nops(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nops_len(paramarg0: number): number;
    static nops_len(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static nresv2(paramarg0: number, paramarg1: number): number;
    static nresv2(paramarg0: number): IntBuffer;
    static nresv2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nresv2(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingProbe;
    last_op(): number;
    last_op(arg0: number): IOURingProbe;
    ops(): (Object | null)[];
    ops(arg0: (param0: (Object | null)[]) => void): IOURingProbe;
    ops(arg0: number): IOURingProbeOp;
    ops(arg0: number, arg1: (param0: IOURingProbeOp) => void): IOURingProbe;
    ops(arg0: number, arg1: IOURingProbeOp): IOURingProbe;
    ops(arg0: (Object | null)[]): IOURingProbe;
    ops_len(): number;
    ops_len(arg0: number): IOURingProbe;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): IOURingProbe;
    set(arg0: IOURingProbe): IOURingProbe;
    sizeof(): number;
}