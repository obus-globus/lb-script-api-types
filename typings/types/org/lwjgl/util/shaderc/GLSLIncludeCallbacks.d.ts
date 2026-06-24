import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { GLSLFreeIncludeResultFunc } from '../../../../org/lwjgl/util/shaderc/GLSLFreeIncludeResultFunc.d.ts'
import type { GLSLFreeIncludeResultFuncI } from '../../../../org/lwjgl/util/shaderc/GLSLFreeIncludeResultFuncI.d.ts'
import type { GLSLIncludeLocalFunc } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeLocalFunc.d.ts'
import type { GLSLIncludeLocalFuncI } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeLocalFuncI.d.ts'
import type { GLSLIncludeSystemFunc } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeSystemFunc.d.ts'
import type { GLSLIncludeSystemFuncI } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeSystemFuncI.d.ts'
export class GLSLIncludeCallbacks extends Struct<GLSLIncludeCallbacks> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FREE_INCLUDE_RESULT: number;
    static INCLUDE_LOCAL: number;
    static INCLUDE_SYSTEM: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): GLSLIncludeCallbacks;
    static calloc(paramarg0: MemoryStack): GLSLIncludeCallbacks;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLSLIncludeCallbacks;
    static create(paramarg0: number): GLSLIncludeCallbacks;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLSLIncludeCallbacks;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLSLIncludeCallbacks;
    static malloc(paramarg0: MemoryStack): GLSLIncludeCallbacks;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfree_include_result(paramarg0: number): GLSLFreeIncludeResultFunc;
    static nfree_include_result(paramarg0: number, paramarg1: (param0: number, param1: number) => number): void;
    static ninclude_local(paramarg0: number): GLSLIncludeLocalFunc;
    static ninclude_local(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static ninclude_system(paramarg0: number): GLSLIncludeSystemFunc;
    static ninclude_system(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLSLIncludeCallbacks;
    free_include_result(): GLSLFreeIncludeResultFunc;
    free_include_result(arg0: (param0: number, param1: number) => number): GLSLIncludeCallbacks;
    include_local(): GLSLIncludeLocalFunc;
    include_local(arg0: (param0: number, param1: number, param2: number, param3: number) => number): GLSLIncludeCallbacks;
    include_system(): GLSLIncludeSystemFunc;
    include_system(arg0: (param0: number, param1: number, param2: number, param3: number) => number): GLSLIncludeCallbacks;
    set(arg0: GLSLIncludeCallbacks): GLSLIncludeCallbacks;
    set(arg0: (param0: number, param1: number, param2: number, param3: number) => number, arg1: (param0: number, param1: number, param2: number, param3: number) => number, arg2: (param0: number, param1: number) => number): GLSLIncludeCallbacks;
    sizeof(): number;
}