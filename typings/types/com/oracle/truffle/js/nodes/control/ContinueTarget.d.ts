import type { BreakException } from '../../../../../../com/oracle/truffle/js/nodes/control/BreakException.d.ts'
import type { BreakTarget } from '../../../../../../com/oracle/truffle/js/nodes/control/BreakTarget.d.ts'
import type { ContinueException } from '../../../../../../com/oracle/truffle/js/nodes/control/ContinueException.d.ts'
export class ContinueTarget extends BreakTarget {
    static forLabel(paramlabel: string, paramid: number): BreakTarget;
    static forLoop(paramlabel: string, paramid: number): ContinueTarget;
    static forSwitch(): BreakTarget;
    static forUnlabeledLoop(): ContinueTarget;
    constructor(label: string, id: number, breakException: BreakException, continueException: ContinueException)
    readonly continueException: ContinueException;
    getContinueException(): ContinueException;
}