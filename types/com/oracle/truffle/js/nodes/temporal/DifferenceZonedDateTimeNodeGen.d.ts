import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DifferenceZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class DifferenceZonedDateTimeNodeGen extends DifferenceZonedDateTimeNode {
    static create(): DifferenceZonedDateTimeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private differenceDateNode_: TemporalDifferenceDateNode;
    // private state_0_: number;
    execute(arg0Value: BigInt, arg1Value: BigInt, arg2Value: TruffleString, arg3Value: TruffleString, arg4Value: TemporalUtil$Unit, arg5Value: JSTemporalPlainDateTimeObject): NormalizedDurationRecord;
    // private executeAndSpecialize(arg0Value: BigInt, arg1Value: BigInt, arg2Value: TruffleString, arg3Value: TruffleString, arg4Value: TemporalUtil$Unit, arg5Value: JSTemporalPlainDateTimeObject): NormalizedDurationRecord;
}