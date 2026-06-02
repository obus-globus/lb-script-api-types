import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class RandomStrollGoal extends Goal {
    static DEFAULT_INTERVAL: number;
    constructor(mob: PathfinderMob, speedModifier: number)
    constructor(mob: PathfinderMob, speedModifier: number, interval: number)
    constructor(mob: PathfinderMob, speedModifier: number, interval: number, checkNoActionTime: boolean)
    // private checkNoActionTime: boolean;
    // private forceTrigger: boolean;
    interval: number;
    // private mob: PathfinderMob;
    // private speedModifier: number;
    // private wantedX: number;
    // private wantedY: number;
    // private wantedZ: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getPosition(): Vec3;
    setInterval(interval: number): void;
    start(): void;
    stop(): void;
    trigger(): void;
}