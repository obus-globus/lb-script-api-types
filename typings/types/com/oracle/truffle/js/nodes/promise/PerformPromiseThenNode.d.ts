import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PromiseReactionJobNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseReactionJobNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { PromiseReactionRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseReactionRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PerformPromiseThenNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): PerformPromiseThenNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private isCallableFulfillNode: IsCallableNode;
    // private isCallableRejectNode: IsCallableNode;
    // private promiseReactionJobNode: PromiseReactionJobNode;
    execute(promise: JSPromiseObject, onFulfilled: Object, onRejected: Object): JSDynamicObject;
    execute(promise: JSPromiseObject, onFulfilled: Object, onRejected: Object, resultCapability: PromiseCapabilityRecord): JSDynamicObject;
    // private getPromiseReactionJob(reaction: PromiseReactionRecord, value: Object): JSFunctionObject;
    promiseThen(promise: JSPromiseObject, onFulfilled: Object, onRejected: Object, resultCapability: PromiseCapabilityRecord, pendingProf: InlinedConditionProfile, fulfilledProf: InlinedConditionProfile, unhandledProf: InlinedConditionProfile, growProfile: InlinedBranchProfile): JSDynamicObject;
}