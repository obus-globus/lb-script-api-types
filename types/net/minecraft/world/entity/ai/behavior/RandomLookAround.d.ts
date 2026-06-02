import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { IntProvider } from '../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class RandomLookAround extends Behavior<Mob> {
    static DEFAULT_DURATION: number;
    constructor(interval: IntProvider, maxYaw: number, minPitch: number, maxPitch: number)
    // private interval: IntProvider;
    // private maxYaw: number;
    // private minPitch: number;
    // private pitchRange: number;
    start(level: ServerLevel, body: Mob, timestamp: number): void;
}