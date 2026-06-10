import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface StreamingBlock extends Block, Object {
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    forwardStream(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): Stream<(Object | null)[]>;
    forwardStream(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): Stream<(Object | null)[]>;
    forwardStreamIter(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): Iterator<(Object | null)[]>;
    freezeParameters(arg0: boolean): void;
    freezeParameters(arg0: boolean, arg1: (param0: Parameter) => boolean): void;
    getCustomMetadata(): { [key: string]: string };
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
}