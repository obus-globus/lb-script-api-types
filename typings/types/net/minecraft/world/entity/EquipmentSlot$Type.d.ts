import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EquipmentSlot$Type extends Enum<EquipmentSlot$Type> {
    static ANIMAL_ARMOR: EquipmentSlot$Type;
    static HAND: EquipmentSlot$Type;
    static HUMANOID_ARMOR: EquipmentSlot$Type;
    static SADDLE: EquipmentSlot$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EquipmentSlot$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "HAND" | "HUMANOID_ARMOR" | "ANIMAL_ARMOR" | "SADDLE";
}