import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWIMEStatusCallback } from '../../../org/lwjgl/glfw/GLFWIMEStatusCallback.d.ts'
import type { GLFWIMEStatusCallbackI } from '../../../org/lwjgl/glfw/GLFWIMEStatusCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class GLFWIMEStatusCallback$Container extends GLFWIMEStatusCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWIMEStatusCallback;
    static create(paramarg0: (param0: number) => void): GLFWIMEStatusCallback;
    static createSafe(paramarg0: number): GLFWIMEStatusCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}