import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { BoatModel1_8 } from '../../../../../../com/viaversion/viafabricplus/features/entity/legacy_boat_model/BoatModel1_8.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { AbstractBoatRenderer } from '../../../../../../net/minecraft/client/renderer/entity/AbstractBoatRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { BoatRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/BoatRenderState.d.ts'
import type { CameraRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export class BoatRenderer1_8 extends AbstractBoatRenderer {
    static NAMETAG_SCALE: number;
    constructor(arg0: EntityRendererProvider$Context)
    // private model: BoatModel1_8;
    model(): EntityModel<BoatRenderState>;
    submit(arg0: BoatRenderState, arg1: PoseStack, arg2: SubmitNodeCollector, arg3: CameraRenderState): void;
}