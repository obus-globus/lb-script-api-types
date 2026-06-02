import type { ControlFlowException } from '../../../../../../com/oracle/truffle/api/nodes/ControlFlowException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class YieldException extends ControlFlowException {
    static AWAIT_NULL: YieldException;
    static YIELD_NULL: YieldException;
    constructor(result: Object)
    readonly result: Object;
    getResult(): Object;
    isAwait(): boolean;
    isYield(): boolean;
}