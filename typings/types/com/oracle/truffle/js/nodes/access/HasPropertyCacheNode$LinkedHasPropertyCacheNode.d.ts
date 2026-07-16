import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasPropertyCacheNode$HasCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$HasCacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
export abstract class HasPropertyCacheNode$LinkedHasPropertyCacheNode extends HasPropertyCacheNode$HasCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheckNode: PropertyCacheNode$ReceiverCheckNode)
}