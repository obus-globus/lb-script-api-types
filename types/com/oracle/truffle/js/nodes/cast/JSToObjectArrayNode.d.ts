import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToObjectArrayNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramoperand: JavaScriptNode): JavaScriptNode;
    static create(): JSToObjectArrayNode;
    static create(paramnullOrUndefinedAsEmptyArray: boolean): JSToObjectArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(nullOrUndefinedAsEmptyArray: boolean)
    // private nullOrUndefinedAsEmptyArray: boolean;
    doFallback(value: Object, arrayLengthLimit: number): Object[];
    doForeignObject(obj: Object, arrayLengthLimit: number, node: Node, interop: InteropLibrary, errorBranch: InlinedBranchProfile, foreignConvertNode: ImportValueNode): Object[];
    doNull(value: Object, arrayLengthLimit: number): Object[];
    doUndefined(value: Object, arrayLengthLimit: number): Object[];
    // private emptyArrayOrObjectError(value: Object): Object[];
    executeObjectArray(value: Object): Object[];
    executeObjectArray(value: Object, arrayLengthLimit: number): Object[];
    passArray(array: Object[], arrayLengthLimit: number, errorBranch: InlinedBranchProfile): Object[];
    toArray(obj: JSObject, arrayLengthLimit: number, node: Node, getLengthNode: JSGetLengthNode, readNode: ReadElementNode, errorBranch: InlinedBranchProfile): Object[];
}