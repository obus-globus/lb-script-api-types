import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefJSDialogCallback } from '../../../org/cef/callback/CefJSDialogCallback.d.ts'
import type { CefJSDialogHandler } from '../../../org/cef/handler/CefJSDialogHandler.d.ts'
import type { CefJSDialogHandler$JSDialogType } from '../../../org/cef/handler/CefJSDialogHandler$JSDialogType.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
export abstract class CefJSDialogHandlerAdapter extends Object implements CefJSDialogHandler {
    constructor()
    onBeforeUnloadDialog(arg0: CefBrowser, arg1: string, arg2: boolean, arg3: CefJSDialogCallback): boolean;
    onDialogClosed(arg0: CefBrowser): void;
    onJSDialog(arg0: CefBrowser, arg1: string, arg2: CefJSDialogHandler$JSDialogType, arg3: string, arg4: string, arg5: CefJSDialogCallback, arg6: BoolRef): boolean;
    onResetDialogState(arg0: CefBrowser): void;
}