import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { RecurrentBlock$BaseBuilder } from '../../../../ai/djl/nn/recurrent/RecurrentBlock$BaseBuilder.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
export abstract class RecurrentBlock extends AbstractBlock {
    constructor(arg0: RecurrentBlock$BaseBuilder<any>)
    // private batchFirst: boolean;
    // private bidirectional: boolean;
    // private dropRate: number;
    // private gates: number;
    // private hasBiases: boolean;
    // private numLayers: number;
    // private returnState: boolean;
    // private stateSize: number;
    beforeInitialize(...arg0: Shape[]): void;
    getNumDirections(): number;
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    loadMetadata(arg0: number, arg1: DataInputStream): void;
    prepare(arg0: Shape[]): void;
}