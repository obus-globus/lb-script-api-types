import type { GpuDevice } from '../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { SimulatedPlayer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class SpeedPreventDeadlyJump extends Object implements MinecraftShortcuts {
    static INSTANCE: SpeedPreventDeadlyJump;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    readonly world: ClientLevel;
    // private createSimulatedPlayer(player: LocalPlayer): SimulatedPlayer;
    // private wouldFallToDeath(simulatedPlayer: SimulatedPlayer, ticksToWaitForFall: number, maxFallDistance: number): boolean;
    wouldJumpToDeath(maxFallDistance: number): boolean;
}