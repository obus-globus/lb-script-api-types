import type { AbstractIterator } from '../../../../com/google/common/base/AbstractIterator.d.ts'
import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { Splitter } from '../../../../com/google/common/base/Splitter.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class Splitter$SplittingIterator extends AbstractIterator<string> {
    constructor(splitter: Splitter, toSplit: CharSequence)
    // private limit: number;
    // private offset: number;
    // private omitEmptyStrings: boolean;
    // private toSplit: CharSequence;
    // private trimmer: CharMatcher;
    computeNext(): string;
    separatorEnd(separatorPosition: number): number;
    separatorStart(start: number): number;
}