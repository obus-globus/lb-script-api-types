import type { BatchNorm } from '../../../../ai/djl/nn/norm/BatchNorm.d.ts'
import type { BatchNorm$BaseBuilder } from '../../../../ai/djl/nn/norm/BatchNorm$BaseBuilder.d.ts'
export class BatchNorm$Builder extends BatchNorm$BaseBuilder<BatchNorm$Builder> {
    constructor()
    build(): BatchNorm;
    self(): BatchNorm$Builder;
}