import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { WitherRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WitherRenderState.d.ts'
export class WitherBossModel extends EntityModel<WitherRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(paramg: CubeDeformation): LayerDefinition;
    constructor(root: ModelPart)
    // private centerHead: ModelPart;
    // private leftHead: ModelPart;
    // private ribcage: ModelPart;
    // private rightHead: ModelPart;
    // private tail: ModelPart;
    setupAnim(state: WitherRenderState): void;
}