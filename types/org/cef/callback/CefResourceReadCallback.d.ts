import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefResourceReadCallback extends Object{
    Continue(arg0: number): void;
    getBuffer(): number[];
}