import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { ToRelativeTemporalObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToRelativeTemporalObjectNode.d.ts'
import type { ToRelativeTemporalObjectNode$Result } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToRelativeTemporalObjectNode$Result.d.ts'
import type { ToTemporalTimeZoneIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeZoneIdentifierNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class ToRelativeTemporalObjectNodeGen extends ToRelativeTemporalObjectNode {
    static create(): ToRelativeTemporalObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private dateFromFieldsNode_: TemporalCalendarDateFromFieldsNode;
    // private fromJavaString_: TruffleString$FromJavaStringNode;
    // private getTemporalCalendarWithISODefaultNode_: GetTemporalCalendarIdentifierWithISODefaultNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toJavaString_: TruffleString$ToJavaStringNode;
    // private toTimeZoneIdentifier_: ToTemporalTimeZoneIdentifierNode;
    execute(arg0Value: JSDynamicObject): ToRelativeTemporalObjectNode$Result;
    // private executeAndSpecialize(arg0Value: JSDynamicObject): ToRelativeTemporalObjectNode$Result;
}