import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ParrotModel$Pose } from '../../../../../../net/minecraft/client/model/animal/parrot/ParrotModel$Pose.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ParrotRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ParrotRenderState.d.ts'
import type { Parrot } from '../../../../../../net/minecraft/world/entity/animal/parrot/Parrot.d.ts'
export class ParrotModel extends EntityModel<ParrotRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static getPose(paramentity: Parrot): ParrotModel$Pose;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private leftLeg: ModelPart;
    // private leftWing: ModelPart;
    // private rightLeg: ModelPart;
    // private rightWing: ModelPart;
    // private tail: ModelPart;
    // private prepare(pose: ParrotModel$Pose): void;
    setupAnim(state: ParrotRenderState): void;
}