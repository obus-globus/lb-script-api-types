import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GroupByNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, toPropertyKeyCoercion: boolean)
    // private context: JSContext;
    // private toPropertyKeyCoercion: boolean;
    execute(items: Object, callbackfn: Object): JavaMap<Object, Object[]>;
}