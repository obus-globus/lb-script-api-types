import type { CycleDetectingLockFactory$Policy } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$Policy.d.ts'
import type { CycleDetectingLockFactory$PotentialDeadlockException } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$PotentialDeadlockException.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CycleDetectingLockFactory$Policies extends Enum<CycleDetectingLockFactory$Policies> implements CycleDetectingLockFactory$Policy {
    static DISABLED: CycleDetectingLockFactory$Policies;
    static THROW: CycleDetectingLockFactory$Policies;
    static WARN: CycleDetectingLockFactory$Policies;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CycleDetectingLockFactory$Policies;
    static values(): CycleDetectingLockFactory$Policies[];
    private constructor()
    handlePotentialDeadlock(exception: CycleDetectingLockFactory$PotentialDeadlockException): void;
    name(): "THROW" | "WARN" | "DISABLED";
}