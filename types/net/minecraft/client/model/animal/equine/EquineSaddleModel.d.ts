import type { AbstractEquineModel } from '../../../../../../net/minecraft/client/model/animal/equine/AbstractEquineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { EquineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EquineRenderState.d.ts'
export class EquineSaddleModel extends AbstractEquineModel<EquineRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    static createSaddleLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private ridingParts: ModelPart[];
    setupAnim(state: EquineRenderState): void;
}