import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { NudgeToCalendarUnitNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/NudgeToCalendarUnitNode.d.ts'
import type { NudgeToCalendarUnitNode$Result } from '../../../../../../com/oracle/truffle/js/nodes/temporal/NudgeToCalendarUnitNode$Result.d.ts'
import type { TemporalAddDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { ISODateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateTimeRecord.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class NudgeToCalendarUnitNodeGen extends NudgeToCalendarUnitNode {
    static create(): NudgeToCalendarUnitNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private addDateNode_: TemporalAddDateNode;
    // private differenceDateNode_: TemporalDifferenceDateNode;
    // private state_0_: number;
    execute(arg0Value: number, arg1Value: NormalizedDurationRecord, arg2Value: BigInt, arg3Value: BigInt, arg4Value: ISODateTimeRecord, arg5Value: TruffleString, arg6Value: TruffleString, arg7Value: number, arg8Value: TemporalUtil$Unit, arg9Value: TemporalUtil$RoundingMode): NudgeToCalendarUnitNode$Result;
    // private executeAndSpecialize(arg0Value: number, arg1Value: NormalizedDurationRecord, arg2Value: BigInt, arg3Value: BigInt, arg4Value: ISODateTimeRecord, arg5Value: TruffleString, arg6Value: TruffleString, arg7Value: number, arg8Value: TemporalUtil$Unit, arg9Value: TemporalUtil$RoundingMode): NudgeToCalendarUnitNode$Result;
}