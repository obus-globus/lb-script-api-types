import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingRestriction extends Struct<IOURingRestriction> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OPCODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REGISTER_OP: number;
    static RESV: number;
    static RESV2: number;
    static SIZEOF: number;
    static SQE_FLAGS: number;
    static SQE_OP: number;
    static calloc(): IOURingRestriction;
    static calloc(paramarg0: MemoryStack): IOURingRestriction;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingRestriction;
    static create(paramarg0: number): IOURingRestriction;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingRestriction;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingRestriction;
    static malloc(paramarg0: MemoryStack): IOURingRestriction;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nopcode(paramarg0: number): number;
    static nopcode(paramarg0: number, paramarg1: number): void;
    static nregister_op(paramarg0: number): number;
    static nregister_op(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number): number;
    static nresv(paramarg0: number, paramarg1: number): void;
    static nresv2(paramarg0: number, paramarg1: number): number;
    static nresv2(paramarg0: number): IntBuffer;
    static nresv2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nresv2(paramarg0: number, paramarg1: IntBuffer): void;
    static nsqe_flags(paramarg0: number): number;
    static nsqe_flags(paramarg0: number, paramarg1: number): void;
    static nsqe_op(paramarg0: number): number;
    static nsqe_op(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingRestriction;
    opcode(): number;
    opcode(arg0: number): IOURingRestriction;
    register_op(): number;
    register_op(arg0: number): IOURingRestriction;
    set(arg0: IOURingRestriction): IOURingRestriction;
    sizeof(): number;
    sqe_flags(): number;
    sqe_flags(arg0: number): IOURingRestriction;
    sqe_op(): number;
    sqe_op(arg0: number): IOURingRestriction;
}