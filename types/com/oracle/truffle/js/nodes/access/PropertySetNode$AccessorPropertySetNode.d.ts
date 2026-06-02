import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Location } from '../../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$LinkedPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$LinkedPropertySetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$AccessorPropertySetNode extends PropertySetNode$LinkedPropertySetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, receiverCheck: PropertyCacheNode$ReceiverCheckNode, isStrict: boolean)
    // private callNode: JSFunctionCallNode;
    // private isStrict: boolean;
    // private location: Location;
    // private undefinedSetterBranch: BranchProfile;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}