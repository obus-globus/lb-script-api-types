import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { FromPropertyDescriptorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FromPropertyDescriptorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
export class FromPropertyDescriptorNodeGen extends FromPropertyDescriptorNode {
    static create(): FromPropertyDescriptorNode;
    static getUncached(): FromPropertyDescriptorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private putConfigurableNode_: DynamicObject$PutNode;
    // private putEnumerableNode_: DynamicObject$PutNode;
    // private putGetNode_: DynamicObject$PutNode;
    // private putSetNode_: DynamicObject$PutNode;
    // private putValueNode_: DynamicObject$PutNode;
    // private putWritableNode_: DynamicObject$PutNode;
    // private state_0_: number;
    execute(arg0Value: PropertyDescriptor, arg1Value: JSContext): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: PropertyDescriptor, arg1Value: JSContext): JSDynamicObject;
}