import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
export abstract class FromPropertyDescriptorNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(desc: PropertyDescriptor, context: JSContext): JSDynamicObject;
    toJSObject(desc: PropertyDescriptor, context: JSContext, putValueNode: DynamicObjectLibrary, putWritableNode: DynamicObjectLibrary, putGetNode: DynamicObjectLibrary, putSetNode: DynamicObjectLibrary, putEnumerableNode: DynamicObjectLibrary, putConfigurableNode: DynamicObjectLibrary): JSDynamicObject;
}