import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class GLFWNativeWGL extends Object {
    static glfwGetWGLContext(paramarg0: number): number;
    static setPath(paramarg0: string): void;
    static setPath(paramarg0: (param0: ByteBuffer) => number): void;
    constructor()
}