import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class CompactByteArray extends Object implements Cloneable {
    static UNICODECOUNT: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: string[], arg1: number[])
    constructor(arg0: string, arg1: string)
    // private defaultValue: number;
    // private hashes: number[];
    // private indices: string[];
    // private isCompact: boolean;
    // private values: number[];
    // private blockTouched(arg0: number): boolean;
    clone(): CompactByteArray;
    protected clone(): Object;
    compact(): void;
    compact(arg0: boolean): void;
    elementAt(arg0: string): number;
    equals(arg0: Object | null): boolean;
    // private expand(): void;
    getIndexArray(): string[];
    getValueArray(): number[];
    hashCode(): number;
    setElementAt(arg0: string, arg1: number): void;
    setElementAt(arg0: string, arg1: string, arg2: number): void;
    // private touchBlock(arg0: number, arg1: number): void;
}