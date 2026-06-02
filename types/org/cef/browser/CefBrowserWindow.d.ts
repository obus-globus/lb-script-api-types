import type { Component } from '../../../java/awt/Component.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefBrowserWindow extends Object{
    getWindowHandle(arg0: Component): number;
}