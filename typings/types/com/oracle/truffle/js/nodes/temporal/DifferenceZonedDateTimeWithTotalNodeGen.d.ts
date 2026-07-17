import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DifferenceZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeNode.d.ts'
import type { DifferenceZonedDateTimeWithTotalNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeWithTotalNode.d.ts'
import type { TotalRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TotalRelativeDurationNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class DifferenceZonedDateTimeWithTotalNodeGen extends DifferenceZonedDateTimeWithTotalNode {
    static create(): DifferenceZonedDateTimeWithTotalNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private differenceZonedDateTime_: DifferenceZonedDateTimeNode;
    // private state_0_: number;
    // private totalRelativeDuration_: TotalRelativeDurationNode;
    execute(arg0Value: BigInt, arg1Value: BigInt, arg2Value: TruffleString, arg3Value: TruffleString, arg4Value: TemporalUtil$Unit, arg5Value: JSTemporalPlainDateTimeObject): number;
    // private executeAndSpecialize(arg0Value: BigInt, arg1Value: BigInt, arg2Value: TruffleString, arg3Value: TruffleString, arg4Value: TemporalUtil$Unit, arg5Value: JSTemporalPlainDateTimeObject): number;
}