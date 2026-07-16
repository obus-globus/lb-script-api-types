import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { GLSLFreeIncludeResultFuncI } from '../../../../org/lwjgl/util/shaderc/GLSLFreeIncludeResultFuncI.d.ts'
export abstract class GLSLFreeIncludeResultFunc extends Callback implements GLSLFreeIncludeResultFuncI {
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
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number): number;
}