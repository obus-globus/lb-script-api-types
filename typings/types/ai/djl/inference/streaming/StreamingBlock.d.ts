import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { Parameter$Type } from '../../../../ai/djl/nn/Parameter$Type.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Initializer } from '../../../../ai/djl/training/initializer/Initializer.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface StreamingBlock extends Block, Object {
    cast(arg0: DataType): void;
    clear(): void;
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    forwardStream(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): Stream<(Object | null)[]>;
    forwardStream(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): Stream<(Object | null)[]>;
    forwardStreamIter(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): Iterator<(Object | null)[]>;
    freezeParameters(arg0: boolean): void;
    freezeParameters(arg0: boolean, arg1: (param0: Parameter) => boolean): void;
    getCustomMetadata(): JavaMap<string, string>;
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    isInitialized(): boolean;
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    saveParameters(arg0: DataOutputStream): void;
    setInitializer(arg0: Initializer, arg1: Parameter$Type): void;
    setInitializer(arg0: Initializer, arg1: string): void;
}