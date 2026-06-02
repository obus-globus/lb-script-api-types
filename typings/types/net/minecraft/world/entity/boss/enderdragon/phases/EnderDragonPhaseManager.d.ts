import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { DragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonPhaseInstance.d.ts'
import type { EnderDragonPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/EnderDragonPhase.d.ts'
export class EnderDragonPhaseManager extends Object {
    constructor(dragon: EnderDragon)
    readonly currentPhase: DragonPhaseInstance;
    // private dragon: EnderDragon;
    // private phases: DragonPhaseInstance[];
    getCurrentPhase(): DragonPhaseInstance;
    getPhase<T extends DragonPhaseInstance>(phase: EnderDragonPhase<T>): T;
    setPhase(target: EnderDragonPhase<Object>): void;
}