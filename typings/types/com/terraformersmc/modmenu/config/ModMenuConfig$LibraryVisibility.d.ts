import type { Mod } from '../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModMenuConfig$LibraryVisibility extends Enum<ModMenuConfig$LibraryVisibility> {
    static FALSE: ModMenuConfig$LibraryVisibility;
    static TRUE: ModMenuConfig$LibraryVisibility;
    static WITH_CONFIG: ModMenuConfig$LibraryVisibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModMenuConfig$LibraryVisibility;
    static values(): ModMenuConfig$LibraryVisibility[];
    private constructor()
    hideMod(arg0: Mod, arg1: boolean): boolean;
    isTrue(): boolean;
    name(): "FALSE" | "WITH_CONFIG" | "TRUE";
}