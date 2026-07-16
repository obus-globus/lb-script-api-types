import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { Splitter$MapSplitter } from '../../../../com/google/common/base/Splitter$MapSplitter.d.ts'
import type { Splitter$Strategy } from '../../../../com/google/common/base/Splitter$Strategy.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Splitter extends Object {
    static fixedLength(paramlength: number): Splitter;
    static on(paramseparator: string): Splitter;
    static on(paramseparatorMatcher: CharMatcher): Splitter;
    static on(paramseparatorPattern: Pattern): Splitter;
    static onPattern(paramseparatorPattern: string): Splitter;
    private constructor(strategy: Splitter$Strategy)
    private constructor(strategy: Splitter$Strategy, omitEmptyStrings: boolean, trimmer: CharMatcher, limit: number)
    // private limit: number;
    // private omitEmptyStrings: boolean;
    // private strategy: Splitter$Strategy;
    // private trimmer: CharMatcher;
    limit(maxItems: number): Splitter;
    omitEmptyStrings(): Splitter;
    split(sequence: CharSequence): string[];
    splitToList(sequence: CharSequence): string[];
    splitToStream(sequence: CharSequence): Stream<string>;
    // private splittingIterator(sequence: CharSequence): Iterator<string>;
    trimResults(): Splitter;
    trimResults(trimmer: CharMatcher): Splitter;
    withKeyValueSeparator(keyValueSplitter: Splitter): Splitter$MapSplitter;
    withKeyValueSeparator(separator: string): Splitter$MapSplitter;
}