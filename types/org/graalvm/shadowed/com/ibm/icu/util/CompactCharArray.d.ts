import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
export class CompactCharArray extends Object implements Cloneable {
    static BLOCKSHIFT: number;
    static UNICODECOUNT: number;
    constructor()
    constructor(defaultValue: string)
    constructor(indexArray: string[], newValues: string[])
    constructor(indexArray: string, valueArray: string)
    // private defaultValue: string;
    // private hashes: number[];
    // private indices: string[];
    // private isCompact: boolean;
    // private values: string[];
    // private FindOverlappingPosition(start: number, tempValues: string[], tempCount: number): number;
    // private blockTouched(i: number): boolean;
    protected clone(): Object;
    clone(): Object;
    compact(): void;
    compact(exhaustive: boolean): void;
    elementAt(index: string): string;
    equals(obj: Object | null): boolean;
    // private expand(): void;
    getIndexArray(): string[];
    getValueArray(): string[];
    hashCode(): number;
    setElementAt(index: string, value: string): void;
    setElementAt(start: string, end: string, value: string): void;
    // private touchBlock(i: number, value: number): void;
}