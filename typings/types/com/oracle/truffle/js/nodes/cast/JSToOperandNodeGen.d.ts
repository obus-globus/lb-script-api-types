import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToOperandNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToOperandNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToOperandNodeGen extends JSToOperandNode {
    static create(paramhint: JSToPrimitiveNode$Hint): JSToOperandNode;
    static create(paramhint: JSToPrimitiveNode$Hint, paramcheckOperatorAllowed: boolean): JSToOperandNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(hint: JSToPrimitiveNode$Hint, checkOperatorAllowed: boolean)
    // private other_toPrimitiveNode_: JSToPrimitiveNode;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}