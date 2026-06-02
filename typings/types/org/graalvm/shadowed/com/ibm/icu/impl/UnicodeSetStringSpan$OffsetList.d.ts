import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OutputInt } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/OutputInt.d.ts'
export class UnicodeSetStringSpan$OffsetList extends Object {
    constructor()
    // private length: number;
    // private list: number[];
    // private start: number;
    addOffset(offset: number): void;
    addOffsetAndCount(offset: number, count: number): void;
    clear(): void;
    containsOffset(offset: number): boolean;
    hasCountAtOffset(offset: number, count: number): boolean;
    isEmpty(): boolean;
    popMinimum(outCount: OutputInt): number;
    setMaxLength(maxLength: number): void;
    shift(delta: number): void;
}