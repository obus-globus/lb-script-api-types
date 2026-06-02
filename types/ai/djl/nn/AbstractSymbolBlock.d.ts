import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBaseBlock } from '../../../ai/djl/nn/AbstractBaseBlock.d.ts'
import type { SymbolBlock } from '../../../ai/djl/nn/SymbolBlock.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractSymbolBlock extends AbstractBaseBlock implements SymbolBlock {
    static newInstance(paramarg0: NDManager): SymbolBlock;
    constructor()
    constructor(arg0: number)
    describeOutput(): Pair<K, V>[];
    getChildren(): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    removeLastBlock(): void;
}