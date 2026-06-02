import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
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
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => kotlin.Boolean): ExtentDestroy;
    static createSafe(paramarg0: number): ExtentDestroy;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => kotlin.Boolean)
    // private delegate: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => kotlin.Boolean;
    invoke(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number): boolean;
}