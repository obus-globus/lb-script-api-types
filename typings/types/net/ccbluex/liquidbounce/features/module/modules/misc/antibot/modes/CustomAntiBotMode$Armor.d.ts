import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { MultiChoiceListValue } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.d.ts'
import type { CustomAntiBotMode$Armor$ArmorPredicate } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode$Armor$ArmorPredicate.d.ts'
import type { EquipmentSlot } from '../../../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class CustomAntiBotMode$Armor extends ToggleableValueGroup {
    static INSTANCE: CustomAntiBotMode$Armor;
    // private BASE: CustomAntiBotMode$Armor$ArmorPredicate[];
    // private CHESTPLATE: CustomAntiBotMode$Armor$ArmorPredicate[];
    // private HELMET: CustomAntiBotMode$Armor$ArmorPredicate[];
    // private values: Map<EquipmentSlot, MultiChoiceListValue<CustomAntiBotMode$Armor$ArmorPredicate>>;
    isValid(entity: Player): boolean;
}