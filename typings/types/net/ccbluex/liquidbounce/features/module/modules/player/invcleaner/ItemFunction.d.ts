import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemFunction extends Enum<ItemFunction> {
    static FOOD: ItemFunction;
    static WEAPON_LIKE: ItemFunction;
    static getEntries(): ItemFunction[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ItemFunction;
    static values(): ItemFunction[];
    private constructor()
    name(): "WEAPON_LIKE" | "FOOD";
}