import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Adadelta$Builder } from '../../../../ai/djl/training/optimizer/Adadelta$Builder.d.ts'
import type { Adagrad$Builder } from '../../../../ai/djl/training/optimizer/Adagrad$Builder.d.ts'
import type { Adam$Builder } from '../../../../ai/djl/training/optimizer/Adam$Builder.d.ts'
import type { AdamW$Builder } from '../../../../ai/djl/training/optimizer/AdamW$Builder.d.ts'
import type { Nag$Builder } from '../../../../ai/djl/training/optimizer/Nag$Builder.d.ts'
import type { Optimizer } from '../../../../ai/djl/training/optimizer/Optimizer.d.ts'
import type { RmsProp$Builder } from '../../../../ai/djl/training/optimizer/RmsProp$Builder.d.ts'
import type { Sgd$Builder } from '../../../../ai/djl/training/optimizer/Sgd$Builder.d.ts'
export class Adadelta extends Optimizer {
    static adadelta(): Adadelta$Builder;
    static adagrad(): Adagrad$Builder;
    static adam(): Adam$Builder;
    static adamW(): AdamW$Builder;
    static nag(): Nag$Builder;
    static rmsprop(): RmsProp$Builder;
    static sgd(): Sgd$Builder;
    constructor(arg0: Adadelta$Builder)
    // private accumDelta: JavaMap<string, JavaMap<Device, NDArray>>;
    // private accumG: JavaMap<string, JavaMap<Device, NDArray>>;
    // private epsilon: number;
    // private rho: number;
    update(arg0: string, arg1: NDArray, arg2: NDArray): void;
}