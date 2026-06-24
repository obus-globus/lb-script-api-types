import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableQuadView } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
export abstract class MovingBlockQuadConsumer extends Object implements Consumer<MutableQuadView> {
    constructor()
    // private outlineColor: number;
    andThen(arg0: (param0: MutableQuadView) => void): (param0: MutableQuadView) => void;
    outlineColor(arg0: number): void;
}