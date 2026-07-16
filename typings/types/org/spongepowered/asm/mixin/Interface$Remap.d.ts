import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Interface$Remap extends Enum<Interface$Remap> {
    static ALL: Interface$Remap;
    static FORCE: Interface$Remap;
    static NONE: Interface$Remap;
    static ONLY_PREFIXED: Interface$Remap;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Interface$Remap;
    static values(): Interface$Remap[];
    private constructor()
    private constructor(arg2: boolean)
    // private forceRemap: boolean;
    forceRemap(): boolean;
    name(): "ALL" | "FORCE" | "ONLY_PREFIXED" | "NONE";
}