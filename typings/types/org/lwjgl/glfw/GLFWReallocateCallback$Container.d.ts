import type { GLFWReallocateCallback } from '../../../org/lwjgl/glfw/GLFWReallocateCallback.d.ts'
import type { GLFWReallocateCallbackI } from '../../../org/lwjgl/glfw/GLFWReallocateCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class GLFWReallocateCallback$Container extends GLFWReallocateCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWReallocateCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number) => number): GLFWReallocateCallback;
    static createSafe(paramarg0: number): GLFWReallocateCallback;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number) => number)
    // private delegate: (param0: number, param1: number, param2: number) => number;
    invoke(arg0: number, arg1: number, arg2: number): number;
}