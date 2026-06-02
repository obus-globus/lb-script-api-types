import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AntiBotPredicate } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotPredicate.d.ts'
import type { CustomAntiBotMode$Name$CharacterValidator } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode$Name$CharacterValidator.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class CustomAntiBotMode$Name extends ToggleableValueGroup implements AntiBotPredicate {
    static INSTANCE: CustomAntiBotMode$Name;
    // private lengthRange: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getLengthRange(): { start: number; endInclusive: number; step: number };
    // private validateChars: CustomAntiBotMode$Name$CharacterValidator[];
    // private /*not mapped: */ getValidateChars(): CustomAntiBotMode$Name$CharacterValidator[];
    isBot(entity: Player): boolean;
}