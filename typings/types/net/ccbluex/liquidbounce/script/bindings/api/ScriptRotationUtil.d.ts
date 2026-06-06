import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * A collection of useful rotation utilities for the ScriptAPI.
 * This SHOULD not be changed in a way that breaks backwards compatibility.
 *
 * This is a singleton object, so it can be accessed from the script API like this:
 * ```js
 * api.rotationUtil.newRaytracedRotationEntity(entity, 4.2, 0.0)
 * rotationUtil.newRotationEntity(entity)
 * rotationUtil.aimAtRotation(rotation, true)
 * ```
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt:35}
 */
export class ScriptRotationUtil extends Object {
    static INSTANCE: ScriptRotationUtil;
    /**
     * Aims at the given {@link rotation} using the in-built RotationManager.
     *
     * @param rotation The rotation to aim at.
     * @param fixVelocity Whether to fix the player's velocity.   This means bypassing anti-cheat checks for aim-related movement.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt:83}
     */
    aimAtRotation(rotation: Rotation, fixVelocity: boolean): void;
    /**
     * Creates a new {@link net.ccbluex.liquidbounce.utils.aiming.data.Rotation} from {@link entity}'s bounding box.
     * This uses raytracing, so it's guaranteed to be the best spot.
     *
     * It has a performance impact, so it's recommended to use {@link newRotationEntity} if you don't need the best spot.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt:49}
     */
    newRaytracedRotationEntity(entity: Entity, range: number, throughWallsRange: number): Rotation | null;
    /**
     * Creates a new {@link Rotation} from {@link entity}'s bounding box.
     * This uses no raytracing, so it's not guaranteed to be the best spot.
     * It will aim at the center of the bounding box.
     *
     * It has almost zero performance impact, so it's recommended to use this if you don't need the best spot.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptRotationUtil.kt:70}
     */
    newRotationEntity(entity: Entity): Rotation;
}