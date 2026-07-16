import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CreativeModeTab$TabVisibility extends Enum<CreativeModeTab$TabVisibility> {
    static PARENT_AND_SEARCH_TABS: CreativeModeTab$TabVisibility;
    static PARENT_TAB_ONLY: CreativeModeTab$TabVisibility;
    static SEARCH_TAB_ONLY: CreativeModeTab$TabVisibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CreativeModeTab$TabVisibility;
    static values(): CreativeModeTab$TabVisibility[];
    private constructor()
    name(): "PARENT_AND_SEARCH_TABS" | "PARENT_TAB_ONLY" | "SEARCH_TAB_ONLY";
}