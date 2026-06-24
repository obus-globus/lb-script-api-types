import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MovementUtilsKt extends Object {
    static findEdgeCollision(from: Vec3, to: Vec3, allowedDropDown: number): Vec3;
    /**
     * Returns the yaw difference the position is from the player position
     *
     * @param positionRelativeToPlayer relative position to player
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt:41}
     */
    static getDegreesRelativeToView(positionRelativeToPlayer: Vec3, yaw: number): number;
    static getDirectionalInputForDegrees(directionalInput: DirectionalInput, dgs: number, deadAngle: number): DirectionalInput;
    static setDeltaMovement(localPlayer: LocalPlayer, block: (param0: Object) => Vec3): void;
    static stopXZVelocity(localPlayer: LocalPlayer): void;
}