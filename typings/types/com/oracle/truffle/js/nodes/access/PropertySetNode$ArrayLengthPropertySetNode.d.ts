import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$LinkedPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$LinkedPropertySetNode.d.ts'
import type { ArrayLengthNode$ArrayLengthWriteNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthWriteNode.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$ArrayLengthPropertySetNode extends PropertySetNode$LinkedPropertySetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(property: Property, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode, isStrict: boolean)
    // private arrayLengthWrite: ArrayLengthNode$ArrayLengthWriteNode;
    // private errorBranch: BranchProfile;
    // private isStrict: boolean;
    // private getStoreAsJSArray(thisObj: Object): JSArrayObject;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueInt(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}