import type { CefCallback } from '../../../org/cef/callback/CefCallback.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefCallback_N extends CefNativeAdapter implements CefCallback {
    constructor()
    Continue(): void;
    // private N_Cancel(arg0: number): void;
    // private N_Continue(arg0: number): void;
    cancel(): void;
    finalize(): void;
}