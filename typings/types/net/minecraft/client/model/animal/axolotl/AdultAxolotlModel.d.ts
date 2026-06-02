import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { AxolotlRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AxolotlRenderState.d.ts'
export class AdultAxolotlModel extends EntityModel<AxolotlRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftGills: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightGills: ModelPart;
    // private rightHindLeg: ModelPart;
    // private tail: ModelPart;
    // private topGills: ModelPart;
    // private applyMirrorLegRotations(factor: number): void;
    setupAnim(state: AxolotlRenderState): void;
    // private setupGroundCrawlingAnimation(ageInTicks: number, factor: number): void;
    // private setupLayStillOnGroundAnimation(ageInTicks: number, factor: number): void;
    // private setupPlayDeadAnimation(factor: number): void;
    // private setupSwimmingAnimation(ageInTicks: number, xRot: number, factor: number): void;
    // private setupWaterHoveringAnimation(ageInTicks: number, factor: number): void;
}