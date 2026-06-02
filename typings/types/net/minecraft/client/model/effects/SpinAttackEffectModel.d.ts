import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { AvatarRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
export class SpinAttackEffectModel extends EntityModel<AvatarRenderState> {
    static MODEL_Y_OFFSET: number;
    static createLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private boxes: ModelPart[];
    setupAnim(state: AvatarRenderState): void;
}