import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyCacheNode$TraversePrototypeShapeCheckNode extends PropertyCacheNode$AbstractShapeCheckNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(shape: Shape, thisObj: JSDynamicObject)
    // private getPrototypeNode: GetPrototypeNode;
    // private protoShape: Shape;
    accept(nodeVisitor: NodeVisitor): void;
    accept(thisObj: Object): boolean;
    getDepth(): number;
    getStore(thisObj: Object): JSDynamicObject;
    isValid(): boolean;
}