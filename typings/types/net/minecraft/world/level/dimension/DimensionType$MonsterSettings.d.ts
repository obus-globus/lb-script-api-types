import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IntProvider } from '../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class DimensionType$MonsterSettings extends Record {
    static CODEC: MapCodec<DimensionType$MonsterSettings>;
    constructor(monsterSpawnLightTest: IntProvider, monsterSpawnBlockLightLimit: number)
    // private monsterSpawnBlockLightLimit: number;
    // private monsterSpawnLightTest: IntProvider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    monsterSpawnBlockLightLimit(): number;
    monsterSpawnLightTest(): IntProvider;
    toString(): string;
}