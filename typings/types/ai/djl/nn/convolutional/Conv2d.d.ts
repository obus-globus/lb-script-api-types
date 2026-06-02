import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { LayoutType } from '../../../../ai/djl/ndarray/types/LayoutType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Conv2d$Builder } from '../../../../ai/djl/nn/convolutional/Conv2d$Builder.d.ts'
import type { Convolution } from '../../../../ai/djl/nn/convolutional/Convolution.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Conv2d extends Convolution {
    static builder(): Conv2d$Builder;
    static conv2d(paramarg0: NDArray, paramarg1: NDArray): (Object | null)[];
    static conv2d(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray): (Object | null)[];
    static conv2d(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape): (Object | null)[];
    static conv2d(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape): (Object | null)[];
    static conv2d(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape, paramarg5: Shape): (Object | null)[];
    static conv2d(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape, paramarg5: Shape, paramarg6: number): (Object | null)[];
    constructor(arg0: Conv2d$Builder)
    getExpectedLayout(): LayoutType[];
    getStringLayout(): string;
    numDimensions(): number;
}