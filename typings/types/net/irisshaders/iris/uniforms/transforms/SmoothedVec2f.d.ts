import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FrameUpdateNotifier } from '../../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { SmoothedFloat } from '../../../../../net/irisshaders/iris/uniforms/transforms/SmoothedFloat.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
export class SmoothedVec2f extends Object implements Supplier<Vector2f> {
    constructor(arg0: number, arg1: number, arg2: () => Vector2i, arg3: FrameUpdateNotifier)
    // private x: SmoothedFloat;
    // private y: SmoothedFloat;
    get(): Vector2f;
}