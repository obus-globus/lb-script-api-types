import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalTimeZoneIdentifierNode extends JavaScriptBaseNode {
    static getUncached(): ToTemporalTimeZoneIdentifierNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(temporalTimeZoneLike: Object): TruffleString;
    toTemporalTimeZoneIdentifier(temporalTimeZoneLike: Object, isObjectNode: IsObjectNode, errorBranch: InlinedBranchProfile, isObjectProfile: InlinedConditionProfile, isTimeZoneProfile: InlinedConditionProfile): TruffleString;
}