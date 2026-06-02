import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWErrorCallback } from '../../../org/lwjgl/glfw/GLFWErrorCallback.d.ts'
import type { GLFWErrorCallbackI } from '../../../org/lwjgl/glfw/GLFWErrorCallbackI.d.ts'
export class GLFWErrorScope extends Object implements AutoCloseable {
    constructor(callback: (param0: number, param1: number) => void)
    // private expectedCallback: GLFWErrorCallback;
    // private previousCallback: GLFWErrorCallback;
    close(): void;
}