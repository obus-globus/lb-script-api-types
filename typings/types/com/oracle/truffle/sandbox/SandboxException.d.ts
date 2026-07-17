import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SandboxException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(message: string, cause: Throwable)
}