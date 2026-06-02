import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSTemporalInstantObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalInstantObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalInstantNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(value: Object): JSTemporalInstantObject;
    toTemporalDateTime(item: Object, isObjectNode: IsObjectNode, toPrimitiveNode: JSToPrimitiveNode, isObjectProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile): JSTemporalInstantObject;
}