import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ToPropertyDescriptorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ToPropertyDescriptorNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToPropertyDescriptorNodeGen extends ToPropertyDescriptorNode {
    static create(paramcontext: JSContext): ToPropertyDescriptorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private default_isCallable_: IsCallableNode;
    // private default_toBooleanNode__field1_: Node;
    // private isObjectNode: IsObjectNode;
    // private state_0_: number;
    execute(arg0Value: Object): PropertyDescriptor;
    // private executeAndSpecialize(arg0Value: Object): PropertyDescriptor;
}