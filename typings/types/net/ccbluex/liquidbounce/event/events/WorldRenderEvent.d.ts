import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WorldRenderEnvironment } from '../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { BatchCollector } from '../../../../../net/ccbluex/liquidbounce/render/mesh/BatchCollector.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
/**
 * Fires while the world is rendered, exposing the pose stack, camera and partial-tick fraction - for depth-correct 3D rendering.
 */
export class WorldRenderEvent extends Event implements AutoCloseable {
    constructor(poseStack: PoseStack, camera: Camera, partialTicks: number, renderTarget: RenderTarget)
    // private batchCollector: BatchCollector;
    readonly camera: Camera;
    readonly environment: WorldRenderEnvironment;
    /**
     * @deprecated For scripts only
     */
    readonly matrixStack: PoseStack;
    readonly partialTicks: number;
    readonly poseStack: PoseStack;
    readonly renderTarget: RenderTarget;
    close(): void;
}