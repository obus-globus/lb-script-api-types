import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LockBasedStorageManager$NotValue extends Enum<LockBasedStorageManager$NotValue> {
    static COMPUTING: LockBasedStorageManager$NotValue;
    static NOT_COMPUTED: LockBasedStorageManager$NotValue;
    static RECURSION_WAS_DETECTED: LockBasedStorageManager$NotValue;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LockBasedStorageManager$NotValue;
    static values(): LockBasedStorageManager$NotValue[];
    private constructor()
    name(): "NOT_COMPUTED" | "COMPUTING" | "RECURSION_WAS_DETECTED";
}