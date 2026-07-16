import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DoubleLocation } from '../../../../../../com/oracle/truffle/api/object/DoubleLocation.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$AbstractFinalPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$AbstractFinalPropertyGetNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$FinalDoublePropertyGetNode extends PropertyGetNode$AbstractFinalPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode, value: number, expectedObj: JSDynamicObject)
    // private finalValue: number;
    // private location: DoubleLocation;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
    getValueDouble(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): number;
}