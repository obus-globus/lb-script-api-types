import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBIRSupportCallback } from '../../../org/lwjgl/stb/STBIRSupportCallback.d.ts'
import type { STBIRSupportCallbackI } from '../../../org/lwjgl/stb/STBIRSupportCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class STBIRSupportCallback$Container extends STBIRSupportCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): STBIRSupportCallback;
    static create(paramarg0: (param0: number, param1: number) => kotlin.Float): STBIRSupportCallback;
    static createSafe(paramarg0: number): STBIRSupportCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Float)
    // private delegate: (param0: number, param1: number) => kotlin.Float;
    invoke(arg0: number, arg1: number): number;
}