import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSGetLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { TypeOfNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/TypeOfNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSLocaleObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSLocaleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToCanonicalizedLocaleListNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSToCanonicalizedLocaleListNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    doForeignType(object: Object, arrayInterop: InteropLibrary, valueInterop: InteropLibrary, importValueNode: ImportValueNode, typeOfNode: TypeOfNode, toStringNode: JSToStringNode, equalsNode: TruffleString$EqualNode, toJavaStringNode: TruffleString$ToJavaStringNode): string[];
    doLocale(object: JSLocaleObject): string[];
    doOtherType(object: Object, toObjectNode: JSToObjectNode, getLengthNode: JSGetLengthNode, hasPropertyNode: JSHasPropertyNode, typeOfNode: TypeOfNode, toStringNode: JSToStringNode, equalsNode: TruffleString$EqualNode, toJavaStringNode: TruffleString$ToJavaStringNode): string[];
    doTString(s: TruffleString): string[];
    doUndefined(object: Object): string[];
    executeLanguageTags(value: Object): string[];
}