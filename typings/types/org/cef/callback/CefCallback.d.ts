import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefCallback extends Object{
    Continue(): void;
    cancel(): void;
}