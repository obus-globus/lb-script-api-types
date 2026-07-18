import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetDifferenceSettingsNode$GetDifferenceSettingsResult } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetDifferenceSettingsNode$GetDifferenceSettingsResult.d.ts'
import type { GetRoundingIncrementOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetRoundingIncrementOptionNode.d.ts'
import type { GetTemporalUnitNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalUnitNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class GetDifferenceSettingsNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(operation: number, options: JSDynamicObject, unitMappingOrAuto: JavaMap<TruffleString, TemporalUtil$Unit>, unitMapping: JavaMap<TruffleString, TemporalUtil$Unit>, fallbackSmallestUnit: TemporalUtil$Unit, smallestLargestDefaultUnit: TemporalUtil$Unit): GetDifferenceSettingsNode$GetDifferenceSettingsResult;
    getDifferenceSettings(operation: number, resolvedOptions: JSDynamicObject, unitMappingOrAuto: JavaMap<TruffleString, TemporalUtil$Unit>, unitMapping: JavaMap<TruffleString, TemporalUtil$Unit>, fallbackSmallestUnit: TemporalUtil$Unit, smallestLargestDefaultUnit: TemporalUtil$Unit, errorBranch: InlinedBranchProfile, getOptionNode: TemporalGetOptionNode, equalNode: TruffleString$EqualNode, getLargestUnit: GetTemporalUnitNode, getRoundingIncrementOption: GetRoundingIncrementOptionNode, getSmallestUnit: GetTemporalUnitNode): GetDifferenceSettingsNode$GetDifferenceSettingsResult;
}