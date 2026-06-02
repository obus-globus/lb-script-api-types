import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { EquineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EquineRenderState.d.ts'
export abstract class AbstractEquineModel<T extends EquineRenderState> extends EntityModel<T> {
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
    constructor(root: ModelPart, headParts: ModelPart, rightHindLeg: ModelPart, rightFrontLeg: ModelPart, leftHindLeg: ModelPart, leftFrontLeg: ModelPart, tail: ModelPart)
    // private body: ModelPart;
    // private headParts: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    // private tail: ModelPart;
    animateHeadPartsPlacement(eating: number, standing: number): void;
    getLegStandAngle(): number;
    getLegStandingXRotOffset(): number;
    getLegStandingYOffset(): number;
    getLegStandingZOffset(): number;
    getTailXRotOffset(): number;
    offsetLegPositionWhenStanding(standing: number): void;
    setupAnim(state: T): void;
}