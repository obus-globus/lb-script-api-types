import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FallingPlayer } from '../../../../../net/ccbluex/liquidbounce/utils/entity/FallingPlayer.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class FallingPlayer$Companion extends Object {
    // private SUPPORT_EPSILON: number;
    fromPlayer(player: LocalPlayer, movementYaw?: number): FallingPlayer;
}