import type { CycleDetectingLockFactory$ExampleStackTrace } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$ExampleStackTrace.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
export class CycleDetectingLockFactory$PotentialDeadlockException extends CycleDetectingLockFactory$ExampleStackTrace {
    private constructor(node1: CycleDetectingLockFactory$LockGraphNode, node2: CycleDetectingLockFactory$LockGraphNode, conflictingStackTrace: CycleDetectingLockFactory$ExampleStackTrace)
    readonly conflictingStackTrace: CycleDetectingLockFactory$ExampleStackTrace;
    readonly message: string | null;
    getConflictingStackTrace(): CycleDetectingLockFactory$ExampleStackTrace;
}