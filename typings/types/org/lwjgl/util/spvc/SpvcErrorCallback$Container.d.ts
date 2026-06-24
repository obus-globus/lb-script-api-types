import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { SpvcErrorCallback } from '../../../../org/lwjgl/util/spvc/SpvcErrorCallback.d.ts'
import type { SpvcErrorCallbackI } from '../../../../org/lwjgl/util/spvc/SpvcErrorCallbackI.d.ts'
export class SpvcErrorCallback$Container extends SpvcErrorCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): SpvcErrorCallback;
    static create(paramarg0: (param0: number, param1: number) => void): SpvcErrorCallback;
    static createSafe(paramarg0: number): SpvcErrorCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getError(paramarg0: number): string;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => void)
    // private delegate: (param0: number, param1: number) => void;
    invoke(arg0: number, arg1: number): void;
}