import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AntiBotPredicate } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotPredicate.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class CustomAntiBotMode$Age extends ToggleableValueGroup implements AntiBotPredicate {
    static INSTANCE: CustomAntiBotMode$Age;
    // private minimum: number;
    // private /*not mapped: */ getMinimum(): number;
    isBot(entity: Player): boolean;
}