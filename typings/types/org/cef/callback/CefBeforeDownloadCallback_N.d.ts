import type { CefBeforeDownloadCallback } from '../../../org/cef/callback/CefBeforeDownloadCallback.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefBeforeDownloadCallback_N extends CefNativeAdapter implements CefBeforeDownloadCallback {
    constructor()
    Continue(arg0: string, arg1: boolean): void;
    // private N_Continue(arg0: number, arg1: string, arg2: boolean): void;
    finalize(): void;
}