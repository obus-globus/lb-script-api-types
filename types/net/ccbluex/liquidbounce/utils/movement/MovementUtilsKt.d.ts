import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MovementUtilsKt extends Object {
    static findEdgeCollision(paramarg0: Vec3, paramarg1: Vec3, paramarg2: number): Vec3;
    /**
     * Returns the yaw difference the position is from the player position
     *
     * @param positionRelativeToPlayer relative position to player
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt:41}
     */
    static getDegreesRelativeToView(paramarg0: Vec3, paramarg1: number): number;
    static getDirectionalInputForDegrees(paramarg0: DirectionalInput, paramarg1: number, paramarg2: number): DirectionalInput;
    static setDeltaMovement(paramarg0: LocalPlayer, paramarg1: Function1<Object, Object>): void;
    static stopXZVelocity(paramarg0: LocalPlayer): void;
}