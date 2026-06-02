import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyCacheNode$AbstractShapeCheckNode extends PropertyCacheNode$ReceiverCheckNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(shape: Shape)
    accept(thisObj: Object): boolean;
    getDepth(): number;
    getStore(thisObj: Object): JSDynamicObject;
    isValid(): boolean;
}