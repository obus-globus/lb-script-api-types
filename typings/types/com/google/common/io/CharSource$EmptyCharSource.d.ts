import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { CharSource$StringCharSource } from '../../../../com/google/common/io/CharSource$StringCharSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharSource$EmptyCharSource extends CharSource$StringCharSource {
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: CharSource[]): CharSource;
    static concat(paramsources: Iterator<CharSource>): CharSource;
    static empty(): CharSource;
    static wrap(paramcharSequence: CharSequence): CharSource;
    private constructor()
    toString(): string;
}