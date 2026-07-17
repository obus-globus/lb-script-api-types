import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { GetDifferenceSettingsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetDifferenceSettingsNode.d.ts'
import type { GetDifferenceSettingsNode$GetDifferenceSettingsResult } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetDifferenceSettingsNode$GetDifferenceSettingsResult.d.ts'
import type { GetRoundingIncrementOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetRoundingIncrementOptionNode.d.ts'
import type { GetTemporalUnitValuedOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalUnitValuedOptionNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
import type { TemporalUtil$UnitGroup } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$UnitGroup.d.ts'
export class GetDifferenceSettingsNodeGen extends GetDifferenceSettingsNode {
    static create(): GetDifferenceSettingsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private equalNode_: TruffleString$EqualNode;
    // private getLargestUnit_: GetTemporalUnitValuedOptionNode;
    // private getOptionNode_: TemporalGetOptionNode;
    // private getRoundingIncrementOption_: GetRoundingIncrementOptionNode;
    // private getSmallestUnit_: GetTemporalUnitValuedOptionNode;
    // private state_0_: number;
    execute(arg0Value: number, arg1Value: JSDynamicObject, arg2Value: TemporalUtil$UnitGroup, arg3Value: TemporalUtil$Unit[], arg4Value: TemporalUtil$Unit, arg5Value: TemporalUtil$Unit): GetDifferenceSettingsNode$GetDifferenceSettingsResult;
    // private executeAndSpecialize(arg0Value: number, arg1Value: JSDynamicObject, arg2Value: TemporalUtil$UnitGroup, arg3Value: TemporalUtil$Unit[], arg4Value: TemporalUtil$Unit, arg5Value: TemporalUtil$Unit): GetDifferenceSettingsNode$GetDifferenceSettingsResult;
}