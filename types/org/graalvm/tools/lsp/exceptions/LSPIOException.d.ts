import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class LSPIOException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(message: string, e: Throwable)
    getExceptionExitStatus(): number;
    getExceptionType(): ExceptionType;
}