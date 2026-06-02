import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class GLFWNativeX11 extends Object {
    static glfwGetX11Adapter(paramarg0: number): number;
    static glfwGetX11Display(): number;
    static glfwGetX11Monitor(paramarg0: number): number;
    static glfwGetX11SelectionString(): string;
    static glfwGetX11Window(paramarg0: number): number;
    static glfwSetX11SelectionString(paramarg0: CharSequence): void;
    static glfwSetX11SelectionString(paramarg0: ByteBuffer): void;
    static nglfwGetX11SelectionString(): number;
    static nglfwSetX11SelectionString(paramarg0: number): void;
    constructor()
}