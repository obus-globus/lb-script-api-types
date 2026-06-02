import type { DonkeyModel } from '../../../../../../net/minecraft/client/model/animal/equine/DonkeyModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { DonkeyRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DonkeyRenderState.d.ts'
export class BabyDonkeyModel extends DonkeyModel {
    static DONKEY_SCALE: number;
    static MODEL_Y_OFFSET: number;
    static MULE_SCALE: number;
    static createBabyLayer(): LayerDefinition;
    static createBodyLayer(paramscale: number): LayerDefinition;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    static createSaddleLayer(paramscale: number): LayerDefinition;
    constructor(root: ModelPart)
    animateHeadPartsPlacement(eating: number, standing: number): void;
    getLegStandAngle(): number;
    getLegStandingXRotOffset(): number;
    getLegStandingYOffset(): number;
    getLegStandingZOffset(): number;
    getTailXRotOffset(): number;
    offsetLegPositionWhenStanding(standing: number): void;
    setupAnim(state: DonkeyRenderState): void;
}