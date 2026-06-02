import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { LogCategory } from '../../../../../../net/fabricmc/loader/impl/util/log/LogCategory.d.ts'
import type { LogHandler } from '../../../../../../net/fabricmc/loader/impl/util/log/LogHandler.d.ts'
import type { LogLevel } from '../../../../../../net/fabricmc/loader/impl/util/log/LogLevel.d.ts'
export class Slf4jLogHandler extends Object implements LogHandler {
    constructor()
    close(): void;
    log(arg0: number, arg1: LogLevel, arg2: LogCategory, arg3: string, arg4: Throwable, arg5: boolean, arg6: boolean): void;
    shouldLog(arg0: LogLevel, arg1: LogCategory): boolean;
}