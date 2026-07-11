import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrLogger } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { TrLogger$Level } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger$Level.d.ts'
import type { LogCategory } from '../../../../../../net/fabricmc/loader/impl/util/log/LogCategory.d.ts'
export class TinyRemapperLoggerAdapter extends Object implements TrLogger {
    constructor(arg0: LogCategory)
    // private category: LogCategory;
    error(arg0: string): void;
    error(arg0: string, ...arg1: Object[]): void;
    log(arg0: TrLogger$Level, arg1: string, ...arg2: Object[]): void;
    log(arg0: TrLogger$Level, arg1: string): void;
    warn(arg0: string): void;
    warn(arg0: string, ...arg1: Object[]): void;
}