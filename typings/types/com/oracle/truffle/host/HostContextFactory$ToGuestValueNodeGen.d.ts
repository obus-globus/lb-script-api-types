import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext$ToGuestValueNode } from '../../../../com/oracle/truffle/host/HostContext$ToGuestValueNode.d.ts'
import type { HostContextFactory$ToGuestValueNodeGen$CachedData } from '../../../../com/oracle/truffle/host/HostContextFactory$ToGuestValueNodeGen$CachedData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostContextFactory$ToGuestValueNodeGen extends HostContext$ToGuestValueNode {
    static create(): HostContext$ToGuestValueNode;
    static getUncached(): HostContext$ToGuestValueNode;
    static inline(paramtarget: InlineSupport$InlineTarget): HostContext$ToGuestValueNode;
    private constructor()
    // private cached_cache: HostContextFactory$ToGuestValueNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): Object;
}