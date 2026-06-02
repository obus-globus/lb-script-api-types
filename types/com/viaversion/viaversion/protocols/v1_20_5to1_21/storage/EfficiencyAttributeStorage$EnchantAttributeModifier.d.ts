import type { EfficiencyAttributeStorage$LevelToModifier } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/storage/EfficiencyAttributeStorage$LevelToModifier.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EfficiencyAttributeStorage$EnchantAttributeModifier extends Record {
    // private attributeId: number;
    // private baseValue: number;
    // private key: string;
    // private modifierFunction: (param0: number) => kotlin.Double;
    // private operation: number;
    attributeId(): number;
    baseValue(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): string;
    modifierFunction(): (param0: number) => kotlin.Double;
    operation(): number;
    toString(): string;
}