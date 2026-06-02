import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { CommandLine } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine.d.ts'
import type { CommandLine$PicocliException } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$PicocliException.d.ts'
export class CommandLine$ExecutionException extends CommandLine$PicocliException {
    constructor(commandLine: CommandLine, msg: string)
    constructor(commandLine: CommandLine, msg: string, ex: Exception)
    readonly commandLine: CommandLine;
    getCommandLine(): CommandLine;
}