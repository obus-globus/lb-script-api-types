import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { CommandLine$Tracer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Tracer.d.ts'
export class CommandLine$TraceLevel extends Enum<CommandLine$TraceLevel> {
    static DEBUG: CommandLine$TraceLevel;
    static INFO: CommandLine$TraceLevel;
    static OFF: CommandLine$TraceLevel;
    static WARN: CommandLine$TraceLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CommandLine$TraceLevel;
    static values(): CommandLine$TraceLevel[];
    private constructor()
    isEnabled(other: CommandLine$TraceLevel): boolean;
    // private prefix(msg: string): string;
    // private print(tracer: CommandLine$Tracer, msg: string, ...params: Object[]): void;
    name(): "OFF" | "WARN" | "INFO" | "DEBUG";
}