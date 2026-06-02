import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { ErrorManager } from '../../../../java/util/logging/ErrorManager.d.ts'
export class PolyglotLoggers$PolyglotErrorManager extends ErrorManager {
    static CLOSE_FAILURE: number;
    static FLUSH_FAILURE: number;
    static FORMAT_FAILURE: number;
    static GENERIC_FAILURE: number;
    static OPEN_FAILURE: number;
    static WRITE_FAILURE: number;
    constructor()
    // private reported: AtomicBoolean;
    error(msg: string, ex: Exception, code: number): void;
}