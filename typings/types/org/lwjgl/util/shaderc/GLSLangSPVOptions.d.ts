import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLSLangSPVOptions extends Struct<GLSLangSPVOptions> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPILE_ONLY: number;
    static DISABLE_OPTIMIZER: number;
    static DISASSEMBLE: number;
    static EMIT_NONSEMANTIC_SHADER_DEBUG_INFO: number;
    static EMIT_NONSEMANTIC_SHADER_DEBUG_SOURCE: number;
    static GENERATE_DEBUG_INFO: number;
    static OPTIMIZE_ALLOW_EXPANDED_ID_BOUND: number;
    static OPTIMIZE_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIP_DEBUG_INFO: number;
    static VALIDATE: number;
    static calloc(): GLSLangSPVOptions;
    static calloc(paramarg0: MemoryStack): GLSLangSPVOptions;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLSLangSPVOptions;
    static create(paramarg0: number): GLSLangSPVOptions;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLSLangSPVOptions;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLSLangSPVOptions;
    static malloc(paramarg0: MemoryStack): GLSLangSPVOptions;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompile_only(paramarg0: number): boolean;
    static ncompile_only(paramarg0: number, paramarg1: boolean): void;
    static ndisable_optimizer(paramarg0: number): boolean;
    static ndisable_optimizer(paramarg0: number, paramarg1: boolean): void;
    static ndisassemble(paramarg0: number): boolean;
    static ndisassemble(paramarg0: number, paramarg1: boolean): void;
    static nemit_nonsemantic_shader_debug_info(paramarg0: number): boolean;
    static nemit_nonsemantic_shader_debug_info(paramarg0: number, paramarg1: boolean): void;
    static nemit_nonsemantic_shader_debug_source(paramarg0: number): boolean;
    static nemit_nonsemantic_shader_debug_source(paramarg0: number, paramarg1: boolean): void;
    static ngenerate_debug_info(paramarg0: number): boolean;
    static ngenerate_debug_info(paramarg0: number, paramarg1: boolean): void;
    static noptimize_allow_expanded_id_bound(paramarg0: number): boolean;
    static noptimize_allow_expanded_id_bound(paramarg0: number, paramarg1: boolean): void;
    static noptimize_size(paramarg0: number): boolean;
    static noptimize_size(paramarg0: number, paramarg1: boolean): void;
    static nstrip_debug_info(paramarg0: number): boolean;
    static nstrip_debug_info(paramarg0: number, paramarg1: boolean): void;
    static nvalidate(paramarg0: number): boolean;
    static nvalidate(paramarg0: number, paramarg1: boolean): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compile_only(): boolean;
    compile_only(arg0: boolean): GLSLangSPVOptions;
    create(arg0: number, arg1: ByteBuffer): GLSLangSPVOptions;
    disable_optimizer(): boolean;
    disable_optimizer(arg0: boolean): GLSLangSPVOptions;
    disassemble(): boolean;
    disassemble(arg0: boolean): GLSLangSPVOptions;
    emit_nonsemantic_shader_debug_info(): boolean;
    emit_nonsemantic_shader_debug_info(arg0: boolean): GLSLangSPVOptions;
    emit_nonsemantic_shader_debug_source(): boolean;
    emit_nonsemantic_shader_debug_source(arg0: boolean): GLSLangSPVOptions;
    generate_debug_info(): boolean;
    generate_debug_info(arg0: boolean): GLSLangSPVOptions;
    optimize_allow_expanded_id_bound(): boolean;
    optimize_allow_expanded_id_bound(arg0: boolean): GLSLangSPVOptions;
    optimize_size(): boolean;
    optimize_size(arg0: boolean): GLSLangSPVOptions;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean): GLSLangSPVOptions;
    set(arg0: GLSLangSPVOptions): GLSLangSPVOptions;
    sizeof(): number;
    strip_debug_info(): boolean;
    strip_debug_info(arg0: boolean): GLSLangSPVOptions;
    validate(): boolean;
    validate(arg0: boolean): GLSLangSPVOptions;
}