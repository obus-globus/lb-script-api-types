import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BossEventOperationType extends Enum<BossEventOperationType> {
    static ADD: BossEventOperationType;
    static REMOVE: BossEventOperationType;
    static UPDATE_NAME: BossEventOperationType;
    static UPDATE_PROGRESS: BossEventOperationType;
    static UPDATE_PROPERTIES: BossEventOperationType;
    static UPDATE_STYLE: BossEventOperationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BossEventOperationType;
    static values(): BossEventOperationType[];
    private constructor()
    name(): "ADD" | "REMOVE" | "UPDATE_PROGRESS" | "UPDATE_NAME" | "UPDATE_STYLE" | "UPDATE_PROPERTIES";
}