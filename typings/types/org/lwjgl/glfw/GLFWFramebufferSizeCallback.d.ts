import type { GLFWFramebufferSizeCallbackI } from '../../../org/lwjgl/glfw/GLFWFramebufferSizeCallbackI.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export abstract class GLFWFramebufferSizeCallback extends Callback implements GLFWFramebufferSizeCallbackI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWFramebufferSizeCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number) => void): GLFWFramebufferSizeCallback;
    static createSafe(paramarg0: number): GLFWFramebufferSizeCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number, arg2: number): void;
    set(arg0: number): GLFWFramebufferSizeCallback;
}