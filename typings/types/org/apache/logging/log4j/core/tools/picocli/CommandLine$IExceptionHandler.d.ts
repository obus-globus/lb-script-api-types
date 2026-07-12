import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
import type { CommandLine$ParameterException } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$ParameterException.d.ts'
export interface CommandLine$IExceptionHandler extends Object{
    handleException(ex: CommandLine$ParameterException, out: PrintStream, ansi: CommandLine$Help$Ansi, ...args: string[]): Object[];
}