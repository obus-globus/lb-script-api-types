import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
export class CompactByteArray extends Object implements Cloneable {
    static UNICODECOUNT: number;
    constructor()
    constructor(defaultValue: number)
    constructor(indexArray: string[], newValues: number[])
    constructor(indexArray: string, valueArray: string)
    // private defaultValue: number;
    // private hashes: number[];
    // private indices: string[];
    // private isCompact: boolean;
    // private values: number[];
    // private blockTouched(i: number): boolean;
    clone(): CompactByteArray;
    compact(): void;
    compact(exhaustive: boolean): void;
    elementAt(index: string): number;
    equals(obj: Object | null): boolean;
    // private expand(): void;
    getIndexArray(): string[];
    getValueArray(): number[];
    hashCode(): number;
    setElementAt(index: string, value: number): void;
    setElementAt(start: string, end: string, value: number): void;
    // private touchBlock(i: number, value: number): void;
}