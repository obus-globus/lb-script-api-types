import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
/**
 * Fired before vanilla collects level features into its {@link SubmitNodeStorage}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt:69}
 */
export class WorldFeatureSubmitEvent extends Event {
    constructor(camera: Camera, submitNodeStorage: SubmitNodeStorage, modelViewMatrix: Matrix4fc)
    readonly camera: Camera;
    readonly modelViewMatrix: Matrix4fc;
    readonly submitNodeStorage: SubmitNodeStorage;
}