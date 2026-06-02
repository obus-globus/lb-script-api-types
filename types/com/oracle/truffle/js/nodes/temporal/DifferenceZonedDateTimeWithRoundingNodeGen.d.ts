import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DifferenceZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeNode.d.ts'
import type { DifferenceZonedDateTimeWithRoundingNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeWithRoundingNode.d.ts'
import type { RoundRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/RoundRelativeDurationNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { TemporalDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TemporalDurationWithTotalRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class DifferenceZonedDateTimeWithRoundingNodeGen extends DifferenceZonedDateTimeWithRoundingNode {
    static create(): DifferenceZonedDateTimeWithRoundingNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private differenceZonedDateTime_: DifferenceZonedDateTimeNode;
    // private roundRelativeDuration_: RoundRelativeDurationNode;
    // private state_0_: number;
    execute(arg0Value: BigInt, arg1Value: BigInt, arg2Value: TruffleString, arg3Value: TruffleString, arg4Value: JSTemporalPlainDateTimeObject, arg5Value: TemporalUtil$Unit, arg6Value: number, arg7Value: TemporalUtil$Unit, arg8Value: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
    // private executeAndSpecialize(arg0Value: BigInt, arg1Value: BigInt, arg2Value: TruffleString, arg3Value: TruffleString, arg4Value: JSTemporalPlainDateTimeObject, arg5Value: TemporalUtil$Unit, arg6Value: number, arg7Value: TemporalUtil$Unit, arg8Value: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
}