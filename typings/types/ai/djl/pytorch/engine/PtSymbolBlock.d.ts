import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractSymbolBlock } from '../../../../ai/djl/nn/AbstractSymbolBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { PtNDManager } from '../../../../ai/djl/pytorch/engine/PtNDManager.d.ts'
import type { IValue } from '../../../../ai/djl/pytorch/jni/IValue.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PtSymbolBlock extends AbstractSymbolBlock implements AutoCloseable {
    constructor(arg0: PtNDManager)
    constructor(arg0: PtNDManager, arg1: number)
    // private first: boolean;
    readonly handle: AtomicReference<number>;
    // private inputDescriptions: Pair<string, Shape>[];
    // private isTrain: boolean;
    // private manager: PtNDManager;
    // private outputDescriptions: Pair<string, Shape>[];
    readonly parameters: { [key: string]: Parameter };
    // private uid: string;
    close(): void;
    describeInput(): Pair<string, Shape>[];
    describeOutput(): Pair<string, Shape>[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: IValue[]): IValue;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getDirectParameters(): (Object | null)[];
    getHandle(): number;
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    saveParameters(arg0: DataOutputStream): void;
}