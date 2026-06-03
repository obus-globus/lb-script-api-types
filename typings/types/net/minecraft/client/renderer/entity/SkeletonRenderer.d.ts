import type { AbstractSkeletonRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractSkeletonRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SkeletonRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SkeletonRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Skeleton } from '../../../../../net/minecraft/world/entity/monster/skeleton/Skeleton.d.ts'
export class SkeletonRenderer extends AbstractSkeletonRenderer<Skeleton, SkeletonRenderState> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): SkeletonRenderState;
    createRenderState(entity: Skeleton, partialTicks: number): SkeletonRenderState;
    getTextureLocation(state: SkeletonRenderState): Identifier;
}