import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RoundRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/RoundRelativeDurationNode.d.ts'
import type { TemporalAddDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateTimeNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { ISODateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateTimeRecord.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TemporalDurationWithTotalRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class RoundRelativeDurationNodeGen extends RoundRelativeDurationNode {
    static create(): RoundRelativeDurationNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private addDateTimeNode_: TemporalAddDateTimeNode;
    // private differenceDateNode_: TemporalDifferenceDateNode;
    // private state_0_: number;
    execute(arg0Value: NormalizedDurationRecord, arg1Value: BigInt, arg2Value: ISODateTimeRecord, arg3Value: TruffleString, arg4Value: TruffleString, arg5Value: TemporalUtil$Unit, arg6Value: number, arg7Value: TemporalUtil$Unit, arg8Value: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
    // private executeAndSpecialize(arg0Value: NormalizedDurationRecord, arg1Value: BigInt, arg2Value: ISODateTimeRecord, arg3Value: TruffleString, arg4Value: TruffleString, arg5Value: TemporalUtil$Unit, arg6Value: number, arg7Value: TemporalUtil$Unit, arg8Value: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
}