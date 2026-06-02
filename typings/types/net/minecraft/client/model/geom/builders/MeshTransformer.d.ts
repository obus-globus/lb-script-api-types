import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
export interface MeshTransformer extends Object{
    apply(mesh: MeshDefinition): MeshDefinition;
}