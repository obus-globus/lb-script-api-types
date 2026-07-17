import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
export abstract class FromPropertyDescriptorNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(desc: PropertyDescriptor, context: JSContext): JSDynamicObject;
    toJSObject(desc: PropertyDescriptor, context: JSContext, putValueNode: DynamicObject$PutNode, putWritableNode: DynamicObject$PutNode, putGetNode: DynamicObject$PutNode, putSetNode: DynamicObject$PutNode, putEnumerableNode: DynamicObject$PutNode, putConfigurableNode: DynamicObject$PutNode): JSDynamicObject;
}