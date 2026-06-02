import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefMessageRouter } from '../../../org/cef/browser/CefMessageRouter.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefAudioHandler } from '../../../org/cef/handler/CefAudioHandler.d.ts'
import type { CefContextMenuHandler } from '../../../org/cef/handler/CefContextMenuHandler.d.ts'
import type { CefDialogHandler } from '../../../org/cef/handler/CefDialogHandler.d.ts'
import type { CefDisplayHandler } from '../../../org/cef/handler/CefDisplayHandler.d.ts'
import type { CefDownloadHandler } from '../../../org/cef/handler/CefDownloadHandler.d.ts'
import type { CefDragHandler } from '../../../org/cef/handler/CefDragHandler.d.ts'
import type { CefFocusHandler } from '../../../org/cef/handler/CefFocusHandler.d.ts'
import type { CefJSDialogHandler } from '../../../org/cef/handler/CefJSDialogHandler.d.ts'
import type { CefKeyboardHandler } from '../../../org/cef/handler/CefKeyboardHandler.d.ts'
import type { CefLifeSpanHandler } from '../../../org/cef/handler/CefLifeSpanHandler.d.ts'
import type { CefLoadHandler } from '../../../org/cef/handler/CefLoadHandler.d.ts'
import type { CefPrintHandler } from '../../../org/cef/handler/CefPrintHandler.d.ts'
import type { CefRenderHandler } from '../../../org/cef/handler/CefRenderHandler.d.ts'
import type { CefRequestHandler } from '../../../org/cef/handler/CefRequestHandler.d.ts'
import type { CefWindowHandler } from '../../../org/cef/handler/CefWindowHandler.d.ts'
export abstract class CefClientHandler extends Object implements CefNative {
    constructor()
    // private N_CefHandle: { [key: string]: number };
    // private msgRouters: CefMessageRouter[];
    // private N_CefClientHandler_CTOR(): void;
    // private N_CefClientHandler_DTOR(): void;
    // private N_addMessageRouter(arg0: CefMessageRouter): void;
    // private N_removeAudioHandler(arg0: CefAudioHandler): void;
    // private N_removeContextMenuHandler(arg0: CefContextMenuHandler): void;
    // private N_removeDialogHandler(arg0: CefDialogHandler): void;
    // private N_removeDisplayHandler(arg0: CefDisplayHandler): void;
    // private N_removeDownloadHandler(arg0: CefDownloadHandler): void;
    // private N_removeDragHandler(arg0: CefDragHandler): void;
    // private N_removeFocusHandler(arg0: CefFocusHandler): void;
    // private N_removeJSDialogHandler(arg0: CefJSDialogHandler): void;
    // private N_removeKeyboardHandler(arg0: CefKeyboardHandler): void;
    // private N_removeLifeSpanHandler(arg0: CefLifeSpanHandler): void;
    // private N_removeLoadHandler(arg0: CefLoadHandler): void;
    // private N_removeMessageRouter(arg0: CefMessageRouter): void;
    // private N_removePrintHandler(arg0: CefPrintHandler): void;
    // private N_removeRenderHandler(arg0: CefRenderHandler): void;
    // private N_removeRequestHandler(arg0: CefRequestHandler): void;
    // private N_removeWindowHandler(arg0: CefWindowHandler): void;
    addMessageRouter(arg0: CefMessageRouter): void;
    dispose(): void;
    getAllBrowser(): Object[];
    getAudioHandler(): CefAudioHandler;
    getBrowser(arg0: number): CefBrowser;
    getContextMenuHandler(): CefContextMenuHandler;
    getDialogHandler(): CefDialogHandler;
    getDisplayHandler(): CefDisplayHandler;
    getDownloadHandler(): CefDownloadHandler;
    getDragHandler(): CefDragHandler;
    getFocusHandler(): CefFocusHandler;
    getJSDialogHandler(): CefJSDialogHandler;
    getKeyboardHandler(): CefKeyboardHandler;
    getLifeSpanHandler(): CefLifeSpanHandler;
    getLoadHandler(): CefLoadHandler;
    getNativeRef(arg0: string): number;
    getPrintHandler(): CefPrintHandler;
    getRenderHandler(): CefRenderHandler;
    getRequestHandler(): CefRequestHandler;
    getWindowHandler(): CefWindowHandler;
    removeAudioHandler(arg0: CefAudioHandler): void;
    removeContextMenuHandler(arg0: CefContextMenuHandler): void;
    removeDialogHandler(arg0: CefDialogHandler): void;
    removeDisplayHandler(arg0: CefDisplayHandler): void;
    removeDownloadHandler(arg0: CefDownloadHandler): void;
    removeDragHandler(arg0: CefDragHandler): void;
    removeFocusHandler(arg0: CefFocusHandler): void;
    removeJSDialogHandler(arg0: CefJSDialogHandler): void;
    removeKeyboardHandler(arg0: CefKeyboardHandler): void;
    removeLifeSpanHandler(arg0: CefLifeSpanHandler): void;
    removeLoadHandler(arg0: CefLoadHandler): void;
    removeMessageRouter(arg0: CefMessageRouter): void;
    removePrintHandler(arg0: CefPrintHandler): void;
    removeRenderHandler(arg0: CefRenderHandler): void;
    removeRequestHandler(arg0: CefRequestHandler): void;
    removeWindowHandler(arg0: CefWindowHandler): void;
    setNativeRef(arg0: string, arg1: number): void;
}