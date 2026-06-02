import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharSource$ConcatenatedCharSource extends CharSource {
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: Iterator<Object>): CharSource;
    static empty(): CharSource;
    static wrap(paramcharSequence: CharSequence): CharSource;
    constructor(sources: CharSource[])
    // private sources: CharSource[];
    isEmpty(): boolean;
    length(): number;
    lengthIfKnown(): Optional<number>;
    openStream(): Reader;
    toString(): string;
}