import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class OrdinaryToPrimitiveNode extends JavaScriptBaseNode {
    static create(): OrdinaryToPrimitiveNode;
    static isJavaArray(paramobject: Object, paraminterop: InteropLibrary): boolean;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(object: Object, hint: JSToPrimitiveNode$Hint): Object;
}