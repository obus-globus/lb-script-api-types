import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToBooleanNode extends JavaScriptBaseNode {
    static create(): JSToBooleanNode;
    static getUncached(): JSToBooleanNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doForeignObject(value: Object, interop: InteropLibrary): boolean;
    executeBoolean(node: Node, value: Object): boolean;
    executeBoolean(value: Object): boolean;
}