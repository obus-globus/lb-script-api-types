import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { BufferedReader } from '../../../../java/io/BufferedReader.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class CharSource extends Object {
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: Iterator<Object>): CharSource;
    static empty(): CharSource;
    static wrap(paramcharSequence: CharSequence): CharSource;
    constructor()
    asByteSource(charset: Charset): ByteSource;
    copyTo(sink: CharSink): number;
    copyTo(appendable: Appendable): number;
    forEachLine(action: (param0: string) => void): void;
    isEmpty(): boolean;
    length(): number;
    lengthIfKnown(): Optional<number>;
    lines(): Stream<string>;
    openBufferedStream(): BufferedReader;
    openStream(): Reader;
    read(): string;
    readFirstLine(): string;
    readLines(): string[];
    readLines<T extends Object | number | string | boolean>(processor: LineProcessor<T>): T;
}