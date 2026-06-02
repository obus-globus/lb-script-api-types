import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWErrorCallback } from '../../../org/lwjgl/glfw/GLFWErrorCallback.d.ts'
import type { GLFWErrorCallbackI } from '../../../org/lwjgl/glfw/GLFWErrorCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class GLFWErrorCallback$Container extends GLFWErrorCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLFWErrorCallback;
    static create(paramarg0: (param0: number, param1: number) => void): GLFWErrorCallback;
    static createPrint(): GLFWErrorCallback;
    static createPrint(paramarg0: PrintStream): GLFWErrorCallback;
    static createSafe(paramarg0: number): GLFWErrorCallback;
    static createThrow(): GLFWErrorCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getDescription(paramarg0: number): string;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => void)
    // private delegate: (param0: number, param1: number) => void;
    invoke(arg0: number, arg1: number): void;
}