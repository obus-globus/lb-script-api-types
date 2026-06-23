import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { LayoutType } from '../../../../ai/djl/ndarray/types/LayoutType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { Deconvolution$DeconvolutionBuilder } from '../../../../ai/djl/nn/convolutional/Deconvolution$DeconvolutionBuilder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Deconvolution extends AbstractBlock {
    constructor(arg0: Deconvolution$DeconvolutionBuilder<any>)
    // private bias: Parameter;
    // private dilation: Shape;
    // private filters: number;
    // private groups: number;
    // private includeBias: boolean;
    // private kernelShape: Shape;
    // private outPadding: Shape;
    // private padding: Shape;
    // private stride: Shape;
    // private weight: Parameter;
    beforeInitialize(arg0: Shape[]): void;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getExpectedLayout(): LayoutType[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    getStringLayout(): string;
    loadMetadata(arg0: number, arg1: DataInputStream): void;
    numDimensions(): number;
    prepare(arg0: Shape[]): void;
}