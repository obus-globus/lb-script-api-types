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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt:45}
     */
    static getDegreesRelativeToView(positionRelativeToPlayer: Vec3, yaw: number): number;
    static getDirectionalInputForDegrees(directionalInput: DirectionalInput, dgs: number, deadAngle: number): DirectionalInput;
    static setDeltaMovement(localPlayer: LocalPlayer, block: (param0: Object) => Vec3): void;
    static stopXZVelocity(localPlayer: LocalPlayer): void;
}