import type { ControlFlowException } from '../../../../../../com/oracle/truffle/api/nodes/ControlFlowException.d.ts'
import type { BreakTarget } from '../../../../../../com/oracle/truffle/js/nodes/control/BreakTarget.d.ts'
export abstract class BreakException extends ControlFlowException {
    constructor()
    matchTarget(target: BreakTarget): boolean;
}