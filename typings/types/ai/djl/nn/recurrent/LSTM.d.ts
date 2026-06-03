import type { LSTM$Builder } from '../../../../ai/djl/nn/recurrent/LSTM$Builder.d.ts'
import type { RecurrentBlock } from '../../../../ai/djl/nn/recurrent/RecurrentBlock.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LSTM extends RecurrentBlock {
    static builder(): LSTM$Builder;
    constructor(arg0: LSTM$Builder)
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
}