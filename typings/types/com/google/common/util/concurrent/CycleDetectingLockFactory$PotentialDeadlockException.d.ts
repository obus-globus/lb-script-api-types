import type { CycleDetectingLockFactory$ExampleStackTrace } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$ExampleStackTrace.d.ts'
import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
export class CycleDetectingLockFactory$PotentialDeadlockException extends CycleDetectingLockFactory$ExampleStackTrace {
    constructor(arg0: CycleDetectingLockFactory$LockGraphNode, arg1: CycleDetectingLockFactory$LockGraphNode, arg2: CycleDetectingLockFactory$ExampleStackTrace, arg3: ThreadLocal<CycleDetectingLockFactory$LockGraphNode[]>)
    readonly conflictingStackTrace: CycleDetectingLockFactory$ExampleStackTrace;
    readonly message: string | null;
    getConflictingStackTrace(): CycleDetectingLockFactory$ExampleStackTrace;
}