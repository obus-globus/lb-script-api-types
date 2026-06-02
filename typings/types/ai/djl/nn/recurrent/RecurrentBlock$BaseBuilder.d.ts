import type { RNN$Activation } from '../../../../ai/djl/nn/recurrent/RNN$Activation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RecurrentBlock$BaseBuilder<T extends RecurrentBlock$BaseBuilder<RecurrentBlock$BaseBuilder<Object>>> extends Object {
    constructor()
    // private activation: RNN$Activation;
    // private batchFirst: boolean;
    // private bidirectional: boolean;
    // private dropRate: number;
    // private hasBiases: boolean;
    // private numLayers: number;
    // private returnState: boolean;
    // private stateSize: number;
    optBatchFirst(arg0: boolean): T;
    optBidirectional(arg0: boolean): T;
    optDropRate(arg0: number): T;
    optHasBiases(arg0: boolean): T;
    optReturnState(arg0: boolean): T;
    self(): T;
    setNumLayers(arg0: number): T;
    setStateSize(arg0: number): T;
}