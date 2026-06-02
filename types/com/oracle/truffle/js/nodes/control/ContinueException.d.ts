import type { ControlFlowException } from '../../../../../../com/oracle/truffle/api/nodes/ControlFlowException.d.ts'
import type { ContinueTarget } from '../../../../../../com/oracle/truffle/js/nodes/control/ContinueTarget.d.ts'
export class ContinueException extends ControlFlowException {
    constructor()
    matchTarget(target: ContinueTarget): boolean;
}