import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ArmorTypes1_8 extends Enum<ArmorTypes1_8> {
    static CHAINMAIL_BOOTS: ArmorTypes1_8;
    static CHAINMAIL_CHESTPLATE: ArmorTypes1_8;
    static CHAINMAIL_HELMET: ArmorTypes1_8;
    static CHAINMAIL_LEGGINGS: ArmorTypes1_8;
    static DIAMOND_BOOTS: ArmorTypes1_8;
    static DIAMOND_CHESTPLATE: ArmorTypes1_8;
    static DIAMOND_HELMET: ArmorTypes1_8;
    static DIAMOND_LEGGINGS: ArmorTypes1_8;
    static GOLD_BOOTS: ArmorTypes1_8;
    static GOLD_CHESTPLATE: ArmorTypes1_8;
    static GOLD_HELMET: ArmorTypes1_8;
    static GOLD_LEGGINGS: ArmorTypes1_8;
    static IRON_BOOTS: ArmorTypes1_8;
    static IRON_CHESTPLATE: ArmorTypes1_8;
    static IRON_HELMET: ArmorTypes1_8;
    static IRON_LEGGINGS: ArmorTypes1_8;
    static LEATHER_BOOTS: ArmorTypes1_8;
    static LEATHER_CHESTPLATE: ArmorTypes1_8;
    static LEATHER_HELMET: ArmorTypes1_8;
    static LEATHER_LEGGINGS: ArmorTypes1_8;
    static NONE: ArmorTypes1_8;
    static findById(paramarg0: number): ArmorTypes1_8;
    static findByType(paramarg0: string): ArmorTypes1_8;
    static isArmor(paramarg0: number): boolean;
    static isArmor(paramarg0: string): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ArmorTypes1_8;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number, arg4: string)
    readonly armorPoints: number;
    readonly id: number;
    readonly type: string;
    getArmorPoints(): number;
    getId(): number;
    getType(): string;
    name(): "LEATHER_HELMET" | "LEATHER_CHESTPLATE" | "LEATHER_LEGGINGS" | "LEATHER_BOOTS" | "CHAINMAIL_HELMET" | "CHAINMAIL_CHESTPLATE" | "CHAINMAIL_LEGGINGS" | "CHAINMAIL_BOOTS" | "IRON_HELMET" | "IRON_CHESTPLATE" | "IRON_LEGGINGS" | "IRON_BOOTS" | "DIAMOND_HELMET" | "DIAMOND_CHESTPLATE" | "DIAMOND_LEGGINGS" | "DIAMOND_BOOTS" | "GOLD_HELMET" | "GOLD_CHESTPLATE" | "GOLD_LEGGINGS" | "GOLD_BOOTS" | "NONE";
}