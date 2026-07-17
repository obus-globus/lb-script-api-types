import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { PromiseReactionJobNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseReactionJobNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PerformPromiseThenNodeGen extends PerformPromiseThenNode {
    static create(): PerformPromiseThenNode;
    static getUncached(): PerformPromiseThenNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isCallableFulfillNode_: IsCallableNode;
    // private isCallableRejectNode_: IsCallableNode;
    // private promiseReactionJobNode_: PromiseReactionJobNode;
    // private state_0_: number;
    execute(promise: JSPromiseObject, onFulfilled: Object, onRejected: Object): JSDynamicObject;
    execute(arg0Value: JSPromiseObject, arg1Value: Object, arg2Value: Object, arg3Value: PromiseCapabilityRecord): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: JSPromiseObject, arg1Value: Object, arg2Value: Object, arg3Value: PromiseCapabilityRecord): JSDynamicObject;
}