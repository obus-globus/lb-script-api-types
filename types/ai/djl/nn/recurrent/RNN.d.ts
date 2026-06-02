import type { RNN$Activation } from '../../../../ai/djl/nn/recurrent/RNN$Activation.d.ts'
import type { RNN$Builder } from '../../../../ai/djl/nn/recurrent/RNN$Builder.d.ts'
import type { RecurrentBlock } from '../../../../ai/djl/nn/recurrent/RecurrentBlock.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RNN extends RecurrentBlock {
    static builder(): RNN$Builder;
    constructor(arg0: RNN$Builder)
    // private activation: RNN$Activation;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
}