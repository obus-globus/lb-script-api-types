import type { CefRegistration } from '../../../org/cef/browser/CefRegistration.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
export class CefRegistration_N extends CefRegistration implements CefNative {
    constructor()
    // private N_CefHandle: number;
    // private N_Dispose(arg0: number): void;
    dispose(): void;
    getNativeRef(arg0: string): number;
    setNativeRef(arg0: string, arg1: number): void;
}