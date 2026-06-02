import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { InstanceofNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNode.d.ts'
import type { InstanceofNode$OrdinaryHasInstanceNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNode$OrdinaryHasInstanceNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InstanceofNodeGen$OrdinaryHasInstanceNodeGen extends InstanceofNode$OrdinaryHasInstanceNode {
    static create(paramcontext: JSContext): InstanceofNode$OrdinaryHasInstanceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private bound_instanceofNode_: InstanceofNode;
    // private getForeignPrototypeNode: ForeignObjectPrototypeNode;
    // private getPrototype1Node: GetPrototypeNode;
    // private getPrototype2Node: GetPrototypeNode;
    // private getPrototype3Node: GetPrototypeNode;
    // private isAnyObjectNode: IsObjectNode;
    // private isObjectNode: IsJSObjectNode;
    // private ordinaryHasInstanceNode: InstanceofNode$OrdinaryHasInstanceNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): boolean;
    executeBoolean(arg0Value: Object, arg1Value: Object): boolean;
}