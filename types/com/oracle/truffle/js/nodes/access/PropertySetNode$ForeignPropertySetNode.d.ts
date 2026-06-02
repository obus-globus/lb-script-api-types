import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$LinkedPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$LinkedPropertySetNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$ForeignPropertySetNode extends PropertySetNode$LinkedPropertySetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, key: Object)
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private export: ExportValueNode;
    // private interop: InteropLibrary;
    // private isLength: boolean;
    // private optimistic: boolean;
    // private setterInterop: InteropLibrary;
    // private nullCheck(truffleObject: Object, key: Object): Object;
    // private performWriteMember(truffleObject: Object, value: Object, root: PropertySetNode): boolean;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueDouble(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    // private setValueImpl(thisObj: Object, value: Object, root: PropertySetNode): boolean;
    setValueInt(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    // private tryInvokeSetter(thisObj: Object, value: Object, root: PropertySetNode): boolean;
}