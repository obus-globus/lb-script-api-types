import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { SpawnCondition } from '../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export class StructureCheck extends Record implements SpawnCondition {
    static CODEC: Codec<SpawnCondition>;
    static MAP_CODEC: MapCodec<StructureCheck>;
    constructor(requiredStructures: Holder<Structure>[])
    // private requiredStructures: Holder<Structure>[];
    codec(): MapCodec<StructureCheck>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    requiredStructures(): Holder<Structure>[];
    test(context: SpawnContext): boolean;
    toString(): string;
}