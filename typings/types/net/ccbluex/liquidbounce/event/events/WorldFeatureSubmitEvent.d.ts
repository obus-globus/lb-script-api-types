import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
/**
 * Fired before vanilla collects level features into its {@link SubmitNodeStorage}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt:69}
 */
export class WorldFeatureSubmitEvent extends Event {
    constructor(poseStack: PoseStack, camera: Camera, submitNodeStorage: SubmitNodeStorage, modelViewMatrix: Matrix4fc)
    readonly camera: Camera;
    readonly modelViewMatrix: Matrix4fc;
    readonly poseStack: PoseStack;
    readonly submitNodeStorage: SubmitNodeStorage;
}