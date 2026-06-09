import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SymbolBlock extends Block, Object {
    describeOutput(): Pair<K, V>[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    freezeParameters(arg0: boolean): void;
    freezeParameters(arg0: boolean, arg1: (param0: Parameter) => kotlin.Boolean): void;
    getCustomMetadata(): { [key: string]: string };
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    removeLastBlock(): void;
}