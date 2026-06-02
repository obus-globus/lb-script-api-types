import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefRequest$TransitionType } from '../../../org/cef/network/CefRequest$TransitionType.d.ts'
export interface CefLoadHandler extends Object{
    onLoadEnd(arg0: CefBrowser, arg1: CefFrame, arg2: number): void;
    onLoadError(arg0: CefBrowser, arg1: CefFrame, arg2: CefLoadHandler$ErrorCode, arg3: string, arg4: string): void;
    onLoadStart(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest$TransitionType): void;
    onLoadingStateChange(arg0: CefBrowser, arg1: boolean, arg2: boolean, arg3: boolean): void;
}