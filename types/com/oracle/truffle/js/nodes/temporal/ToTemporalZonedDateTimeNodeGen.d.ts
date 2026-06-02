import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToTemporalTimeZoneIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeZoneIdentifierNode.d.ts'
import type { ToTemporalZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalZonedDateTimeNode.d.ts'
import type { JSTemporalZonedDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalZonedDateTimeObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalZonedDateTimeNodeGen extends ToTemporalZonedDateTimeNode {
    static create(): ToTemporalZonedDateTimeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private dateFromFieldsNode_: TemporalCalendarDateFromFieldsNode;
    // private equalNode_: TruffleString$EqualNode;
    // private fromJavaString_: TruffleString$FromJavaStringNode;
    // private getCalendarWithISODefault_: GetTemporalCalendarIdentifierWithISODefaultNode;
    // private getOptionNode_: TemporalGetOptionNode;
    // private getOptionsObject_: GetOptionsObjectNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toJavaString_: TruffleString$ToJavaStringNode;
    // private toTimeZoneIdentifier_: ToTemporalTimeZoneIdentifierNode;
    execute(arg0Value: Object, arg1Value: Object): JSTemporalZonedDateTimeObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): JSTemporalZonedDateTimeObject;
}