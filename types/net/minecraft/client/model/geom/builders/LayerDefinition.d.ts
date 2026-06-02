import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { MaterialDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MaterialDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
export class LayerDefinition extends Object {
    static create(parammesh: MeshDefinition, paramxTexSize: number, paramyTexSize: number): LayerDefinition;
    private constructor(mesh: MeshDefinition, material: MaterialDefinition)
    // private material: MaterialDefinition;
    // private mesh: MeshDefinition;
    apply(transformer: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition): LayerDefinition;
    bakeRoot(): ModelPart;
}