import type { BufferedReader } from '../../java/io/BufferedReader.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class TextStreamsKt extends Object {
    static copyTo(self: Reader, out: Writer, bufferSize: number): number;
    static forEachLine(self: Reader, action: (param0: string) => void): void;
    static lineSequence(self: BufferedReader): Sequence<string>;
    static readBytes(self: URL): number[];
    static readLines(self: Reader): string[];
    static readText(self: Reader): string;
    static useLines<T extends unknown>(self: Reader, block: (param0: Sequence<string>) => T): T;
}