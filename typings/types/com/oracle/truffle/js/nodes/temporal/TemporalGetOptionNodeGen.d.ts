import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { TemporalUtil$OptionType } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$OptionType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalGetOptionNodeGen extends TemporalGetOptionNode {
    static create(): TemporalGetOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private toBooleanNode__field1_: Node;
    // private toNumberNode_: JSToNumberNode;
    // private toStringNode_: JSToStringNode;
    execute(arg0Value: Object, arg1Value: TruffleString, arg2Value: TemporalUtil$OptionType, arg3Value: (Object | null)[], arg4Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: TruffleString, arg2Value: TemporalUtil$OptionType, arg3Value: (Object | null)[], arg4Value: Object): Object;
}