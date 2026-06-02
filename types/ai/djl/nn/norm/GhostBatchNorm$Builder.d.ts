import type { BatchNorm$BaseBuilder } from '../../../../ai/djl/nn/norm/BatchNorm$BaseBuilder.d.ts'
import type { GhostBatchNorm } from '../../../../ai/djl/nn/norm/GhostBatchNorm.d.ts'
export class GhostBatchNorm$Builder extends BatchNorm$BaseBuilder<GhostBatchNorm$Builder> {
    constructor()
    // private virtualBatchSize: number;
    build(): GhostBatchNorm;
    optVirtualBatchSize(arg0: number): GhostBatchNorm$Builder;
    self(): GhostBatchNorm$Builder;
}