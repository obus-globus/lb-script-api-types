import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
export class WorldRenderEvent extends Event {
    constructor(matrixStack: PoseStack, camera: Camera, partialTicks: number)
    readonly camera: Camera;
    readonly matrixStack: PoseStack;
    readonly partialTicks: number;
}