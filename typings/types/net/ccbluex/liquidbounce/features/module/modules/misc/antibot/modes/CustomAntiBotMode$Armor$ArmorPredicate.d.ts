import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TagKey } from '../../../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * @see ArmorMaterials
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt:83}
 */
export class CustomAntiBotMode$Armor$ArmorPredicate extends Enum<CustomAntiBotMode$Armor$ArmorPredicate> implements Tagged {
    static CHAIN: CustomAntiBotMode$Armor$ArmorPredicate;
    static Companion: Tagged$Companion;
    static DIAMOND: CustomAntiBotMode$Armor$ArmorPredicate;
    static ELYTRA: CustomAntiBotMode$Armor$ArmorPredicate;
    static GOLD: CustomAntiBotMode$Armor$ArmorPredicate;
    static IRON: CustomAntiBotMode$Armor$ArmorPredicate;
    static LEATHER: CustomAntiBotMode$Armor$ArmorPredicate;
    static NETHERITE: CustomAntiBotMode$Armor$ArmorPredicate;
    static NOTHING: CustomAntiBotMode$Armor$ArmorPredicate;
    static PUMPKIN: CustomAntiBotMode$Armor$ArmorPredicate;
    static SKULL: CustomAntiBotMode$Armor$ArmorPredicate;
    static TURTLE_SCUTE: CustomAntiBotMode$Armor$ArmorPredicate;
    static getEntries(): CustomAntiBotMode$Armor$ArmorPredicate[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CustomAntiBotMode$Armor$ArmorPredicate;
    static values(): CustomAntiBotMode$Armor$ArmorPredicate[];
    private constructor(tag: string, predicate: (param0: ItemStack) => boolean)
    private constructor(choiceName: string, ...items: Item[])
    private constructor(choiceName: string, tag: TagKey<Item>)
    private constructor(choiceName: string, item: Item)
    readonly predicate: (param0: ItemStack) => boolean;
    readonly tag: string;
    name(): "NOTHING" | "LEATHER" | "CHAIN" | "IRON" | "GOLD" | "DIAMOND" | "NETHERITE" | "ELYTRA" | "TURTLE_SCUTE" | "PUMPKIN" | "SKULL";
}