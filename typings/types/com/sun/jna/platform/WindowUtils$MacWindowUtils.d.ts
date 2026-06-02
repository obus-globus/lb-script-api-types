import type { WindowUtils$MacWindowUtils$OSXMaskingContentPane } from '../../../../com/sun/jna/platform/WindowUtils$MacWindowUtils$OSXMaskingContentPane.d.ts'
import type { WindowUtils$NativeWindowUtils } from '../../../../com/sun/jna/platform/WindowUtils$NativeWindowUtils.d.ts'
import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Shape } from '../../../../java/awt/Shape.d.ts'
import type { Window } from '../../../../java/awt/Window.d.ts'
import type { Raster } from '../../../../java/awt/image/Raster.d.ts'
export class WindowUtils$MacWindowUtils extends WindowUtils$NativeWindowUtils {
    private constructor()
    // private fixWindowDragging(arg0: Window, arg1: string): void;
    // private installMaskingPane(arg0: Window): WindowUtils$MacWindowUtils$OSXMaskingContentPane;
    isWindowAlphaSupported(): boolean;
    // private setBackgroundTransparent(arg0: Window, arg1: boolean, arg2: string): void;
    setWindowAlpha(arg0: Window, arg1: number): void;
    setWindowMask(arg0: Component, arg1: Shape): void;
    setWindowMask(arg0: Component, arg1: Raster): void;
    setWindowTransparent(arg0: Window, arg1: boolean): void;
}