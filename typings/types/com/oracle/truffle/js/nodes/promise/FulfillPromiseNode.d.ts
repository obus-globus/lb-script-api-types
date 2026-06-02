import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TriggerPromiseReactionsNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/TriggerPromiseReactionsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FulfillPromiseNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): FulfillPromiseNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private triggerPromiseReactions: TriggerPromiseReactionsNode;
    execute(promise: JSPromiseObject, value: Object): Object;
}