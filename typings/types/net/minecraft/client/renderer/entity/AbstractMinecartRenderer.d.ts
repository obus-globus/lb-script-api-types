import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { MinecartModel } from '../../../../../net/minecraft/client/model/object/cart/MinecartModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelRenderState } from '../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MinecartRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/MinecartRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { AbstractMinecart } from '../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class AbstractMinecartRenderer<T extends AbstractMinecart, S extends MinecartRenderState> extends EntityRenderer<T, S> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context, model: ModelLayerLocation)
    // private blockModelResolver: BlockModelResolver;
    // private model: MinecartModel;
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getBoundingBoxForCulling(entity: T): AABB;
    getRenderOffset(state: S): Vec3;
    submit(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitMinecartContents(state: S, blockModel: BlockModelRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
}