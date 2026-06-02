import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Goal$Flag } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal$Flag.d.ts'
export abstract class Goal extends Object {
    constructor()
    readonly flags: Goal$Flag[];
    adjustedTickDelay(ticks: number): number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getFlags(): Goal$Flag[];
    isInterruptable(): boolean;
    requiresUpdateEveryTick(): boolean;
    setFlags(requiredControlFlags: Goal$Flag[]): void;
    start(): void;
    stop(): void;
    tick(): void;
    toString(): string;
}