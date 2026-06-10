import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { GuardianRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/GuardianRenderState.d.ts'
export class GuardianModel extends EntityModel<GuardianRenderState> {
    static ELDER_GUARDIAN_SCALE: (param0: MeshDefinition) => MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createElderGuardianLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private eye: ModelPart;
    // private head: ModelPart;
    // private spikeParts: ModelPart[];
    // private tailParts: ModelPart[];
    setupAnim(state: GuardianRenderState): void;
    // private setupSpikes(ageInTicks: number, withdrawal: number): void;
}