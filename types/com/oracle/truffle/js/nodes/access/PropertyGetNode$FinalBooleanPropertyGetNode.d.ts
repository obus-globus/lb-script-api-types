import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BooleanLocation } from '../../../../../../com/oracle/truffle/api/object/BooleanLocation.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$AbstractFinalPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$AbstractFinalPropertyGetNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$FinalBooleanPropertyGetNode extends PropertyGetNode$AbstractFinalPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode, value: boolean, expectedObj: JSDynamicObject)
    // private finalValue: boolean;
    // private location: BooleanLocation;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
    getValueBoolean(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): boolean;
}