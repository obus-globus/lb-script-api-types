import type { InlineSupport$InlineTarget } from '../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostToTypeNode extends Node {
    static inline(paramtarget: InlineSupport$InlineTarget): HostToTypeNode;
    constructor()
    execute(node: Node, context: HostContext, value: Object, targetType: Class<Object>, genericType: Type, useTargetMapping: boolean): Object;
}