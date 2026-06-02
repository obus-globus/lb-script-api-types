import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EquipmentSlotChoice$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/EquipmentSlotChoice$Companion.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class EquipmentSlotChoice extends Enum<EquipmentSlotChoice> implements Tagged {
    static BODY: EquipmentSlotChoice;
    static CHEST: EquipmentSlotChoice;
    static Companion: Tagged$Companion;
    static Companion: EquipmentSlotChoice$Companion;
    static FEET: EquipmentSlotChoice;
    static HEAD: EquipmentSlotChoice;
    static LEGS: EquipmentSlotChoice;
    static MAINHAND: EquipmentSlotChoice;
    static OFFHAND: EquipmentSlotChoice;
    static SADDLE: EquipmentSlotChoice;
    static allHumanoidArmor(): EquipmentSlotChoice[];
    static getEntries(): EquipmentSlotChoice[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EquipmentSlotChoice;
    static values(): (Object | null)[];
    private constructor(tag: string, slot: EquipmentSlot, tagAliases: string[])
    slot: EquipmentSlot;
    readonly tag: string;
    readonly tagAliases: string[];
    getArmorColor(entity: LivingEntity): number | null;
    name(): "MAINHAND" | "OFFHAND" | "FEET" | "LEGS" | "CHEST" | "HEAD" | "BODY" | "SADDLE";
}