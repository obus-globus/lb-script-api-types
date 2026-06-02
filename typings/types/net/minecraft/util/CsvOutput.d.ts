import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CsvOutput$Builder } from '../../../net/minecraft/util/CsvOutput$Builder.d.ts'
export class CsvOutput extends Object {
    static builder(): CsvOutput$Builder;
    private constructor(output: Writer, headers: string[])
    // private columnCount: number;
    // private output: Writer;
    // private writeLine(values: Stream<Object>): void;
    writeRow(values: Object[]): void;
}