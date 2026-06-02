import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
export interface CommandLine$IParseResultHandler extends Object{
    handleParseResult(parsedCommands: CommandLine[], out: PrintStream, ansi: CommandLine$Help$Ansi): Object[];
}