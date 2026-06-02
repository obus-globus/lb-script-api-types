import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectFunctionBuiltins$AssignPropertiesNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    doObject(to: Object, from: Object, write: WriteElementNode, fromInterop: InteropLibrary, keysInterop: InteropLibrary, stringInterop: InteropLibrary, toJSType: ImportValueNode, fromJavaString: TruffleString$FromJavaStringNode): void;
    executeVoid(to: Object, from: Object, write: WriteElementNode): void;
}