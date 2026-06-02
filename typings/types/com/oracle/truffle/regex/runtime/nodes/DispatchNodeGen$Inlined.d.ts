import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { IndirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { DispatchNode } from '../../../../../../com/oracle/truffle/regex/runtime/nodes/DispatchNode.d.ts'
import type { DispatchNodeGen$DirectData } from '../../../../../../com/oracle/truffle/regex/runtime/nodes/DispatchNodeGen$DirectData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DispatchNodeGen$Inlined extends DispatchNode implements UnadoptableNode {
    private constructor(target: InlineSupport$InlineTarget)
    // private direct_cache: InlineSupport$ReferenceField<DispatchNodeGen$DirectData>;
    // private indirect_callNode_: InlineSupport$ReferenceField<IndirectCallNode>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: CallTarget, arg2Value: RegexResult): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: CallTarget, arg2Value: RegexResult): Object;
}