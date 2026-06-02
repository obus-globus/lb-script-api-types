import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { MeshDefinition } from '../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { VillagerModel } from '../../../../../net/minecraft/client/model/npc/VillagerModel.d.ts'
export class BabyVillagerModel extends VillagerModel {
    static MODEL_Y_OFFSET: number;
    static createBodyModel(): MeshDefinition;
    static createNoHatModel(): MeshDefinition;
    constructor(root: ModelPart)
}