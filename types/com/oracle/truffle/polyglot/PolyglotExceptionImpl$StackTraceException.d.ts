import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
export class PolyglotExceptionImpl$StackTraceException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(location: Node)
}