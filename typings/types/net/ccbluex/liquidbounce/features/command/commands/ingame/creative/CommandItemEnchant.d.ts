import type { GpuDevice } from '../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { CommandDispatcher } from '../../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
/**
 * ItemEnchant Command
 *
 * Allows you to add, remove, clear, and enchant all possible enchantments on an item.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemEnchant.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemEnchant.kt:52}
 */
export class CommandItemEnchant extends Object implements CommandRegistrar, MinecraftShortcuts {
    static INSTANCE: CommandItemEnchant;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    readonly world: ClientLevel;
    // private enchantAll(item: ItemStack, onlyAcceptable: boolean, level: number | null): void;
    // private enchantAnyLevel(item: ItemStack, enchantment: Holder<Enchantment>, level: number): void;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    // private sendItemPacket(itemStack: ItemStack): void;
}