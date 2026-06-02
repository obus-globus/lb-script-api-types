import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pool } from '../../../../net/ccbluex/fastutil/Pool.d.ts'
import type { BatchCollector } from '../../../../net/ccbluex/liquidbounce/render/BatchCollector.d.ts'
import type { RenderBufferKey } from '../../../../net/ccbluex/liquidbounce/render/RenderBufferKey.d.ts'
import type { WorldRenderEnvironment } from '../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { WorldRenderEnvironment$Companion$ActiveWorldFrame } from '../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment$Companion$ActiveWorldFrame.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
export class WorldRenderEnvironment$Companion extends Object {
    // private activeWorldFrame: WorldRenderEnvironment$Companion$ActiveWorldFrame | null;
    // private globalBatchCollector: BatchCollector;
    // private globalPoseStack: PoseStack;
    // private immediateDrawMapPool: Pool<Map<BufferBuilder, RenderBufferKey>>;
    beginWorldFrame(renderTarget: RenderTarget, eventPoseStack: PoseStack, camera: Camera): void;
    create(renderTarget: RenderTarget, poseStack: PoseStack, camera: Camera): WorldRenderEnvironment;
    endWorldFrame(): void;
}