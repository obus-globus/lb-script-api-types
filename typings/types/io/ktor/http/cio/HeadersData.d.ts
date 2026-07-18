import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
export class HeadersData extends Object {
    constructor()
    // private arrays: number[][];
    arraysCount(): number;
    at(index: number): number;
    headersStarts(): Sequence<number>;
    prepare(subArraysCount: number): void;
    release(): void;
    set(index: number, value: number): void;
}