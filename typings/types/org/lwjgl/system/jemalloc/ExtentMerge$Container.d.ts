import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { ExtentMerge } from '../../../../org/lwjgl/system/jemalloc/ExtentMerge.d.ts'
import type { ExtentMergeI } from '../../../../org/lwjgl/system/jemalloc/ExtentMergeI.d.ts'
export class ExtentMerge$Container extends ExtentMerge {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): ExtentMerge;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): ExtentMerge;
    static createSafe(paramarg0: number): ExtentMerge;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number): boolean;
}