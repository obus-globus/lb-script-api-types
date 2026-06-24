import type { WindowUtils$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { DesktopWindow } from '../../../../com/sun/jna/platform/DesktopWindow.d.ts'
import type { WindowUtils$NativeWindowUtils } from '../../../../com/sun/jna/platform/WindowUtils$NativeWindowUtils.d.ts'
import type { WinDef$HICON } from '../../../../com/sun/jna/platform/win32/WinDef$HICON.d.ts'
import type { WinDef$HRGN } from '../../../../com/sun/jna/platform/win32/WinDef$HRGN.d.ts'
import type { WinDef$HWND } from '../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Dimension } from '../../../../java/awt/Dimension.d.ts'
import type { Rectangle } from '../../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../../java/awt/Shape.d.ts'
import type { Window } from '../../../../java/awt/Window.d.ts'
import type { Area } from '../../../../java/awt/geom/Area.d.ts'
import type { BufferedImage } from '../../../../java/awt/image/BufferedImage.d.ts'
import type { Raster } from '../../../../java/awt/image/Raster.d.ts'
import type { Icon } from '../../../../javax/swing/Icon.d.ts'
export class WindowUtils$W32WindowUtils extends WindowUtils$NativeWindowUtils {
    private constructor()
    constructor(arg0: WindowUtils$1)
    getAllWindows(arg0: boolean): DesktopWindow[];
    // private getAlpha(arg0: Window): number;
    // private getHWnd(arg0: Component): WinDef$HWND;
    getIconSize(arg0: WinDef$HICON): Dimension;
    getProcessFilePath(arg0: WinDef$HWND): string;
    getWindowIcon(arg0: WinDef$HWND): BufferedImage;
    getWindowLocationAndSize(arg0: WinDef$HWND): Rectangle;
    getWindowTitle(arg0: WinDef$HWND): string;
    isWindowAlphaSupported(): boolean;
    // private setMask(arg0: Component, arg1: Area): void;
    setMask(arg0: Component, arg1: Raster): void;
    setWindowAlpha(arg0: Window, arg1: number): void;
    setWindowMask(arg0: Component, arg1: Shape): void;
    setWindowMask(arg0: Component, arg1: Raster): void;
    setWindowMask(arg0: Component, arg1: Icon): void;
    // private setWindowRegion(arg0: Component, arg1: WinDef$HRGN): void;
    setWindowTransparent(arg0: Window, arg1: boolean): void;
    // private storeAlpha(arg0: Window, arg1: number): void;
    // private usingUpdateLayeredWindow(arg0: Window): boolean;
}