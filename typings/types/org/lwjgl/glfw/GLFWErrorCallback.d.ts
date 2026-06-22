import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { GLFWErrorCallbackI } from '../../../org/lwjgl/glfw/GLFWErrorCallbackI.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export abstract class GLFWErrorCallback extends Callback implements GLFWErrorCallbackI {
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
    static get(paramarg0: number): CallbackI | null;
    static getDescription(paramarg0: number): string;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number): void;
    set(): GLFWErrorCallback;
}