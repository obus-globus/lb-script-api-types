import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { SimulatedPlayer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class SpeedPreventDeadlyJump extends Object implements MinecraftShortcuts {
    static INSTANCE: SpeedPreventDeadlyJump;
    // private createSimulatedPlayer(player: LocalPlayer): SimulatedPlayer;
    // private wouldFallToDeath(simulatedPlayer: SimulatedPlayer, ticksToWaitForFall: number, maxFallDistance: number): boolean;
    wouldJumpToDeath(maxFallDistance: number): boolean;
}