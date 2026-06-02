import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TriggerPromiseReactionsNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/TriggerPromiseReactionsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RejectPromiseNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): RejectPromiseNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private triggerPromiseReactions: TriggerPromiseReactionsNode;
    // private unhandledProf: ConditionProfile;
    execute(promise: JSPromiseObject, reason: Object): Object;
}