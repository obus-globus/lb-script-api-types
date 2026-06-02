import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefLifeSpanHandler } from '../../../org/cef/handler/CefLifeSpanHandler.d.ts'
export abstract class CefLifeSpanHandlerAdapter extends Object implements CefLifeSpanHandler {
    constructor()
    doClose(arg0: CefBrowser): boolean;
    onAfterCreated(arg0: CefBrowser): void;
    onAfterParentChanged(arg0: CefBrowser): void;
    onBeforeClose(arg0: CefBrowser): void;
    onBeforePopup(arg0: CefBrowser, arg1: CefFrame, arg2: string, arg3: string): boolean;
}