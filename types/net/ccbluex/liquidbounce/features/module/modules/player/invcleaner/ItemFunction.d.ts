import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemFunction extends Enum<ItemFunction> {
    static FOOD: ItemFunction;
    static WEAPON_LIKE: ItemFunction;
    static getEntries(): ItemFunction[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemFunction;
    static values(): (Object | null)[];
    private constructor()
    name(): "WEAPON_LIKE" | "FOOD";
}