import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TemporalAddDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateNode.d.ts'
import type { TemporalAddDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateTimeNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalDateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDateTimeRecord.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export class TemporalAddDateTimeNodeGen extends TemporalAddDateTimeNode {
    static create(): TemporalAddDateTimeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private addDateNode_: TemporalAddDateNode;
    // private state_0_: number;
    execute(arg0Value: number, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: number, arg9Value: TruffleString, arg10Value: number, arg11Value: number, arg12Value: number, arg13Value: number, arg14Value: BigInt, arg15Value: TemporalUtil$Overflow): JSTemporalDateTimeRecord;
    // private executeAndSpecialize(arg0Value: number, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: number, arg9Value: TruffleString, arg10Value: number, arg11Value: number, arg12Value: number, arg13Value: number, arg14Value: BigInt, arg15Value: TemporalUtil$Overflow): JSTemporalDateTimeRecord;
}