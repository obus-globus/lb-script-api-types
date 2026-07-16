import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { ExtentAlloc } from '../../../../org/lwjgl/system/jemalloc/ExtentAlloc.d.ts'
import type { ExtentAllocI } from '../../../../org/lwjgl/system/jemalloc/ExtentAllocI.d.ts'
export class ExtentAlloc$Container extends ExtentAlloc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): ExtentAlloc;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number): ExtentAlloc;
    static createSafe(paramarg0: number): ExtentAlloc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number) => number;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
}