import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalDateNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(value: Object): JSTemporalPlainDateObject;
    execute(value: Object, options: Object): JSTemporalPlainDateObject;
    toTemporalDate(itemParam: Object, options: Object, errorBranch: InlinedBranchProfile, isObjectProfile: InlinedConditionProfile, isPlainDateTimeProfile: InlinedConditionProfile, isZonedDateTimeProfile: InlinedConditionProfile, isPlainDateProfile: InlinedConditionProfile, isObjectNode: IsObjectNode, getOptionsObject: GetOptionsObjectNode, getOptionNode: TemporalGetOptionNode, getCalendarWithISODefault: GetTemporalCalendarIdentifierWithISODefaultNode, dateFromFieldsNode: TemporalCalendarDateFromFieldsNode, toJavaString: TruffleString$ToJavaStringNode, fromJavaString: TruffleString$FromJavaStringNode): JSTemporalPlainDateObject;
}