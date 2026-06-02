import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostToTypeNode } from '../../../../com/oracle/truffle/host/HostToTypeNode.d.ts'
import type { HostToTypeNodeGen$CachedData } from '../../../../com/oracle/truffle/host/HostToTypeNodeGen$CachedData.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostToTypeNodeGen extends HostToTypeNode {
    static create(): HostToTypeNode;
    static getUncached(): HostToTypeNode;
    static inline(paramtarget: InlineSupport$InlineTarget): HostToTypeNode;
    private constructor()
    // private cached_cache: HostToTypeNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: HostContext, arg2Value: Object, arg3Value: Class<Object>, arg4Value: Type, arg5Value: boolean): Object;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: HostContext, arg2Value: Object, arg3Value: Class<Object>, arg4Value: Type, arg5Value: boolean): Object;
}