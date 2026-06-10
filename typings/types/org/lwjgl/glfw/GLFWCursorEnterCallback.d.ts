import type { GLFWCursorEnterCallbackI } from '../../../org/lwjgl/glfw/GLFWCursorEnterCallbackI.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export abstract class GLFWCursorEnterCallback extends Callback implements GLFWCursorEnterCallbackI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWCursorEnterCallback;
    static create(paramarg0: (param0: number, param1: boolean) => void): GLFWCursorEnterCallback;
    static createSafe(paramarg0: number): GLFWCursorEnterCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    set(arg0: number): GLFWCursorEnterCallback;
}