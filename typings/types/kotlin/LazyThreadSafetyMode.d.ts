import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class LazyThreadSafetyMode extends Enum<LazyThreadSafetyMode> implements Serializable {
    static NONE: LazyThreadSafetyMode;
    static PUBLICATION: LazyThreadSafetyMode;
    static SYNCHRONIZED: LazyThreadSafetyMode;
    static getEntries(): LazyThreadSafetyMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): LazyThreadSafetyMode;
    static values(): LazyThreadSafetyMode[];
    private constructor()
    name(): "SYNCHRONIZED" | "PUBLICATION" | "NONE";
}