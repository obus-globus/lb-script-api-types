import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemAttributeModifiers } from '../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export class ToolMaterial extends Record {
    static COPPER: ToolMaterial;
    static DIAMOND: ToolMaterial;
    static GOLD: ToolMaterial;
    static IRON: ToolMaterial;
    static NETHERITE: ToolMaterial;
    static STONE: ToolMaterial;
    static WOOD: ToolMaterial;
    // private attackDamageBonus: number;
    // private durability: number;
    // private enchantmentValue: number;
    // private incorrectBlocksForDrops: TagKey<Block>;
    // private repairItems: TagKey<Item>;
    // private speed: number;
    // private applyCommonProperties(properties: Item$Properties): Item$Properties;
    applySwordProperties(properties: Item$Properties, attackDamageBaseline: number, attackSpeedBaseline: number): Item$Properties;
    applyToolProperties(properties: Item$Properties, minesEfficiently: TagKey<Block>, attackDamageBaseline: number, attackSpeedBaseline: number, disableBlockingSeconds: number): Item$Properties;
    attackDamageBonus(): number;
    // private createSwordAttributes(attackDamageBaseline: number, attackSpeedBaseline: number): ItemAttributeModifiers;
    // private createToolAttributes(attackDamageBaseline: number, attackSpeedBaseline: number): ItemAttributeModifiers;
    durability(): number;
    enchantmentValue(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    incorrectBlocksForDrops(): TagKey<Block>;
    repairItems(): TagKey<Item>;
    speed(): number;
    toString(): string;
}