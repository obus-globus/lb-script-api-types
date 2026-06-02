import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class CollationIterator$CEBuffer extends Object {
    constructor()
    // private buffer: number[];
    // private length: number;
    append(ce: number): void;
    appendUnsafe(ce: number): void;
    ensureAppendCapacity(appCap: number): void;
    get(i: number): number;
    getCEs(): number[];
    incLength(): void;
    set(i: number, ce: number): number;
}