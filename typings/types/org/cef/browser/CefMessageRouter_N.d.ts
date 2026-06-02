import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefMessageRouter } from '../../../org/cef/browser/CefMessageRouter.d.ts'
import type { CefMessageRouter$CefMessageRouterConfig } from '../../../org/cef/browser/CefMessageRouter$CefMessageRouterConfig.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefMessageRouterHandler } from '../../../org/cef/handler/CefMessageRouterHandler.d.ts'
export class CefMessageRouter_N extends CefMessageRouter implements CefNative {
    static create(): CefMessageRouter;
    static create(paramarg0: CefMessageRouter$CefMessageRouterConfig): CefMessageRouter;
    static create(paramarg0: CefMessageRouter$CefMessageRouterConfig, paramarg1: CefMessageRouterHandler): CefMessageRouter;
    static create(paramarg0: CefMessageRouterHandler): CefMessageRouter;
    static createNative(paramarg0: CefMessageRouter$CefMessageRouterConfig): CefMessageRouter;
    private constructor()
    // private N_CefHandle: number;
    // private N_AddHandler(arg0: number, arg1: CefMessageRouterHandler, arg2: boolean): boolean;
    // private N_CancelPending(arg0: number, arg1: CefBrowser, arg2: CefMessageRouterHandler): void;
    // private N_Dispose(arg0: number): void;
    // private N_RemoveHandler(arg0: number, arg1: CefMessageRouterHandler): boolean;
    addHandler(arg0: CefMessageRouterHandler, arg1: boolean): boolean;
    cancelPending(arg0: CefBrowser, arg1: CefMessageRouterHandler): void;
    dispose(): void;
    getNativeRef(arg0: string): number;
    removeHandler(arg0: CefMessageRouterHandler): boolean;
    setNativeRef(arg0: string, arg1: number): void;
}