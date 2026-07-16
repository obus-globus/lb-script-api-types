import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { TemporalYearMonthFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalYearMonthFromFieldsNode.d.ts'
import type { JSTemporalPlainYearMonthObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainYearMonthObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalYearMonthNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(value: Object, options: Object): JSTemporalPlainYearMonthObject;
    toTemporalYearMonth(item: Object, optionsParam: Object, isObjectProfile: InlinedConditionProfile, getOptionsObject: GetOptionsObjectNode, errorBranch: InlinedBranchProfile, isObjectNode: IsObjectNode, getOptionNode: TemporalGetOptionNode, getCalendarWithISODefault: GetTemporalCalendarIdentifierWithISODefaultNode, yearMonthFromFieldsNode: TemporalYearMonthFromFieldsNode, toJavaString: TruffleString$ToJavaStringNode, fromJavaString: TruffleString$FromJavaStringNode): JSTemporalPlainYearMonthObject;
}