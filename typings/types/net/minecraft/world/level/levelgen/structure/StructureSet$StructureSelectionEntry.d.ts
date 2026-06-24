import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export class StructureSet$StructureSelectionEntry extends Record {
    static CODEC: Codec<StructureSet$StructureSelectionEntry>;
    constructor(structure: Holder<Structure>, weight: number)
    // private structure: Holder<Structure>;
    // private weight: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    structure(): Holder<Structure>;
    toString(): string;
    weight(): number;
}