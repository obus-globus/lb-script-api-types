import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { FireworkRocketRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/FireworkRocketRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { FireworkRocketEntity } from '../../../../../net/minecraft/world/entity/projectile/FireworkRocketEntity.d.ts'
export class FireworkEntityRenderer extends EntityRenderer<FireworkRocketEntity, FireworkRocketRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private itemModelResolver: ItemModelResolver;
    createRenderState(): FireworkRocketRenderState;
    createRenderState(entity: FireworkRocketEntity, partialTicks: number): FireworkRocketRenderState;
    extractRenderState(entity: FireworkRocketEntity, state: FireworkRocketRenderState, partialTicks: number): void;
    submit(state: FireworkRocketRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}