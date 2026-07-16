import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToTemporalDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDateTimeNode.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalDateTimeNodeGen extends ToTemporalDateTimeNode {
    static create(): ToTemporalDateTimeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private dateFromFieldsNode_: TemporalCalendarDateFromFieldsNode;
    // private fromJavaString_: TruffleString$FromJavaStringNode;
    // private getOptionNode_: TemporalGetOptionNode;
    // private getOptionsNode_: GetOptionsObjectNode;
    // private getTemporalCalendarNode_: GetTemporalCalendarIdentifierWithISODefaultNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toJavaString_: TruffleString$ToJavaStringNode;
    execute(arg0Value: Object, arg1Value: Object): JSTemporalPlainDateTimeObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): JSTemporalPlainDateTimeObject;
}