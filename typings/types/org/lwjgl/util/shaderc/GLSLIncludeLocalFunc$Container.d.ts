import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { GLSLIncludeLocalFunc } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeLocalFunc.d.ts'
import type { GLSLIncludeLocalFuncI } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeLocalFuncI.d.ts'
export class GLSLIncludeLocalFunc$Container extends GLSLIncludeLocalFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLSLIncludeLocalFunc;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => number): GLSLIncludeLocalFunc;
    static createSafe(paramarg0: number): GLSLIncludeLocalFunc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => number)
    // private delegate: (param0: number, param1: number, param2: number, param3: number) => number;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
}