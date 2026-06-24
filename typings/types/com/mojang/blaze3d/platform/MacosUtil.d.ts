import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export class MacosUtil extends Object {
    static IS_MACOS: boolean;
    static clearResizableBit(paramwindow: Window): void;
    static exitNativeFullscreen(paramwindow: Window): void;
    static loadIcon(paramicon: () => InputStream): void;
    static setWindowColorSpaceForOpenGLBecauseGLFWDoesnt(paramglfwWindowHandle: number): void;
    constructor()
}