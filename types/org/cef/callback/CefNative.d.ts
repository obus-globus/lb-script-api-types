import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefNative extends Object{
    getNativeRef(arg0: string): number;
    setNativeRef(arg0: string, arg1: number): void;
}