import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { ElasticNetWeightDecay } from '../../../../ai/djl/training/loss/ElasticNetWeightDecay.d.ts'
import type { L1Loss } from '../../../../ai/djl/training/loss/L1Loss.d.ts'
import type { L1WeightDecay } from '../../../../ai/djl/training/loss/L1WeightDecay.d.ts'
import type { L2Loss } from '../../../../ai/djl/training/loss/L2Loss.d.ts'
import type { L2WeightDecay } from '../../../../ai/djl/training/loss/L2WeightDecay.d.ts'
import type { Loss } from '../../../../ai/djl/training/loss/Loss.d.ts'
import type { MaskedSoftmaxCrossEntropyLoss } from '../../../../ai/djl/training/loss/MaskedSoftmaxCrossEntropyLoss.d.ts'
import type { QuantileL1Loss } from '../../../../ai/djl/training/loss/QuantileL1Loss.d.ts'
import type { SigmoidBinaryCrossEntropyLoss } from '../../../../ai/djl/training/loss/SigmoidBinaryCrossEntropyLoss.d.ts'
import type { SoftmaxCrossEntropyLoss } from '../../../../ai/djl/training/loss/SoftmaxCrossEntropyLoss.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HingeLoss extends Loss {
    static elasticNetWeightedDecay(paramarg0: (Object | null)[]): ElasticNetWeightDecay;
    static elasticNetWeightedDecay(paramarg0: string, paramarg1: (Object | null)[]): ElasticNetWeightDecay;
    static elasticNetWeightedDecay(paramarg0: string, paramarg1: number, paramarg2: (Object | null)[]): ElasticNetWeightDecay;
    static elasticNetWeightedDecay(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): ElasticNetWeightDecay;
    static hingeLoss(): HingeLoss;
    static hingeLoss(paramarg0: string): HingeLoss;
    static hingeLoss(paramarg0: string, paramarg1: number, paramarg2: number): HingeLoss;
    static l1Loss(): L1Loss;
    static l1Loss(paramarg0: string): L1Loss;
    static l1Loss(paramarg0: string, paramarg1: number): L1Loss;
    static l1WeightedDecay(paramarg0: (Object | null)[]): L1WeightDecay;
    static l1WeightedDecay(paramarg0: string, paramarg1: (Object | null)[]): L1WeightDecay;
    static l1WeightedDecay(paramarg0: string, paramarg1: number, paramarg2: (Object | null)[]): L1WeightDecay;
    static l2Loss(): L2Loss;
    static l2Loss(paramarg0: string): L2Loss;
    static l2Loss(paramarg0: string, paramarg1: number): L2Loss;
    static l2WeightedDecay(paramarg0: (Object | null)[]): L2WeightDecay;
    static l2WeightedDecay(paramarg0: string, paramarg1: (Object | null)[]): L2WeightDecay;
    static l2WeightedDecay(paramarg0: string, paramarg1: number, paramarg2: (Object | null)[]): L2WeightDecay;
    static maskedSoftmaxCrossEntropyLoss(): MaskedSoftmaxCrossEntropyLoss;
    static maskedSoftmaxCrossEntropyLoss(paramarg0: string): MaskedSoftmaxCrossEntropyLoss;
    static maskedSoftmaxCrossEntropyLoss(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean): MaskedSoftmaxCrossEntropyLoss;
    static quantileL1Loss(paramarg0: number): QuantileL1Loss;
    static quantileL1Loss(paramarg0: string, paramarg1: number): QuantileL1Loss;
    static sigmoidBinaryCrossEntropyLoss(): SigmoidBinaryCrossEntropyLoss;
    static sigmoidBinaryCrossEntropyLoss(paramarg0: string): SigmoidBinaryCrossEntropyLoss;
    static sigmoidBinaryCrossEntropyLoss(paramarg0: string, paramarg1: number, paramarg2: boolean): SigmoidBinaryCrossEntropyLoss;
    static softmaxCrossEntropyLoss(): SoftmaxCrossEntropyLoss;
    static softmaxCrossEntropyLoss(paramarg0: string): SoftmaxCrossEntropyLoss;
    static softmaxCrossEntropyLoss(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean): SoftmaxCrossEntropyLoss;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: number)
    // private margin: number;
    // private weight: number;
    evaluate(arg0: (Object | null)[], arg1: (Object | null)[]): NDArray;
}