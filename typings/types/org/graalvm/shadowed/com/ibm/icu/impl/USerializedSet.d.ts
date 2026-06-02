import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class USerializedSet extends Object {
    constructor()
    // private array: string[];
    // private arrayOffset: number;
    // private bmpLength: number;
    // private length: number;
    contains(c: number): boolean;
    countRanges(): number;
    getRange(rangeIndex: number, range: number[]): boolean;
    getSet(src: string[], srcStart: number): boolean;
    setToOne(c: number): void;
}