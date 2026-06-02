import type { ControlFlowException } from '../../../../../../com/oracle/truffle/api/nodes/ControlFlowException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReturnException extends ControlFlowException {
    constructor(result: Object)
    readonly result: Object;
    getResult(): Object;
}