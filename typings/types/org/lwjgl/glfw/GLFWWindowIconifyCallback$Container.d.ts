import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWWindowIconifyCallback } from '../../../org/lwjgl/glfw/GLFWWindowIconifyCallback.d.ts'
import type { GLFWWindowIconifyCallbackI } from '../../../org/lwjgl/glfw/GLFWWindowIconifyCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class GLFWWindowIconifyCallback$Container extends GLFWWindowIconifyCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWWindowIconifyCallback;
    static create(paramarg0: (param0: number, param1: boolean) => void): GLFWWindowIconifyCallback;
    static createSafe(paramarg0: number): GLFWWindowIconifyCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: boolean) => void)
    // private delegate: (param0: number, param1: boolean) => void;
    invoke(arg0: number, arg1: boolean): void;
}