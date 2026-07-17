import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostToValueNode } from '../../../../com/oracle/truffle/host/HostToValueNode.d.ts'
import type { HostToValueNodeGen$CachedData } from '../../../../com/oracle/truffle/host/HostToValueNodeGen$CachedData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class HostToValueNodeGen extends HostToValueNode {
    static create(): HostToValueNode;
    static getUncached(): HostToValueNode;
    private constructor()
    // private cached_cache: HostToValueNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: HostContext, arg1Value: Object): Value;
    // private executeAndSpecialize(arg0Value: HostContext, arg1Value: Object): Value;
}