import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { PerformPromiseAllNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseAllNode.d.ts'
import type { PerformPromiseCombinatorNode$BoxedInt } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseCombinatorNode$BoxedInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PerformPromiseAllSettledNode extends PerformPromiseAllNode {
    static create(paramcontext: JSContext): PerformPromiseAllNode;
    static create(paramcontext: JSContext): PerformPromiseAllSettledNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    createRejectElementFunction(index: number, values: SimpleArrayList<Object>, resultCapability: PromiseCapabilityRecord, remainingElementsCount: PerformPromiseCombinatorNode$BoxedInt): Object;
    createResolveElementFunction(index: number, values: SimpleArrayList<Object>, resultCapability: PromiseCapabilityRecord, remainingElementsCount: PerformPromiseCombinatorNode$BoxedInt): JSFunctionObject;
    promiseAll(iteratorRecord: IteratorRecord, constructor: JSDynamicObject, resultCapability: PromiseCapabilityRecord, promiseResolve: Object, growProfile: InlinedBranchProfile): JSDynamicObject;
}