import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { EquipmentTable } from '../../../../net/minecraft/world/entity/EquipmentTable.d.ts'
import type { SpawnData$CustomSpawnRules } from '../../../../net/minecraft/world/level/SpawnData$CustomSpawnRules.d.ts'
export class SpawnData extends Record {
    static CODEC: Codec<SpawnData>;
    static ENTITY_TAG: string;
    static LIST_CODEC: Codec<Object>;
    constructor()
    constructor(entityToSpawn: CompoundTag, customSpawnRules: Optional<SpawnData$CustomSpawnRules>, equipment: Optional<EquipmentTable>)
    readonly customSpawnRules: Optional<SpawnData$CustomSpawnRules>;
    readonly entityToSpawn: CompoundTag;
    readonly equipment: Optional<EquipmentTable>;
    customSpawnRules(): Optional<SpawnData$CustomSpawnRules>;
    entityToSpawn(): CompoundTag;
    equals(o: Object | null): boolean;
    equipment(): Optional<EquipmentTable>;
    getCustomSpawnRules(): Optional<SpawnData$CustomSpawnRules>;
    getEntityToSpawn(): CompoundTag;
    getEquipment(): Optional<EquipmentTable>;
    hashCode(): number;
    toString(): string;
}