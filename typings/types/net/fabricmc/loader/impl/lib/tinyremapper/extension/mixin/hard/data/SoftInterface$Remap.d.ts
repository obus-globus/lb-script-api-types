import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
export class SoftInterface$Remap extends Enum<SoftInterface$Remap> {
    static ALL: SoftInterface$Remap;
    static FORCE: SoftInterface$Remap;
    static NONE: SoftInterface$Remap;
    static ONLY_PREFIX: SoftInterface$Remap;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SoftInterface$Remap;
    static values(): SoftInterface$Remap[];
    private constructor()
    name(): "NONE" | "ONLY_PREFIX" | "ALL" | "FORCE";
}