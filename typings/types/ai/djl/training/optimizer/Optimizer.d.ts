import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Adadelta$Builder } from '../../../../ai/djl/training/optimizer/Adadelta$Builder.d.ts'
import type { Adagrad$Builder } from '../../../../ai/djl/training/optimizer/Adagrad$Builder.d.ts'
import type { Adam$Builder } from '../../../../ai/djl/training/optimizer/Adam$Builder.d.ts'
import type { AdamW$Builder } from '../../../../ai/djl/training/optimizer/AdamW$Builder.d.ts'
import type { Nag$Builder } from '../../../../ai/djl/training/optimizer/Nag$Builder.d.ts'
import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { RmsProp$Builder } from '../../../../ai/djl/training/optimizer/RmsProp$Builder.d.ts'
import type { Sgd$Builder } from '../../../../ai/djl/training/optimizer/Sgd$Builder.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Optimizer extends Object {
    static adadelta(): Adadelta$Builder;
    static adagrad(): Adagrad$Builder;
    static adam(): Adam$Builder;
    static adamW(): AdamW$Builder;
    static nag(): Nag$Builder;
    static rmsprop(): RmsProp$Builder;
    static sgd(): Sgd$Builder;
    constructor(arg0: Optimizer$OptimizerBuilder<any>)
    // private beginNumUpdate: number;
    // private clipGrad: number;
    // private numUpdate: number;
    // private rescaleGrad: number;
    // private updateCounts: JavaMap<string, number>;
    // private weightDecays: number;
    getWeightDecay(): number;
    update(arg0: string, arg1: NDArray, arg2: NDArray): void;
    updateCount(arg0: string): number;
    withDefaultState(arg0: JavaMap<string, JavaMap<Device, NDArray>>, arg1: string, arg2: Device, arg3: (param0: string) => NDArray): NDArray;
}