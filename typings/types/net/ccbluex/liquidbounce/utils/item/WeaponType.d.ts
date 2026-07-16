import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class WeaponType extends Enum<WeaponType> implements Predicate<ItemStack>, Tagged {
    static ANY: WeaponType;
    static AXE: WeaponType;
    static Companion: Tagged$Companion;
    static FIRE_ASPECT: WeaponType;
    static HOE: WeaponType;
    static KNOCKBACK: WeaponType;
    static MACE: WeaponType;
    static PICKAXE: WeaponType;
    static SHOVEL: WeaponType;
    static SPEAR: WeaponType;
    static SWORD: WeaponType;
    static getEntries(): WeaponType[];
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): WeaponType;
    static values(): WeaponType[];
    private constructor(tag: string, predicate: (param0: ItemStack) => boolean)
    // private predicate: (param0: ItemStack) => boolean;
    readonly tag: string;
    and(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    negate(): (param0: ItemStack) => boolean;
    or(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    test(p0: ItemStack): boolean;
    name(): "ANY" | "SWORD" | "AXE" | "MACE" | "SPEAR" | "PICKAXE" | "SHOVEL" | "HOE" | "KNOCKBACK" | "FIRE_ASPECT";
}