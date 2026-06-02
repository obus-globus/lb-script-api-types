import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CreativeModeTab$Type extends Enum<CreativeModeTab$Type> {
    static CATEGORY: CreativeModeTab$Type;
    static HOTBAR: CreativeModeTab$Type;
    static INVENTORY: CreativeModeTab$Type;
    static SEARCH: CreativeModeTab$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CreativeModeTab$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "CATEGORY" | "INVENTORY" | "HOTBAR" | "SEARCH";
}