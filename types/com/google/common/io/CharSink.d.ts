import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Readable } from '../../../../java/lang/Readable.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class CharSink extends Object {
    constructor()
    openBufferedStream(): Writer;
    openStream(): Writer;
    write(charSequence: CharSequence): void;
    writeFrom(readable: Readable): number;
    writeLines(lines: Stream<CharSequence>): void;
    writeLines(lines: Stream<CharSequence>, lineSeparator: string): void;
    writeLines(lines: CharSequence[]): void;
    writeLines(lines: CharSequence[], lineSeparator: string): void;
    // private writeLines(lines: Iterator<CharSequence>, lineSeparator: string): void;
}