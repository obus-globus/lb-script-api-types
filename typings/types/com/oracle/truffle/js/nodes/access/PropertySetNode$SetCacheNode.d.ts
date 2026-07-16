import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyCacheNode$CacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$CacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertySetNode$SetCacheNode extends PropertyCacheNode$CacheNode<PropertySetNode$SetCacheNode> {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    // private next: PropertySetNode$SetCacheNode;
    acceptsValue(value: Object): boolean;
    getNext(): PropertySetNode$SetCacheNode;
    setNext(next: PropertySetNode$SetCacheNode): void;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueBoolean(thisObj: Object, value: boolean, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueDouble(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueInt(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}