import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ThrownItemRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ThrownItemRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemSupplier } from '../../../../../net/minecraft/world/entity/projectile/ItemSupplier.d.ts'
export class ThrownItemRenderer<T extends Entity & ItemSupplier> extends EntityRenderer<T, ThrownItemRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    constructor(context: EntityRendererProvider$Context, scale: number, fullBright: boolean)
    // private fullBright: boolean;
    // private itemModelResolver: ItemModelResolver;
    // private scale: number;
    createRenderState(): ThrownItemRenderState;
    createRenderState(entity: T, partialTicks: number): ThrownItemRenderState;
    extractRenderState(entity: T, state: ThrownItemRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: T, blockPos: BlockPos): number;
    submit(state: ThrownItemRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}