import type { Vocabulary } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { IntSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntSet.d.ts'
import type { Interval } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class IntervalSet extends Object implements IntSet {
    static COMPLETE_CHAR_SET: IntervalSet;
    static EMPTY_SET: IntervalSet;
    static of(paramarg0: number): IntervalSet;
    static of(paramarg0: number, paramarg1: number): IntervalSet;
    static subtract(paramarg0: IntervalSet, paramarg1: IntervalSet): IntervalSet;
    constructor(arg0: IntervalSet)
    constructor(arg0: number[])
    // private intervals: Interval[];
    readonly: boolean;
    add(arg0: Interval): void;
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    addAll(arg0: IntSet): IntervalSet;
    complement(arg0: IntSet): IntervalSet;
    contains(arg0: number): boolean;
    elementName(arg0: Vocabulary, arg1: number): string;
    equals(arg0: Object | null): boolean;
    getMinElement(): number;
    hashCode(): number;
    isNil(): boolean;
    or(arg0: IntSet): IntervalSet;
    remove(arg0: number): void;
    setReadonly(arg0: boolean): void;
    size(): number;
    subtract(arg0: IntSet): IntervalSet;
    toList(): number[];
    toString(): string;
    toString(arg0: Vocabulary): string;
    toString(arg0: boolean): string;
}