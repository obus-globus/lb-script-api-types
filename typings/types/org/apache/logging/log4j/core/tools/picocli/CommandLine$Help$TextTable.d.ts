import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { BreakIterator } from '../../../../../../../java/text/BreakIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
import type { CommandLine$Help$Column } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Column.d.ts'
import type { CommandLine$Help$TextTable$Cell } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$TextTable$Cell.d.ts'
export class CommandLine$Help$TextTable extends Object {
    constructor(ansi: CommandLine$Help$Ansi)
    constructor(ansi: CommandLine$Help$Ansi, columns: CommandLine$Help$Column[])
    constructor(ansi: CommandLine$Help$Ansi, columnWidths: number[])
    // private ansi: CommandLine$Help$Ansi;
    // private columnValues: CommandLine$Help$Ansi$Text[];
    columns: CommandLine$Help$Column[];
    indentWrappedLines: number;
    addEmptyRow(): void;
    addRowValues(values: string[]): void;
    addRowValues(values: CommandLine$Help$Ansi$Text[]): void;
    cellAt(row: number, col: number): CommandLine$Help$Ansi$Text;
    // private copy(line: BreakIterator, text: CommandLine$Help$Ansi$Text, columnValue: CommandLine$Help$Ansi$Text, offset: number): number;
    putValue(row: number, col: number, value: CommandLine$Help$Ansi$Text): CommandLine$Help$TextTable$Cell;
    rowCount(): number;
    textAt(row: number, col: number): CommandLine$Help$Ansi$Text;
    toString(): string;
    toString(text: StringBuilder): StringBuilder;
}