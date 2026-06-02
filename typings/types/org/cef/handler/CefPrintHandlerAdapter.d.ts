import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefPrintDialogCallback } from '../../../org/cef/callback/CefPrintDialogCallback.d.ts'
import type { CefPrintJobCallback } from '../../../org/cef/callback/CefPrintJobCallback.d.ts'
import type { CefPrintHandler } from '../../../org/cef/handler/CefPrintHandler.d.ts'
import type { CefPrintSettings } from '../../../org/cef/misc/CefPrintSettings.d.ts'
export abstract class CefPrintHandlerAdapter extends CefNativeAdapter implements CefPrintHandler {
    constructor()
    getPdfPaperSize(arg0: CefBrowser, arg1: number): Dimension;
    onPrintDialog(arg0: CefBrowser, arg1: boolean, arg2: CefPrintDialogCallback): boolean;
    onPrintJob(arg0: CefBrowser, arg1: string, arg2: string, arg3: CefPrintJobCallback): boolean;
    onPrintReset(arg0: CefBrowser): void;
    onPrintSettings(arg0: CefBrowser, arg1: CefPrintSettings, arg2: boolean): void;
    onPrintStart(arg0: CefBrowser): void;
}