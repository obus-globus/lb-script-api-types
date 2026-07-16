import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { PerformPromiseCombinatorNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseCombinatorNode.d.ts'
import type { PerformPromiseCombinatorNode$BoxedInt } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseCombinatorNode$BoxedInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PerformPromiseAnyNode extends PerformPromiseCombinatorNode {
    static create(paramcontext: JSContext): PerformPromiseAnyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callResolve: JSFunctionCallNode;
    // private callThen: JSFunctionCallNode;
    // private getThen: PropertyGetNode;
    // private setArgs: PropertySetNode;
    createRejectElementFunction(index: number, errors: SimpleArrayList<Object>, resultCapability: PromiseCapabilityRecord, remainingElementsCount: PerformPromiseCombinatorNode$BoxedInt): JSFunctionObject;
    createResolveElementFunction(index: number, errors: SimpleArrayList<Object>, resultCapability: PromiseCapabilityRecord, remainingElementsCount: PerformPromiseCombinatorNode$BoxedInt): Object;
    promiseAny(iteratorRecord: IteratorRecord, constructor: JSDynamicObject, resultCapability: PromiseCapabilityRecord, promiseResolve: Object, growProfile: InlinedBranchProfile): JSDynamicObject;
}