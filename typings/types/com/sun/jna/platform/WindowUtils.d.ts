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
import type { Icon } from '../../../../javax/swing/Icon.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WindowUtils extends Object {
    static MASK_NONE: Shape;
    static getAllWindows(paramarg0: boolean): DesktopWindow[];
    static getAlphaCompatibleGraphicsConfiguration(): GraphicsConfiguration;
    static getIconSize(paramarg0: WinDef$HICON): Dimension;
    static getProcessFilePath(paramarg0: WinDef$HWND): string;
    static getWindowIcon(paramarg0: WinDef$HWND): BufferedImage;
    static getWindowLocationAndSize(paramarg0: WinDef$HWND): Rectangle;
    static getWindowTitle(paramarg0: WinDef$HWND): string;
    static isWindowAlphaSupported(): boolean;
    static setComponentMask(paramarg0: Component, paramarg1: Shape): void;
    static setWindowAlpha(paramarg0: Window, paramarg1: number): void;
    static setWindowMask(paramarg0: Window, paramarg1: Shape): void;
    static setWindowMask(paramarg0: Window, paramarg1: Icon): void;
    static setWindowTransparent(paramarg0: Window, paramarg1: boolean): void;
    constructor()
}