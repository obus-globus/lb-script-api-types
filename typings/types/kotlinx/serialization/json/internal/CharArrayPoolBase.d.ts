import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharArrayPoolBase extends Object {
    constructor()
    // private arrays: string[][];
    // private charsTotal: number;
    protected releaseImpl(array: string[]): void;
    protected take(size: number): string[];
}