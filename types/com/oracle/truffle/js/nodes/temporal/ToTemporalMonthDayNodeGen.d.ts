import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { TemporalMonthDayFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalMonthDayFromFieldsNode.d.ts'
import type { ToTemporalMonthDayNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalMonthDayNode.d.ts'
import type { JSTemporalPlainMonthDayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainMonthDayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalMonthDayNodeGen extends ToTemporalMonthDayNode {
    static create(): ToTemporalMonthDayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fromJavaString_: TruffleString$FromJavaStringNode;
    // private getOptionsObject_: GetOptionsObjectNode;
    // private getTemporalCalendar_: GetTemporalCalendarIdentifierWithISODefaultNode;
    // private isObjectNode_: IsObjectNode;
    // private monthDayFromFieldsNode_: TemporalMonthDayFromFieldsNode;
    // private state_0_: number;
    // private stringEqual_: TruffleString$EqualNode;
    // private temporalGetOptionNode_: TemporalGetOptionNode;
    // private toJavaString_: TruffleString$ToJavaStringNode;
    execute(arg0Value: Object, arg1Value: Object): JSTemporalPlainMonthDayObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): JSTemporalPlainMonthDayObject;
}