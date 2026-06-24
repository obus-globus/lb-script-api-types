import type { EfficiencyAttributeStorage$ActiveEnchant } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/storage/EfficiencyAttributeStorage$ActiveEnchant.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EfficiencyAttributeStorage$ActiveEnchants extends Record {
    constructor(entityId: number, efficiency: EfficiencyAttributeStorage$ActiveEnchant, soulSpeed: EfficiencyAttributeStorage$ActiveEnchant, swiftSneak: EfficiencyAttributeStorage$ActiveEnchant, aquaAffinity: EfficiencyAttributeStorage$ActiveEnchant, depthStrider: EfficiencyAttributeStorage$ActiveEnchant)
    // private aquaAffinity: EfficiencyAttributeStorage$ActiveEnchant;
    // private depthStrider: EfficiencyAttributeStorage$ActiveEnchant;
    // private efficiency: EfficiencyAttributeStorage$ActiveEnchant;
    // private entityId: number;
    // private soulSpeed: EfficiencyAttributeStorage$ActiveEnchant;
    // private swiftSneak: EfficiencyAttributeStorage$ActiveEnchant;
    aquaAffinity(): EfficiencyAttributeStorage$ActiveEnchant;
    aquaAffinity(arg0: number): EfficiencyAttributeStorage$ActiveEnchants;
    depthStrider(): EfficiencyAttributeStorage$ActiveEnchant;
    depthStrider(arg0: number): EfficiencyAttributeStorage$ActiveEnchants;
    efficiency(): EfficiencyAttributeStorage$ActiveEnchant;
    efficiency(arg0: number): EfficiencyAttributeStorage$ActiveEnchants;
    entityId(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    soulSpeed(): EfficiencyAttributeStorage$ActiveEnchant;
    soulSpeed(arg0: number): EfficiencyAttributeStorage$ActiveEnchants;
    swiftSneak(): EfficiencyAttributeStorage$ActiveEnchant;
    swiftSneak(arg0: number): EfficiencyAttributeStorage$ActiveEnchants;
    toString(): string;
    // private withEntityId(arg0: number): EfficiencyAttributeStorage$ActiveEnchants;
}