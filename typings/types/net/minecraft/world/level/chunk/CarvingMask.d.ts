import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { CarvingMask$Mask } from '../../../../../net/minecraft/world/level/chunk/CarvingMask$Mask.d.ts'
export class CarvingMask extends Object {
    constructor(height: number, minY: number)
    constructor(array: number[], minY: number)
    readonly additionalMask: CarvingMask$Mask;
    // private mask: BitSet;
    // private minY: number;
    get(x: number, y: number, z: number): boolean;
    // private getIndex(x: number, y: number, z: number): number;
    set(x: number, y: number, z: number): void;
    setAdditionalMask(additionalMask: CarvingMask$Mask): void;
    stream(pos: ChunkPos): Stream<BlockPos>;
    toArray(): number[];
}