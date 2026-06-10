import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class GLFWNativeGLX extends Object {
    static glfwGetGLXContext(paramarg0: number): number;
    static glfwGetGLXFBConfig(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static glfwGetGLXWindow(paramarg0: number): number;
    static nglfwGetGLXFBConfig(paramarg0: number, paramarg1: number): number;
    static setPath(paramarg0: string): void;
    static setPath(paramarg0: (param0: ByteBuffer) => number): void;
    constructor()
}