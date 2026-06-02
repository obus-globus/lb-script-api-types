import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostToTypeNode } from '../../../../com/oracle/truffle/host/HostToTypeNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostToTypeNodeGen$Uncached extends HostToTypeNode implements UnadoptableNode {
    static inline(paramtarget: InlineSupport$InlineTarget): HostToTypeNode;
    private constructor()
    execute(arg0Value: Node, arg1Value: HostContext, arg2Value: Object, arg3Value: Class<Object>, arg4Value: Type, arg5Value: boolean): Object;
}