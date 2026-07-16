import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSTemporalPlainTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainTimeObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalTimeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(item: Object, options: Object): JSTemporalPlainTimeObject;
    toTemporalTime(item: Object, options: Object, isObjectNode: IsObjectNode, getOptionsObjectNode: GetOptionsObjectNode, getOptionNode: TemporalGetOptionNode, isObjectProfile: InlinedConditionProfile, isPlainDateTimeProfile: InlinedConditionProfile, isZonedDateTimeProfile: InlinedConditionProfile, isPlainTimeProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile): JSTemporalPlainTimeObject;
}