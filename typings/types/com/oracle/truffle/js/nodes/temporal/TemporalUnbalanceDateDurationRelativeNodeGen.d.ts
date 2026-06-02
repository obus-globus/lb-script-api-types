import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TemporalUnbalanceDateDurationRelativeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalUnbalanceDateDurationRelativeNode.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
export class TemporalUnbalanceDateDurationRelativeNodeGen extends TemporalUnbalanceDateDurationRelativeNode {
    static create(): TemporalUnbalanceDateDurationRelativeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: number, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: JSTemporalPlainDateObject, arg5Value: TruffleString): number;
}