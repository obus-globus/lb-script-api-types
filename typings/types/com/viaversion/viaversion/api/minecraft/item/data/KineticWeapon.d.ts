import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { KineticWeapon$Condition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/KineticWeapon$Condition.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class KineticWeapon extends Record {
    static TYPE: Type<KineticWeapon>;
    constructor(contactCooldownTicks: number, delayTicks: number, dismountConditions: KineticWeapon$Condition, knockbackConditions: KineticWeapon$Condition, damageConditions: KineticWeapon$Condition, forwardMovement: number, damageMultiplier: number, sound: Holder<SoundEvent>, hitSound: Holder<SoundEvent>)
    // private contactCooldownTicks: number;
    // private damageConditions: KineticWeapon$Condition;
    // private damageMultiplier: number;
    // private delayTicks: number;
    // private dismountConditions: KineticWeapon$Condition;
    // private forwardMovement: number;
    // private hitSound: Holder<SoundEvent>;
    // private knockbackConditions: KineticWeapon$Condition;
    // private sound: Holder<SoundEvent>;
    contactCooldownTicks(): number;
    damageConditions(): KineticWeapon$Condition;
    damageMultiplier(): number;
    delayTicks(): number;
    dismountConditions(): KineticWeapon$Condition;
    equals(arg0: Object | null): boolean;
    forwardMovement(): number;
    hashCode(): number;
    hitSound(): Holder<SoundEvent>;
    knockbackConditions(): KineticWeapon$Condition;
    sound(): Holder<SoundEvent>;
    toString(): string;
}