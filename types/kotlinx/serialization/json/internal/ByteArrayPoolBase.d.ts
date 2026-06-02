import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteArrayPoolBase extends Object {
    constructor()
    // private arrays: number[][];
    // private bytesTotal: number;
    protected releaseImpl(array: number[]): void;
    protected take(size: number): number[];
}