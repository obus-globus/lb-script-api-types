import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { PerformPromiseCombinatorNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseCombinatorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PerformPromiseRaceNode extends PerformPromiseCombinatorNode {
    static create(paramcontext: JSContext): PerformPromiseRaceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callResolve: JSFunctionCallNode;
    // private callThen: JSFunctionCallNode;
    // private getThen: PropertyGetNode;
    execute(iteratorRecord: IteratorRecord, constructor: JSDynamicObject, resultCapability: PromiseCapabilityRecord, promiseResolve: Object): JSDynamicObject;
}