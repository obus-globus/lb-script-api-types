import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { HasPropertyCacheNode$LinkedHasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$LinkedHasPropertyCacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasPropertyCacheNode$AbsentHasPropertyCacheNode extends HasPropertyCacheNode$LinkedHasPropertyCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(shapeCheckNode: PropertyCacheNode$ReceiverCheckNode)
    hasProperty(thisObj: Object, root: HasPropertyCacheNode): boolean;
}