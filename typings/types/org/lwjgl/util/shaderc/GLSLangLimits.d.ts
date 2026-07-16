import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLSLangLimits extends Struct<GLSLangLimits> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DO_WHILE_LOOPS: number;
    static GENERAL_ATTRIBUTE_MATRIX_VECTOR_INDEXING: number;
    static GENERAL_CONSTANT_MATRIX_VECTOR_INDEXING: number;
    static GENERAL_SAMPLER_INDEXING: number;
    static GENERAL_UNIFORM_INDEXING: number;
    static GENERAL_VARIABLE_INDEXING: number;
    static GENERAL_VARYING_INDEXING: number;
    static NON_INDUCTIVE_FOR_LOOPS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static WHILE_LOOPS: number;
    static calloc(): GLSLangLimits;
    static calloc(paramarg0: MemoryStack): GLSLangLimits;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLSLangLimits;
    static create(paramarg0: number): GLSLangLimits;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLSLangLimits;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLSLangLimits;
    static malloc(paramarg0: MemoryStack): GLSLangLimits;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndo_while_loops(paramarg0: number): boolean;
    static ndo_while_loops(paramarg0: number, paramarg1: boolean): void;
    static ngeneral_attribute_matrix_vector_indexing(paramarg0: number): boolean;
    static ngeneral_attribute_matrix_vector_indexing(paramarg0: number, paramarg1: boolean): void;
    static ngeneral_constant_matrix_vector_indexing(paramarg0: number): boolean;
    static ngeneral_constant_matrix_vector_indexing(paramarg0: number, paramarg1: boolean): void;
    static ngeneral_sampler_indexing(paramarg0: number): boolean;
    static ngeneral_sampler_indexing(paramarg0: number, paramarg1: boolean): void;
    static ngeneral_uniform_indexing(paramarg0: number): boolean;
    static ngeneral_uniform_indexing(paramarg0: number, paramarg1: boolean): void;
    static ngeneral_variable_indexing(paramarg0: number): boolean;
    static ngeneral_variable_indexing(paramarg0: number, paramarg1: boolean): void;
    static ngeneral_varying_indexing(paramarg0: number): boolean;
    static ngeneral_varying_indexing(paramarg0: number, paramarg1: boolean): void;
    static nnon_inductive_for_loops(paramarg0: number): boolean;
    static nnon_inductive_for_loops(paramarg0: number, paramarg1: boolean): void;
    static nwhile_loops(paramarg0: number): boolean;
    static nwhile_loops(paramarg0: number, paramarg1: boolean): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLSLangLimits;
    do_while_loops(): boolean;
    do_while_loops(arg0: boolean): GLSLangLimits;
    general_attribute_matrix_vector_indexing(): boolean;
    general_attribute_matrix_vector_indexing(arg0: boolean): GLSLangLimits;
    general_constant_matrix_vector_indexing(): boolean;
    general_constant_matrix_vector_indexing(arg0: boolean): GLSLangLimits;
    general_sampler_indexing(): boolean;
    general_sampler_indexing(arg0: boolean): GLSLangLimits;
    general_uniform_indexing(): boolean;
    general_uniform_indexing(arg0: boolean): GLSLangLimits;
    general_variable_indexing(): boolean;
    general_variable_indexing(arg0: boolean): GLSLangLimits;
    general_varying_indexing(): boolean;
    general_varying_indexing(arg0: boolean): GLSLangLimits;
    non_inductive_for_loops(): boolean;
    non_inductive_for_loops(arg0: boolean): GLSLangLimits;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean): GLSLangLimits;
    set(arg0: GLSLangLimits): GLSLangLimits;
    sizeof(): number;
    while_loops(): boolean;
    while_loops(arg0: boolean): GLSLangLimits;
}