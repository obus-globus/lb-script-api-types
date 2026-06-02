import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ImportValueNode extends JavaScriptBaseNode {
    static create(): ImportValueNode;
    static getUncached(): ImportValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeWithTarget(target: Object): Object;
}