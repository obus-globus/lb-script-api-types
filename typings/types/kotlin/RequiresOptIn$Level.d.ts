import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class RequiresOptIn$Level extends Enum<RequiresOptIn$Level> implements Serializable {
    static ERROR: RequiresOptIn$Level;
    static WARNING: RequiresOptIn$Level;
    static getEntries(): RequiresOptIn$Level[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): RequiresOptIn$Level;
    static values(): RequiresOptIn$Level[];
    private constructor()
    name(): "WARNING" | "ERROR";
}