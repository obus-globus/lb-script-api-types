import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
export class ElytraModel extends EntityModel<HumanoidRenderState> {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private leftWing: ModelPart;
    // private rightWing: ModelPart;
    setupAnim(state: HumanoidRenderState): void;
}