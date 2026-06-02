import type { CefFileDialogCallback } from '../../../org/cef/callback/CefFileDialogCallback.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefFileDialogCallback_N extends CefNativeAdapter implements CefFileDialogCallback {
    constructor()
    Cancel(): void;
    Continue(arg0: string[]): void;
    // private N_Cancel(arg0: number): void;
    // private N_Continue(arg0: number, arg1: string[]): void;
    finalize(): void;
}