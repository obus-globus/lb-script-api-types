import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class IrisLogging extends Object {
    static ENABLE_SPAM: boolean;
    constructor(arg0: string)
    // private logger: Logger;
    debug(arg0: string): void;
    debug(arg0: string, arg1: Throwable): void;
    error(arg0: string): void;
    error(arg0: string, arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    fatal(arg0: string): void;
    fatal(arg0: string, arg1: Throwable): void;
    info(arg0: string): void;
    info(arg0: string, arg1: Object[]): void;
    warn(arg0: string): void;
    warn(arg0: string, arg1: Object[]): void;
    warn(arg0: string, arg1: Throwable): void;
    warn(arg0: Throwable): void;
}