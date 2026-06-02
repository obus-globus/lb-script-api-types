import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSLoadNode extends JavaScriptBaseNode {
    static create(): JSLoadNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeLoad(source: Source, realm: JSRealm): Object;
}