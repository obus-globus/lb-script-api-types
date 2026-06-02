import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { Matrix4fc } from '../../../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../../../org/joml/Vector3fc.d.ts'
export class QuadToPosPipe extends Object implements Consumer<QuadView> {
    constructor(arg0: (param0: Vector3fc) => void, arg1: Vector3f)
    matrix: Matrix4fc;
    // private posConsumer: (param0: Vector3fc) => void;
    // private vec: Vector3f;
    accept(arg0: QuadView): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
}