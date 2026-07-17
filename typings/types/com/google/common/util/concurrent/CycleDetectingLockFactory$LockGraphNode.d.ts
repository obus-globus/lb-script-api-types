import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CycleDetectingLockFactory$ExampleStackTrace } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$ExampleStackTrace.d.ts'
import type { CycleDetectingLockFactory$Policy } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$Policy.d.ts'
import type { CycleDetectingLockFactory$PotentialDeadlockException } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$PotentialDeadlockException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CycleDetectingLockFactory$LockGraphNode extends Object {
    constructor(lockName: string)
    // private allowedPriorLocks: JavaMap<CycleDetectingLockFactory$LockGraphNode, CycleDetectingLockFactory$ExampleStackTrace>;
    // private disallowedPriorLocks: JavaMap<CycleDetectingLockFactory$LockGraphNode, CycleDetectingLockFactory$PotentialDeadlockException>;
    // private lockName: string;
    checkAcquiredLock(policy: CycleDetectingLockFactory$Policy, acquiredLock: CycleDetectingLockFactory$LockGraphNode): void;
    checkAcquiredLocks(policy: CycleDetectingLockFactory$Policy, acquiredLocks: CycleDetectingLockFactory$LockGraphNode[]): void;
    // private findPathTo(node: CycleDetectingLockFactory$LockGraphNode, seen: CycleDetectingLockFactory$LockGraphNode[]): CycleDetectingLockFactory$ExampleStackTrace;
    getLockName(): string;
}