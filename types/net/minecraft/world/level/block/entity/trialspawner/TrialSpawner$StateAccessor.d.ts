import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { TrialSpawnerState } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerState.d.ts'
export interface TrialSpawner$StateAccessor extends Object{
    getState(): TrialSpawnerState;
    markUpdated(): void;
    setState(level: Level, state: TrialSpawnerState): void;
}