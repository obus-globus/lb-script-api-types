import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { QuadrupedModel } from '../../../../../../net/minecraft/client/model/QuadrupedModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { TurtleRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/TurtleRenderState.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class TurtleModel extends QuadrupedModel<TurtleRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart, renderType: (param0: Identifier) => RenderType)
    setupAnim(state: TurtleRenderState): void;
}