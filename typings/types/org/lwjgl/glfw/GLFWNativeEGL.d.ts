import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class GLFWNativeEGL extends Object {
    static glfwGetEGLConfig(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static glfwGetEGLContext(paramarg0: number): number;
    static glfwGetEGLDisplay(): number;
    static glfwGetEGLSurface(paramarg0: number): number;
    static nglfwGetEGLConfig(paramarg0: number, paramarg1: number): number;
    static setEGLPath(paramarg0: string): void;
    static setEGLPath(paramarg0: (param0: ByteBuffer) => number): void;
    static setGLESPath(paramarg0: string): void;
    static setGLESPath(paramarg0: (param0: ByteBuffer) => number): void;
    constructor()
}