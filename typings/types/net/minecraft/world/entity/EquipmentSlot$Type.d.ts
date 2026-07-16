import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EquipmentSlot$Type extends Enum<EquipmentSlot$Type> {
    static ANIMAL_ARMOR: EquipmentSlot$Type;
    static HAND: EquipmentSlot$Type;
    static HUMANOID_ARMOR: EquipmentSlot$Type;
    static SADDLE: EquipmentSlot$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): EquipmentSlot$Type;
    static values(): EquipmentSlot$Type[];
    private constructor()
    name(): "HAND" | "HUMANOID_ARMOR" | "ANIMAL_ARMOR" | "SADDLE";
}