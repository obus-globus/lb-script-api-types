import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EquipmentSlot extends Enum<EquipmentSlot> {
    static BODY: EquipmentSlot;
    static CHEST: EquipmentSlot;
    static FEET: EquipmentSlot;
    static HEAD: EquipmentSlot;
    static LEGS: EquipmentSlot;
    static MAINHAND: EquipmentSlot;
    static OFFHAND: EquipmentSlot;
    static SADDLE: EquipmentSlot;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EquipmentSlot;
    static values(): EquipmentSlot[];
    private constructor()
    name(): "MAINHAND" | "OFFHAND" | "FEET" | "LEGS" | "CHEST" | "HEAD" | "BODY" | "SADDLE";
}