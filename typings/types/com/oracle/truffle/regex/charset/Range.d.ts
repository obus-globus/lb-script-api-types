import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Range extends Object {
    static toString(paramlo: number, paramhi: number): string;
    constructor(lo: number, hi: number)
    hi: number;
    lo: number;
    isSingle(): boolean;
    size(): number;
    toString(): string;
}