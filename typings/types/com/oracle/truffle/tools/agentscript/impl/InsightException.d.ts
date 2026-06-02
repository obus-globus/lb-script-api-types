import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class InsightException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    private constructor(msg: string, cause: Throwable, exitCode: number)
    private constructor(cause: Throwable, node: Node)
    // private exitCode: number;
    getExceptionExitStatus(): number;
    getExceptionType(): ExceptionType;
}