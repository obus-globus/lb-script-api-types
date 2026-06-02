import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { TemporalUtil$OptionType } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$OptionType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TemporalGetOptionNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(options: Object, property: TruffleString, types: TemporalUtil$OptionType, values: (Object | null)[], fallback: Object): Object;
    getOption(options: Object, property: TruffleString, types: TemporalUtil$OptionType, values: (Object | null)[], fallback: Object, errorBranch: InlinedBranchProfile, isFallbackProfile: InlinedConditionProfile, toBooleanNode: JSToBooleanNode, toStringNode: JSToStringNode, toNumberNode: JSToNumberNode): Object;
}