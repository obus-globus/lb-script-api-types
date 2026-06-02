import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Readable } from '../../../../java/lang/Readable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharStreams extends Object {
    static asWriter(paramtarget: Appendable): Writer;
    static copy(paramfrom: Readable, paramto: Appendable): number;
    static exhaust(paramreadable: Readable): number;
    static nullWriter(): Writer;
    static readLines(paramreadable: Readable, paramprocessor: LineProcessor<Object>): Object | null;
    static readLines(paramr: Readable): string[];
    static skipFully(paramreader: Reader, paramn: number): void;
    static toString(paramr: Readable): string;
    private constructor()
}