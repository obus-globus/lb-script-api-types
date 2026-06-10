import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { ExtentSplit } from '../../../../org/lwjgl/system/jemalloc/ExtentSplit.d.ts'
import type { ExtentSplitI } from '../../../../org/lwjgl/system/jemalloc/ExtentSplitI.d.ts'
export class ExtentSplit$Container extends ExtentSplit {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): ExtentSplit;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean): ExtentSplit;
    static createSafe(paramarg0: number): ExtentSplit;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number) => boolean;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number): boolean;
}