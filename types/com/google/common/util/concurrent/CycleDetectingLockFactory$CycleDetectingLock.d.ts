import type { CycleDetectingLockFactory$LockGraphNode } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$LockGraphNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CycleDetectingLockFactory$CycleDetectingLock extends Object{
    getLockGraphNode(): CycleDetectingLockFactory$LockGraphNode;
    isAcquiredByCurrentThread(): boolean;
}