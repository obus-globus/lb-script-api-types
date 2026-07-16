import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class DropChances extends Record {
    static CODEC: Codec<DropChances>;
    static DEFAULT: DropChances;
    static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
    static PRESERVE_ITEM_DROP_CHANCE: number;
    static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
    constructor(byEquipment: Map<EquipmentSlot, number>)
    // private byEquipment: Map<EquipmentSlot, number>;
    byEquipment(): Map<EquipmentSlot, number>;
    byEquipment(slot: EquipmentSlot): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isPreserved(slot: EquipmentSlot): boolean;
    toString(): string;
    withEquipmentChance(slot: EquipmentSlot, chance: number): DropChances;
    withGuaranteedDrop(slot: EquipmentSlot): DropChances;
}