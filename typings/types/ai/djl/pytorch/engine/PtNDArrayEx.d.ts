import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { NDArrayIndexer } from '../../../../ai/djl/ndarray/index/NDArrayIndexer.d.ts'
import type { NDArrayEx } from '../../../../ai/djl/ndarray/internal/NDArrayEx.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { SparseFormat } from '../../../../ai/djl/ndarray/types/SparseFormat.d.ts'
import type { RNN$Activation } from '../../../../ai/djl/nn/recurrent/RNN$Activation.d.ts'
import type { PtNDArray } from '../../../../ai/djl/pytorch/engine/PtNDArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class PtNDArrayEx extends Object implements NDArrayEx {
    constructor(arg0: PtNDArray)
    readonly array: PtNDArray;
    adadeltaUpdate(arg0: (Object | null)[], arg1: (Object | null)[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    adagradUpdate(arg0: (Object | null)[], arg1: (Object | null)[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    adamUpdate(arg0: (Object | null)[], arg1: (Object | null)[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean, arg11: boolean): void;
    avgPool(arg0: Shape, arg1: Shape, arg2: Shape, arg3: boolean, arg4: boolean): PtNDArray;
    batchNorm(arg0: NDArray, arg1: NDArray, arg2: NDArray, arg3: NDArray, arg4: NDArray, arg5: number, arg6: number, arg7: number, arg8: boolean): (Object | null)[];
    // private calculateOverlap(arg0: number[], arg1: number[]): number;
    concat(arg0: (Object | null)[]): NDArray;
    concat(arg0: (Object | null)[]): NDArray;
    concat(arg0: (Object | null)[], arg1: number): PtNDArray;
    convolution(arg0: NDArray, arg1: NDArray, arg2: NDArray, arg3: Shape, arg4: Shape, arg5: Shape, arg6: number): (Object | null)[];
    crop(arg0: number, arg1: number, arg2: number, arg3: number): NDArray;
    deconvolution(arg0: NDArray, arg1: NDArray, arg2: NDArray, arg3: Shape, arg4: Shape, arg5: Shape, arg6: Shape, arg7: number): (Object | null)[];
    dropout(arg0: NDArray, arg1: number, arg2: boolean): (Object | null)[];
    elu(arg0: number): PtNDArray;
    embedding(arg0: NDArray, arg1: NDArray, arg2: SparseFormat): (Object | null)[];
    gelu(): PtNDArray;
    getArray(): PtNDArray;
    getIndexer(arg0: NDManager): NDArrayIndexer;
    // private getInterpolationMode(arg0: number): number;
    // private getPoolShape(arg0: NDArray): Shape;
    globalAvgPool(): PtNDArray;
    globalLpPool(arg0: number): PtNDArray;
    globalMaxPool(): PtNDArray;
    gru(arg0: NDArray, arg1: NDArray, arg2: (Object | null)[], arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean): (Object | null)[];
    interpolation(arg0: number[], arg1: number, arg2: boolean): NDArray;
    layerNorm(arg0: NDArray, arg1: Shape, arg2: NDArray, arg3: NDArray, arg4: number): (Object | null)[];
    leakyRelu(arg0: number): PtNDArray;
    linear(arg0: NDArray, arg1: NDArray, arg2: NDArray): (Object | null)[];
    lpPool(arg0: number, arg1: Shape, arg2: Shape, arg3: Shape, arg4: boolean): PtNDArray;
    lstm(arg0: NDArray, arg1: (Object | null)[], arg2: (Object | null)[], arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean): (Object | null)[];
    maxPool(arg0: Shape, arg1: Shape, arg2: Shape, arg3: boolean): PtNDArray;
    mish(): NDArray;
    multiBoxDetection(arg0: (Object | null)[], arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number): (Object | null)[];
    multiBoxPrior(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: boolean): (Object | null)[];
    multiBoxTarget(arg0: (Object | null)[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): (Object | null)[];
    nagUpdate(arg0: (Object | null)[], arg1: (Object | null)[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    normalize(arg0: number[], arg1: number[]): NDArray;
    prelu(arg0: NDArray, arg1: NDArray): (Object | null)[];
    randomBrightness(arg0: number): NDArray;
    randomColorJitter(arg0: number, arg1: number, arg2: number, arg3: number): NDArray;
    randomFlipLeftRight(): NDArray;
    randomFlipTopBottom(): NDArray;
    randomHue(arg0: number): NDArray;
    rdiv(arg0: NDArray): NDArray;
    rdiv(arg0: Number): NDArray;
    rdivi(arg0: Number): NDArray;
    rdivi(arg0: NDArray): PtNDArray;
    rdivi(arg0: Number): NDArray;
    relu(): PtNDArray;
    resize(arg0: number, arg1: number, arg2: number): PtNDArray;
    rmod(arg0: NDArray): NDArray;
    rmod(arg0: Number): NDArray;
    rmodi(arg0: Number): NDArray;
    rmodi(arg0: NDArray): PtNDArray;
    rmodi(arg0: Number): NDArray;
    rmspropUpdate(arg0: (Object | null)[], arg1: (Object | null)[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean): void;
    rnn(arg0: NDArray, arg1: NDArray, arg2: (Object | null)[], arg3: boolean, arg4: number, arg5: RNN$Activation, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean): (Object | null)[];
    rpow(arg0: Number): NDArray;
    rpowi(arg0: Number): PtNDArray;
    rsub(arg0: NDArray): NDArray;
    rsub(arg0: Number): NDArray;
    rsubi(arg0: NDArray): NDArray;
    rsubi(arg0: Number): NDArray;
    selu(): PtNDArray;
    sgdUpdate(arg0: (Object | null)[], arg1: (Object | null)[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
    sigmoid(): PtNDArray;
    softPlus(): PtNDArray;
    softSign(): PtNDArray;
    stack(arg0: (Object | null)[]): NDArray;
    stack(arg0: (Object | null)[]): NDArray;
    stack(arg0: (Object | null)[], arg1: number): PtNDArray;
    swish(arg0: number): NDArray;
    tanh(): PtNDArray;
    toTensor(): NDArray;
    // private transformLocations(arg0: number[], arg1: number[], arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number): number[];
    where(arg0: NDArray, arg1: NDArray): PtNDArray;
}