import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { ExtentPurge } from '../../../../org/lwjgl/system/jemalloc/ExtentPurge.d.ts'
import type { ExtentPurgeI } from '../../../../org/lwjgl/system/jemalloc/ExtentPurgeI.d.ts'
export class ExtentPurge$Container extends ExtentPurge {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): ExtentPurge;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => kotlin.Boolean): ExtentPurge;
    static createSafe(paramarg0: number): ExtentPurge;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => kotlin.Boolean)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => kotlin.Boolean;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
}