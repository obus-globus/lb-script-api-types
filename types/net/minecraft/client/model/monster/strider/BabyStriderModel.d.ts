import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { StriderModel } from '../../../../../../net/minecraft/client/model/monster/strider/StriderModel.d.ts'
export class BabyStriderModel extends StriderModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private bottomBristle: ModelPart;
    // private frontBristle: ModelPart;
    // private middleBristle: ModelPart;
    customAnimations(animationPos: number, animationSpeed: number, ageInTicks: number): void;
}