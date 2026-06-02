import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefResourceReadCallback } from '../../../org/cef/callback/CefResourceReadCallback.d.ts'
export class CefResourceReadCallback_N extends CefNativeAdapter implements CefResourceReadCallback {
    constructor()
    // private N_JavaBuffer: number[];
    // private N_NativeBufferRef: number;
    Continue(arg0: number): void;
    // private N_Continue(arg0: number, arg1: number, arg2: number, arg3: number[]): void;
    finalize(): void;
    getBuffer(): number[];
    setBufferRefs(arg0: number, arg1: number[]): void;
}