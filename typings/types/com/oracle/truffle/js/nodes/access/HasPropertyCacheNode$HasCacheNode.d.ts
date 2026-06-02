import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { PropertyCacheNode$CacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$CacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class HasPropertyCacheNode$HasCacheNode extends PropertyCacheNode$CacheNode<HasPropertyCacheNode$HasCacheNode> {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    // private next: HasPropertyCacheNode$HasCacheNode;
    getNext(): HasPropertyCacheNode$HasCacheNode;
    hasProperty(thisObj: Object, root: HasPropertyCacheNode): boolean;
    setNext(next: HasPropertyCacheNode$HasCacheNode): void;
}