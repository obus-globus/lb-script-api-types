import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { AnimalPanic } from '../../../../../../net/minecraft/world/entity/ai/behavior/AnimalPanic.d.ts'
import type { Armadillo } from '../../../../../../net/minecraft/world/entity/animal/armadillo/Armadillo.d.ts'
export class ArmadilloAi$ArmadilloPanic extends AnimalPanic<Armadillo> {
    static DEFAULT_DURATION: number;
    constructor(speedMultiplier: number)
    start(level: ServerLevel, armadillo: Armadillo, timestamp: number): void;
}