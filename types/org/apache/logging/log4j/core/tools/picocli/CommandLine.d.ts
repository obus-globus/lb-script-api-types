import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
import type { CommandLine$Help$ColorScheme } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$ColorScheme.d.ts'
import type { CommandLine$IExceptionHandler } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$IExceptionHandler.d.ts'
import type { CommandLine$IParseResultHandler } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$IParseResultHandler.d.ts'
import type { CommandLine$ITypeConverter } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$ITypeConverter.d.ts'
import type { CommandLine$Interpreter } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Interpreter.d.ts'
import type { CommandLine$Tracer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Tracer.d.ts'
export class CommandLine extends Object {
    static VERSION: string;
    static call(paramcallable: Object | null, paramout: PrintStream, paramargs: (Object | null)[]): Object | null;
    static call(paramcallable: Object | null, paramout: PrintStream, paramansi: CommandLine$Help$Ansi, paramargs: (Object | null)[]): Object | null;
    static populateCommand(paramcommand: Object | null, paramargs: (Object | null)[]): Object | null;
    static printHelpIfRequested(paramparsedCommands: CommandLine[], paramout: PrintStream, paramansi: CommandLine$Help$Ansi): boolean;
    static run(paramrunnable: Object | null, paramout: PrintStream, paramargs: (Object | null)[]): void;
    static run(paramrunnable: Object | null, paramout: PrintStream, paramansi: CommandLine$Help$Ansi, paramargs: (Object | null)[]): void;
    static usage(paramcommand: Object, paramout: PrintStream): void;
    static usage(paramcommand: Object, paramout: PrintStream, paramansi: CommandLine$Help$Ansi): void;
    static usage(paramcommand: Object, paramout: PrintStream, paramcolorScheme: CommandLine$Help$ColorScheme): void;
    constructor(command: Object)
    readonly commandName: string;
    // private interpreter: CommandLine$Interpreter;
    readonly overwrittenOptionsAllowed: boolean;
    readonly parent: CommandLine;
    // private tracer: CommandLine$Tracer;
    readonly unmatchedArguments: string[];
    readonly unmatchedArgumentsAllowed: boolean;
    readonly usageHelpRequested: boolean;
    readonly versionHelpRequested: boolean;
    // private versionLines: string[];
    addSubcommand(name: string, command: Object): CommandLine;
    getCommand<T extends Object | number | string | boolean>(): T;
    getCommandName(): string;
    getParent(): CommandLine;
    getSeparator(): string;
    getSubcommands(): { [key: string]: CommandLine };
    getUnmatchedArguments(): string[];
    isOverwrittenOptionsAllowed(): boolean;
    isUnmatchedArgumentsAllowed(): boolean;
    isUsageHelpRequested(): boolean;
    isVersionHelpRequested(): boolean;
    parse(args: string[]): CommandLine[];
    parseWithHandler(handler: CommandLine$IParseResultHandler, out: PrintStream, args: string[]): Object[];
    parseWithHandlers(handler: CommandLine$IParseResultHandler, out: PrintStream, ansi: CommandLine$Help$Ansi, exceptionHandler: CommandLine$IExceptionHandler, args: string[]): Object[];
    printVersionHelp(out: PrintStream): void;
    printVersionHelp(out: PrintStream, ansi: CommandLine$Help$Ansi): void;
    printVersionHelp(out: PrintStream, ansi: CommandLine$Help$Ansi, params: Object[]): void;
    registerConverter(cls: Class<K>, converter: CommandLine$ITypeConverter<K>): CommandLine;
    setCommandName(commandName: string): CommandLine;
    setOverwrittenOptionsAllowed(newValue: boolean): CommandLine;
    setSeparator(separator: string): CommandLine;
    setUnmatchedArgumentsAllowed(newValue: boolean): CommandLine;
    usage(out: PrintStream): void;
    usage(out: PrintStream, ansi: CommandLine$Help$Ansi): void;
    usage(out: PrintStream, colorScheme: CommandLine$Help$ColorScheme): void;
}