import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { PlayerFilter$Filter } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/PlayerFilter$Filter.d.ts'
import type { PlayerInfo } from '../../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
export class PlayerFilter extends ValueGroup {
    constructor()
    // private filterBy: PlayerFilter$Filter[];
    // private /*not mapped: */ getFilterBy(): PlayerFilter$Filter[];
    // private names: Regex[];
    // private /*not mapped: */ getNames(): Regex[];
    isInFilter(entry: PlayerInfo): boolean;
}