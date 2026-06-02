import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$LinkedPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$LinkedPropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$AccessorPropertyGetNode extends PropertyGetNode$LinkedPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, receiverCheck: PropertyCacheNode$ReceiverCheckNode)
    // private callNode: JSFunctionCallNode;
    // private property: Property;
    // private undefinedGetterBranch: BranchProfile;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
}