import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { TemporalYearMonthFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalYearMonthFromFieldsNode.d.ts'
import type { ToTemporalYearMonthNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalYearMonthNode.d.ts'
import type { JSTemporalPlainYearMonthObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainYearMonthObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalYearMonthNodeGen extends ToTemporalYearMonthNode {
    static create(): ToTemporalYearMonthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fromJavaString_: TruffleString$FromJavaStringNode;
    // private getCalendarWithISODefault_: GetTemporalCalendarIdentifierWithISODefaultNode;
    // private getOptionNode_: TemporalGetOptionNode;
    // private getOptionsObject_: GetOptionsObjectNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toJavaString_: TruffleString$ToJavaStringNode;
    // private yearMonthFromFieldsNode_: TemporalYearMonthFromFieldsNode;
    execute(arg0Value: Object, arg1Value: Object): JSTemporalPlainYearMonthObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): JSTemporalPlainYearMonthObject;
}