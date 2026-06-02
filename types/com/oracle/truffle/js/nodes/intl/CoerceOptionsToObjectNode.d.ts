import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CoerceOptionsToObjectNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    readonly context: JSContext;
    execute(opts: Object): Object;
    fromOtherThanUndefined(opts: Object, toObjectNode: JSToObjectNode): Object;
    fromUndefined(opts: Object): Object;
    getContext(): JSContext;
}