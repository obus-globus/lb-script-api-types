import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { Parameter$Type } from '../../../ai/djl/nn/Parameter$Type.d.ts'
import type { Initializer } from '../../../ai/djl/training/initializer/Initializer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Parameter$Builder extends Object {
    constructor()
    // private array: NDArray;
    // private initializer: Initializer;
    // private name: string;
    // private requiresGrad: boolean;
    // private shape: Shape;
    // private type: Parameter$Type;
    build(): Parameter;
    optArray(arg0: NDArray): Parameter$Builder;
    optInitializer(arg0: Initializer): Parameter$Builder;
    optRequiresGrad(arg0: boolean): Parameter$Builder;
    optShape(arg0: Shape): Parameter$Builder;
    setName(arg0: string): Parameter$Builder;
    setType(arg0: Parameter$Type): Parameter$Builder;
}