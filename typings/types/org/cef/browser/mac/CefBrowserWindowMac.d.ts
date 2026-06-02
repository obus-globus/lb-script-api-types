import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CefBrowserWindow } from '../../../../org/cef/browser/CefBrowserWindow.d.ts'
export class CefBrowserWindowMac extends Object implements CefBrowserWindow {
    constructor()
    getWindowHandle(arg0: Component): number;
}