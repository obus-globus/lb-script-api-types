import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefQueryCallback } from '../../../org/cef/callback/CefQueryCallback.d.ts'
export class CefQueryCallback_N extends CefNativeAdapter implements CefQueryCallback {
    constructor()
    // private N_Failure(arg0: number, arg1: number, arg2: string): void;
    // private N_Success(arg0: number, arg1: string): void;
    failure(arg0: number, arg1: string): void;
    finalize(): void;
    success(arg0: string): void;
}