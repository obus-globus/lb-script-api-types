import type { WindowUtils$NativeWindowUtils } from '../../../../com/sun/jna/platform/WindowUtils$NativeWindowUtils.d.ts'
import type { WindowUtils$X11WindowUtils$PixmapSource } from '../../../../com/sun/jna/platform/WindowUtils$X11WindowUtils$PixmapSource.d.ts'
import type { Component } from '../../../../java/awt/Component.d.ts'
import type { GraphicsConfiguration } from '../../../../java/awt/GraphicsConfiguration.d.ts'
import type { Window } from '../../../../java/awt/Window.d.ts'
import type { Raster } from '../../../../java/awt/image/Raster.d.ts'
export class WindowUtils$X11WindowUtils extends WindowUtils$NativeWindowUtils {
    constructor(arg0: any)
    // private alphaVisualIDs: number[];
    // private didCheck: boolean;
    getAlphaCompatibleGraphicsConfiguration(): GraphicsConfiguration;
    // private getAlphaVisualIDs(): number[];
    isWindowAlphaSupported(): boolean;
    setMask(arg0: Component, arg1: Raster): void;
    setWindowAlpha(arg0: Window, arg1: number): void;
    // private setWindowShape(arg0: Window, arg1: WindowUtils$X11WindowUtils$PixmapSource): void;
    setWindowTransparent(arg0: Window, arg1: boolean): void;
}