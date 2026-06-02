import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { WindowProc } from '../../../../org/lwjgl/system/windows/WindowProc.d.ts'
import type { WindowProcI } from '../../../../org/lwjgl/system/windows/WindowProcI.d.ts'
export class WindowProc$Container extends WindowProc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): WindowProc;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): WindowProc;
    static createSafe(paramarg0: number): WindowProc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long)
    // private delegate: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
}