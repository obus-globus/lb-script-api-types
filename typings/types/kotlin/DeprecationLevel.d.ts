import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class DeprecationLevel extends Enum<DeprecationLevel> implements Serializable {
    static ERROR: DeprecationLevel;
    static HIDDEN: DeprecationLevel;
    static WARNING: DeprecationLevel;
    static getEntries(): DeprecationLevel[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DeprecationLevel;
    static values(): DeprecationLevel[];
    private constructor()
    name(): "WARNING" | "ERROR" | "HIDDEN";
}