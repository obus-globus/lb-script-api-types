import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { NudgeToCalendarUnitNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/NudgeToCalendarUnitNode.d.ts'
import type { TotalRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TotalRelativeDurationNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { ISODateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateTimeRecord.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class TotalRelativeDurationNodeGen extends TotalRelativeDurationNode {
    static create(): TotalRelativeDurationNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private nudgeToCalendarUnitNode_: NudgeToCalendarUnitNode;
    // private state_0_: number;
    execute(arg0Value: NormalizedDurationRecord, arg1Value: BigInt, arg2Value: BigInt, arg3Value: ISODateTimeRecord, arg4Value: TruffleString, arg5Value: TruffleString, arg6Value: TemporalUtil$Unit): number;
    // private executeAndSpecialize(arg0Value: NormalizedDurationRecord, arg1Value: BigInt, arg2Value: BigInt, arg3Value: ISODateTimeRecord, arg4Value: TruffleString, arg5Value: TruffleString, arg6Value: TemporalUtil$Unit): number;
}