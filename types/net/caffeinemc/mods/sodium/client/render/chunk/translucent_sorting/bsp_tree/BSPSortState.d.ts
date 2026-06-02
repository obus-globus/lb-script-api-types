import type { IntConsumer } from '../../../../../../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { InnerPartitionBSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/InnerPartitionBSPNode.d.ts'
import type { NativeBuffer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export class BSPSortState extends Object {
    constructor(arg0: NativeBuffer)
    // private fixedIndexOffset: number;
    // private indexBuffer: IntBuffer;
    // private indexConsumer: (param0: number) => void;
    // private indexMap: number[];
    // private indexMapConsumer: (param0: number) => void;
    // private indexModificationsRemaining: number;
    // private checkModificationCounter(arg0: number): void;
    startNode(arg0: InnerPartitionBSPNode): void;
    writeIndex(arg0: number): void;
    writeIndexes(arg0: number[]): void;
}