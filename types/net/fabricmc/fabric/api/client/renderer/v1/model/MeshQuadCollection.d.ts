import type { Mesh } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/Mesh.d.ts'
import type { QuadCollection } from '../../../../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
export class MeshQuadCollection extends QuadCollection {
    static EMPTY: QuadCollection;
    constructor(arg0: Mesh)
    // private materialFlags: number;
    readonly mesh: Mesh;
    getMesh(): Mesh;
    materialFlags(): number;
}