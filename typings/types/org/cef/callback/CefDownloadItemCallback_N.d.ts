import type { CefDownloadItemCallback } from '../../../org/cef/callback/CefDownloadItemCallback.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefDownloadItemCallback_N extends CefNativeAdapter implements CefDownloadItemCallback {
    constructor()
    // private N_Cancel(arg0: number): void;
    // private N_Dispose(arg0: number): void;
    // private N_Pause(arg0: number): void;
    // private N_Resume(arg0: number): void;
    cancel(): void;
    finalize(): void;
    pause(): void;
    resume(): void;
}