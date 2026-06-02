import type { OutputInt } from '../../../../com/ibm/icu/util/OutputInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnicodeSetStringSpan$OffsetList extends Object {
    constructor()
    // private length: number;
    // private list: number[];
    // private start: number;
    addOffset(arg0: number): void;
    addOffsetAndCount(arg0: number, arg1: number): void;
    clear(): void;
    containsOffset(arg0: number): boolean;
    hasCountAtOffset(arg0: number, arg1: number): boolean;
    isEmpty(): boolean;
    popMinimum(arg0: OutputInt): number;
    setMaxLength(arg0: number): void;
    shift(arg0: number): void;
}