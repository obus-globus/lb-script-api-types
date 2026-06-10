import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PartPose } from '../../../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { PartDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/PartDefinition.d.ts'
export class MeshDefinition extends Object {
    constructor()
    private constructor(root: PartDefinition)
    readonly root: PartDefinition;
    apply(transformer: (param0: MeshDefinition) => MeshDefinition): MeshDefinition;
    getRoot(): PartDefinition;
    transformed(function_: (param0: PartPose) => Object | null): MeshDefinition;
}