import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { STBIReadCallback } from '../../../org/lwjgl/stb/STBIReadCallback.d.ts'
import type { STBIReadCallbackI } from '../../../org/lwjgl/stb/STBIReadCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class STBIReadCallback$Container extends STBIReadCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): STBIReadCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number) => number): STBIReadCallback;
    static createSafe(paramarg0: number): STBIReadCallback;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getData(paramarg0: number, paramarg1: number): ByteBuffer;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number) => number)
    // private delegate: (param0: number, param1: number, param2: number) => number;
    invoke(arg0: number, arg1: number, arg2: number): number;
}