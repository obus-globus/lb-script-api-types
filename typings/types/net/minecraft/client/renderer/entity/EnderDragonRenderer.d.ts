import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EnderDragonModel } from '../../../../../net/minecraft/client/model/monster/dragon/EnderDragonModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EnderDragonRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EnderDragonRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { EnderDragon } from '../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
export class EnderDragonRenderer extends EntityRenderer<EnderDragon, EnderDragonRenderState> {
    static CRYSTAL_BEAM_LOCATION: Identifier;
    static NAMETAG_SCALE: number;
    static submitCrystalBeams(paramdeltaX: number, paramdeltaY: number, paramdeltaZ: number, paramtimeInTicks: number, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number): void;
    constructor(context: EntityRendererProvider$Context)
    // private model: EnderDragonModel;
    affectedByCulling(entity: EnderDragon): boolean;
    createRenderState(): EnderDragonRenderState;
    createRenderState(entity: EnderDragon, partialTicks: number): EnderDragonRenderState;
    extractRenderState(entity: EnderDragon, state: EnderDragonRenderState, partialTicks: number): void;
    submit(state: EnderDragonRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}