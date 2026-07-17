import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DifferenceISODateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceISODateTimeNode.d.ts'
import type { DifferencePlainDateTimeWithTotalNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferencePlainDateTimeWithTotalNode.d.ts'
import type { TotalRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TotalRelativeDurationNode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class DifferencePlainDateTimeWithTotalNodeGen extends DifferencePlainDateTimeWithTotalNode {
    static create(): DifferencePlainDateTimeWithTotalNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private differenceISODateTime_: DifferenceISODateTimeNode;
    // private state_0_: number;
    // private totalRelativeDuration_: TotalRelativeDurationNode;
    execute(arg0Value: number, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: number, arg9Value: number, arg10Value: number, arg11Value: number, arg12Value: number, arg13Value: number, arg14Value: number, arg15Value: number, arg16Value: number, arg17Value: number, arg18Value: TruffleString, arg19Value: TemporalUtil$Unit): number;
    // private executeAndSpecialize(arg0Value: number, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: number, arg9Value: number, arg10Value: number, arg11Value: number, arg12Value: number, arg13Value: number, arg14Value: number, arg15Value: number, arg16Value: number, arg17Value: number, arg18Value: TruffleString, arg19Value: TemporalUtil$Unit): number;
}