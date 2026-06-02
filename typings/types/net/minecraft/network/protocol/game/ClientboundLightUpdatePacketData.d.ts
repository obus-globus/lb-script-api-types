import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export class ClientboundLightUpdatePacketData extends Object {
    constructor(input: FriendlyByteBuf, x: number, z: number)
    constructor(chunkPos: ChunkPos, lightEngine: LevelLightEngine, skyChangedLightSectionFilter: BitSet, blockChangedLightSectionFilter: BitSet)
    readonly blockUpdates: number[][];
    readonly blockYMask: BitSet;
    readonly emptyBlockYMask: BitSet;
    readonly emptySkyYMask: BitSet;
    readonly skyUpdates: number[][];
    readonly skyYMask: BitSet;
    getBlockUpdates(): number[][];
    getBlockYMask(): BitSet;
    getEmptyBlockYMask(): BitSet;
    getEmptySkyYMask(): BitSet;
    getSkyUpdates(): number[][];
    getSkyYMask(): BitSet;
    // private prepareSectionData(pos: ChunkPos, lightEngine: LevelLightEngine, layer: LightLayer, sectionIndex: number, mask: BitSet, emptyMask: BitSet, updates: number[][]): void;
    write(output: FriendlyByteBuf): void;
}