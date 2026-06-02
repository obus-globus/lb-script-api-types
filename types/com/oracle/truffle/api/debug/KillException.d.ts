import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
export class KillException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(node: Node)
    getExceptionType(): ExceptionType;
}