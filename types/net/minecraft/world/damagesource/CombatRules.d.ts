import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class CombatRules extends Object {
    static ARMOR_PROTECTION_DIVIDER: number;
    static BASE_ARMOR_TOUGHNESS: number;
    static MAX_ARMOR: number;
    static MIN_ARMOR_RATIO: number;
    static getDamageAfterAbsorb(paramvictim: LivingEntity, paramdamage: number, paramsource: DamageSource, paramtotalArmor: number, paramarmorToughness: number): number;
    static getDamageAfterMagicAbsorb(paramdamage: number, paramtotalMagicArmor: number): number;
    constructor()
}