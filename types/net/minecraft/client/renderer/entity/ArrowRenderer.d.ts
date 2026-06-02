import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArrowModel } from '../../../../../net/minecraft/client/model/object/projectile/ArrowModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ArrowRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ArrowRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractArrow } from '../../../../../net/minecraft/world/entity/projectile/arrow/AbstractArrow.d.ts'
export abstract class ArrowRenderer<T extends AbstractArrow, S extends ArrowRenderState> extends EntityRenderer<T, S> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private model: ArrowModel;
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getTextureLocation(state: S): Identifier;
    submit(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}