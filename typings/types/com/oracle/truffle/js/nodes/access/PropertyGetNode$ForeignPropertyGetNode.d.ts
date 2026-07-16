import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$LinkedPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$LinkedPropertyGetNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$ForeignPropertyGetNode extends PropertyGetNode$LinkedPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: Object, isMethod: boolean, isGlobal: boolean, context: JSContext)
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private getFromJSObjectNode: PropertyGetNode;
    // private getterInterop: InteropLibrary;
    // private importValueNode: ImportValueNode;
    // private interop: InteropLibrary;
    // private isGlobal: boolean;
    // private isLength: boolean;
    // private isMethod: boolean;
    // private optimistic: boolean;
    // private toJavaStringNode: TruffleString$ToJavaStringNode;
    // private foreignGet(thisObj: Object, root: PropertyGetNode): Object;
    // private getFromJSObject(object: Object, key: Object, receiver: Object): Object;
    // private getImpl(thisObj: Object, key: Object, root: PropertyGetNode): Object;
    // private getSize(thisObj: Object): Object;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
    // private maybeGetFromPrototype(thisObj: Object, key: Object): Object;
    // private tryGetters(thisObj: Object, root: PropertyGetNode): Object;
    // private tryInvokeGetter(thisObj: Object, prefix: TruffleString, root: PropertyGetNode): Object;
}