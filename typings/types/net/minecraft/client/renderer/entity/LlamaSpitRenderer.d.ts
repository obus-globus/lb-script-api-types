import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { LlamaSpitModel } from '../../../../../net/minecraft/client/model/animal/llama/LlamaSpitModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LlamaSpitRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LlamaSpitRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { LlamaSpit } from '../../../../../net/minecraft/world/entity/projectile/LlamaSpit.d.ts'
export class LlamaSpitRenderer extends EntityRenderer<LlamaSpit, LlamaSpitRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private model: LlamaSpitModel;
    createRenderState(): LlamaSpitRenderState;
    extractRenderState(entity: LlamaSpit, state: LlamaSpitRenderState, partialTicks: number): void;
    submit(state: LlamaSpitRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}