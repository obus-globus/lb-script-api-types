import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { CombatEntry } from '../../../../net/minecraft/world/damagesource/CombatEntry.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class CombatTracker extends Object {
    static RESET_COMBAT_STATUS_TIME: number;
    static RESET_DAMAGE_STATUS_TIME: number;
    constructor(mob: LivingEntity)
    // private combatEndTime: number;
    // private combatStartTime: number;
    // private entries: CombatEntry[];
    // private inCombat: boolean;
    // private lastDamageTime: number;
    // private mob: LivingEntity;
    // private takingDamage: boolean;
    getCombatDuration(): number;
    getDeathMessage(): Component;
    // private getFallMessage(knockOffEntry: CombatEntry, killingEntity: Entity): Component;
    // private getMessageForAssistedFall(attackerEntity: Entity, attackerName: Component, messageWithItem: string, messageWithoutItem: string): Component;
    // private getMostSignificantFall(): CombatEntry;
    recheckStatus(): void;
    recordDamage(source: DamageSource, damage: number): void;
}