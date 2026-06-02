import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CsvOutput } from '../../../net/minecraft/util/CsvOutput.d.ts'
export class CsvOutput$Builder extends Object {
    constructor()
    // private headers: string[];
    addColumn(header: string): CsvOutput$Builder;
    build(writer: Writer): CsvOutput;
}