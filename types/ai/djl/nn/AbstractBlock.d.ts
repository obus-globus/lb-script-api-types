import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { AbstractBaseBlock } from '../../../ai/djl/nn/AbstractBaseBlock.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { LambdaBlock } from '../../../ai/djl/nn/LambdaBlock.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractBlock extends AbstractBaseBlock {
    constructor()
    constructor(arg0: number)
    children: (Object | null)[];
    parameters: { [key: string]: Parameter };
    addChildBlock<B extends Block>(arg0: string, arg1: B): B;
    addChildBlock(arg0: string, arg1: (param0: (Object | null)[]) => (Object | null)[]): LambdaBlock;
    addChildBlockSingleton(arg0: string, arg1: (param0: NDArray) => NDArray): LambdaBlock;
    addParameter<P extends Parameter>(arg0: P): P;
    getChildren(): (Object | null)[];
    getDirectParameters(): (Object | null)[];
}