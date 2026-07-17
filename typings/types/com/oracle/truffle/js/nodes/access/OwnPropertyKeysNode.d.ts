import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class OwnPropertyKeysNode extends JavaScriptBaseNode {
    static create(): OwnPropertyKeysNode;
    static getUncached(): OwnPropertyKeysNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(obj: Object): Object[];
}