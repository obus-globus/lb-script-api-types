import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
export class CefNativeAdapter extends Object implements CefNative {
    constructor()
    // private N_CefHandle: number;
    getNativeRef(arg0: string): number;
    setNativeRef(arg0: string, arg1: number): void;
}