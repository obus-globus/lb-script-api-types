import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { ToRelativeTemporalObjectNode$Result } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToRelativeTemporalObjectNode$Result.d.ts'
import type { ToTemporalTimeZoneIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeZoneIdentifierNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class ToRelativeTemporalObjectNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getOffsetNode: PropertyGetNode;
    // private getRelativeToNode: PropertyGetNode;
    // private getTimeZoneNode: PropertyGetNode;
    execute(options: JSDynamicObject): ToRelativeTemporalObjectNode$Result;
    toRelativeTemporalObject(options: JSDynamicObject, errorBranch: InlinedBranchProfile, valueIsObject: InlinedConditionProfile, valueIsUndefined: InlinedConditionProfile, valueIsPlainDate: InlinedBranchProfile, valueIsZonedDateTime: InlinedBranchProfile, valueIsPlainDateTime: InlinedConditionProfile, timeZoneAvailable: InlinedConditionProfile, isObjectNode: IsObjectNode, dateFromFieldsNode: TemporalCalendarDateFromFieldsNode, toTimeZoneIdentifier: ToTemporalTimeZoneIdentifierNode, getTemporalCalendarWithISODefaultNode: GetTemporalCalendarIdentifierWithISODefaultNode, toJavaString: TruffleString$ToJavaStringNode, fromJavaString: TruffleString$FromJavaStringNode): ToRelativeTemporalObjectNode$Result;
}