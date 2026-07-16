import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyCacheNode$CacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$CacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyGetNode$GetCacheNode extends PropertyCacheNode$CacheNode<PropertyGetNode$GetCacheNode> {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode, specializationFlags: number)
    // private next: PropertyGetNode$GetCacheNode;
    getNext(): PropertyGetNode$GetCacheNode;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
    getValueBoolean(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): boolean;
    getValueDouble(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): number;
    getValueInt(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): number;
    setNext(next: PropertyGetNode$GetCacheNode): void;
}