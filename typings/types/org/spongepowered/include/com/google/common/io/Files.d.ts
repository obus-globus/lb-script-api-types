import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { ByteSink } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSink.d.ts'
import type { ByteSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSource.d.ts'
import type { CharSink } from '../../../../../../../org/spongepowered/include/com/google/common/io/CharSink.d.ts'
import type { CharSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/CharSource.d.ts'
import type { LineProcessor } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineProcessor.d.ts'
export class Files extends Object {
    static append(paramarg0: CharSequence, paramarg1: File, paramarg2: Charset): void;
    static asByteSink(paramarg0: File, ...paramarg1: (Object | null)[]): ByteSink;
    static asByteSource(paramarg0: File): ByteSource;
    static asCharSink(paramarg0: File, paramarg1: Charset, ...paramarg2: (Object | null)[]): CharSink;
    static asCharSource(paramarg0: File, paramarg1: Charset): CharSource;
    static readLines(paramarg0: File, paramarg1: Charset, paramarg2: LineProcessor<Object>): Object | null;
    static readLines(paramarg0: File, paramarg1: Charset): string[];
    static write(paramarg0: number[], paramarg1: File): void;
    static write(paramarg0: CharSequence, paramarg1: File, paramarg2: Charset): void;
}