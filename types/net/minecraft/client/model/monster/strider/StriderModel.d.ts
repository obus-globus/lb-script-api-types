import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { StriderRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/StriderRenderState.d.ts'
export abstract class StriderModel extends EntityModel<StriderRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private leftLeg: ModelPart;
    // private rightLeg: ModelPart;
    animateBristle(ageInTicks: number, bristleFlow: number, firstBristle: ModelPart, secondBristle: ModelPart, thirdBristle: ModelPart, addRotationFunction: (param0: ModelPart, param1: number) => void): void;
    customAnimations(animationPos: number, animationSpeed: number, ageInTicks: number): void;
    setupAnim(state: StriderRenderState): void;
}