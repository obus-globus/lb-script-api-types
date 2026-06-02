import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefAuthCallback } from '../../../org/cef/callback/CefAuthCallback.d.ts'
import type { CefCallback } from '../../../org/cef/callback/CefCallback.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefRequestHandler$TerminationStatus } from '../../../org/cef/handler/CefRequestHandler$TerminationStatus.d.ts'
import type { CefResourceRequestHandler } from '../../../org/cef/handler/CefResourceRequestHandler.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
export interface CefRequestHandler extends Object{
    getAuthCredentials(arg0: CefBrowser, arg1: string, arg2: boolean, arg3: string, arg4: number, arg5: string, arg6: string, arg7: CefAuthCallback): boolean;
    getResourceRequestHandler(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: boolean, arg4: boolean, arg5: string, arg6: BoolRef): CefResourceRequestHandler;
    onBeforeBrowse(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: boolean, arg4: boolean): boolean;
    onCertificateError(arg0: CefBrowser, arg1: CefLoadHandler$ErrorCode, arg2: string, arg3: CefCallback): boolean;
    onOpenURLFromTab(arg0: CefBrowser, arg1: CefFrame, arg2: string, arg3: boolean): boolean;
    onRenderProcessTerminated(arg0: CefBrowser, arg1: CefRequestHandler$TerminationStatus, arg2: number, arg3: string): void;
}