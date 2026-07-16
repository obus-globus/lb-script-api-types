import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { GLSLFreeIncludeResultFunc } from '../../../../org/lwjgl/util/shaderc/GLSLFreeIncludeResultFunc.d.ts'
import type { GLSLFreeIncludeResultFuncI } from '../../../../org/lwjgl/util/shaderc/GLSLFreeIncludeResultFuncI.d.ts'
export class GLSLFreeIncludeResultFunc$Container extends GLSLFreeIncludeResultFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLSLFreeIncludeResultFunc;
    static create(paramarg0: (param0: number, param1: number) => number): GLSLFreeIncludeResultFunc;
    static createSafe(paramarg0: number): GLSLFreeIncludeResultFunc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number) => number)
    // private delegate: (param0: number, param1: number) => number;
    invoke(arg0: number, arg1: number): number;
}