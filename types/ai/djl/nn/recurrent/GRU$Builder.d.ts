import type { GRU } from '../../../../ai/djl/nn/recurrent/GRU.d.ts'
import type { RecurrentBlock$BaseBuilder } from '../../../../ai/djl/nn/recurrent/RecurrentBlock$BaseBuilder.d.ts'
export class GRU$Builder extends RecurrentBlock$BaseBuilder<GRU$Builder> {
    constructor()
    build(): GRU;
    self(): GRU$Builder;
}