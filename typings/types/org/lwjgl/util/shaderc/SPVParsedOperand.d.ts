import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SPVParsedOperand extends Struct<SPVParsedOperand> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FP_ENCODING: number;
    static NUMBER_BIT_WIDTH: number;
    static NUMBER_KIND: number;
    static NUM_WORDS: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): SPVParsedOperand;
    static calloc(paramarg0: MemoryStack): SPVParsedOperand;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SPVParsedOperand;
    static create(paramarg0: number): SPVParsedOperand;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SPVParsedOperand;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SPVParsedOperand;
    static malloc(paramarg0: MemoryStack): SPVParsedOperand;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfp_encoding(paramarg0: number): number;
    static nfp_encoding(paramarg0: number, paramarg1: number): void;
    static nnum_words(paramarg0: number): number;
    static nnum_words(paramarg0: number, paramarg1: number): void;
    static nnumber_bit_width(paramarg0: number): number;
    static nnumber_bit_width(paramarg0: number, paramarg1: number): void;
    static nnumber_kind(paramarg0: number): number;
    static nnumber_kind(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SPVParsedOperand;
    fp_encoding(): number;
    fp_encoding(arg0: number): SPVParsedOperand;
    num_words(): number;
    num_words(arg0: number): SPVParsedOperand;
    number_bit_width(): number;
    number_bit_width(arg0: number): SPVParsedOperand;
    number_kind(): number;
    number_kind(arg0: number): SPVParsedOperand;
    offset(): number;
    offset(arg0: number): SPVParsedOperand;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): SPVParsedOperand;
    set(arg0: SPVParsedOperand): SPVParsedOperand;
    sizeof(): number;
    type(): number;
    type(arg0: number): SPVParsedOperand;
}