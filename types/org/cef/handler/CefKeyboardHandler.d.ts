import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefKeyboardHandler$CefKeyEvent } from '../../../org/cef/handler/CefKeyboardHandler$CefKeyEvent.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
export interface CefKeyboardHandler extends Object{
    onKeyEvent(arg0: CefBrowser, arg1: CefKeyboardHandler$CefKeyEvent): boolean;
    onPreKeyEvent(arg0: CefBrowser, arg1: CefKeyboardHandler$CefKeyEvent, arg2: BoolRef): boolean;
}