import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWWindowCloseCallbackI } from '../../../org/lwjgl/glfw/GLFWWindowCloseCallbackI.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export abstract class GLFWWindowCloseCallback extends Callback implements GLFWWindowCloseCallbackI {
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
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    set(arg0: number): GLFWWindowCloseCallback;
}