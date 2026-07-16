import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CreativeModeTab$Type extends Enum<CreativeModeTab$Type> {
    static CATEGORY: CreativeModeTab$Type;
    static HOTBAR: CreativeModeTab$Type;
    static INVENTORY: CreativeModeTab$Type;
    static SEARCH: CreativeModeTab$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CreativeModeTab$Type;
    static values(): CreativeModeTab$Type[];
    private constructor()
    name(): "CATEGORY" | "INVENTORY" | "HOTBAR" | "SEARCH";
}