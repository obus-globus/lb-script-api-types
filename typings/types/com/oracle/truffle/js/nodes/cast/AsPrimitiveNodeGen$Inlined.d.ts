import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { AsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/AsPrimitiveNode.d.ts'
import type { AsPrimitiveNodeGen$ForeignObjectData } from '../../../../../../com/oracle/truffle/js/nodes/cast/AsPrimitiveNodeGen$ForeignObjectData.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsPrimitiveNodeGen$Inlined extends AsPrimitiveNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private foreignObject_cache: InlineSupport$ReferenceField<AsPrimitiveNodeGen$ForeignObjectData>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: Object, arg2Value: JSToPrimitiveNode$Hint): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object, arg2Value: JSToPrimitiveNode$Hint): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Node, arg1Value: Object, arg2Value: JSToPrimitiveNode$Hint): boolean;
}