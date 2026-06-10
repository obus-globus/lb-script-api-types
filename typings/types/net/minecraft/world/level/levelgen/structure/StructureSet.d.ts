import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureSet$StructureSelectionEntry } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSet$StructureSelectionEntry.d.ts'
import type { StructurePlacement } from '../../../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacement.d.ts'
export class StructureSet extends Record {
    static CODEC: Codec<Holder<StructureSet>>;
    static DIRECT_CODEC: Codec<StructureSet>;
    static entry(paramstructure: Holder<Structure>): StructureSet$StructureSelectionEntry;
    static entry(paramstructure: Holder<Structure>, paramweight: number): StructureSet$StructureSelectionEntry;
    constructor(structures: StructureSet$StructureSelectionEntry[], placement: StructurePlacement)
    constructor(singleEntry: Holder<Structure>, placement: StructurePlacement)
    // private placement: StructurePlacement;
    // private structures: StructureSet$StructureSelectionEntry[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    placement(): StructurePlacement;
    structures(): StructureSet$StructureSelectionEntry[];
    toString(): string;
}