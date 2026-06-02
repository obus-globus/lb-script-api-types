import type { LSTM } from '../../../../ai/djl/nn/recurrent/LSTM.d.ts'
import type { RecurrentBlock$BaseBuilder } from '../../../../ai/djl/nn/recurrent/RecurrentBlock$BaseBuilder.d.ts'
export class LSTM$Builder extends RecurrentBlock$BaseBuilder<LSTM$Builder> {
    constructor()
    build(): LSTM;
    self(): LSTM$Builder;
}