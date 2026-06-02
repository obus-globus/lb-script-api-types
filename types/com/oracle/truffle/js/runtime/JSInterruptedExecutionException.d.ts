import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InterruptedException } from '../../../../../java/lang/InterruptedException.d.ts'
export class JSInterruptedExecutionException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    static wrap(paramex: InterruptedException): JSInterruptedExecutionException;
    constructor(message: string, originatedBy: Node)
    getExceptionType(): ExceptionType;
}