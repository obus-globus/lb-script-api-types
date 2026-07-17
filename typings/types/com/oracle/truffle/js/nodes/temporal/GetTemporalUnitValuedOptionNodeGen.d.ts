import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GetTemporalUnitValuedOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalUnitValuedOptionNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export class GetTemporalUnitValuedOptionNodeGen extends GetTemporalUnitValuedOptionNode {
    static create(): GetTemporalUnitValuedOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getOptionNode_: TemporalGetOptionNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: TruffleString, arg2Value: TemporalUtil$Unit): TemporalUtil$Unit;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: TruffleString, arg2Value: TemporalUtil$Unit): TemporalUtil$Unit;
}