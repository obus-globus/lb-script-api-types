import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface EquipmentInfo extends Object{
    lithium$hasUnsentEquipmentChanges(): boolean;
    lithium$onEquipmentChangesSent(): void;
    lithium$shouldTickEnchantments(): boolean;
}