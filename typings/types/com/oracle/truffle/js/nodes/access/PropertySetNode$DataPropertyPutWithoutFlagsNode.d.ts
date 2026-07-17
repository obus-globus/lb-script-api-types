import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$LinkedPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$LinkedPropertySetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$DataPropertyPutWithoutFlagsNode extends PropertySetNode$LinkedPropertySetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    // private putNode: DynamicObject$PutNode;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueDouble(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueInt(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}