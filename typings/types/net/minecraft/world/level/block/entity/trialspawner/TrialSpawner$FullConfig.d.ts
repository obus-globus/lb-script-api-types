import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { TrialSpawnerConfig } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig.d.ts'
export class TrialSpawner$FullConfig extends Record {
    static DEFAULT: TrialSpawner$FullConfig;
    static MAP_CODEC: MapCodec<TrialSpawner$FullConfig>;
    // private normal: Holder<TrialSpawnerConfig>;
    // private ominous: Holder<TrialSpawnerConfig>;
    // private requiredPlayerRange: number;
    // private targetCooldownLength: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    normal(): Holder<TrialSpawnerConfig>;
    ominous(): Holder<TrialSpawnerConfig>;
    overrideEntity(type: EntityType<Object>): TrialSpawner$FullConfig;
    requiredPlayerRange(): number;
    targetCooldownLength(): number;
    toString(): string;
}