import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWDeallocateCallback } from '../../../org/lwjgl/glfw/GLFWDeallocateCallback.d.ts'
import type { GLFWDeallocateCallbackI } from '../../../org/lwjgl/glfw/GLFWDeallocateCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class GLFWDeallocateCallback$Container extends GLFWDeallocateCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWDeallocateCallback;
    static create(paramarg0: (param0: number, param1: number) => void): GLFWDeallocateCallback;
    static createSafe(paramarg0: number): GLFWDeallocateCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => void)
    // private delegate: (param0: number, param1: number) => void;
    invoke(arg0: number, arg1: number): void;
}