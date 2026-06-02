import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { LayoutType } from '../../../../ai/djl/ndarray/types/LayoutType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Conv1dTranspose$Builder } from '../../../../ai/djl/nn/convolutional/Conv1dTranspose$Builder.d.ts'
import type { Deconvolution } from '../../../../ai/djl/nn/convolutional/Deconvolution.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Conv1dTranspose extends Deconvolution {
    static builder(): Conv1dTranspose$Builder;
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray): (Object | null)[];
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray): (Object | null)[];
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape): (Object | null)[];
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape): (Object | null)[];
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape, paramarg5: Shape): (Object | null)[];
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape, paramarg5: Shape, paramarg6: Shape): (Object | null)[];
    static conv1dTranspose(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: Shape, paramarg4: Shape, paramarg5: Shape, paramarg6: Shape, paramarg7: number): (Object | null)[];
    constructor(arg0: Conv1dTranspose$Builder)
    getExpectedLayout(): LayoutType[];
    getStringLayout(): string;
    numDimensions(): number;
}