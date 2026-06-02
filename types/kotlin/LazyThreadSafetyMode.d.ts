import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class LazyThreadSafetyMode extends Enum<LazyThreadSafetyMode> implements Serializable {
    static NONE: LazyThreadSafetyMode;
    static PUBLICATION: LazyThreadSafetyMode;
    static SYNCHRONIZED: LazyThreadSafetyMode;
    static getEntries(): LazyThreadSafetyMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LazyThreadSafetyMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "SYNCHRONIZED" | "PUBLICATION" | "NONE";
}