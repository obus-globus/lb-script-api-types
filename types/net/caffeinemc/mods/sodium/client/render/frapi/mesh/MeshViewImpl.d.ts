import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeshView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
export class MeshViewImpl extends Object implements MeshView {
    constructor()
    // private data: number[];
    // private limit: number;
    forEach(arg0: (param0: QuadView) => void): void;
    forEach(arg0: (param0: QuadView) => void, arg1: QuadView): void;
    outputTo(arg0: QuadEmitter): void;
    size(): number;
}