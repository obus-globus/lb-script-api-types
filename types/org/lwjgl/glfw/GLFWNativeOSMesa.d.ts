import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class GLFWNativeOSMesa extends Object {
    static glfwGetOSMesaColorBuffer(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: PointerBuffer): boolean;
    static glfwGetOSMesaColorBuffer(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: PointerBuffer): boolean;
    static glfwGetOSMesaContext(paramarg0: number): number;
    static glfwGetOSMesaDepthBuffer(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: PointerBuffer): number;
    static glfwGetOSMesaDepthBuffer(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: PointerBuffer): number;
    static nglfwGetOSMesaColorBuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nglfwGetOSMesaDepthBuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static setPath(paramarg0: string): void;
    static setPath(paramarg0: (param0: ByteBuffer) => kotlin.Long): void;
    constructor()
}