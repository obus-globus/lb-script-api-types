import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Animal } from '../../../../../../net/minecraft/world/entity/animal/Animal.d.ts'
export class AnimalMakeLove extends Behavior<Animal> {
    static DEFAULT_DURATION: number;
    constructor(partnerType: EntityType<Animal>)
    constructor(partnerType: EntityType<Animal>, speedModifier: number, closeEnoughDistance: number)
    // private closeEnoughDistance: number;
    // private partnerType: EntityType<Animal>;
    // private spawnChildAtTime: number;
    // private speedModifier: number;
    canStillUse(level: ServerLevel, body: Animal, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Animal): boolean;
    // private findValidBreedPartner(body: Animal): Optional<Animal>;
    // private getBreedTarget(body: Animal): Animal;
    // private hasBreedTargetOfRightType(body: Animal): boolean;
    start(level: ServerLevel, body: Animal, timestamp: number): void;
    stop(level: ServerLevel, body: Animal, timestamp: number): void;
    tick(level: ServerLevel, body: Animal, timestamp: number): void;
}