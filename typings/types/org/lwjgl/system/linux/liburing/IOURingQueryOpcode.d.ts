import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingQueryOpcode extends Struct<IOURingQueryOpcode> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENTER_FLAGS: number;
    static FEATURE_FLAGS: number;
    static NR_REGISTER_OPCODES: number;
    static NR_REQUEST_OPCODES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RING_SETUP_FLAGS: number;
    static SIZEOF: number;
    static SQE_FLAGS: number;
    static calloc(): IOURingQueryOpcode;
    static calloc(paramarg0: MemoryStack): IOURingQueryOpcode;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingQueryOpcode;
    static create(paramarg0: number): IOURingQueryOpcode;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingQueryOpcode;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingQueryOpcode;
    static malloc(paramarg0: MemoryStack): IOURingQueryOpcode;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nenter_flags(paramarg0: number): number;
    static nenter_flags(paramarg0: number, paramarg1: number): void;
    static nfeature_flags(paramarg0: number): number;
    static nfeature_flags(paramarg0: number, paramarg1: number): void;
    static nnr_register_opcodes(paramarg0: number): number;
    static nnr_register_opcodes(paramarg0: number, paramarg1: number): void;
    static nnr_request_opcodes(paramarg0: number): number;
    static nnr_request_opcodes(paramarg0: number, paramarg1: number): void;
    static nring_setup_flags(paramarg0: number): number;
    static nring_setup_flags(paramarg0: number, paramarg1: number): void;
    static nsqe_flags(paramarg0: number): number;
    static nsqe_flags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingQueryOpcode;
    enter_flags(): number;
    enter_flags(arg0: number): IOURingQueryOpcode;
    feature_flags(): number;
    feature_flags(arg0: number): IOURingQueryOpcode;
    nr_register_opcodes(): number;
    nr_register_opcodes(arg0: number): IOURingQueryOpcode;
    nr_request_opcodes(): number;
    nr_request_opcodes(arg0: number): IOURingQueryOpcode;
    ring_setup_flags(): number;
    ring_setup_flags(arg0: number): IOURingQueryOpcode;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): IOURingQueryOpcode;
    set(arg0: IOURingQueryOpcode): IOURingQueryOpcode;
    sizeof(): number;
    sqe_flags(): number;
    sqe_flags(arg0: number): IOURingQueryOpcode;
}