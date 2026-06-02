import type { Object } from '../../../java/lang/Object.d.ts'
export interface PathIterator extends Object{
    currentSegment(arg0: number[]): number;
    currentSegment(arg0: number[]): number;
    getWindingRule(): number;
    isDone(): boolean;
    next(): void;
}