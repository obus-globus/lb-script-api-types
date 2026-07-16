import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { CharSource$CharSequenceCharSource } from '../../../../com/google/common/io/CharSource$CharSequenceCharSource.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharSource$StringCharSource extends CharSource$CharSequenceCharSource {
    static concat(...paramsources: CharSource[]): CharSource;
    static concat(paramsources: CharSource[]): CharSource;
    static concat(paramsources: Iterator<CharSource>): CharSource;
    static empty(): CharSource;
    static wrap(paramcharSequence: CharSequence): CharSource;
    constructor(seq: string)
    copyTo(sink: CharSink): number;
    copyTo(appendable: Appendable): number;
    openStream(): Reader;
}