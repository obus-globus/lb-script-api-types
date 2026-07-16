import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SPVParsedInstruction extends Struct<SPVParsedInstruction> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXT_INST_TYPE: number;
    static NUM_OPERANDS: number;
    static NUM_WORDS: number;
    static OPCODE: number;
    static OPERANDS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESULT_ID: number;
    static SIZEOF: number;
    static TYPE_ID: number;
    static WORDS: number;
    static calloc(): SPVParsedInstruction;
    static calloc(paramarg0: MemoryStack): SPVParsedInstruction;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SPVParsedInstruction;
    static create(paramarg0: number): SPVParsedInstruction;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SPVParsedInstruction;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SPVParsedInstruction;
    static malloc(paramarg0: MemoryStack): SPVParsedInstruction;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static next_inst_type(paramarg0: number): number;
    static next_inst_type(paramarg0: number, paramarg1: number): void;
    static nnum_operands(paramarg0: number): number;
    static nnum_operands(paramarg0: number, paramarg1: number): void;
    static nnum_words(paramarg0: number): number;
    static nnum_words(paramarg0: number, paramarg1: number): void;
    static nopcode(paramarg0: number): number;
    static nopcode(paramarg0: number, paramarg1: number): void;
    static noperands(paramarg0: number): (Object | null)[];
    static noperands(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nresult_id(paramarg0: number): number;
    static nresult_id(paramarg0: number, paramarg1: number): void;
    static ntype_id(paramarg0: number): number;
    static ntype_id(paramarg0: number, paramarg1: number): void;
    static nwords(paramarg0: number): IntBuffer;
    static nwords(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SPVParsedInstruction;
    ext_inst_type(): number;
    ext_inst_type(arg0: number): SPVParsedInstruction;
    num_operands(): number;
    num_words(): number;
    opcode(): number;
    opcode(arg0: number): SPVParsedInstruction;
    operands(): (Object | null)[];
    operands(arg0: (Object | null)[]): SPVParsedInstruction;
    result_id(): number;
    result_id(arg0: number): SPVParsedInstruction;
    set(arg0: IntBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): SPVParsedInstruction;
    set(arg0: SPVParsedInstruction): SPVParsedInstruction;
    sizeof(): number;
    type_id(): number;
    type_id(arg0: number): SPVParsedInstruction;
    words(): IntBuffer;
    words(arg0: IntBuffer): SPVParsedInstruction;
}