import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PerformPromiseThenNodeGen$Uncached extends PerformPromiseThenNode implements UnadoptableNode {
    static create(): PerformPromiseThenNode;
    static getUncached(): PerformPromiseThenNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(promise: JSPromiseObject, onFulfilled: Object, onRejected: Object): JSDynamicObject;
    execute(arg0Value: JSPromiseObject, arg1Value: Object, arg2Value: Object, arg3Value: PromiseCapabilityRecord): JSDynamicObject;
}