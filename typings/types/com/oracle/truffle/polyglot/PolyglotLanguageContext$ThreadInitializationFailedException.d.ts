import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotLanguageContext$ThreadInitializationFailedException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(languageId: string, nThreadFailures: number, cause: Throwable, suppressed: Throwable[])
}