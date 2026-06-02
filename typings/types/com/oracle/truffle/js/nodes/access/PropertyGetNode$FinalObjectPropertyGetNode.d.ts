import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Location } from '../../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { TruffleWeakReference } from '../../../../../../com/oracle/truffle/api/utilities/TruffleWeakReference.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$AbstractFinalPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$AbstractFinalPropertyGetNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$FinalObjectPropertyGetNode extends PropertyGetNode$AbstractFinalPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode, value: Object, expectedObjRef: JSDynamicObject)
    // private finalValueRef: TruffleWeakReference<Object>;
    // private location: Location;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
}