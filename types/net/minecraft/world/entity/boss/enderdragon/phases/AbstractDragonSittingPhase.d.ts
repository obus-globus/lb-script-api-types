import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { AbstractDragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/AbstractDragonPhaseInstance.d.ts'
export abstract class AbstractDragonSittingPhase extends AbstractDragonPhaseInstance {
    constructor(dragon: EnderDragon)
    isSitting(): boolean;
    onHurt(source: DamageSource, damage: number): number;
}