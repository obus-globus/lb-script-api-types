import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ShulkerRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ShulkerRenderState.d.ts'
export class ShulkerModel extends EntityModel<ShulkerRenderState> {
    static LID: string;
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createBoxLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    // private lid: ModelPart;
    setupAnim(state: ShulkerRenderState): void;
}