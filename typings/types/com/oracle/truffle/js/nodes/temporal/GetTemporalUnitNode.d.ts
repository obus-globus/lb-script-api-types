import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class GetTemporalUnitNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(normalizedOptions: JSDynamicObject, key: TruffleString, unitMapping: Map<TruffleString, TemporalUtil$Unit>, defaultValue: TemporalUtil$Unit): TemporalUtil$Unit;
    getUnit(normalizedOptions: JSDynamicObject, key: TruffleString, unitMapping: Map<TruffleString, TemporalUtil$Unit>, defaultValue: TemporalUtil$Unit, errorBranch: InlinedBranchProfile, getOptionNode: TemporalGetOptionNode): TemporalUtil$Unit;
}