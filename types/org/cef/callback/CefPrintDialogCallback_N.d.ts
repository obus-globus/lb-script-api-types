import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefPrintDialogCallback } from '../../../org/cef/callback/CefPrintDialogCallback.d.ts'
import type { CefPrintSettings } from '../../../org/cef/misc/CefPrintSettings.d.ts'
export class CefPrintDialogCallback_N extends CefNativeAdapter implements CefPrintDialogCallback {
    constructor()
    Continue(arg0: CefPrintSettings): void;
    // private N_Cancel(arg0: number): void;
    // private N_Continue(arg0: number, arg1: CefPrintSettings): void;
    cancel(): void;
    finalize(): void;
}