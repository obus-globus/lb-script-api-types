import type { Object } from '../../../../java/lang/Object.d.ts'
export class BidiRun extends Object {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    // private insertRemove: number;
    // private level: number;
    limit: number;
    start: number;
    copyFrom(arg0: BidiRun): void;
    getDirection(): number;
    getEmbeddingLevel(): number;
    getLength(): number;
    getLimit(): number;
    getStart(): number;
    isEvenRun(): boolean;
    isOddRun(): boolean;
    toString(): string;
}