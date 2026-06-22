import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeshView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
export interface Mesh extends Object, MeshView{
    outputTo(arg0: QuadEmitter): void;
    size(): number;
}