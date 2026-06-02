import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefMessageRouter$CefMessageRouterConfig } from '../../../org/cef/browser/CefMessageRouter$CefMessageRouterConfig.d.ts'
import type { CefMessageRouterHandler } from '../../../org/cef/handler/CefMessageRouterHandler.d.ts'
export abstract class CefMessageRouter extends Object {
    static create(): CefMessageRouter;
    static create(paramarg0: CefMessageRouter$CefMessageRouterConfig): CefMessageRouter;
    static create(paramarg0: CefMessageRouter$CefMessageRouterConfig, paramarg1: CefMessageRouterHandler): CefMessageRouter;
    static create(paramarg0: CefMessageRouterHandler): CefMessageRouter;
    constructor()
    // private routerConfig_: CefMessageRouter$CefMessageRouterConfig;
    addHandler(arg0: CefMessageRouterHandler, arg1: boolean): boolean;
    cancelPending(arg0: CefBrowser, arg1: CefMessageRouterHandler): void;
    dispose(): void;
    finalize(): void;
    getMessageRouterConfig(): CefMessageRouter$CefMessageRouterConfig;
    removeHandler(arg0: CefMessageRouterHandler): boolean;
    setMessageRouterConfig(arg0: CefMessageRouter$CefMessageRouterConfig): void;
}