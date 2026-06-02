import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class DeprecationLevel extends Enum<DeprecationLevel> implements Serializable {
    static ERROR: DeprecationLevel;
    static HIDDEN: DeprecationLevel;
    static WARNING: DeprecationLevel;
    static getEntries(): DeprecationLevel[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DeprecationLevel;
    static values(): (Object | null)[];
    private constructor()
    name(): "WARNING" | "ERROR" | "HIDDEN";
}