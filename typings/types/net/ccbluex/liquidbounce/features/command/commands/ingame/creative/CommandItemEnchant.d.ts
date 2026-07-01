import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { ParameterBuilder } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
/**
 * ItemEnchant Command
 *
 * Allows you to add, remove, clear, and enchant all possible enchantments on an item.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemEnchant.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemEnchant.kt:47}
 */
export class CommandItemEnchant extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandItemEnchant;
    // private levelParameter: ParameterBuilder<string>;
    createCommand(): Command;
    // private creativeOrThrow(command: Command): void;
    // private enchantAll(item: ItemStack, onlyAcceptable: boolean, level: number | null): void;
    // private enchantAnyLevel(item: ItemStack, enchantment: Holder<Enchantment>, level: number | null): void;
    // private enchantmentByName(enchantmentName: string, command: Command): Holder<Enchantment>;
    // private getItemOrThrow(command: Command): ItemStack;
    // private getLevel(arg: string): number | null;
    // private sendItemPacket(itemStack: ItemStack): void;
}