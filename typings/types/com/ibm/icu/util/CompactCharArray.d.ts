import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class CompactCharArray extends Object implements Cloneable {
    static BLOCKSHIFT: number;
    static UNICODECOUNT: number;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string[], arg1: string[])
    constructor(arg0: string, arg1: string)
    // private defaultValue: string;
    // private hashes: number[];
    // private indices: string[];
    // private isCompact: boolean;
    // private values: string[];
    // private FindOverlappingPosition(arg0: number, arg1: string[], arg2: number): number;
    // private blockTouched(arg0: number): boolean;
    clone(): CompactCharArray;
    protected clone(): Object;
    compact(): void;
    compact(arg0: boolean): void;
    elementAt(arg0: string): string;
    equals(arg0: Object | null): boolean;
    // private expand(): void;
    getIndexArray(): string[];
    getValueArray(): string[];
    hashCode(): number;
    setElementAt(arg0: string, arg1: string): void;
    setElementAt(arg0: string, arg1: string, arg2: string): void;
    // private touchBlock(arg0: number, arg1: number): void;
}