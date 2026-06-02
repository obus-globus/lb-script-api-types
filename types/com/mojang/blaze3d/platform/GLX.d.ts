import type { BackendOptions } from '../../../../com/mojang/blaze3d/platform/BackendOptions.d.ts'
import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { LongSupplier } from '../../../../java/util/function/LongSupplier.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GLFWErrorCallbackI } from '../../../../org/lwjgl/glfw/GLFWErrorCallbackI.d.ts'
export class GLX extends Object {
    static _getCpuInfo(): string;
    static _getLWJGLVersion(): string;
    static _getRefreshRate(paramwindow: Window): number;
    static _initGlfw(paramoptions: BackendOptions): () => kotlin.Long;
    static _setGlfwErrorCallback(paramonFullscreenError: (param0: number, param1: number) => void): void;
    static _shouldClose(paramwindow: Window): boolean;
    static glfwBool(paramvalue: boolean): number;
    static make(paramfactory: () => Object | null): Object | null;
    constructor()
}