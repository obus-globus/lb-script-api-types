import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode$SetCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$SetCacheNode.d.ts'
export abstract class PropertySetNode$LinkedPropertySetNode extends PropertySetNode$SetCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
}