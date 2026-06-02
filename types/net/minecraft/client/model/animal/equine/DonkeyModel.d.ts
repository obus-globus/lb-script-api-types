import type { AbstractEquineModel } from '../../../../../../net/minecraft/client/model/animal/equine/AbstractEquineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { DonkeyRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DonkeyRenderState.d.ts'
export class DonkeyModel extends AbstractEquineModel<DonkeyRenderState> {
    static DONKEY_SCALE: number;
    static MODEL_Y_OFFSET: number;
    static MULE_SCALE: number;
    static createBodyLayer(paramscale: number): LayerDefinition;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    static createSaddleLayer(paramscale: number): LayerDefinition;
    constructor(root: ModelPart)
    constructor(root: ModelPart, headParts: ModelPart, rightHindLeg: ModelPart, rightFrontLeg: ModelPart, leftHindLeg: ModelPart, leftFrontLeg: ModelPart, tail: ModelPart)
    // private leftChest: ModelPart;
    // private rightChest: ModelPart;
    setupAnim(state: DonkeyRenderState): void;
}