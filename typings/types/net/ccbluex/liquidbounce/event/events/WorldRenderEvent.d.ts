import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
/**
 * Fires while the world is rendered, exposing the pose stack, camera and partial-tick fraction - for depth-correct 3D rendering.
 */
export class WorldRenderEvent extends Event {
    constructor(matrixStack: PoseStack, camera: Camera, partialTicks: number)
    readonly camera: Camera;
    readonly matrixStack: PoseStack;
    readonly partialTicks: number;
}