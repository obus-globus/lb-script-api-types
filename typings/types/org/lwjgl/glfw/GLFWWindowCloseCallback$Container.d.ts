import type { GLFWWindowCloseCallback } from '../../../org/lwjgl/glfw/GLFWWindowCloseCallback.d.ts'
import type { GLFWWindowCloseCallbackI } from '../../../org/lwjgl/glfw/GLFWWindowCloseCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class GLFWWindowCloseCallback$Container extends GLFWWindowCloseCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWWindowCloseCallback;
    static create(paramarg0: (param0: number) => void): GLFWWindowCloseCallback;
    static createSafe(paramarg0: number): GLFWWindowCloseCallback;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}