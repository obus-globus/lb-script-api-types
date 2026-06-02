import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../ai/djl/nn/AbstractBlock.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../java/io/DataInputStream.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaBlock extends AbstractBlock {
    static DEFAULT_NAME: string;
    static singleton(paramarg0: (param0: NDArray) => NDArray): LambdaBlock;
    static singleton(paramarg0: (param0: NDArray) => NDArray, paramarg1: string): LambdaBlock;
    constructor(arg0: (param0: (Object | null)[]) => (Object | null)[])
    constructor(arg0: (param0: (Object | null)[]) => (Object | null)[], arg1: string)
    // private lambda: (param0: (Object | null)[]) => (Object | null)[];
    readonly name: string;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getName(): string;
    getOutputShapes(arg0: Shape[]): Shape[];
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
}