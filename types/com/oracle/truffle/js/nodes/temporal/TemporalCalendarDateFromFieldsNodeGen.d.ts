import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export class TemporalCalendarDateFromFieldsNodeGen extends TemporalCalendarDateFromFieldsNode {
    static create(): TemporalCalendarDateFromFieldsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private toIntegerOrInfinity_: JSToIntegerOrInfinityNode;
    execute(arg0Value: TruffleString, arg1Value: JSDynamicObject, arg2Value: TemporalUtil$Overflow): JSTemporalPlainDateObject;
    // private executeAndSpecialize(arg0Value: TruffleString, arg1Value: JSDynamicObject, arg2Value: TemporalUtil$Overflow): JSTemporalPlainDateObject;
}