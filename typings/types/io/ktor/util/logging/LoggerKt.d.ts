import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class LoggerKt extends Object {
    static debug(self: Logger, message: () => string): void;
    static error(self: Logger, exception: Throwable): void;
    static trace(self: Logger, message: () => string): void;
}