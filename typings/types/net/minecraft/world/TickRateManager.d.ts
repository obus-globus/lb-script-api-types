import type { Object } from '../../../java/lang/Object.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
export class TickRateManager extends Object {
    static MIN_TICKRATE: number;
    constructor()
    frozenTicksToRun: number;
    // private isFrozen: boolean;
    // private nanosecondsPerTick: number;
    // private runGameElements: boolean;
    // private tickrate: number;
    isEntityFrozen(entity: Entity): boolean;
    isFrozen(): boolean;
    isSteppingForward(): boolean;
    millisecondsPerTick(): number;
    nanosecondsPerTick(): number;
    runsNormally(): boolean;
    setFrozen(state: boolean): void;
    setFrozenTicksToRun(timeout: number): void;
    setTickRate(rate: number): void;
    tick(): void;
    tickrate(): number;
}