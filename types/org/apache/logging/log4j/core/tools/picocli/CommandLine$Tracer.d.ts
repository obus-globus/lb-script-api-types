import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$TraceLevel } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$TraceLevel.d.ts'
export class CommandLine$Tracer extends Object {
    private constructor()
    // private level: CommandLine$TraceLevel;
    // private stream: PrintStream;
    debug(msg: string, params: Object[]): void;
    info(msg: string, params: Object[]): void;
    isDebug(): boolean;
    isInfo(): boolean;
    isWarn(): boolean;
    warn(msg: string, params: Object[]): void;
}