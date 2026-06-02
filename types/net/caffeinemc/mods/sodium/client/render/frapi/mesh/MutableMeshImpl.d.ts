import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { MeshViewImpl } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/frapi/mesh/MeshViewImpl.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { Mesh } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/Mesh.d.ts'
import type { MutableMesh } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableMesh.d.ts'
import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
export class MutableMeshImpl extends MeshViewImpl implements MutableMesh {
    constructor()
    // private emitter: MutableQuadViewImpl;
    clear(): void;
    emitter(): QuadEmitter;
    // private ensureCapacity(arg0: number): void;
    forEachMutable(arg0: (param0: MutableQuadView) => void): void;
    immutableCopy(): Mesh;
}