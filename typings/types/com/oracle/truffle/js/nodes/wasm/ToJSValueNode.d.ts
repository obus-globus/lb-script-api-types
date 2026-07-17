import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToJSValueNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    convert(value: Object, isStructLib: InteropLibrary, isArrayLib: InteropLibrary, isFuncLib: InteropLibrary, funcTypeLib: InteropLibrary, asTStringLib: InteropLibrary, importValueNode: ImportValueNode, switchEncoding: TruffleString$SwitchEncodingNode): Object;
    execute(value: Object): Object;
}