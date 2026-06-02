import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableMesh } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableMesh.d.ts'
export interface LayerRenderStateExtension extends Object{
    fabric_getMutableMesh(): MutableMesh;
}