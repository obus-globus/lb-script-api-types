import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ShulkerModel } from '../../../../../net/minecraft/client/model/monster/shulker/ShulkerModel.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ShulkerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ShulkerRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Shulker } from '../../../../../net/minecraft/world/entity/monster/Shulker.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ShulkerRenderer extends MobRenderer<Shulker, ShulkerRenderState, ShulkerModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    static getTextureLocation(paramcolor: DyeColor): Identifier;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ShulkerRenderState;
    createRenderState(entity: Shulker, partialTicks: number): ShulkerRenderState;
    extractRenderState(entity: Shulker, state: ShulkerRenderState, partialTicks: number): void;
    getRenderOffset(state: ShulkerRenderState): Vec3;
    getTextureLocation(state: ShulkerRenderState): Identifier;
    setupRotations(state: ShulkerRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    shouldRender(entity: Shulker, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
}