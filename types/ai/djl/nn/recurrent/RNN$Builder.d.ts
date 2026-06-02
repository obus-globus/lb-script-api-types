import type { RNN } from '../../../../ai/djl/nn/recurrent/RNN.d.ts'
import type { RNN$Activation } from '../../../../ai/djl/nn/recurrent/RNN$Activation.d.ts'
import type { RecurrentBlock$BaseBuilder } from '../../../../ai/djl/nn/recurrent/RecurrentBlock$BaseBuilder.d.ts'
export class RNN$Builder extends RecurrentBlock$BaseBuilder<RNN$Builder> {
    constructor()
    build(): RNN;
    self(): RNN$Builder;
    setActivation(arg0: RNN$Activation): RNN$Builder;
}