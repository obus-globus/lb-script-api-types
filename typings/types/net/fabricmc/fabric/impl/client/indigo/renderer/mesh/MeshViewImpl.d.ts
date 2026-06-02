import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeshView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/QuadViewImpl.d.ts'
export class MeshViewImpl extends Object implements MeshView {
    constructor()
    // private data: number[];
    // private limit: number;
    forEach<C extends QuadViewImpl>(arg0: (param0: C) => void, arg1: C): void;
    forEach(arg0: (param0: QuadView) => void): void;
    outputTo(arg0: QuadEmitter): void;
    size(): number;
}