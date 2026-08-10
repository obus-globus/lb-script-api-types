import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationDelta } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationDelta.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class RotationUtil extends Object {
    static INSTANCE: RotationUtil;
    // private MOUSE_TURN_SCALE_DOUBLE: number;
    // private MOUSE_TURN_SCALE_FLOAT: number;
    readonly gcd: number;
    /**
     * Calculate difference between two angle points
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt:128}
     */
    angleDifference(a: number, b: number): number;
    applyMouseTurnDelta(rotation: Rotation, cursorDeltaX: number, cursorDeltaY: number): Rotation;
    /**
     * Calculates the angle between the cross-hair and the entity.
     *
     * Useful for deciding if the player is looking at something or not.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt:116}
     */
    crosshairAngleToEntity(entity: Entity): number;
    // private mouseSensitivityFactor(): number;
    /**
     * Converts the values passed from `MouseHandler.turnPlayer` to the yaw/pitch delta applied by vanilla.
     *
     * [1.12.2 reference](https://github.com/WangTingZheng/mcp940/blob/d0c030a4139ce7cf3f284b180f0d9ea87bdf8141/src/minecraft/net/minecraft/entity/Entity.java#L479-L497)
     *
     * @see net.minecraft.world.entity.Entity.turn
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationUtil.kt:87}
     */
    mouseTurnDelta(cursorDeltaX: number, cursorDeltaY: number): RotationDelta;
}