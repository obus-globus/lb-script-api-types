import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
/**
 * Collection of the most used variables
 * to make the code more readable.
 *
 * However, we do not check for nulls here, because
 * we are sure that the client is in-game, if not
 * fiddling with the handler code.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.kt:37}
 */
export interface MinecraftShortcuts extends Object{
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    readonly world: ClientLevel;
}