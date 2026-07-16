import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ForEachIndexCallNode$MaybeResult } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResult.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ForEachIndexCallNode$MaybeResultNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    apply(index: number, value: Object, callbackResult: Object, currentResult: Object): ForEachIndexCallNode$MaybeResult<Object>;
}