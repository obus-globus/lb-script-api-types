import type { GLFWAllocateCallback } from '../../../org/lwjgl/glfw/GLFWAllocateCallback.d.ts'
import type { GLFWAllocateCallbackI } from '../../../org/lwjgl/glfw/GLFWAllocateCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class GLFWAllocateCallback$Container extends GLFWAllocateCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWAllocateCallback;
    static create(paramarg0: (param0: number, param1: number) => number): GLFWAllocateCallback;
    static createSafe(paramarg0: number): GLFWAllocateCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => number)
    // private delegate: (param0: number, param1: number) => number;
    invoke(arg0: number, arg1: number): number;
}