import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
export class RegexInterruptedException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor()
    getExceptionType(): ExceptionType;
}