import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { WardenRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WardenRenderState.d.ts'
export class WardenModel extends EntityModel<WardenRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBioluminescentLayer(): LayerDefinition;
    static createBodyLayer(): LayerDefinition;
    static createHeartLayer(): LayerDefinition;
    static createPulsatingSpotsLayer(): LayerDefinition;
    static createTendrilsLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private attackAnimation: KeyframeAnimation;
    // private body: ModelPart;
    // private bone: ModelPart;
    // private diggingAnimation: KeyframeAnimation;
    // private emergeAnimation: KeyframeAnimation;
    // private head: ModelPart;
    // private leftArm: ModelPart;
    // private leftLeg: ModelPart;
    // private leftRibcage: ModelPart;
    // private leftTendril: ModelPart;
    // private rightArm: ModelPart;
    // private rightLeg: ModelPart;
    // private rightRibcage: ModelPart;
    // private rightTendril: ModelPart;
    // private roarAnimation: KeyframeAnimation;
    // private sniffAnimation: KeyframeAnimation;
    // private sonicBoomAnimation: KeyframeAnimation;
    // private animateHeadLookTarget(yRot: number, xRot: number): void;
    // private animateIdlePose(ageInTicks: number): void;
    // private animateTendrils(state: WardenRenderState, ageInTicks: number): void;
    // private animateWalk(animationPos: number, animationSpeed: number): void;
    // private resetArmPoses(): void;
    setupAnim(state: WardenRenderState): void;
}