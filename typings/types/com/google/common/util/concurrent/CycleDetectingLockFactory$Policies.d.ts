import type { CycleDetectingLockFactory$Policy } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$Policy.d.ts'
import type { CycleDetectingLockFactory$PotentialDeadlockException } from '../../../../../com/google/common/util/concurrent/CycleDetectingLockFactory$PotentialDeadlockException.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CycleDetectingLockFactory$Policies extends Enum<CycleDetectingLockFactory$Policies> implements CycleDetectingLockFactory$Policy {
    static DISABLED: CycleDetectingLockFactory$Policies;
    static THROW: CycleDetectingLockFactory$Policies;
    static WARN: CycleDetectingLockFactory$Policies;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CycleDetectingLockFactory$Policies;
    static values(): (Object | null)[];
    private constructor()
    handlePotentialDeadlock(exception: CycleDetectingLockFactory$PotentialDeadlockException): void;
    name(): "THROW" | "WARN" | "DISABLED";
}