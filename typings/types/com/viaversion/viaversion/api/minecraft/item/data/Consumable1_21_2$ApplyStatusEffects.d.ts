import type { PotionEffect } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffect.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Consumable1_21_2$ApplyStatusEffects extends Record {
    static TYPE: Type<Consumable1_21_2$ApplyStatusEffects>;
    constructor(effects: PotionEffect[], probability: number)
    // private effects: PotionEffect[];
    // private probability: number;
    effects(): PotionEffect[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    probability(): number;
    toString(): string;
}