import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class DelimitedRangesSequence extends Object implements Sequence<{ start: number; endInclusive: number; step: number }> {
    constructor(input: CharSequence, startIndex: number, limit: number, getNextMatch: (param0: CharSequence, param1: number) => Pair<number, number> | null)
    // private getNextMatch: (param0: CharSequence, param1: number) => Pair<number, number> | null;
    // private input: CharSequence;
    // private limit: number;
    // private startIndex: number;
    iterator(): Iterator<{ start: number; endInclusive: number; step: number }>;
}