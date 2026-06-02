import type { ErrorManager } from '../../../../java/util/logging/ErrorManager.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
export abstract class PolyglotLoggers$AbstractLogHandler extends AbstractPolyglotImpl$LogHandler {
    private constructor()
    // private closed: boolean;
    // private errorManager: ErrorManager;
    checkClosed(): void;
    reportHandlerError(errorKind: number, t: Throwable): void;
}