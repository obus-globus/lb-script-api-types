import type { Decoder } from '../../../../ai/djl/modality/nlp/Decoder.d.ts'
import type { Encoder } from '../../../../ai/djl/modality/nlp/Encoder.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EncoderDecoder extends AbstractBlock {
    constructor(arg0: Encoder, arg1: Decoder)
    // private decoder: Decoder;
    // private encoder: Encoder;
    describeInput(): Pair<string, Shape>[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): (Object | null)[];
    forward(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    initialize(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    saveParameters(arg0: DataOutputStream): void;
}