import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefPrintDialogCallback } from '../../../org/cef/callback/CefPrintDialogCallback.d.ts'
import type { CefPrintJobCallback } from '../../../org/cef/callback/CefPrintJobCallback.d.ts'
import type { CefPrintSettings } from '../../../org/cef/misc/CefPrintSettings.d.ts'
export interface CefPrintHandler extends Object, CefNative{
    getNativeRef(arg0: string): number;
    getPdfPaperSize(arg0: CefBrowser, arg1: number): Dimension;
    onPrintDialog(arg0: CefBrowser, arg1: boolean, arg2: CefPrintDialogCallback): boolean;
    onPrintJob(arg0: CefBrowser, arg1: string, arg2: string, arg3: CefPrintJobCallback): boolean;
    onPrintReset(arg0: CefBrowser): void;
    onPrintSettings(arg0: CefBrowser, arg1: CefPrintSettings, arg2: boolean): void;
    onPrintStart(arg0: CefBrowser): void;
    setNativeRef(arg0: string, arg1: number): void;
}