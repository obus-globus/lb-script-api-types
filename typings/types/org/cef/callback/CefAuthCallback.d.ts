import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefAuthCallback extends Object{
    Continue(arg0: string, arg1: string): void;
    cancel(): void;
}