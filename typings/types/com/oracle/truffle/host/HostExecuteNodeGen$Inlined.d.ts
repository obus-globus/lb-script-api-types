import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { GuestToHostCodeCache } from '../../../../com/oracle/truffle/host/GuestToHostCodeCache.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostContext$ToGuestValueNode } from '../../../../com/oracle/truffle/host/HostContext$ToGuestValueNode.d.ts'
import type { HostExecuteNode } from '../../../../com/oracle/truffle/host/HostExecuteNode.d.ts'
import type { HostExecuteNode$HostMethodProfileNode } from '../../../../com/oracle/truffle/host/HostExecuteNode$HostMethodProfileNode.d.ts'
import type { HostExecuteNodeGen$FixedData } from '../../../../com/oracle/truffle/host/HostExecuteNodeGen$FixedData.d.ts'
import type { HostExecuteNodeGen$OverloadedCachedData } from '../../../../com/oracle/truffle/host/HostExecuteNodeGen$OverloadedCachedData.d.ts'
import type { HostExecuteNodeGen$VarArgsData } from '../../../../com/oracle/truffle/host/HostExecuteNodeGen$VarArgsData.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { HostToTypeNode } from '../../../../com/oracle/truffle/host/HostToTypeNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNodeGen$Inlined extends HostExecuteNode implements UnadoptableNode {
    private constructor(target: InlineSupport$InlineTarget)
    // private cache: InlineSupport$ReferenceField<GuestToHostCodeCache>;
    // private errorBranch: InlinedBranchProfile;
    // private fixed_cache: InlineSupport$ReferenceField<HostExecuteNodeGen$FixedData>;
    // private hostMethodProfile: HostExecuteNode$HostMethodProfileNode;
    // private overloadedCached_cache: InlineSupport$ReferenceField<HostExecuteNodeGen$OverloadedCachedData>;
    // private seenScope: InlinedBranchProfile;
    // private state_0_: InlineSupport$StateField;
    // private toGuest: HostContext$ToGuestValueNode;
    // private toGuest_field1_: InlineSupport$ReferenceField<Object>;
    // private toHost: HostToTypeNode;
    // private toHost_field1_: InlineSupport$ReferenceField<Node>;
    // private varArgsProfile: InlinedConditionProfile;
    // private varArgs_cache: InlineSupport$ReferenceField<HostExecuteNodeGen$VarArgsData>;
    // private checkForPolymorphicSpecialize(arg0Value: Node, oldState_0: number, oldCacheCount: number): void;
    // private countCaches(arg0Value: Node): number;
    execute(arg0Value: Node, arg1Value: HostMethodDesc, arg2Value: Object, arg3Value: Object[], arg4Value: HostContext): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: HostMethodDesc, arg2Value: Object, arg3Value: Object[], arg4Value: HostContext): Object;
}