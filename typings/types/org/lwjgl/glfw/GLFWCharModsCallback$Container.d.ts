import type { GLFWCharModsCallback } from '../../../org/lwjgl/glfw/GLFWCharModsCallback.d.ts'
import type { GLFWCharModsCallbackI } from '../../../org/lwjgl/glfw/GLFWCharModsCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class GLFWCharModsCallback$Container extends GLFWCharModsCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWCharModsCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number) => void): GLFWCharModsCallback;
    static createSafe(paramarg0: number): GLFWCharModsCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number) => void)
    // private delegate: (param0: number, param1: number, param2: number) => void;
    invoke(arg0: number, arg1: number, arg2: number): void;
}