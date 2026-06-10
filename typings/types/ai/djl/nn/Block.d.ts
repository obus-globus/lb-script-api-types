import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { Parameter$Type } from '../../../ai/djl/nn/Parameter$Type.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Initializer } from '../../../ai/djl/training/initializer/Initializer.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../java/io/DataOutputStream.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Block extends Object {
    cast(arg0: DataType): void;
    clear(): void;
    describeInput(): Pair<string, Shape>[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    freezeParameters(arg0: boolean): void;
    freezeParameters(arg0: boolean, arg1: (param0: Parameter) => boolean): void;
    getChildren(): (Object | null)[];
    getCustomMetadata(): { [key: string]: string };
    getDirectParameters(): (Object | null)[];
    getInputShapes(): Shape[];
    getOutputDataTypes(): DataType[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    getParameters(): (Object | null)[];
    initialize(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    isInitialized(): boolean;
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    saveParameters(arg0: DataOutputStream): void;
    setInitializer(arg0: Initializer, arg1: Parameter$Type): void;
    setInitializer(arg0: Initializer, arg1: (param0: Parameter) => boolean): void;
    setInitializer(arg0: Initializer, arg1: string): void;
}