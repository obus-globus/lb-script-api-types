import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { TemporalYearMonthFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalYearMonthFromFieldsNode.d.ts'
import type { JSTemporalPlainYearMonthObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainYearMonthObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export class TemporalYearMonthFromFieldsNodeGen extends TemporalYearMonthFromFieldsNode {
    static create(): TemporalYearMonthFromFieldsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private setDay_: PropertySetNode;
    // private state_0_: number;
    // private toIntegerOrInfinity_: JSToIntegerOrInfinityNode;
    execute(arg0Value: TruffleString, arg1Value: JSDynamicObject, arg2Value: TemporalUtil$Overflow): JSTemporalPlainYearMonthObject;
    // private executeAndSpecialize(arg0Value: TruffleString, arg1Value: JSDynamicObject, arg2Value: TemporalUtil$Overflow): JSTemporalPlainYearMonthObject;
}