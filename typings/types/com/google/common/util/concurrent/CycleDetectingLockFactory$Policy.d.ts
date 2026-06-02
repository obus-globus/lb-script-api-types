import type { CycleDetectingLockFactory$PotentialDeadlockException } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$PotentialDeadlockException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CycleDetectingLockFactory$Policy extends Object{
    handlePotentialDeadlock(exception: CycleDetectingLockFactory$PotentialDeadlockException): void;
}