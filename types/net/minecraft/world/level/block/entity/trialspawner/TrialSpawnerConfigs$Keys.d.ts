import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TrialSpawnerConfig } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig.d.ts'
export class TrialSpawnerConfigs$Keys extends Record {
    static of(paramid: string): TrialSpawnerConfigs$Keys;
    private constructor(normal: ResourceKey<TrialSpawnerConfig>, ominous: ResourceKey<TrialSpawnerConfig>)
    // private normal: ResourceKey<TrialSpawnerConfig>;
    // private ominous: ResourceKey<TrialSpawnerConfig>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    normal(): ResourceKey<TrialSpawnerConfig>;
    ominous(): ResourceKey<TrialSpawnerConfig>;
    toString(): string;
}