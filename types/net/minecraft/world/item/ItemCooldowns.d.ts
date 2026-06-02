import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemCooldownsAddition } from '../../../../net/ccbluex/liquidbounce/interfaces/ItemCooldownsAddition.d.ts'
import type { ItemCooldownsAddition$Entry } from '../../../../net/ccbluex/liquidbounce/interfaces/ItemCooldownsAddition$Entry.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemCooldowns$CooldownInstance } from '../../../../net/minecraft/world/item/ItemCooldowns$CooldownInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemCooldowns extends Object implements ItemCooldownsAddition {
    constructor()
    // private cooldowns: Map<Identifier, ItemCooldowns$CooldownInstance>;
    // private tickCount: number;
    addCooldown(cooldownGroup: Identifier, time: number): void;
    addCooldown(item: ItemStack, time: number): void;
    getCooldownGroup(item: ItemStack): Identifier;
    getCooldownPercent(item: ItemStack, a: number): number;
    isOnCooldown(item: ItemStack): boolean;
    liquidBounce$getCooldown(arg0: ItemStack): ItemCooldownsAddition$Entry;
    onCooldownEnded(cooldownGroup: Identifier): void;
    onCooldownStarted(cooldownGroup: Identifier, duration: number): void;
    removeCooldown(cooldownGroup: Identifier): void;
    tick(): void;
}