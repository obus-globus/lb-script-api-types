import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class MobSpawnSettings$SpawnerData extends Record {
    static CODEC: MapCodec<MobSpawnSettings$SpawnerData>;
    // private maxCount: number;
    // private minCount: number;
    // private type: EntityType<any>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxCount(): number;
    minCount(): number;
    toString(): string;
    type(): EntityType<any>;
}