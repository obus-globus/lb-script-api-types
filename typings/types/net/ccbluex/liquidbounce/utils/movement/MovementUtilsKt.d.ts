import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MovementUtilsKt extends Object {
    static findEdgeCollision(from: Vec3, to: Vec3, allowedDropDown: number): Vec3 | null;
    /**
     * Returns the yaw difference the position is from the player position
     *
     * @param positionRelativeToPlayer relative position to player
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/movement/MovementUtils.kt:45}
     */
    static getDegreesRelativeToView(positionRelativeToPlayer: Vec3, yaw: number): number;
    static getDirectionalInputForDegrees(directionalInput: DirectionalInput, dgs: number, deadAngle: number): DirectionalInput;
    static setDeltaMovement(self: LocalPlayer, block: (param0: Vec3) => Vec3): void;
    static stopXZVelocity(self: LocalPlayer): void;
}