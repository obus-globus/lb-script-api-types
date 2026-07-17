import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostToValueNode } from '../../../../com/oracle/truffle/host/HostToValueNode.d.ts'
import type { HostToValuesNode } from '../../../../com/oracle/truffle/host/HostToValuesNode.d.ts'
import type { HostToValuesNodeGen$CachedData } from '../../../../com/oracle/truffle/host/HostToValuesNodeGen$CachedData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class HostToValuesNodeGen$Inlined extends HostToValuesNode implements UnadoptableNode {
    private constructor(target: InlineSupport$InlineTarget)
    // private cached_cache: InlineSupport$ReferenceField<HostToValuesNodeGen$CachedData>;
    // private generic_toValue_: InlineSupport$ReferenceField<HostToValueNode>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: HostContext, arg2Value: Object[]): Value[];
    // private executeAndSpecialize(arg0Value: Node, arg1Value: HostContext, arg2Value: Object[]): Value[];
}