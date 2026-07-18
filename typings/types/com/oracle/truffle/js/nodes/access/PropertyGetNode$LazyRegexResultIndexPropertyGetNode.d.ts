import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$LinkedPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$LinkedPropertyGetNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$LazyRegexResultIndexPropertyGetNode extends PropertyGetNode$LinkedPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    // private readLazyRegexResult: DynamicObjectLibrary;
    // private readStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
    getValueDouble(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): number;
    getValueInt(thisObj: Object, receiver: Object, root: PropertyGetNode, guard: boolean): number;
}