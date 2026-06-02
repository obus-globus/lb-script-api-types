import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class RequiresOptIn$Level extends Enum<RequiresOptIn$Level> implements Serializable {
    static ERROR: RequiresOptIn$Level;
    static WARNING: RequiresOptIn$Level;
    static getEntries(): RequiresOptIn$Level[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RequiresOptIn$Level;
    static values(): (Object | null)[];
    private constructor()
    name(): "WARNING" | "ERROR";
}