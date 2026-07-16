import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { LayoutType } from '../../../ai/djl/ndarray/types/LayoutType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { Parameter$Type } from '../../../ai/djl/nn/Parameter$Type.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Initializer } from '../../../ai/djl/training/initializer/Initializer.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../java/io/DataOutputStream.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractBaseBlock extends Object implements Block {
    static validateLayout(paramarg0: LayoutType[], paramarg1: LayoutType[]): void;
    constructor()
    constructor(arg0: number)
    // private inputNames: string[];
    inputShapes: Shape[];
    outputDataTypes: DataType[];
    // private version: number;
    beforeInitialize(...arg0: Shape[]): void;
    cast(arg0: DataType): void;
    clear(): void;
    describeInput(): Pair<string, Shape>[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    freezeParameters(arg0: boolean): void;
    freezeParameters(arg0: boolean, arg1: (param0: Parameter) => boolean): void;
    getCustomMetadata(): { [key: string]: string };
    getInputShapes(): Shape[];
    getOutputDataTypes(): DataType[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    getParameters(): (Object | null)[];
    initialize(arg0: NDManager, arg1: DataType, ...arg2: Shape[]): void;
    initializeChildBlocks(arg0: NDManager, arg1: DataType, ...arg2: Shape[]): void;
    isInitialized(): boolean;
    loadMetadata(arg0: number, arg1: DataInputStream): void;
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    prepare(arg0: Shape[]): void;
    readInputShapes(arg0: DataInputStream): void;
    saveInputShapes(arg0: DataOutputStream): void;
    saveMetadata(arg0: DataOutputStream): void;
    saveParameters(arg0: DataOutputStream): void;
    setInitializer(arg0: Initializer, arg1: Parameter$Type): void;
    setInitializer(arg0: Initializer, arg1: (param0: Parameter) => boolean): void;
    setInitializer(arg0: Initializer, arg1: string): void;
    toString(): string;
}