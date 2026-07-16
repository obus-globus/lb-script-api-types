import type { Mod } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ModMenuCompatibility extends Enum<ModMenuCompatibility> {
    static INSTANCE: ModMenuCompatibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModMenuCompatibility;
    static values(): ModMenuCompatibility[];
    private constructor()
    addModUnchecked(arg0: string, arg1: Mod): void;
    removeModUnchecked(arg0: string): Mod;
    name(): "INSTANCE";
}