import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ToTemporalPartialDurationRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalPartialDurationRecordNode.d.ts'
import type { JSTemporalDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalDurationRecordNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(item: Object): JSTemporalDurationRecord;
    toTemporalDurationRecord(temporalDurationLike: Object, isObjectProfile: InlinedConditionProfile, toTemporalPartialDurationRecord: ToTemporalPartialDurationRecordNode, errorBranch: InlinedBranchProfile, isObjectNode: IsObjectNode): JSTemporalDurationRecord;
}