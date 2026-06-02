import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vocabulary } from '../../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { IntSet } from '../../../../../org/antlr/v4/runtime/misc/IntSet.d.ts'
import type { IntegerList } from '../../../../../org/antlr/v4/runtime/misc/IntegerList.d.ts'
import type { Interval } from '../../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class IntervalSet extends Object implements IntSet {
    static COMPLETE_CHAR_SET: IntervalSet;
    static EMPTY_SET: IntervalSet;
    static of(paramarg0: number): IntervalSet;
    static of(paramarg0: number, paramarg1: number): IntervalSet;
    static or(paramarg0: (Object | null)[]): IntervalSet;
    static subtract(paramarg0: IntervalSet, paramarg1: IntervalSet): IntervalSet;
    constructor(arg0: number[])
    constructor(arg0: Interval[])
    constructor(arg0: IntervalSet)
    intervals: Interval[];
    readonly: boolean;
    add(arg0: number): void;
    add(arg0: number, arg1: number): void;
    add(arg0: Interval): void;
    addAll(arg0: IntSet): IntervalSet;
    and(arg0: IntSet): IntervalSet;
    clear(): void;
    complement(arg0: number, arg1: number): IntervalSet;
    complement(arg0: IntSet): IntervalSet;
    contains(arg0: number): boolean;
    elementName(arg0: string[], arg1: number): string;
    elementName(arg0: Vocabulary, arg1: number): string;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getIntervals(): Interval[];
    getMaxElement(): number;
    getMinElement(): number;
    hashCode(): number;
    isNil(): boolean;
    isReadonly(): boolean;
    or(arg0: IntSet): IntervalSet;
    remove(arg0: number): void;
    setReadonly(arg0: boolean): void;
    size(): number;
    subtract(arg0: IntSet): IntervalSet;
    toArray(): number[];
    toIntegerList(): IntegerList;
    toList(): number[];
    toSet(): number[];
    toString(): string;
    toString(arg0: string[]): string;
    toString(arg0: boolean): string;
    toString(arg0: Vocabulary): string;
}