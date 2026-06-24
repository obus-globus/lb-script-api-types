import type { EfficiencyAttributeStorage$EnchantAttributeModifier } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/storage/EfficiencyAttributeStorage$EnchantAttributeModifier.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EfficiencyAttributeStorage$ActiveEnchant extends Record {
    constructor(arg0: EfficiencyAttributeStorage$ActiveEnchant, arg1: number)
    constructor(modifier: EfficiencyAttributeStorage$EnchantAttributeModifier, previousLevel: number, level: number)
    // private level: number;
    // private modifier: EfficiencyAttributeStorage$EnchantAttributeModifier;
    // private previousLevel: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    level(): number;
    modifier(): EfficiencyAttributeStorage$EnchantAttributeModifier;
    previousLevel(): number;
    toString(): string;
}