import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharSet extends Object implements Serializable {
    static ASCII_ALPHA: CharSet;
    static ASCII_ALPHA_LOWER: CharSet;
    static ASCII_ALPHA_UPPER: CharSet;
    static ASCII_NUMERIC: CharSet;
    static EMPTY: CharSet;
    static getInstance(paramarg0: (Object | null)[]): CharSet;
    constructor(arg0: string[])
    // private set: string[][];
    add(arg0: string): void;
    contains(arg0: string): boolean;
    equals(arg0: Object | null): boolean;
    getCharRanges(): string[][];
    hashCode(): number;
    toString(): string;
}