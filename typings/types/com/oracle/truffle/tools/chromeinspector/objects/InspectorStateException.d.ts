import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
export class InspectorStateException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(message: string)
}