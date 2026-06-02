import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { TruffleWeakReference } from '../../../../../../com/oracle/truffle/api/utilities/TruffleWeakReference.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$LinkedPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$LinkedPropertyGetNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyGetNode$AbstractFinalPropertyGetNode extends PropertyGetNode$LinkedPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode, expectedObj: JSDynamicObject)
    // private expectedObjRef: TruffleWeakReference<JSDynamicObject>;
    // private finalAssumption: Assumption;
    assertFinalValue(finalValue: Object, thisObj: Object, root: PropertyGetNode): boolean;
    clearExpectedObject(): void;
    debugString(): string;
    getExpectedObject(): JSDynamicObject;
    isValidFinalAssumption(): boolean;
}