import type { CommandLine } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine.d.ts'
import type { CommandLine$ParameterException } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$ParameterException.d.ts'
export class CommandLine$MissingTypeConverterException extends CommandLine$ParameterException {
    constructor(commandLine: CommandLine, msg: string)
}