import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$ReadOnlyPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$ReadOnlyPropertySetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$NamespaceObjectRedefineReadOnlyPropertyNode extends PropertySetNode$ReadOnlyPropertySetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode, isStrict: boolean, property: Property)
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}