import type { CefAuthCallback } from '../../../org/cef/callback/CefAuthCallback.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefAuthCallback_N extends CefNativeAdapter implements CefAuthCallback {
    constructor()
    Continue(arg0: string, arg1: string): void;
    // private N_Cancel(arg0: number): void;
    // private N_Continue(arg0: number, arg1: string, arg2: string): void;
    cancel(): void;
    finalize(): void;
}