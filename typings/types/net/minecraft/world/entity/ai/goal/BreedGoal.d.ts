import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Animal } from '../../../../../../net/minecraft/world/entity/animal/Animal.d.ts'
export class BreedGoal extends Goal {
    constructor(animal: Animal, speedModifier: number)
    constructor(animal: Animal, speedModifier: number, clazz: Class<Animal>)
    // private animal: Animal;
    // private level: ServerLevel;
    // private loveTime: number;
    // private partner: Animal;
    // private partnerClass: Class<Animal>;
    // private speedModifier: number;
    breed(): void;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private getFreePartner(): Animal;
    stop(): void;
    tick(): void;
}