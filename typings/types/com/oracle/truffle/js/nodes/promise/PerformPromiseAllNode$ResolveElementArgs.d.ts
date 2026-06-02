import type { PerformPromiseCombinatorNode$BoxedInt } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseCombinatorNode$BoxedInt.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PerformPromiseAllNode$ResolveElementArgs extends Object {
    constructor(index: number, values: SimpleArrayList<Object>, capability: PromiseCapabilityRecord, remainingElements: PerformPromiseCombinatorNode$BoxedInt)
    // private alreadyCalled: boolean;
    capability: PromiseCapabilityRecord;
    index: number;
    // private remainingElements: PerformPromiseCombinatorNode$BoxedInt;
    // private values: SimpleArrayList<Object>;
}