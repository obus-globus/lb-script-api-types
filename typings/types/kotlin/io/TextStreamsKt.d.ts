import type { BufferedReader } from '../../java/io/BufferedReader.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class TextStreamsKt extends Object {
    static copyTo(paramarg0: Reader, paramarg1: Writer, paramarg2: number): number;
    static forEachLine(paramarg0: Reader, paramarg1: (param0: Object | null) => void): void;
    static lineSequence(paramarg0: BufferedReader): Sequence<string>;
    static readBytes(paramarg0: URL): number[];
    static readLines(paramarg0: Reader): string[];
    static readText(paramarg0: Reader): string;
    static useLines(paramarg0: Reader, paramarg1: (param0: Object | null) => Object | null): Object | null;
}