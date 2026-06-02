import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PerformPromiseAllNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseAllNode.d.ts'
import type { PerformPromiseAllSettledNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseAllSettledNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PerformPromiseAllSettledNodeGen extends PerformPromiseAllSettledNode {
    static create(paramcontext: JSContext): PerformPromiseAllNode;
    static create(paramcontext: JSContext): PerformPromiseAllSettledNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    execute(arg0Value: IteratorRecord, arg1Value: JSDynamicObject, arg2Value: PromiseCapabilityRecord, arg3Value: Object): JSDynamicObject;
}