import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharSource$CharSequenceCharSource extends CharSource {
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: CharSource[]): CharSource;
    static concat(paramsources: Iterator<CharSource>): CharSource;
    static empty(): CharSource;
    static wrap(paramcharSequence: CharSequence): CharSource;
    constructor(seq: CharSequence)
    // private seq: CharSequence;
    isEmpty(): boolean;
    length(): number;
    lengthIfKnown(): Optional<number>;
    lines(): Stream<string>;
    // private linesIterator(): Iterator<string>;
    openStream(): Reader;
    read(): string;
    readFirstLine(): string;
    readLines(): string[];
    readLines<T extends unknown>(processor: LineProcessor<T>): T;
    toString(): string;
}