import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { EntityModel } from '../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { LivingEntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class QuadrupedModel<T extends LivingEntityRenderState> extends EntityModel<T> {
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
    constructor(root: ModelPart, renderType: (param0: Identifier) => RenderType)
    // private body: ModelPart;
    // private head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    setupAnim(state: T): void;
}