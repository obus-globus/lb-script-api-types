import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyCacheNode$ShapeCheckNode extends PropertyCacheNode$AbstractShapeCheckNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(shape: Shape)
    getStore(thisObj: Object): JSDynamicObject;
    isValid(): boolean;
}