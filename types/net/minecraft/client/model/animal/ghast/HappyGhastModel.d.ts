import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { HappyGhastRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HappyGhastRenderState.d.ts'
export class HappyGhastModel extends EntityModel<HappyGhastRenderState> {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(paramisBaby: boolean, paramdeformation: CubeDeformation): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private tentacles: ModelPart[];
    setupAnim(state: HappyGhastRenderState): void;
}