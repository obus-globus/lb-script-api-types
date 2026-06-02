import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotThreadAccessException extends Exception {
    constructor(message: string)
    fillInStackTrace(): Throwable;
    rethrow(context: PolyglotContextImpl): void;
}