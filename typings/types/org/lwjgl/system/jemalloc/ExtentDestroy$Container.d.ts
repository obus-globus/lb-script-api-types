import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { ExtentDestroy } from '../../../../org/lwjgl/system/jemalloc/ExtentDestroy.d.ts'
import type { ExtentDestroyI } from '../../../../org/lwjgl/system/jemalloc/ExtentDestroyI.d.ts'
export class ExtentDestroy$Container extends ExtentDestroy {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): ExtentDestroy;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean): ExtentDestroy;
    static createSafe(paramarg0: number): ExtentDestroy;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean)
    // private delegate: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean;
    invoke(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number): boolean;
}