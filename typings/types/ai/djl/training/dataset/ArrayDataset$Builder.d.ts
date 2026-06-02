import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { ArrayDataset } from '../../../../ai/djl/training/dataset/ArrayDataset.d.ts'
import type { RandomAccessDataset$BaseBuilder } from '../../../../ai/djl/training/dataset/RandomAccessDataset$BaseBuilder.d.ts'
export class ArrayDataset$Builder extends RandomAccessDataset$BaseBuilder<ArrayDataset$Builder> {
    constructor()
    // private data: NDArray[];
    // private labels: NDArray[];
    build(): ArrayDataset;
    optLabels(arg0: NDArray[]): ArrayDataset$Builder;
    self(): ArrayDataset$Builder;
    setData(arg0: NDArray[]): ArrayDataset$Builder;
}