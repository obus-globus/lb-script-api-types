import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { BuiltinLogHandler$ReplayEntry } from '../../../../../../net/fabricmc/loader/impl/util/log/BuiltinLogHandler$ReplayEntry.d.ts'
import type { ConsoleLogHandler } from '../../../../../../net/fabricmc/loader/impl/util/log/ConsoleLogHandler.d.ts'
import type { LogCategory } from '../../../../../../net/fabricmc/loader/impl/util/log/LogCategory.d.ts'
import type { LogHandler } from '../../../../../../net/fabricmc/loader/impl/util/log/LogHandler.d.ts'
import type { LogLevel } from '../../../../../../net/fabricmc/loader/impl/util/log/LogLevel.d.ts'
export class BuiltinLogHandler extends ConsoleLogHandler {
    constructor()
    // private buffer: BuiltinLogHandler$ReplayEntry[];
    // private configured: boolean;
    // private enableOutput: boolean;
    // private shutdownHook: Thread;
    close(): void;
    configure(arg0: boolean, arg1: boolean): void;
    finishConfig(): void;
    log(arg0: number, arg1: LogLevel, arg2: LogCategory, arg3: string, arg4: Throwable, arg5: boolean, arg6: boolean): void;
    replay(arg0: LogHandler): boolean;
    // private startOutput(): void;
}