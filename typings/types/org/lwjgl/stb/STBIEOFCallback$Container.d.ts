import type { STBIEOFCallback } from '../../../org/lwjgl/stb/STBIEOFCallback.d.ts'
import type { STBIEOFCallbackI } from '../../../org/lwjgl/stb/STBIEOFCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class STBIEOFCallback$Container extends STBIEOFCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): STBIEOFCallback;
    static create(paramarg0: (param0: number) => number): STBIEOFCallback;
    static createSafe(paramarg0: number): STBIEOFCallback;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number) => number)
    // private delegate: (param0: number) => number;
    invoke(arg0: number): number;
}