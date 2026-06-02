import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBIEOFCallback } from '../../../org/lwjgl/stb/STBIEOFCallback.d.ts'
import type { STBIEOFCallbackI } from '../../../org/lwjgl/stb/STBIEOFCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class STBIEOFCallback$Container extends STBIEOFCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): STBIEOFCallback;
    static create(paramarg0: (param0: number) => kotlin.Int): STBIEOFCallback;
    static createSafe(paramarg0: number): STBIEOFCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number) => kotlin.Int)
    // private delegate: (param0: number) => kotlin.Int;
    invoke(arg0: number): number;
}