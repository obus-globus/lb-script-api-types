import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { IOException } from '../../../../../../java/io/IOException.d.ts'
export class InspectorIOException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(port: number, e: IOException)
    getExceptionExitStatus(): number;
    getExceptionType(): ExceptionType;
}