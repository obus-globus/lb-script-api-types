import type { DesktopWindow } from '../../../../com/sun/jna/platform/DesktopWindow.d.ts'
import type { WinDef$HICON } from '../../../../com/sun/jna/platform/win32/WinDef$HICON.d.ts'
import type { WinDef$HWND } from '../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Dimension } from '../../../../java/awt/Dimension.d.ts'
import type { GraphicsConfiguration } from '../../../../java/awt/GraphicsConfiguration.d.ts'
import type { Rectangle } from '../../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../../java/awt/Shape.d.ts'
import type { Window } from '../../../../java/awt/Window.d.ts'
import type { BufferedImage } from '../../../../java/awt/image/BufferedImage.d.ts'
import type { Raster } from '../../../../java/awt/image/Raster.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Icon } from '../../../../javax/swing/Icon.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class WindowUtils$NativeWindowUtils extends Object {
    constructor()
    getAllWindows(arg0: boolean): DesktopWindow[];
    getAlphaCompatibleGraphicsConfiguration(): GraphicsConfiguration;
    getIconSize(arg0: WinDef$HICON): Dimension;
    getProcessFilePath(arg0: WinDef$HWND): string;
    getWindow(arg0: Component): Window;
    getWindowIcon(arg0: WinDef$HWND): BufferedImage;
    getWindowLocationAndSize(arg0: WinDef$HWND): Rectangle;
    getWindowTitle(arg0: WinDef$HWND): string;
    isWindowAlphaSupported(): boolean;
    setDoubleBuffered(arg0: Component, arg1: boolean): void;
    setForceHeavyweightPopups(arg0: Window, arg1: boolean): void;
    setLayersTransparent(arg0: Window, arg1: boolean): void;
    setMask(arg0: Component, arg1: Raster): void;
    setWindowAlpha(arg0: Window, arg1: number): void;
    setWindowMask(arg0: Component, arg1: Shape): void;
    setWindowMask(arg0: Component, arg1: Raster): void;
    setWindowMask(arg0: Component, arg1: Icon): void;
    setWindowTransparent(arg0: Window, arg1: boolean): void;
    toRaster(arg0: Component, arg1: Icon): Raster;
    toRaster(arg0: Shape): Raster;
    toShape(arg0: Raster): Shape;
    whenDisplayable(arg0: Component, arg1: () => void): void;
}