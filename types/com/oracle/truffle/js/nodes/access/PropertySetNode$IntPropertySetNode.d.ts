import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IntLocation } from '../../../../../../com/oracle/truffle/api/object/IntLocation.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$LinkedPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$LinkedPropertySetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$IntPropertySetNode extends PropertySetNode$LinkedPropertySetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, shapeCheck: PropertyCacheNode$ReceiverCheckNode)
    // private location: IntLocation;
    acceptsValue(value: Object): boolean;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueInt(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}