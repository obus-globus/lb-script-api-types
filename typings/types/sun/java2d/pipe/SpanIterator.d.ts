import type { Object } from '../../../java/lang/Object.d.ts'
export interface SpanIterator extends Object{
    getNativeIterator(): number;
    getPathBox(arg0: number[]): void;
    intersectClipBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
    nextSpan(arg0: number[]): boolean;
    skipDownTo(arg0: number): void;
}