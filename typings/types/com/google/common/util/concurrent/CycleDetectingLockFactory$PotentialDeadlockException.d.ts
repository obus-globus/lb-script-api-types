import type { CycleDetectingLockFactory$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CycleDetectingLockFactory$ExampleStackTrace } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$ExampleStackTrace.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
export class CycleDetectingLockFactory$PotentialDeadlockException extends CycleDetectingLockFactory$ExampleStackTrace {
    private constructor(node1: CycleDetectingLockFactory$LockGraphNode, node2: CycleDetectingLockFactory$LockGraphNode, conflictingStackTrace: CycleDetectingLockFactory$ExampleStackTrace)
    constructor(arg0: CycleDetectingLockFactory$LockGraphNode, arg1: CycleDetectingLockFactory$LockGraphNode, arg2: CycleDetectingLockFactory$ExampleStackTrace, arg3: CycleDetectingLockFactory$1)
    readonly conflictingStackTrace: CycleDetectingLockFactory$ExampleStackTrace;
    readonly message: string | null;
    getConflictingStackTrace(): CycleDetectingLockFactory$ExampleStackTrace;
}