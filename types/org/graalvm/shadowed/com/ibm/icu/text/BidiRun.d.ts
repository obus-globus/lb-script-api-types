import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BidiRun extends Object {
    constructor()
    constructor(start: number, limit: number, embeddingLevel: number)
    // private insertRemove: number;
    // private level: number;
    limit: number;
    start: number;
    copyFrom(run: BidiRun): void;
    getDirection(): number;
    getEmbeddingLevel(): number;
    getLength(): number;
    getLimit(): number;
    getStart(): number;
    isEvenRun(): boolean;
    isOddRun(): boolean;
    toString(): string;
}