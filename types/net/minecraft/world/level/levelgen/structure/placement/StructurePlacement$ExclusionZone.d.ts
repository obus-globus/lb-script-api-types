import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { StructureSet } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class StructurePlacement$ExclusionZone extends Record {
    static CODEC: Codec<StructurePlacement$ExclusionZone>;
    // private chunkCount: number;
    // private otherSet: Holder<StructureSet>;
    chunkCount(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private isPlacementForbidden(state: ChunkGeneratorStructureState, sourceX: number, sourceZ: number): boolean;
    otherSet(): Holder<StructureSet>;
    toString(): string;
}