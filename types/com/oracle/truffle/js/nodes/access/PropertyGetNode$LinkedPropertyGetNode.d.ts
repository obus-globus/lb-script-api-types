import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode$GetCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$GetCacheNode.d.ts'
export abstract class PropertyGetNode$LinkedPropertyGetNode extends PropertyGetNode$GetCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode, specializationFlags: number)
}