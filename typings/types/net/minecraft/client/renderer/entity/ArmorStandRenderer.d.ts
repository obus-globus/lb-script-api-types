import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArmorStandArmorModel } from '../../../../../net/minecraft/client/model/object/armorstand/ArmorStandArmorModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/LivingEntityRenderer.d.ts'
import type { ArmorStandRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ArmorStandRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ArmorStand } from '../../../../../net/minecraft/world/entity/decoration/ArmorStand.d.ts'
export class ArmorStandRenderer extends LivingEntityRenderer<ArmorStand, ArmorStandRenderState, ArmorStandArmorModel> {
    static DEFAULT_SKIN_LOCATION: Identifier;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private bigModel: ArmorStandArmorModel;
    // private smallModel: ArmorStandArmorModel;
    createRenderState(): ArmorStandRenderState;
    createRenderState(entity: ArmorStand, partialTicks: number): ArmorStandRenderState;
    extractRenderState(entity: ArmorStand, state: ArmorStandRenderState, partialTicks: number): void;
    getRenderType(state: ArmorStandRenderState, isBodyVisible: boolean, forceTransparent: boolean, appearGlowing: boolean): RenderType;
    getTextureLocation(state: ArmorStandRenderState): Identifier;
    setupRotations(state: ArmorStandRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    shouldShowName(entity: ArmorStand, distanceToCameraSq: number): boolean;
    submit(state: ArmorStandRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}