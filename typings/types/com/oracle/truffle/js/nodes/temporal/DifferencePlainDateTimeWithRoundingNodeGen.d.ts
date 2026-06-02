import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DifferenceISODateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceISODateTimeNode.d.ts'
import type { DifferencePlainDateTimeWithRoundingNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferencePlainDateTimeWithRoundingNode.d.ts'
import type { RoundRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/RoundRelativeDurationNode.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { TemporalDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TemporalDurationWithTotalRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class DifferencePlainDateTimeWithRoundingNodeGen extends DifferencePlainDateTimeWithRoundingNode {
    static create(): DifferencePlainDateTimeWithRoundingNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private differenceISODateTime_: DifferenceISODateTimeNode;
    // private roundRelativeDuration_: RoundRelativeDurationNode;
    // private state_0_: number;
    execute(arg0Value: JSTemporalPlainDateObject, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: number, arg9Value: number, arg10Value: number, arg11Value: number, arg12Value: number, arg13Value: number, arg14Value: number, arg15Value: number, arg16Value: TruffleString, arg17Value: TemporalUtil$Unit, arg18Value: number, arg19Value: TemporalUtil$Unit, arg20Value: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
    // private executeAndSpecialize(arg0Value: JSTemporalPlainDateObject, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: number, arg9Value: number, arg10Value: number, arg11Value: number, arg12Value: number, arg13Value: number, arg14Value: number, arg15Value: number, arg16Value: TruffleString, arg17Value: TemporalUtil$Unit, arg18Value: number, arg19Value: TemporalUtil$Unit, arg20Value: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
}